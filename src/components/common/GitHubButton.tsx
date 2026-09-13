import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from './Tooltip';
import { Star } from 'lucide-react';

interface GitHubButtonProps {
  className?: string;
}

// 8x8 Bayer Matrix for hardware-free procedural micro-dither animation
const BAYER_8X8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

export const GitHubButton: React.FC<GitHubButtonProps> = ({ className = '' }) => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!isHovered) {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let tVal = 0;
    const render = () => {
      tVal += 0.08;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const pixelSize = 2;
      const cols = Math.ceil(w / pixelSize);
      const rows = Math.ceil(h / pixelSize);

      ctx.fillStyle = '#ff3d5c';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Animated wave traveling diagonally
          const wave = Math.sin((x * 0.15) + (y * 0.15) - tVal) * 0.5 + 0.5;
          const bayerValue = BAYER_8X8[y % 8][x % 8] / 64;

          // Dither threshold comparison
          if (wave > bayerValue) {
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered]);

  return (
    <Tooltip content={t.github.aria} position="bottom">
      <a
        href="https://github.com/emireln/llmfurther"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative h-9 px-3 flex items-center justify-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-[#ff3d5c] hover:text-white transition-all select-none overflow-hidden cursor-pointer group shadow-xs ${className}`}
        aria-label={t.github.aria}
      >
        {/* Animated Bayer Dither Canvas on Hover */}
        <canvas
          ref={canvasRef}
          width={140}
          height={36}
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors group-hover:text-white drop-shadow-xs">
          {/* GitHub Octocat Vector */}
          <svg
            className="w-3.5 h-3.5 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>{t.github.button}</span>
          <Star className="w-3 h-3 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform shrink-0" />
        </div>
      </a>
    </Tooltip>
  );
};
