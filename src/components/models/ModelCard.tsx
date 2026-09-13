import React, { useState } from 'react';
import { ModelItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ModelLogo } from '../common/ModelLogo';
import { Copy, Check, ExternalLink, Zap } from 'lucide-react';

interface ModelCardProps {
  model: ModelItem;
  onSelect: (model: ModelItem) => void;
  isCompared: boolean;
  onToggleCompare: (model: ModelItem) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({
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
      className={`group relative flex flex-col justify-between rounded-lg border bg-white dark:bg-neutral-900 transition-all duration-150 cursor-pointer p-4 select-none min-w-0 h-full ${
        isCompared
          ? 'border-[#ff3d5c] ring-1 ring-[#ff3d5c]'
          : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-xs'
      }`}
    >
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header: Brand Logo + Provider Name + Status & Compare Checkbox */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <ModelLogo
              modelId={model.id}
              modelName={model.name}
              providerSlug={model.providerSlug}
              providerName={model.provider}
              size={20}
              className="rounded-xs shrink-0"
            />
            <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-300 truncate">
              {model.provider}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Operational status indicator */}
            <span
              title={isOperational ? t.tooltips.operational : t.tooltips.degraded}
              className={`w-2 h-2 rounded-full cursor-help block shrink-0 ${
                isOperational ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />

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
              className="cursor-pointer p-0.5 rounded focus:outline-none"
            >
              {isCompared ? (
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#ff3d5c] border border-[#ff3d5c] text-white shadow-xs">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 text-transparent hover:border-neutral-500 dark:hover:border-neutral-400 transition-colors">
                  <Check className="w-3.5 h-3.5 opacity-0" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Model Name & ID */}
        <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors truncate">
          {model.name || model.id}
        </h3>
        <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-400 truncate mt-0.5 select-all">
          {model.id}
        </p>

        {/* Solid Badges: Strong Gray in Dark Mode */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          {model.access?.slice(0, 2).map((acc) => (
            <span
              key={acc}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700"
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
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[#ff3d5c] border border-neutral-300 dark:border-neutral-700 font-bold">
              SWE: {model.sweScore}
            </span>
          )}
        </div>

        {/* Free Limit / Quota Highlight */}
        <div className="mt-3 pt-2.5 border-t border-neutral-200 dark:border-neutral-700 min-h-[44px] flex items-center">
          <div className="flex items-start gap-1.5 text-xs text-neutral-800 dark:text-neutral-200">
            <Zap className="w-3.5 h-3.5 text-[#ff3d5c] shrink-0 mt-0.5" />
            <span className="line-clamp-2 leading-relaxed font-sans text-[12px]">
              {model.freeLimit || 'Free access tier available'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-auto pt-2.5 flex items-center justify-between gap-2 border-t border-neutral-200 dark:border-neutral-700 text-xs shrink-0">
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
              <span>{t.card.copyId}</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2">
          {model.url && (
            <a
              href={model.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title={t.tooltips.visitConsole}
              className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-neutral-800 dark:text-neutral-200 hover:text-white dark:hover:text-white hover:bg-[#ff3d5c] dark:hover:bg-[#ff3d5c] hover:border-[#ff3d5c] transition-colors py-1 px-2 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 cursor-pointer shadow-2xs"
            >
              <span>{t.card.getKey}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
