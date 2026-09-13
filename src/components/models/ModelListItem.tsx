import React, { useState } from 'react';
import { ModelItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ModelLogo } from '../common/ModelLogo';
import { Copy, Check, ExternalLink, Zap } from 'lucide-react';

interface ModelListItemProps {
  model: ModelItem;
  onSelect: (model: ModelItem) => void;
  isCompared: boolean;
  onToggleCompare: (model: ModelItem) => void;
}

export const ModelListItem: React.FC<ModelListItemProps> = ({
  model,
  onSelect,
  isCompared,
  onToggleCompare,
}) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(model.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isOperational = model.status === 'operational';
  const contextDisplay = model.context ? model.context.toUpperCase() : null;

  return (
    <div
      onClick={() => onSelect(model)}
      className={`group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg border bg-white dark:bg-neutral-900 transition-all duration-150 cursor-pointer select-none ${
        isCompared
          ? 'border-[#ff3d5c] ring-1 ring-[#ff3d5c] bg-neutral-50/50 dark:bg-neutral-800'
          : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50/80 dark:hover:bg-neutral-800 hover:shadow-xs'
      }`}
    >
      {/* Left Column: Checkbox, Logo, Model Name, ID & Provider */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Solid Compare Checkbox */}
        <button
          type="button"
          aria-label={t.card.compare}
          title={isCompared ? t.tooltips.compareRemove : t.tooltips.compareAdd}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onToggleCompare(model);
          }}
          className="cursor-pointer p-0.5 rounded focus:outline-none shrink-0"
        >
          {isCompared ? (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-[#ff3d5c] border border-[#ff3d5c] text-white shadow-xs">
              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              <Check className="w-3.5 h-3.5 opacity-0" />
            </div>
          )}
        </button>

        {/* Real Brand Logo */}
        <div className="shrink-0">
          <ModelLogo
            modelId={model.id}
            modelName={model.name}
            providerSlug={model.providerSlug}
            providerName={model.provider}
            size={24}
            className="rounded-xs shrink-0"
          />
        </div>

        {/* Name, ID, Provider */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors truncate">
              {model.name || model.id}
            </h3>
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-300 shrink-0 hidden md:inline">
              · {model.provider}
            </span>
          </div>
          <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-400 truncate select-all">
            {model.id}
          </p>
        </div>
      </div>

      {/* Middle Column: Badges & Quota */}
      <div className="flex flex-wrap items-center gap-2 sm:max-w-md shrink-0">
        {/* Badges: Strong Gray in Dark Mode */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {model.access?.slice(0, 1).map((acc) => (
            <span
              key={acc}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800"
            >
              {t.accessLabels[acc as keyof typeof t.accessLabels] || acc}
            </span>
          ))}

          {contextDisplay && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 border border-neutral-900 dark:border-neutral-100 font-semibold">
              {contextDisplay}
            </span>
          )}

          {model.sweScore && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-[#ff3d5c] border border-neutral-300 dark:border-neutral-800 font-bold">
              SWE: {model.sweScore}
            </span>
          )}
        </div>

        {/* Quota Highlight */}
        <div className="hidden lg:flex items-center gap-1 text-xs text-neutral-700 dark:text-neutral-300 max-w-[220px]">
          <Zap className="w-3.5 h-3.5 text-[#ff3d5c] shrink-0" />
          <span className="truncate font-sans text-[11px]">
            {model.freeLimit || 'Free access tier'}
          </span>
        </div>
      </div>

      {/* Right Column: Status & Action Buttons */}
      <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-100 dark:border-neutral-800">
        {/* Status Dot */}
        <span
          title={isOperational ? t.tooltips.operational : t.tooltips.degraded}
          className={`w-2 h-2 rounded-full cursor-help block shrink-0 ${
            isOperational ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />

        {/* Copy ID Button */}
        <button
          type="button"
          onClick={handleCopy}
          title={copied ? t.card.copied : t.tooltips.copyId}
          className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors py-1 px-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500 stroke-[3]" />
              <span className="text-emerald-500 font-bold">{t.card.copied}</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="hidden sm:inline">{t.card.copyId}</span>
            </>
          )}
        </button>

        {/* Get Key Button */}
        {model.url && (
          <a
            href={model.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title={t.tooltips.visitConsole}
            className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-neutral-800 dark:text-neutral-200 hover:text-white dark:hover:text-white hover:bg-[#ff3d5c] dark:hover:bg-[#ff3d5c] hover:border-[#ff3d5c] transition-colors py-1 px-2.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 cursor-pointer shadow-2xs"
          >
            <span>{t.card.getKey}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
