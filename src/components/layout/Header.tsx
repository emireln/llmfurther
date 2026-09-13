import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { CatLogo } from '../common/CatLogo';
import { GitHubButton } from '../common/GitHubButton';
import { Sun, Moon, Scale } from 'lucide-react';

interface HeaderProps {
  compareCount: number;
  onOpenCompare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  compareCount,
  onOpenCompare,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <CatLogo size={30} className="hover:scale-105 transition-transform" />
            <span className="font-bold font-sans text-base tracking-tight text-neutral-900 dark:text-neutral-50">
              {t.brand}
            </span>
          </a>
        </div>

        {/* Right Actions: All buttons standardized to exact same height (h-9 / 36px) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Side by Side Button: Desktop / larger screens only (hidden on mobile) */}
          {compareCount > 0 && (
            <button
              onClick={onOpenCompare}
              className="hidden sm:inline-flex h-9 px-3 items-center justify-center gap-1.5 text-xs font-mono font-semibold rounded-lg border border-[#ff3d5c] bg-[#ff3d5c] text-white hover:bg-[#e02e4c] shadow-xs transition-colors cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{t.compare.sideBySide} ({compareCount}/3)</span>
            </button>
          )}

          {/* GitHub Button */}
          <GitHubButton />

          {/* Clean Segmented Language Switcher (Bug-free, no tooltips) */}
          <div className="h-9 flex items-center p-1 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-xs font-mono shadow-xs">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`h-7 px-2.5 rounded-md font-semibold text-xs flex items-center justify-center transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs font-bold'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt-BR')}
              className={`h-7 px-2.5 rounded-md font-semibold text-xs flex items-center justify-center transition-all cursor-pointer ${
                language === 'pt-BR'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs font-bold'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              PT
            </button>
          </div>

          {/* Theme Toggle: Clean Minimalist Monochrome Icons */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.tooltips.lightMode : t.tooltips.darkMode}
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 stroke-[2]" />
            ) : (
              <Moon className="w-4 h-4 stroke-[2]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
