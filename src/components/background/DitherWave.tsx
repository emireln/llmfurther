import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface DitherWaveProps {
  width?: string | number;
  height?: string | number;
  speed?: number;
  intensity?: number;
  scale?: number;
  downScale?: number;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  opacity?: number;
  quality?: 'low' | 'medium' | 'high';
  maxFPS?: number;
  pauseWhenOffscreen?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const DitherWave: React.FC<DitherWaveProps> = ({
  width = '100%',
  height = '100%',
  speed = 0.7000000000000001,
  intensity = 3,
  scale = 2.5,
  downScale = 0.8500000000000001,
  primaryColor = '#121212',
  secondaryColor = '#ff3d5c',
  tertiaryColor = '#060606',
  opacity = 1,
  quality = 'medium',
  maxFPS = 60,
  pauseWhenOffscreen = true,
  className = '',
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>(0);
  const startTime = useRef<number>(0);
  const lastRenderTime = useRef<number>(0);
  const isIntersecting = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hexToRgb = (hex: string) => {
      const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return match
        ? {
            r: parseInt(match[1], 16) / 255,
            g: parseInt(match[2], 16) / 255,
            b: parseInt(match[3], 16) / 255
          }
        : { r: 0, g: 0, b: 0 };
    };

    const color1 = hexToRgb(primaryColor);
    const color2 = hexToRgb(secondaryColor);
    const color3 = hexToRgb(tertiaryColor);

    const rect = container.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    const h = rect.height || window.innerHeight;

    const qualityConfig = {
      low: { pixelRatio: 1, antialias: false },
      medium: { pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5), antialias: true },
      high: { pixelRatio: Math.min(window.devicePixelRatio || 1, 2), antialias: true }
    }[quality];

    const pixelRatio = qualityConfig.pixelRatio;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: qualityConfig.antialias,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false
      });
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(pixelRatio);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(w * pixelRatio, h * pixelRatio) },
      uSpeed: { value: speed },
      uIntensity: { value: intensity },
      uScale: { value: scale },
      uDownScale: { value: downScale },
      uOpacity: { value: opacity },
      uColor1: { value: new THREE.Color(color1.r, color1.g, color1.b) },
      uColor2: { value: new THREE.Color(color2.r, color2.g, color2.b) },
      uColor3: { value: new THREE.Color(color3.r, color3.g, color3.b) }
    };

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      #define COLOR_COUNT 3

      uniform float iTime;
      uniform vec2 iResolution;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uScale;
      uniform float uDownScale;
      uniform float uOpacity;

      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;

      vec3 colors[COLOR_COUNT];

      void setupColorPalette() {
        colors[0] = uColor1;
        colors[1] = uColor2;
        colors[2] = uColor3;
      }

      float Bayer2(vec2 a) {
        a = floor(a);
        return fract(a.x / 2.0 + a.y * a.y * 0.75);
      }

      #define Bayer4(a)   (Bayer2(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer8(a)   (Bayer4(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer16(a)  (Bayer8(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer32(a)  (Bayer16(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer64(a)  (Bayer32(0.5 * (a)) * 0.25 + Bayer2(a))

      vec3 applyDitheredColor(float value, vec2 pixelCoord) {
        float paletteIndex = clamp(value, 0.0, 1.0) * float(COLOR_COUNT - 1);

        vec3 colorA = vec3(0.0);
        vec3 colorB = vec3(0.0);

        for (int i = 0; i < COLOR_COUNT; i++) {
          if (float(i) == floor(paletteIndex)) {
            colorA = colors[i];
            if (i < COLOR_COUNT - 1) {
              colorB = colors[i + 1];
            } else {
              colorB = colorA;
            }
            break;
          }
        }

        float ditherValue = Bayer64(pixelCoord * 0.25);
        float blendAmount = float(fract(paletteIndex) > ditherValue);

        return mix(colorA, colorB, blendAmount);
      }

      float flowField(vec2 p, float t) {
        return sin(p.x + sin(p.y + t * 0.1)) * sin(p.y * p.x * 0.1 + t * 0.2);
      }

      vec2 computeField(vec2 p, float t) {
        vec2 ep = vec2(0.05, 0.0);
        vec2 result = vec2(0.0);

        for (int i = 0; i < 20; i++) {
          float t0 = flowField(p, t);
          float t1 = flowField(p + ep.xy, t);
          float t2 = flowField(p + ep.yx, t);
          vec2 gradient = vec2((t1 - t0), (t2 - t0)) / ep.xx;
          vec2 tangent = vec2(-gradient.y, gradient.x);

          p += tangent * 0.5 + gradient * 0.005;
          p.x += sin(t * 0.25) * 0.1;
          p.y += cos(t * 0.25) * 0.1;
          result = gradient;
        }

        return result;
      }

      void main() {
        setupColorPalette();

        vec2 uv = gl_FragCoord.xy / iResolution.xy - 0.5;
        uv.x *= iResolution.x / iResolution.y;
        float animTime = iTime * uSpeed;

        vec2 p = uv * uScale;
        vec2 field = computeField(p, animTime);

        float colorValue = length(field) * uIntensity;
        colorValue = clamp(colorValue, 0.0, 1.0);

        vec3 finalColor = applyDitheredColor(colorValue, gl_FragCoord.xy / uDownScale);
        gl_FragColor = vec4(finalColor, uOpacity);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let observer: IntersectionObserver | null = null;
    if (pauseWhenOffscreen && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        entries => {
          isIntersecting.current = entries[0].isIntersecting;
        },
        { threshold: 0 }
      );
      observer.observe(container);
    }

    const minFrameTime = 1000 / maxFPS;

    const renderLoop = (timestamp: number) => {
      animationFrameId.current = requestAnimationFrame(renderLoop);

      if (!startTime.current) {
        startTime.current = timestamp;
        lastRenderTime.current = timestamp;
      }

      const elapsed = timestamp - lastRenderTime.current;
      if (elapsed < minFrameTime) return;

      lastRenderTime.current = timestamp - (elapsed % minFrameTime);

      if (!pauseWhenOffscreen || isIntersecting.current) {
        uniforms.iTime.value = (timestamp - startTime.current) * 0.001;
        uniforms.uSpeed.value = speed;
        uniforms.uIntensity.value = intensity;
        uniforms.uScale.value = scale;
        uniforms.uDownScale.value = downScale;
        uniforms.uOpacity.value = opacity;
        renderer.render(scene, camera);
      }
    };

    animationFrameId.current = requestAnimationFrame(renderLoop);

    const handleResize = () => {
      const updatedRect = container.getBoundingClientRect();
      const newW = updatedRect.width || window.innerWidth;
      const newH = updatedRect.height || window.innerHeight;
      renderer.setSize(newW, newH, false);
      uniforms.iResolution.value.set(newW * pixelRatio, newH * pixelRatio);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (observer) observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    speed,
    intensity,
    scale,
    downScale,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    opacity,
    quality,
    maxFPS,
    pauseWhenOffscreen
  ]);

  const styleWidth = typeof width === 'number' ? `${width}px` : width;
  const styleHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width: styleWidth, height: styleHeight }}
    >
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};
