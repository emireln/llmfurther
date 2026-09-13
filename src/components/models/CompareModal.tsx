import React, { useEffect } from 'react';
import { ModelItem, getModelKey } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-6xl xl:max-w-7xl max-h-[92vh] flex flex-col rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
              {t.compare.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-1">
              {models.length} / 3 {t.compare.modelsSelected}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {models.length > 0 && (
              <button
                type="button"
                onClick={onClear}
                title={t.compare.clearAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#ff3d5c] hover:border-[#ff3d5c] transition-colors cursor-pointer shadow-2xs"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{t.compare.clearCompare}</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.compare.close}
              title={t.compare.close}
              className="p-2 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {models.length === 0 ? (
            <div className="py-20 text-center text-sm text-neutral-500 font-mono">
              {t.compare.emptyNotice}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500">
                    <th className="p-4 w-48 font-bold text-xs uppercase tracking-wider">{t.compare.metric}</th>
                    {models.map(m => (
                      <th key={getModelKey(m)} className="p-4 min-w-[260px] md:min-w-[300px] text-neutral-900 dark:text-neutral-100">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="font-bold text-base truncate">{m.name || m.id}</div>
                            <div className="text-xs text-neutral-500 font-medium">{m.provider}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemove(getModelKey(m))}
                            title={t.compare.remove}
                            aria-label={t.compare.remove}
                            className="text-neutral-400 hover:text-[#ff3d5c] p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {/* Free Quota */}
                  <tr>
                    <td className="p-4 font-bold text-neutral-500 dark:text-neutral-400">
                      {t.compare.quota}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-4 text-neutral-900 dark:text-neutral-100 font-sans">
                        <span className="font-semibold text-[#ff3d5c]">{m.freeLimit || 'Free Tier'}</span>
                      </td>
                    ))}
                  </tr>

                  {/* Context Window */}
                  <tr>
                    <td className="p-4 font-bold text-neutral-500 dark:text-neutral-400">
                      {t.compare.contextWindow}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-4 text-neutral-900 dark:text-neutral-100 font-semibold">
                        {m.context || 'N/A'}
                      </td>
                    ))}
                  </tr>

                  {/* SWE-bench */}
                  <tr>
                    <td className="p-4 font-bold text-neutral-500 dark:text-neutral-400">
                      {t.compare.sweBench}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-4 text-neutral-900 dark:text-neutral-100">
                        {m.sweScore || t.modal.unranked}
                      </td>
                    ))}
                  </tr>

                  {/* Access Requirements */}
                  <tr>
                    <td className="p-4 font-bold text-neutral-500 dark:text-neutral-400">
                      {t.compare.accessType}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-4">
                        <div className="flex flex-wrap gap-1.5">
                          {m.access?.map(a => (
                            <span
                              key={a}
                              className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[11px] text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold"
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
                    <td className="p-4 font-bold text-neutral-500 dark:text-neutral-400">
                      {t.compare.status}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-4">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              m.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                          />
                          <span className="capitalize font-semibold">{m.status}</span>
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Direct Link */}
                  <tr>
                    <td className="p-4 font-bold text-neutral-500 dark:text-neutral-400">
                      {t.compare.directAction}
                    </td>
                    {models.map(m => (
                      <td key={getModelKey(m)} className="p-4">
                        {m.url && (
                          <a
                            href={m.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#ff3d5c] hover:underline font-bold"
                          >
                            <span>{t.compare.open}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
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
