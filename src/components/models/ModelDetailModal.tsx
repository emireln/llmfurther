import React, { useState, useEffect } from 'react';
import { ModelItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ModelLogo } from '../common/ModelLogo';
import { Tooltip } from '../common/Tooltip';
import { X, Copy, Check, ExternalLink, Zap } from 'lucide-react';

interface ModelDetailModalProps {
  model: ModelItem | null;
  onClose: () => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ model, onClose }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'quickstart' | 'specs'>('quickstart');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

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

# Initialize client using provider's free API endpoint
client = OpenAI(
    base_url="${model.url || 'https://api.openai.com/v1'}",
    api_key="YOUR_FREE_API_KEY"
)

response = client.chat.completions.create(
    model="${model.id}",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    temperature=0.7,
)

print(response.choices[0].message.content)`;

  const curlSnippet = `curl "${model.url || 'https://api.openai.com/v1/chat/completions'}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_FREE_API_KEY" \\
  -d '{
    "model": "${model.id}",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`;

  const handleCopySnippet = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-start gap-3.5">
            <ModelLogo
              modelId={model.id}
              modelName={model.name}
              providerSlug={model.providerSlug}
              providerName={model.provider}
              size={36}
              className="mt-0.5 rounded-sm p-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {model.provider}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    model.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
                <span className="text-[11px] font-mono text-neutral-400 capitalize">
                  {model.status}
                </span>
              </div>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {model.name || model.id}
              </h2>
              <p className="font-mono text-xs text-neutral-500 mt-0.5 select-all">
                {model.id}
              </p>
            </div>
          </div>

          <Tooltip content={t.modal.close} position="bottom">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </Tooltip>
        </div>

        {/* Free Limit Notice Banner: Solid Background */}
        <div className="bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-300 dark:border-neutral-800 px-5 py-3 flex items-center gap-2.5">
          <Zap className="w-4 h-4 text-[#ff3d5c] shrink-0" />
          <div className="text-xs text-neutral-800 dark:text-neutral-200 font-sans">
            <span className="font-bold text-[#ff3d5c] font-mono uppercase tracking-wider text-[11px] mr-1.5">
              {t.card.quota}:
            </span>
            {model.freeLimit || 'Free access tier available directly with provider.'}
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-neutral-200 dark:border-neutral-800 px-5 bg-neutral-100 dark:bg-neutral-950 text-xs font-mono">
          <button
            onClick={() => setActiveTab('quickstart')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'quickstart'
                ? 'border-[#ff3d5c] text-[#ff3d5c] font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {t.modal.quickStart}
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'specs'
                ? 'border-[#ff3d5c] text-[#ff3d5c] font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {t.modal.limits}
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 font-sans text-sm">
          {activeTab === 'quickstart' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 font-semibold uppercase tracking-wider">
                  {t.modal.pythonExample}
                </span>
                <Tooltip content={copiedSnippet ? t.card.copied : t.modal.copySnippet} position="left">
                  <button
                    onClick={() => handleCopySnippet(pythonSnippet)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 transition-colors cursor-pointer"
                  >
                    {copiedSnippet ? (
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
                </Tooltip>
              </div>

              <pre className="p-3.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{pythonSnippet}</code>
              </pre>

              <div className="pt-2">
                <span className="text-xs font-mono text-neutral-500 font-semibold uppercase tracking-wider block mb-2">
                  {t.modal.curlExample}
                </span>
                <pre className="p-3.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  <code>{curlSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
                  <span className="text-neutral-500 block text-[11px] mb-1">{t.modal.maxContext}</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {model.context || 'Standard (~8k - 32k)'}
                  </span>
                </div>

                <div className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
                  <span className="text-neutral-500 block text-[11px] mb-1">{t.modal.sweBench}</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {model.sweScore || t.modal.unranked}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-neutral-500 block text-[11px] mb-1.5">{t.modal.modalities}</span>
                <div className="flex flex-wrap gap-1.5">
                  {model.type?.map(m => (
                    <span
                      key={m}
                      className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 uppercase"
                    >
                      {t.modalities[m as keyof typeof t.modalities] || m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-neutral-500 block text-[11px] mb-1.5">{t.filters.access}</span>
                <div className="flex flex-wrap gap-1.5">
                  {model.access?.map(acc => (
                    <span
                      key={acc}
                      className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold"
                    >
                      {t.accessLabels[acc as keyof typeof t.accessLabels] || acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer: Solid Action Buttons */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-between gap-3">
          {model.url ? (
            <a
              href={model.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff3d5c] text-white font-mono text-xs font-semibold hover:bg-[#e02e4c] transition-colors shadow-xs"
            >
              <span>{t.modal.visitConsole}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
