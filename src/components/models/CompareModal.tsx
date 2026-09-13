import React, { useEffect } from 'react';
import { ModelItem, getModelKey } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from '../common/Tooltip';
import { X, ExternalLink, Trash2 } from 'lucide-react';

interface CompareModalProps {
  models: ModelItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (modelKey: string) => void;
  onClear: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  models,
  isOpen,
  onClose,
  onRemove,
  onClear,
}) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
              {t.compare.title}
            </h2>
            <p className="text-xs font-mono text-neutral-500 mt-0.5">
              {models.length} / 3 models selected
            </p>
          </div>

          <div className="flex items-center gap-3">
            {models.length > 0 && (
              <Tooltip content="Clear all compared models" position="bottom">
                <button
                  onClick={onClear}
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-accent transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.compare.clearCompare}</span>
                </button>
              </Tooltip>
            )}
            <Tooltip content="Close comparison" position="bottom">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {models.length === 0 ? (
            <div className="py-16 text-center text-sm text-neutral-500 font-mono">
              {t.compare.emptyNotice}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500">
                    <th className="p-3 w-40">{t.compare.metric}</th>
                    {models.map(m => (
                      <th key={getModelKey(m)} className="p-3 min-w-[200px] text-neutral-900 dark:text-neutral-100">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-bold text-sm truncate">{m.name || m.id}</div>
                            <div className="text-[11px] text-neutral-500 font-normal">{m.provider}</div>
                          </div>
                          <Tooltip content="Remove from comparison" position="left">
                            <button
                              onClick={() => onRemove(getModelKey(m))}
                              className="text-neutral-400 hover:text-accent p-1 cursor-pointer"
                              aria-label="Remove model"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </Tooltip>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
                  {/* Free Quota */}
                  <tr>
                    <td className="p-3 font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.compare.quota}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-3 text-neutral-900 dark:text-neutral-100 font-sans">
                        <span className="font-medium text-accent">{m.freeLimit || 'Free Tier'}</span>
                      </td>
                    ))}
                  </tr>

                  {/* Context Window */}
                  <tr>
                    <td className="p-3 font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.compare.contextWindow}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-3 text-neutral-900 dark:text-neutral-100">
                        {m.context || 'N/A'}
                      </td>
                    ))}
                  </tr>

                  {/* SWE-bench */}
                  <tr>
                    <td className="p-3 font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.compare.sweBench}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-3 text-neutral-900 dark:text-neutral-100">
                        {m.sweScore || 'Unranked'}
                      </td>
                    ))}
                  </tr>

                  {/* Access Requirements */}
                  <tr>
                    <td className="p-3 font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.compare.accessType}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {m.access?.map(a => (
                            <span
                              key={a}
                              className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[10px] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                            >
                              {t.accessLabels[a as keyof typeof t.accessLabels] || a}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Operational Status */}
                  <tr>
                    <td className="p-3 font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.compare.status}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-3">
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              m.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                          />
                          <span className="capitalize">{m.status}</span>
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Direct Link */}
                  <tr>
                    <td className="p-3 font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.compare.directAction}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-3">
                        {m.url && (
                          <a
                            href={m.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-accent hover:underline font-semibold"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
