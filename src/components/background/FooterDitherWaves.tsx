import React, { useEffect, useRef } from 'react';

interface FooterDitherWavesProps {
  color?: string;
  className?: string;
  pixelSize?: number;
}

const BAYER8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

export const FooterDitherWaves: React.FC<FooterDitherWavesProps> = ({
  color = '#ff3d5c',
  className = '',
  pixelSize = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    // Parse hex color into RGB
    let r = 255;
    let g = 61;
    let b = 92;
    if (color.startsWith('#') && color.length === 7) {
      r = parseInt(color.slice(1, 3), 16);
      g = parseInt(color.slice(3, 5), 16);
      b = parseInt(color.slice(5, 7), 16);
    }

    // Little-endian 32-bit color: 0xAABBGGRR
    const pixelColor = ((255 << 24) | (b << 16) | (g << 8) | r) >>> 0;

    let cols = 0;
    let rows = 0;
    let buffer1: Float32Array;
    let buffer2: Float32Array;
    let imgData: ImageData;
    let data32: Uint32Array;

    let animId: number;
    let time = 0;

    let lastMouseX = -1;
    let lastMouseY = -1;
    let mouseSpeed = 0;

    const initBuffers = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.max(10, Math.floor(rect.width / pixelSize));
      const h = Math.max(10, Math.floor(rect.height / pixelSize));

      cols = w;
      rows = h;
      canvas.width = cols;
      canvas.height = rows;

      buffer1 = new Float32Array(cols * rows);
      buffer2 = new Float32Array(cols * rows);
      imgData = ctx.createImageData(cols, rows);
      data32 = new Uint32Array(imgData.data.buffer);
    };

    initBuffers();

    const onResize = () => {
      initBuffers();
    };

    window.addEventListener('resize', onResize);

    // Track mouse on the entire footer element or window
    const targetElement = container.closest('footer') || container;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const curX = Math.floor((e.clientX - rect.left) / pixelSize);
      const curY = Math.floor((e.clientY - rect.top) / pixelSize);

      if (lastMouseX >= 0 && lastMouseY >= 0) {
        const dx = curX - lastMouseX;
        const dy = curY - lastMouseY;
        mouseSpeed = Math.sqrt(dx * dx + dy * dy);
      } else {
        mouseSpeed = 1;
      }

      lastMouseX = curX;
      lastMouseY = curY;

      // Inject wave disturbances along mouse position if within or near bounds
      if (curX >= 0 && curX < cols && curY >= 0 && curY < rows) {
        const radius = Math.min(5, Math.max(2, Math.floor(mouseSpeed * 0.4)));
        const force = Math.min(12.0, Math.max(2.0, mouseSpeed * 1.5));

        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            const distSq = dx * dx + dy * dy;
            if (distSq <= radius * radius) {
              const gx = curX + dx;
              const gy = curY + dy;
              if (gx >= 1 && gx < cols - 1 && gy >= 1 && gy < rows - 1) {
                const falloff = 1 - Math.sqrt(distSq) / radius;
                buffer1[gy * cols + gx] += force * falloff;
              }
            }
          }
        }
      }
    };

    const onMouseLeave = () => {
      lastMouseX = -1;
      lastMouseY = -1;
      mouseSpeed = 0;
    };

    targetElement.addEventListener('mousemove', onMouseMove);
    targetElement.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      // Much slower, serene pace
      time += 0.007;

      if (!buffer1 || !buffer2 || !data32) {
        animId = requestAnimationFrame(render);
        return;
      }

      // 2D Wave physics equation simulation with clean, stable damping
      const damping = 0.982;
      for (let y = 1; y < rows - 1; y++) {
        const row = y * cols;
        for (let x = 1; x < cols - 1; x++) {
          const idx = row + x;
          const nextVal =
            ((buffer1[idx - 1] +
              buffer1[idx + 1] +
              buffer1[idx - cols] +
              buffer1[idx + cols]) *
              0.5 -
              buffer2[idx]) *
            damping;

          buffer2[idx] = nextVal;
        }
      }

      // Render loop combining slow ambient ocean waves + physics ripples + Bayer 8x8 dither
      for (let y = 0; y < rows; y++) {
        const row = y * cols;
        const bayerRow = BAYER8[y % 8];

        for (let x = 0; x < cols; x++) {
          const idx = row + x;

          // Gentle, calm undulating harmonic wave contours
          const w1 = Math.sin(x * 0.04 + time * 0.6) * 0.32;
          const w2 = Math.cos(y * 0.055 - time * 0.45 + x * 0.015) * 0.25;
          const w3 = Math.sin((x * 0.025 - y * 0.035) + time * 0.35) * 0.2;
          const ambientWave = w1 + w2 + w3;

          // Physical wave height from fluid simulation
          const rippleHeight = buffer2[idx] * 0.035;

          // Combined wave surface level normalized from [0, 1]
          const depthGradient = (y / rows) * 0.12;
          const normalized = ambientWave + rippleHeight + depthGradient + 0.45;

          // Scale to 0-64 for Bayer 8x8 matrix
          const ditherVal = Math.floor(normalized * 64);
          const threshold = bayerRow[x % 8];

          if (ditherVal > threshold) {
            data32[idx] = pixelColor;
          } else {
            data32[idx] = 0; // Transparent
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Swap buffers for next step
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      targetElement.removeEventListener('mousemove', onMouseMove);
      targetElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [color, pixelSize]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};
