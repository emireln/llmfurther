import React, { useState } from 'react';
import { ModelItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ModelLogo } from '../common/ModelLogo';
import { Tooltip } from '../common/Tooltip';
import { Copy, Check, ExternalLink, CheckSquare, Square, Zap } from 'lucide-react';

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
      className={`group relative flex flex-col justify-between rounded-lg border bg-white dark:bg-neutral-900 transition-all duration-150 cursor-pointer p-4 ${
        isCompared
          ? 'border-accent ring-1 ring-accent shadow-md shadow-accent/5'
          : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xs'
      }`}
    >
      <div>
        {/* Top Header: Real Brand Logo + Provider Name + Status & Compare */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Real Logo */}
            <ModelLogo
              modelId={model.id}
              modelName={model.name}
              providerSlug={model.providerSlug}
              providerName={model.provider}
              size={20}
              className="rounded-xs"
            />
            <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 truncate">
              {model.provider}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Operational dot with Tooltip */}
            <Tooltip
              content={isOperational ? t.status.operational : t.status.degraded}
              position="top"
            >
              <span
                className={`w-2 h-2 rounded-full cursor-help block ${
                  isOperational ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              />
            </Tooltip>

            {/* Compare toggle with Tooltip */}
            <Tooltip
              content={isCompared ? 'Remove from comparison' : 'Compare side-by-side'}
              position="top"
            >
              <button
                type="button"
                aria-label={t.card.compare}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onToggleCompare(model);
                }}
                className={`p-1.5 rounded-md transition-all flex items-center justify-center cursor-pointer ${
                  isCompared
                    ? 'text-accent bg-accent/15 border border-accent/40 shadow-xs'
                    : 'text-neutral-400 hover:text-accent hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {isCompared ? (
                  <CheckSquare className="w-4 h-4 text-accent fill-accent/20" />
                ) : (
                  <Square className="w-4 h-4" />
                )}
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Model Name & ID */}
        <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors truncate">
          {model.name || model.id}
        </h3>
        <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500 truncate mt-0.5 select-all">
          {model.id}
        </p>

        {/* Badges: Access, Context, SWE */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          {model.access?.slice(0, 2).map((acc) => (
            <span
              key={acc}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
            >
              {t.accessLabels[acc as keyof typeof t.accessLabels] || acc}
            </span>
          ))}

          {contextDisplay && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
              {contextDisplay}
            </span>
          )}

          {model.sweScore && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
              SWE: {model.sweScore}
            </span>
          )}
        </div>

        {/* Free Limit / Quota Highlight */}
        <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80">
          <div className="flex items-start gap-1.5 text-xs text-neutral-700 dark:text-neutral-300">
            <Zap className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <span className="line-clamp-2 leading-relaxed font-sans text-[12px]">
              {model.freeLimit || 'Free access tier available'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-4 pt-2.5 flex items-center justify-between gap-2 border-t border-neutral-100 dark:border-neutral-800/80 text-xs">
        <Tooltip content={copied ? t.card.copied : "Copy model ID for API calls"} position="top">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors py-1 px-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">{t.card.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>{t.card.copyId}</span>
              </>
            )}
          </button>
        </Tooltip>

        <div className="flex items-center gap-2">
          {model.url && (
            <Tooltip content={`Visit ${model.provider} developer console`} position="top">
              <a
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-accent hover:text-accent-hover transition-colors py-1 px-2 rounded bg-accent/10 border border-accent/20 hover:bg-accent/20 cursor-pointer"
              >
                <span>{t.card.getKey}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};
