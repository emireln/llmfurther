import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { BayerGlobe } from '../background/DitherGlobe';
import { FooterDitherWaves } from '../background/FooterDitherWaves';
import { CatLogo } from '../common/CatLogo';
import { GitHubButton } from '../common/GitHubButton';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <footer className="relative w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 mt-16 transition-colors overflow-hidden">
      {/* Interactive Wavy Dither Animation with physics covering the entire footer */}
      <FooterDitherWaves
        color="#ff3d5c"
        className="opacity-40 dark:opacity-55"
        pixelSize={4}
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side: Dither Cat Logo + Brand + Texts in styled solid card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 max-w-xl text-center sm:text-left p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md">
            {/* Dither Cat Logo */}
            <div className="shrink-0 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xs">
              <CatLogo size={42} className="hover:scale-105 transition-transform" />
            </div>

            {/* Clean texts */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-sm font-bold text-neutral-900 dark:text-neutral-100">
                <span>{t.brand}</span>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                <span className="text-accent font-semibold">{t.tagline}</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {t.footer.mission}
              </p>
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
                {t.footer.dataSource}
              </p>

              {/* Action Buttons: GitHub Star + Back to top */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-2">
                <GitHubButton />

                <button
                  onClick={scrollToTop}
                  className="h-9 px-3 inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-accent hover:border-accent text-xs font-mono font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  <span>{t.footer.backToTop}</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: High-Resolution Bigger Dither Globe */}
          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md overflow-hidden p-1 flex items-center justify-center">
              <BayerGlobe
                colorA={isDark ? "#0A0A0A" : "#FFFFFF"}
                colorB="#FF3D5C"
                accent={isDark ? "#222222" : "#F3F4F6"}
                pixel={2.5}
                speed={1.0}
                levels={6}
                land={10}
                globeSize={18}
                glowEnabled={true}
                glowSize={1.4}
                dragEnabled={true}
                className="w-full h-full"
              />
            </div>
            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
              {t.footer.interactiveGlobe}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
