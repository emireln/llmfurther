import React, { useState, useEffect } from 'react';
import { ModelItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ModelLogo } from '../common/ModelLogo';
import { translateQuota } from '../../utils/translateQuota';
import { X, Copy, Check, ExternalLink, Zap } from 'lucide-react';

interface ModelDetailModalProps {
  model: ModelItem | null;
  onClose: () => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ model, onClose }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'quickstart' | 'specs'>('quickstart');
  const [copiedType, setCopiedType] = useState<'python' | 'curl' | null>(null);

  useEffect(() => {
    if (model) {
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
  }, [model]);

  if (!model) return null;

  const pythonSnippet = `from openai import OpenAI

# ${t.modal.pythonComment}
client = OpenAI(
    base_url="${model.url || 'https://api.openai.com/v1'}",
    api_key="${t.modal.apiKeyPlaceholder}"
)

response = client.chat.completions.create(
    model="${model.id}",
    messages=[
        {"role": "system", "content": "${t.modal.pythonSystemPrompt}"},
        {"role": "user", "content": "${t.modal.pythonUserPrompt}"}
    ],
    temperature=0.7,
)

print(response.choices[0].message.content)`;

  const curlSnippet = `curl "${model.url || 'https://api.openai.com/v1/chat/completions'}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${t.modal.apiKeyPlaceholder}" \\
  -d '{
    "model": "${model.id}",
    "messages": [
      {"role": "user", "content": "${t.modal.curlUserPrompt}"}
    ]
  }'`;

  const handleCopySnippet = (snippet: string, type: 'python' | 'curl') => {
    navigator.clipboard.writeText(snippet);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-5xl xl:max-w-6xl max-h-[92vh] flex flex-col rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-start gap-4">
            <ModelLogo
              modelId={model.id}
              modelName={model.name}
              providerSlug={model.providerSlug}
              providerName={model.provider}
              size={42}
              className="mt-0.5 rounded-sm p-1.5 border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-300">
                  {model.provider}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    model.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
                <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 capitalize">
                  {t.status[model.status as keyof typeof t.status] || model.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                {model.name || model.id}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 select-all">
                {model.id}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.modal.close}
            title={t.modal.close}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Limit Notice Banner: Strong Gray Background */}
        <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-800 px-5 sm:px-6 py-3 flex items-center gap-2.5">
          <Zap className="w-4 h-4 text-[#ff3d5c] shrink-0" />
          <div className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-sans">
            <span className="font-bold text-[#ff3d5c] font-mono uppercase tracking-wider text-[11px] sm:text-xs mr-2">
              {t.card.quota}:
            </span>
            {translateQuota(model.freeLimit, language) || t.modal.freeAccessAvailable}
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-neutral-200 dark:border-neutral-800 px-5 sm:px-6 bg-neutral-100 dark:bg-neutral-900 text-xs sm:text-sm font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('quickstart')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors cursor-pointer ${
              activeTab === 'quickstart'
                ? 'border-[#ff3d5c] text-[#ff3d5c]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {t.modal.quickStart}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors cursor-pointer ${
              activeTab === 'specs'
                ? 'border-[#ff3d5c] text-[#ff3d5c]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {t.modal.limits}
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 font-sans text-sm">
          {activeTab === 'quickstart' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Python SDK Example */}
              <div className="flex flex-col rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 font-bold uppercase tracking-wider">
                    {t.modal.pythonExample}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopySnippet(pythonSnippet, 'python')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 transition-colors cursor-pointer shadow-2xs"
                  >
                    {copiedType === 'python' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                        <span className="text-emerald-500 font-bold">{t.card.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.modal.copySnippet}</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="flex-1 p-4 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-950 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  <code>{pythonSnippet}</code>
                </pre>
              </div>

              {/* cURL Example */}
              <div className="flex flex-col rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 font-bold uppercase tracking-wider">
                    {t.modal.curlExample}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopySnippet(curlSnippet, 'curl')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 transition-colors cursor-pointer shadow-2xs"
                  >
                    {copiedType === 'curl' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                        <span className="text-emerald-500 font-bold">{t.card.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.modal.copySnippet}</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="flex-1 p-4 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-950 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  <code>{curlSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-5 text-xs font-mono">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                  <span className="text-neutral-500 dark:text-neutral-400 block text-[11px] mb-1">{t.modal.maxContext}</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {model.context || t.modal.standardContext}
                  </span>
                </div>

                <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                  <span className="text-neutral-500 dark:text-neutral-400 block text-[11px] mb-1">{t.modal.sweBench}</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {model.sweScore || t.modal.unranked}
                  </span>
                </div>

                <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                  <span className="text-neutral-500 dark:text-neutral-400 block text-[11px] mb-1">{t.filters.provider}</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate block">
                    {model.provider}
                  </span>
                </div>

                <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                  <span className="text-neutral-500 dark:text-neutral-400 block text-[11px] mb-1">{t.compare.status}</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        model.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    />
                    <span className="text-sm font-bold capitalize text-neutral-900 dark:text-neutral-100">
                      {t.status[model.status as keyof typeof t.status] || model.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <span className="text-neutral-500 dark:text-neutral-300 block text-[11px] mb-2 font-bold uppercase tracking-wider">{t.modal.modalities}</span>
                <div className="flex flex-wrap gap-2">
                  {model.type?.map(m => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold uppercase text-xs shadow-2xs"
                    >
                      {t.modalities[m as keyof typeof t.modalities] || m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <span className="text-neutral-500 dark:text-neutral-300 block text-[11px] mb-2 font-bold uppercase tracking-wider">{t.filters.access}</span>
                <div className="flex flex-wrap gap-2">
                  {model.access?.map(acc => (
                    <span
                      key={acc}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-xs shadow-2xs"
                    >
                      {t.accessLabels[acc as keyof typeof t.accessLabels] || acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer: Solid Action Buttons with Strong Gray */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between gap-3">
          {model.url ? (
            <a
              href={model.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff3d5c] text-white font-mono text-xs font-bold hover:bg-[#e02e4c] transition-colors shadow-xs cursor-pointer"
            >
              <span>{t.modal.visitConsole}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer shadow-2xs"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
