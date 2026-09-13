import React, { useState, useEffect } from 'react';

interface ModelLogoProps {
  modelId: string;
  modelName?: string;
  providerSlug: string;
  providerName: string;
  size?: number;
  className?: string;
}

const MODEL_PATTERNS: { regex: RegExp; file: string }[] = [
  { regex: /deepseek/i, file: 'deepseek.png' },
  { regex: /gpt|openai|o[134]-/i, file: 'openai.png' },
  { regex: /claude/i, file: 'claude.png' },
  { regex: /anthropic/i, file: 'anthropic.png' },
  { regex: /gemini|agnes/i, file: 'gemini.png' },
  { regex: /gemma/i, file: 'gemma.png' },
  { regex: /qwen|dashscope/i, file: 'qwen.png' },
  { regex: /llama|meta|muse-/i, file: 'meta.png' },
  { regex: /nemotron|nvidia/i, file: 'nvidia.png' },
  { regex: /mistral|mixtral|ministral|codestral|pixtral|voxtral|leanstral/i, file: 'mistral.png' },
  { regex: /grok/i, file: 'grok.png' },
  { regex: /xai/i, file: 'xai.png' },
  { regex: /cohere|command-|north-mini|tiny-aya|c4ai-aya|aya-expanse|aya-vision/i, file: 'cohere.png' },
  { regex: /kimi|moonshot/i, file: 'moonshot.png' },
  { regex: /minimax/i, file: 'minimax.png' },
  { regex: /laguna|poolside/i, file: 'poolside.png' },
  { regex: /glm|zhipu/i, file: 'zai.png' },
  { regex: /stepfun|step-/i, file: 'stepfun.png' },
  { regex: /thinkingmachines|thinking machines|inkling/i, file: 'thinking-machines.png' },
  { regex: /liquid|lfm-/i, file: 'liquid.png' },
  { regex: /jina/i, file: 'jina.png' },
  { regex: /granite|ibm/i, file: 'ibm.png' },
  { regex: /phi-|microsoft/i, file: 'microsoft.png' },
  { regex: /jamba|ai21/i, file: 'ai21.png' },
  { regex: /hunyuan|tencent|hy[34]/i, file: 'tencent.png' },
  { regex: /groq/i, file: 'groq.png' },
  { regex: /cerebras/i, file: 'cerebras.png' },
  { regex: /sambanova/i, file: 'sambanova.png' },
  { regex: /siliconflow/i, file: 'siliconflow.png' },
  { regex: /cloudflare/i, file: 'cloudflare.png' },
  { regex: /huggingface/i, file: 'huggingface.png' },
  { regex: /ollama/i, file: 'ollama.png' },
  { regex: /kilo/i, file: 'kilo.png' },
  { regex: /llm7/i, file: 'llm7.png' },
  { regex: /scaleway/i, file: 'scaleway.png' },
  { regex: /ovhcloud/i, file: 'ovhcloud.png' },
  { regex: /unorouter/i, file: 'unorouter.png' },
  { regex: /requesty/i, file: 'requesty.png' },
  { regex: /modelscope/i, file: 'modelscope.png' },
  { regex: /chutes/i, file: 'chutes.png' },
  { regex: /cline/i, file: 'cline.png' },
  { regex: /openrouter/i, file: 'openrouter.png' },
  { regex: /routeway/i, file: 'routeway.png' },
  { regex: /tokenrouter/i, file: 'tokenrouter.png' },
  { regex: /zenmux/i, file: 'zenmux.svg' },
  { regex: /itsfree/i, file: 'itsfree.svg' },
  { regex: /airforce/i, file: 'api-airforce.png' },
  { regex: /aion/i, file: 'aion-labs.png' },
  { regex: /orcarouter/i, file: 'orcarouter.png' },
  { regex: /jan/i, file: 'jan.png' },
  { regex: /lm-studio|lmstudio/i, file: 'lm-studio.png' },
  { regex: /vllm/i, file: 'vllm.png' },
  { regex: /pollinations/i, file: 'pollinations.png' },
  { regex: /nscale/i, file: 'nscale.png' },
];

export const ModelLogo: React.FC<ModelLogoProps> = ({
  modelId,
  modelName = '',
  providerSlug,
  providerName,
  size = 24,
  className = '',
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  // Build cascade of fallback sources
  const candidateUrls: string[] = [];

  // 1. Model family specific icon
  const combinedText = `${modelId} ${modelName} ${providerSlug} ${providerName}`;
  const modelMatch = MODEL_PATTERNS.find(p => p.regex.test(combinedText));
  if (modelMatch) {
    candidateUrls.push(`/assets/logos/models/${modelMatch.file}`);
    candidateUrls.push(`/assets/logos/${modelMatch.file}`);
  }

  // 2. Provider specific icons
  candidateUrls.push(`/assets/logos/providers/${providerSlug}.svg`);
  candidateUrls.push(`/assets/logos/providers/${providerSlug}.png`);
  candidateUrls.push(`/assets/logos/${providerSlug}.svg`);
  candidateUrls.push(`/assets/logos/${providerSlug}.png`);
  candidateUrls.push(`/assets/logos/models/${providerSlug}.png`);
  candidateUrls.push(`/assets/logos/models/${providerSlug}.svg`);

  // 3. Provider slug aliases (e.g. googleai -> google, github-models -> github)
  const cleanSlug = providerSlug.split('-')[0].replace('ai', '');
  if (cleanSlug && cleanSlug !== providerSlug) {
    candidateUrls.push(`/assets/logos/providers/${cleanSlug}.svg`);
    candidateUrls.push(`/assets/logos/providers/${cleanSlug}.png`);
    candidateUrls.push(`/assets/logos/${cleanSlug}.svg`);
    candidateUrls.push(`/assets/logos/${cleanSlug}.png`);
    candidateUrls.push(`/assets/logos/models/${cleanSlug}.png`);
  }

  // Reset index when model changes
  useEffect(() => {
    setCurrentSrcIndex(0);
  }, [modelId, providerSlug]);

  const handleNextFallback = () => {
    setCurrentSrcIndex(prev => prev + 1);
  };

  if (currentSrcIndex < candidateUrls.length) {
    return (
      <img
        src={candidateUrls[currentSrcIndex]}
        alt={providerName}
        onError={handleNextFallback}
        className={`object-contain shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  // Final fallback: Minimalist clean initial badge
  const initial = (providerName || modelId).charAt(0).toUpperCase();
  return (
    <div
      className={`rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono font-bold flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(10, Math.floor(size * 0.55)) }}
    >
      {initial}
    </div>
  );
};
