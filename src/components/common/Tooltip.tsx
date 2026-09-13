import React, { useState, useRef, useEffect } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 140,
  className = '',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (disabled || !content) return;
    timerRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Position classes
  const positionClasses: Record<TooltipPosition, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  // Arrow classes
  const arrowClasses: Record<TooltipPosition, string> = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1 border-t-neutral-900 dark:border-t-neutral-800 border-x-transparent border-b-transparent border-t-[5px] border-x-[4px]',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-neutral-900 dark:border-b-neutral-800 border-x-transparent border-t-transparent border-b-[5px] border-x-[4px]',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1 border-l-neutral-900 dark:border-l-neutral-800 border-y-transparent border-r-transparent border-l-[5px] border-y-[4px]',
    right: 'right-full top-1/2 -translate-y-1/2 -mr-1 border-r-neutral-900 dark:border-r-neutral-800 border-y-transparent border-l-transparent border-r-[5px] border-y-[4px]',
  };

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onClick={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 pointer-events-none transition-all duration-150 ease-out transform scale-100 opacity-100 animate-in fade-in-0 zoom-in-95 ${positionClasses[position]}`}
        >
          <div className="relative px-2.5 py-1 text-[11px] font-mono font-medium rounded-md whitespace-nowrap shadow-xl border border-neutral-800 dark:border-neutral-700 bg-neutral-950 text-neutral-50 dark:bg-neutral-900 dark:text-neutral-100">
            {content}
            {/* Arrow */}
            <span
              className={`absolute w-0 h-0 border-solid pointer-events-none ${arrowClasses[position]}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
