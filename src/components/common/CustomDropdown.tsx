import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  count?: number;
}

interface CustomDropdownProps {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  icon,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.value === selectedValue);
  const isFiltered = selectedValue !== '' && selectedValue !== 'all' && selectedValue !== 'popular';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button: Solid Styling */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className={`inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-xs font-mono transition-all select-none cursor-pointer ${
          isFiltered
            ? 'border-[#ff3d5c] bg-[#ff3d5c] text-white font-semibold shadow-xs'
            : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600'
        }`}
      >
        <div className="flex items-center gap-1.5 truncate">
          {icon && <span className="opacity-70">{icon}</span>}
          <span className="truncate">
            {selectedOption && selectedOption.value !== '' && selectedOption.value !== 'all'
              ? selectedOption.label
              : label}
          </span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          } ${isFiltered ? 'text-white' : 'text-neutral-500'}`}
        />
      </button>

      {/* Popover Menu: Solid Background & Borders */}
      {isOpen && (
        <div className="absolute left-0 mt-1.5 w-52 max-h-64 overflow-y-auto rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl z-50 py-1 text-xs font-mono divide-y divide-neutral-100 dark:divide-neutral-800 animate-in fade-in zoom-in-95 duration-100">
          {options.map(opt => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-[#ff3d5c] font-bold'
                    : 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {opt.count !== undefined && (
                    <span className="text-[10px] text-neutral-400 font-normal">
                      {opt.count}
                    </span>
                  )}
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#ff3d5c] stroke-[2.5] shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
