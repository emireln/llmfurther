import React, { useEffect, useRef } from 'react';

interface DitherBadgeProps {
  color?: string;
  width?: number;
  height?: number;
}

export const DitherBadge: React.FC<DitherBadgeProps> = ({
  color = '#ff3d5c',
  width = 120,
  height = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let t = 0;

    const bayer4 = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5]
    ];

    const render = () => {
      t += 0.04;
      ctx.clearRect(0, 0, width, height);

      const cell = 4;
      const cols = Math.floor(width / cell);
      const rows = Math.floor(height / cell);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const wave = Math.sin(x * 0.25 + t) * Math.cos(y * 0.35 + t * 0.8);
          const val = (wave + 1) * 0.5 * 16;
          const threshold = bayer4[y % 4][x % 4];

          if (val > threshold) {
            ctx.fillStyle = color;
            ctx.fillRect(x * cell, y * cell, cell - 1, cell - 1);
          }
        }
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [color, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};
