import { ModelItem } from '../types';

export const MODELS_DATA: ModelItem[] = [
  {
    "id": "gemini-3.8-flash",
    "name": "Gemini 3.8 Flash",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image",
      "audio",
      "video",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 req/day · 15 RPM free tier",
    "context": "1M",
    "sweScore": "84.2%",
    "tags": [
      "flagship",
      "multimodal",
      "fast"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "gemini-3.8-pro",
    "name": "Gemini 3.8 Pro",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image",
      "audio",
      "video",
      "code"
    ],
    "access": [
      "free-tier",
      "daily-quota",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "50 req/day · 2 RPM free tier",
    "context": "2M",
    "sweScore": "87.6%",
    "tags": [
      "frontier",
      "reasoning",
      "multimodal",
      "coding"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "gemini-3.8-flash-lite",
    "name": "Gemini 3.8 Flash Lite",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "2,000 req/day · 30 RPM free tier",
    "context": "1M",
    "sweScore": "78.9%",
    "tags": [
      "fast",
      "lightweight",
      "high-quota"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "claude-4-sonnet",
    "name": "Claude 4 Sonnet",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "code",
      "image"
    ],
    "access": [
      "free-tier",
      "daily-quota"
    ],
    "status": "operational",
    "freeLimit": "Daily free query quota via OpenRouter",
    "context": "200K",
    "sweScore": "86.1%",
    "tags": [
      "frontier",
      "coding",
      "reasoning"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "claude-4-haiku",
    "name": "Claude 4 Haiku",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free access tier via OpenRouter free pool",
    "context": "200K",
    "sweScore": "80.4%",
    "tags": [
      "speed",
      "efficiency",
      "general"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "gpt-5-mini",
    "name": "GPT-5 Mini",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "code",
      "image"
    ],
    "access": [
      "free-tier",
      "daily-quota"
    ],
    "status": "operational",
    "freeLimit": "Free tier routing on OpenRouter",
    "context": "128K",
    "sweScore": "83.8%",
    "tags": [
      "reasoning",
      "multimodal"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "gpt-4.8-turbo",
    "name": "GPT-4.8 Turbo",
    "provider": "GitHub Models",
    "providerSlug": "github",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "150 req/day with standard GitHub account",
    "context": "128K",
    "sweScore": "81.5%",
    "tags": [
      "coding",
      "free-forever"
    ],
    "url": "https://github.com/marketplace/models",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "deepseek-r2",
    "name": "DeepSeek R2 Reasoning",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "30 RPM · 500k tokens/min ultra-fast LPU inference",
    "context": "128K",
    "sweScore": "88.9%",
    "tags": [
      "reasoning",
      "math",
      "ultra-fast"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "deepseek-v4",
    "name": "DeepSeek V4 MoE",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free tier inference on standard speed tier",
    "context": "128K",
    "sweScore": "85.3%",
    "tags": [
      "moe",
      "flagship",
      "coding"
    ],
    "url": "https://siliconflow.cn/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "llama-4-scout",
    "name": "Llama 4 Scout",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "30 RPM · instant inference on Groq LPU",
    "context": "128K",
    "sweScore": "80.7%",
    "tags": [
      "open-weights",
      "speed"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "llama-4-70b",
    "name": "Llama 4 70B Instruct",
    "provider": "Together AI",
    "providerSlug": "together",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "signup-credits"
    ],
    "status": "operational",
    "freeLimit": "$5.00 free credits upon verification",
    "context": "128K",
    "sweScore": "84.1%",
    "tags": [
      "flagship",
      "coding"
    ],
    "url": "https://api.together.ai/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "qwen-3-72b-instruct",
    "name": "Qwen 3 72B Instruct",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Completely free tier access on SiliconCloud",
    "context": "128K",
    "sweScore": "82.5%",
    "tags": [
      "multilingual",
      "coding"
    ],
    "url": "https://siliconflow.cn/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "mistral-nemo-2-24b",
    "name": "Mistral Nemo 2 24B",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free forever via OpenRouter :free router",
    "context": "128K",
    "sweScore": "78.2%",
    "tags": [
      "apache-2.0",
      "open-source"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "gemma-3-27b",
    "name": "Gemma 3 27B IT",
    "provider": "Cerebras",
    "providerSlug": "cerebras",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/day · 30 RPM at 1800 tok/sec",
    "context": "128K",
    "sweScore": "79.8%",
    "tags": [
      "ultra-fast",
      "free-forever"
    ],
    "url": "https://cloud.cerebras.ai/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "cohere-command-r-plus-v2",
    "name": "Command R+ v2",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests/month trial tier",
    "context": "128K",
    "sweScore": "81.0%",
    "tags": [
      "rag",
      "enterprise"
    ],
    "url": "https://dashboard.cohere.com/",
    "addedAt": "2026-09-13T00:00:00.000Z"
  },
  {
    "id": "gemini-2.5-flash",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image",
      "audio",
      "code"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests/day",
    "tags": [
      "website"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2025-06-01T00:00:00.000Z"
  },
  {
    "id": "free-llm-api-resources",
    "name": "free-llm-api-resources",
    "provider": "GitHub",
    "providerSlug": "github",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "no-signup",
      "open-source"
    ],
    "status": "operational",
    "freeLimit": "Classic list of free LLM APIs and trial-credit providers",
    "tags": [
      "collection"
    ],
    "url": "https://cheahjs-free-llm-api-resources.mintlify.app/",
    "addedAt": "2026-07-27T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark",
    "sourceUrl": "https://github.com/cheahjs/free-llm-api-resources"
  },
  {
    "id": "api-airforce",
    "provider": "Api.Airforce",
    "providerSlug": "api-airforce",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "most are paid, some are free",
    "tags": [
      "website"
    ],
    "url": "https://api.airforce/models/?sort=price",
    "addedAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "zenmux",
    "provider": "Zenmux",
    "providerSlug": "zenmux",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "free for some models",
    "tags": [
      "website"
    ],
    "url": "https://zenmux.ai/invite/555LC2",
    "addedAt": "2026-07-27T00:00:00.000Z",
    "cardBg": "/cards/zenmux.png",
    "cardTheme": "dark",
    "cardBgInvert": true
  },
  {
    "id": "cerebras",
    "provider": "Cerebras",
    "providerSlug": "cerebras",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "card-required"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/day, 5 req/min (per model)",
    "tags": [
      "website"
    ],
    "url": "https://cloud.cerebras.ai/",
    "addedAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "openrouter",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "free for some models",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-07-27T00:00:00.000Z"
  },
  {
    "id": "nvidia-nim",
    "provider": "NVIDIA",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "100+ free LLMs",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-07-27T00:00:00.000Z",
    "cardBg": "/cards/nvidia.png",
    "cardTheme": "dark"
  },
  {
    "id": "cloudflare-workers-ai",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "image",
      "audio",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons/day",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "cohere",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests/month, 20 req/min (shared)",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "mistral-la-plateforme",
    "provider": "Mistral La Plateforme",
    "providerSlug": "mistral",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "phone-required",
      "data-training"
    ],
    "status": "operational",
    "freeLimit": "Experiment plan, limits set per model",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "mistral-codestral",
    "provider": "Mistral Codestral",
    "providerSlug": "mistral",
    "type": [
      "code"
    ],
    "access": [
      "free-tier",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests/day, 30 req/min",
    "tags": [
      "website"
    ],
    "url": "https://codestral.mistral.ai/",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "huggingface-inference",
    "provider": "HuggingFace",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image",
      "audio",
      "code",
      "embedding"
    ],
    "access": [
      "free-tier",
      "signup-credits"
    ],
    "status": "operational",
    "freeLimit": "$0.10/month in credits (subject to change)",
    "tags": [
      "website"
    ],
    "url": "https://huggingface.co/docs/inference-providers/en/index",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "github-models",
    "provider": "GitHub Models",
    "providerSlug": "github",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "major",
    "freeLimit": "Retired 30 Jul 2026 \u00b7 playground, catalog, and inference API are gone",
    "tags": [
      "website"
    ],
    "url": "https://docs.github.com/en/github-models/about-github-models",
    "addedAt": "2026-07-28T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark"
  },
  {
    "id": "vercel-ai-gateway",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text",
      "code",
      "image"
    ],
    "access": [
      "free-tier",
      "signup-credits"
    ],
    "status": "operational",
    "freeLimit": "$5/mo recurring credits",
    "tags": [
      "website"
    ],
    "url": "https://vercel.com/docs/ai-gateway",
    "addedAt": "2026-07-28T00:00:00.000Z",
    "cardBg": "/cards/vercel.png",
    "cardTheme": "dark"
  },
  {
    "id": "kilo-gateway",
    "provider": "Kilo Gateway",
    "providerSlug": "kilo",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-signup",
      "data-training"
    ],
    "status": "operational",
    "freeLimit": "200 requests/hour per IP (shared) for free models",
    "tags": [
      "website"
    ],
    "url": "https://kilo.ai/docs/gateway",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "opencode-zen",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "data-training"
    ],
    "status": "operational",
    "freeLimit": "7 free models, no published quota",
    "tags": [
      "website"
    ],
    "url": "https://opencode.ai/docs/zen/",
    "addedAt": "2026-07-28T00:00:00.000Z"
  },
  {
    "id": "tokenrouter",
    "provider": "TokenRouter",
    "providerSlug": "tokenrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "free models appear occasionally \u2014 check the catalog",
    "tags": [
      "website"
    ],
    "url": "https://www.tokenrouter.com/models",
    "addedAt": "2026-07-30T00:00:00.000Z"
  },
  {
    "id": "orcarouter-offers",
    "provider": "OrcaRouter",
    "providerSlug": "orcarouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "signup-credits"
    ],
    "status": "operational",
    "freeLimit": "coupons for free usage \u2014 check Offers page",
    "tags": [
      "website"
    ],
    "url": "https://www.orcarouter.ai/offers",
    "addedAt": "2026-08-01T00:00:00.000Z"
  },
  {
    "id": "moonshotai/kimi-k2.6",
    "name": "Kimi K2.6",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.2%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-ai/deepseek-v4-pro",
    "name": "DeepSeek V4 Pro",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.6%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-ai/deepseek-v4-flash-0731",
    "name": "DeepSeek V4 Flash",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "79.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "stepfun-ai/step-3.7-flash",
    "name": "Step 3.7 Flash",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "74.4%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-ultra-550b-a55b",
    "name": "Nemotron 3 Ultra",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "71.9%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "poolside/laguna-xs-2.1",
    "name": "Laguna XS 2.1",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.9%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "openai/gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "minimaxai/minimax-m3",
    "name": "MiniMax M3",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.4%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistralai/mistral-nemotron",
    "name": "Mistral Nemotron",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-super-120b-a12b",
    "name": "Nemotron 3 Super",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.5%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    "name": "Nemotron 3 Omni",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/llama-3.3-nemotron-super-49b-v1.5",
    "name": "Llama 3.3 Nemotron Super 49B v1.5",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-nano-30b-a3b",
    "name": "Nemotron Nano 30B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "sweScore": "38.8%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "openai/gpt-oss-20b",
    "name": "GPT OSS 20B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "google/gemma-4-31b-it",
    "name": "Gemma 4 31B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistralai/mistral-large-2-instruct",
    "name": "Mistral Large 2",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nvidia-nemotron-nano-9b-v2",
    "name": "Nemotron Nano 9B v2",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "meta/llama-3.3-70b-instruct",
    "name": "Llama 3.3 70B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-ai/deepseek-coder-6.7b-instruct",
    "name": "DeepSeek Coder 6.7B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "meta/codellama-70b",
    "name": "CodeLlama 70B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "100k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistralai/codestral-22b-instruct-v0.1",
    "name": "Codestral 22B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "ibm/granite-34b-code-instruct",
    "name": "Granite 34B Code",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "thinkingmachines/inkling",
    "name": "Inkling",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "meta/llama-3.2-11b-vision-instruct",
    "name": "Llama 3.2 11B Vision",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "28.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-mini-4b-instruct",
    "name": "Nemotron Mini 4B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 1000 req/month",
    "tags": [
      "tutorial"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "openai/gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 ~30-50 RPM per model",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "openai/gpt-oss-20b",
    "name": "GPT OSS 20B",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 ~30-50 RPM per model",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen/qwen3.6-27b",
    "name": "Qwen3.6 27B",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 ~30-50 RPM per model",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "77.2%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "groq/compound",
    "name": "Groq Compound",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 ~30-50 RPM per model",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "45.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "groq/compound-mini",
    "name": "Groq Compound Mini",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 ~30-50 RPM per model",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "32.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "Cerebras",
    "providerSlug": "cerebras",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 generous dev tier",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.cerebras.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "65k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma-4-31b",
    "name": "Gemma 4 31B",
    "provider": "Cerebras",
    "providerSlug": "cerebras",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "signup-credits",
      "card-required"
    ],
    "status": "major",
    "freeLimit": "Removed from public Cerebras endpoints \u00b7 3 Sep 2026",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.cerebras.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "65k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.7-flash",
    "name": "Gemini 3.7 Flash",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.6-flash",
    "name": "Gemini 3.6 Flash",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.5-flash",
    "name": "Gemini 3.5 Flash",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.1-pro-preview",
    "name": "Gemini 3.1 Pro Preview",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.6%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3-flash-preview",
    "name": "Gemini 3 Flash Preview",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.5-flash-lite",
    "name": "Gemini 3.5 Flash Lite",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.1-flash-lite",
    "name": "Gemini 3.1 Flash Lite",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.8%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-2.5-pro",
    "name": "Gemini 2.5 Pro",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "63.8%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-2.5-flash",
    "name": "Gemini 2.5 Flash",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "54.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-2.5-flash-lite",
    "name": "Gemini 2.5 Flash Lite",
    "provider": "Google AI",
    "providerSlug": "googleai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Gemini quotas vary by model",
    "tags": [
      "tutorial"
    ],
    "url": "https://aistudio.google.com/apikey",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "42.6%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-large-2512",
    "name": "Mistral Large 3",
    "provider": "Mistral LP",
    "providerSlug": "mistral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free Experiment plan",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-medium-3-5",
    "name": "Mistral Medium 3.5",
    "provider": "Mistral LP",
    "providerSlug": "mistral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free Experiment plan",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "77.6%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-small-2603",
    "name": "Mistral Small 4",
    "provider": "Mistral LP",
    "providerSlug": "mistral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free Experiment plan",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "48.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "ministral-14b-2512",
    "name": "Ministral 3 14B",
    "provider": "Mistral LP",
    "providerSlug": "mistral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free Experiment plan",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "ministral-8b-2512",
    "name": "Ministral 3 8B",
    "provider": "Mistral LP",
    "providerSlug": "mistral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free Experiment plan",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "ministral-3b-2512",
    "name": "Ministral 3 3B",
    "provider": "Mistral LP",
    "providerSlug": "mistral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free Experiment plan",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/moonshotai/kimi-k2.6",
    "name": "Kimi K2.6",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "card-required"
    ],
    "status": "operational",
    "freeLimit": "Workers Paid or AI Gateway credits \u2014 not on Workers Free",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.2%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/moonshotai/kimi-k2.7-code",
    "name": "Kimi K2.7 Code",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "card-required"
    ],
    "status": "operational",
    "freeLimit": "Workers Paid or AI Gateway credits \u2014 not on Workers Free",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.4%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/zai-org/glm-5.2",
    "name": "GLM-5.2",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "card-required"
    ],
    "status": "operational",
    "freeLimit": "Workers Paid or AI Gateway credits \u2014 not on Workers Free",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "82.8%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/zai-org/glm-4.7-flash",
    "name": "GLM-4.7-Flash",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "59.2%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/openai/gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/nvidia/nemotron-3-120b-a12b",
    "name": "Nemotron 3 Super",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.5%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/meta/llama-4-scout-17b-16e-instruct",
    "name": "Llama 4 Scout",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "28.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/qwen/qwen3-30b-a3b-fp8",
    "name": "Qwen3 30B MoE",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "25.2%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/qwen/qwen2.5-coder-32b-instruct",
    "name": "Qwen2.5 Coder 32B",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "47.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/openai/gpt-oss-20b",
    "name": "GPT OSS 20B",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/qwen/qwq-32b",
    "name": "QwQ 32B",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
    "name": "DeepSeek R1 Distill Qwen 32B",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    "name": "Llama 3.3 70B",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "22.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/google/gemma-4-26b-a4b-it",
    "name": "Gemma 4 26B MoE",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "sweScore": "38.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/mistralai/mistral-small-3.1-24b-instruct",
    "name": "Mistral Small 3.1",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "30.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/ibm-granite/granite-4.0-h-micro",
    "name": "Granite 4.0 Micro",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "30.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/meta/llama-3.1-8b-instruct-fast",
    "name": "Llama 3.1 8B Instruct (Fast)",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "sweScore": "18.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/google/gemma-3-12b-it",
    "name": "Gemma 3 12B IT",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "@cf/moonshotai/kimi-k2.5",
    "name": "Kimi K2.5",
    "provider": "Cloudflare AI",
    "providerSlug": "cloudflare",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 10k neurons/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-ultra-550b-a55b:free",
    "name": "Nemotron 3 Ultra",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "71.9%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "poolside/laguna-xs-2.1:free",
    "name": "Poolside Laguna XS 2.1",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.9%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "cohere/north-mini-code:free",
    "name": "North Mini Code",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "poolside/laguna-s-2.1:free",
    "name": "Poolside Laguna S 2.1",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-super-120b-a12b:free",
    "name": "Nemotron 3 Super",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.5%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "name": "Nemotron 3 Omni",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "liquid/lfm-2.5-2.6b:free",
    "name": "LiquidAI LFM2.5-2.6B",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3.5-lightning:free",
    "name": "NVIDIA Nemotron 3.5 Lightning",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-nano-30b-a3b:free",
    "name": "Nemotron Nano 30B",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "sweScore": "38.8%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-nano-12b-v2-vl:free",
    "name": "Nemotron Nano 12B VL",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "20.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "google/gemma-4-31b-it:free",
    "name": "Gemma 4 31B",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "google/gemma-4-26b-a4b-it:free",
    "name": "Gemma 4 26B MoE",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "38.0%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-nano-9b-v2:free",
    "name": "Nemotron Nano 9B",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "18.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3.5-content-safety:free",
    "name": "Nemotron 3.5 Content Safety",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "50 free req/day \u00b7 1000 with $10 credit",
    "tags": [
      "tutorial"
    ],
    "url": "https://openrouter.ai/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "MiniMax-M2.7",
    "name": "MiniMax M2.7",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Small dev tier \u00b7 light use",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.0%",
    "context": "196k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "DeepSeek-V3.1",
    "name": "DeepSeek V3.1",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Small dev tier \u00b7 light use",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "66.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "DeepSeek-V3.2",
    "name": "DeepSeek V3.2",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Small dev tier \u00b7 light use",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.0%",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Small dev tier \u00b7 light use",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma-4-31B-it",
    "name": "Gemma 4 31B",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Small dev tier \u00b7 light use",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Meta-Llama-3.3-70B-Instruct",
    "name": "Llama 3.3 70B",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Small dev tier \u00b7 light use",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "22.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Qwen3.5-397B-A17B",
    "name": "Qwen3.5 397B MoE",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "76.2%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Qwen3.6-27B",
    "name": "Qwen3.6 27B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "77.2%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss-20b",
    "name": "GPT OSS 20B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Meta-Llama-3_3-70B-Instruct",
    "name": "Llama 3.3 70B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "22.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Qwen3.5-9B",
    "name": "Qwen3.5 9B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "30.0%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Qwen2.5-VL-72B-Instruct",
    "name": "Qwen2.5-VL 72B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Qwen3-Embedding-8B",
    "name": "Qwen3 Embedding 8B",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "bge-m3",
    "name": "BGE M3",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "-",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "bge-multilingual-gemma2",
    "name": "BGE Multilingual Gemma2",
    "provider": "OVHcloud AI",
    "providerSlug": "ovhcloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key",
    "tags": [
      "tutorial"
    ],
    "url": "https://endpoints.ai.cloud.ovh.net/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "-",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "codestral-2508",
    "name": "Codestral",
    "provider": "Codestral",
    "providerSlug": "codestral",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 30 req/min, 2000/day",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "40.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-5.2",
    "name": "GLM-5.2",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-4.7-flash",
    "name": "GLM-4.7-Flash",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "59.2%",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-4.5-flash",
    "name": "GLM-4.5-Flash",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "59.2%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-5-turbo",
    "name": "GLM-5-Turbo",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-4.7",
    "name": "GLM-4.7",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-4.6",
    "name": "GLM-4.6",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "zai/glm-4.6v-flash",
    "name": "GLM-4.6V-Flash",
    "provider": "ZAI",
    "providerSlug": "zai",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Flash models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "devstral-2-123b-instruct-2512",
    "name": "Devstral 2 123B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "72.2%",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-235b-a22b-instruct-2507",
    "name": "Qwen3 235B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "45.2%",
    "context": "250k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "glm-5.2",
    "name": "GLM 5.2",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "82.8%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-v4-flash-0731",
    "name": "DeepSeek V4 Flash",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-397b-a17b",
    "name": "Qwen3.5 400B VLM",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "76.2%",
    "context": "250k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-medium-3.5-128b",
    "name": "Mistral Medium 3.5 128B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "77.6%",
    "context": "180k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-coder-30b-a3b-instruct",
    "name": "Qwen3 Coder 30B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "51.6%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.6-35b-a3b",
    "name": "Qwen3.6 35B MoE",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "73.4%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "holo2-30b-a3b",
    "name": "Holo2 30B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "22k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma-4-26b-a4b-it",
    "name": "Gemma 4 26B MoE",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "llama-3.3-70b-instruct",
    "name": "Llama 3.3 70B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "22.0%",
    "context": "100k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-small-3.2-24b-instruct-2506",
    "name": "Mistral Small 3.2",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "20.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "pixtral-12b-2409",
    "name": "Pixtral 12B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma-3-27b-it",
    "name": "Gemma 3 27B",
    "provider": "Scaleway",
    "providerSlug": "scaleway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M free tokens",
    "tags": [
      "tutorial"
    ],
    "url": "https://console.scaleway.com/iam/api-keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "22.0%",
    "context": "40k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.7-max",
    "name": "Qwen3.7 Max",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.4%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-max",
    "name": "Qwen3 Max",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.8%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.6-plus",
    "name": "Qwen3.6 Plus",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.8%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-235b-a22b",
    "name": "Qwen3 235B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.7-plus",
    "name": "Qwen3.7 Plus",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.6-max-preview",
    "name": "Qwen3.6 Max Preview",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.9%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-plus",
    "name": "Qwen3.5 Plus",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-coder-plus",
    "name": "Qwen3 Coder Plus",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "69.6%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-coder-next",
    "name": "Qwen3 Coder Next",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.6%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-coder-480b-a35b-instruct",
    "name": "Qwen3 Coder 480B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "69.6%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.7-flash",
    "name": "Qwen3.7 Flash",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.6-flash",
    "name": "Qwen3.6 Flash",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "60.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-flash",
    "name": "Qwen3.5 Flash",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "64.4%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-coder-flash",
    "name": "Qwen3 Coder Flash",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "55.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-vl-flash",
    "name": "Qwen3 VL Flash",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-32b",
    "name": "Qwen3 32B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "30.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-397b-a17b",
    "name": "Qwen3.5 397B A17B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "76.2%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-122b-a10b",
    "name": "Qwen3.5 122B A10B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "72.0%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-35b-a3b",
    "name": "Qwen3.5 35B A3B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "69.2%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-next-80b-a3b-thinking",
    "name": "Qwen3 Next 80B Thinking",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.6%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-next-80b-a3b-instruct",
    "name": "Qwen3 Next 80B Instruct",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.6%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5-27b",
    "name": "Qwen3.5 27B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "72.4%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3-30b-a3b",
    "name": "Qwen3 30B A3B",
    "provider": "Alibaba DashScope",
    "providerSlug": "qwen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1M tokens/model \u00b7 90 days (Singapore)",
    "tags": [
      "tutorial"
    ],
    "url": "https://modelstudio.console.alibabacloud.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "25.2%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "big-pickle",
    "name": "Big Pickle",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Zen key required",
    "tags": [
      "tutorial"
    ],
    "url": "https://opencode.ai/docs/zen/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "72.0%",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mimo-v2.5-free",
    "name": "MiMo-V2.5 Free",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Zen key required",
    "tags": [
      "tutorial"
    ],
    "url": "https://opencode.ai/docs/zen/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3-ultra-free",
    "name": "Nemotron 3 Ultra Free",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Zen key required",
    "tags": [
      "tutorial"
    ],
    "url": "https://opencode.ai/docs/zen/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "71.9%",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "hy3-free",
    "name": "Tencent Hy3 Free",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Zen key required",
    "tags": [
      "tutorial"
    ],
    "url": "https://opencode.ai/docs/zen/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3.5-lightning-free",
    "name": "Nemotron 3.5 Lightning Free",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 Zen key required",
    "tags": [
      "tutorial"
    ],
    "url": "https://opencode.ai/docs/zen/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "kilo-auto/free",
    "name": "Kilo Auto Free",
    "provider": "Kilo",
    "providerSlug": "kilo",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://kilo.ai/docs/providers/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "kilo-auto/small",
    "name": "Kilo Auto Small",
    "provider": "Kilo",
    "providerSlug": "kilo",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://kilo.ai/docs/providers/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "minimax-m2.7",
    "name": "MiniMax M2.7",
    "provider": "LLM7",
    "providerSlug": "llm7",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://token.llm7.io/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.0%",
    "context": "180k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemini-3.1-flash-lite",
    "name": "Gemini 3.1 Flash Lite",
    "provider": "LLM7",
    "providerSlug": "llm7",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://token.llm7.io/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss:20b",
    "name": "GPT OSS 20B",
    "provider": "LLM7",
    "providerSlug": "llm7",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://token.llm7.io/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-Nemo-Instruct-2407",
    "name": "Mistral Nemo 12B Instruct",
    "provider": "LLM7",
    "providerSlug": "llm7",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://token.llm7.io/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "codestral-latest",
    "name": "Codestral Latest",
    "provider": "LLM7",
    "providerSlug": "llm7",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-tier",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 no key needed",
    "tags": [
      "tutorial"
    ],
    "url": "https://token.llm7.io/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "sweScore": "40.0%",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "laguna-xs.2:free",
    "name": "Poolside Laguna XS.2",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "68.2%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "step-3.7-flash:free",
    "name": "Step 3.7 Flash",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "74.4%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss-120b:free",
    "name": "GPT OSS 120B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma-4-31b-it:free",
    "name": "Gemma 4 31B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3-nano-30b-a3b:free",
    "name": "Nemotron Nano 30B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "sweScore": "38.8%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "llama-3.3-70b-instruct:free",
    "name": "Llama 3.3 70B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "22.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-nano-9b-v2:free",
    "name": "Nemotron Nano 9B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "18.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "llama-3.1-8b-instruct:free",
    "name": "Llama 3.1 8B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "sweScore": "18.0%",
    "context": "16k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "llama-3.2-3b-instruct:free",
    "name": "Llama 3.2 3B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "sweScore": "20.0%",
    "context": "16k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "llama-3.2-1b-instruct:free",
    "name": "Llama 3.2 1B",
    "provider": "Routeway",
    "providerSlug": "routeway",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free :free models only",
    "tags": [
      "tutorial"
    ],
    "url": "https://routeway.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "context": "16k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "laguna",
    "name": "Laguna XS.2",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.9%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "minimax-m2.7",
    "name": "MiniMax M2.7",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.0%",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen-coder",
    "name": "Qwen3 Coder",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "69.6%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek",
    "name": "DeepSeek V3",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "66.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "kimi-code",
    "name": "Kimi K2 Code",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.4%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "openai",
    "name": "OpenAI GPT",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "400k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma-4-31b",
    "name": "Gemma 4 31B",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss",
    "name": "GPT OSS 20B",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.7-flash",
    "name": "Qwen3.7 Flash",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3.5-lightning",
    "name": "Nemotron 3.5 Lightning",
    "provider": "Pollinations AI",
    "providerSlug": "pollinations",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai",
    "tags": [
      "tutorial"
    ],
    "url": "https://enter.pollinations.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "THUDM/GLM-Z1-9B-0414",
    "name": "GLM-Z1 9B",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 3 models @ $0 \u00b7 1000 RPM",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.siliconflow.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "Qwen/Qwen3-8B",
    "name": "Qwen3 8B",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 3 models @ $0 \u00b7 1000 RPM",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.siliconflow.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "sweScore": "30.0%",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "name": "DeepSeek R1 Distill Qwen 7B",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 3 models @ $0 \u00b7 1000 RPM",
    "tags": [
      "tutorial"
    ],
    "url": "https://cloud.siliconflow.com/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-ultra-550b-a55b",
    "name": "Nemotron 3 Ultra",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "71.9%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "poolside/laguna-xs.2",
    "name": "Laguna XS.2",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "70.9%",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-super-120b-a12b",
    "name": "Nemotron 3 Super",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.5%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "poolside/laguna-m.1",
    "name": "Laguna M.1",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "context": "32k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "google/gemma-4-31b-it",
    "name": "Gemma 4 31B",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    "name": "Nemotron 3 Omni",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3-nano-30b-a3b",
    "name": "Nemotron Nano 30B",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "sweScore": "38.8%",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3.5-lightning-30b-a3b",
    "name": "Nemotron 3.5 Lightning",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral/leanstral-1-5",
    "name": "Leanstral 1.5",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "novita/inclusionai/ling-3.0-tiny",
    "name": "Ling 3.0 Tiny",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "B",
    "context": "262k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/nemotron-3.5-content-safety",
    "name": "Nemotron Content Safety",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nvidia/muse-glimmer-30b",
    "name": "Muse Glimmer 30B",
    "provider": "Requesty",
    "providerSlug": "requesty",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 200 req/day \u00b7 no card",
    "tags": [
      "tutorial"
    ],
    "url": "https://app.requesty.ai/",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "C",
    "context": "131k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3-ultra",
    "name": "Nemotron 3 Ultra",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "71.9%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "glm-5.1",
    "name": "GLM 5.1",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "82.8%",
    "context": "198k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "glm-5.2",
    "name": "GLM 5.2",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "82.8%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "minimax-m2.7",
    "name": "MiniMax M2.7",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.0%",
    "context": "200k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "minimax-m3",
    "name": "MiniMax M3",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "78.4%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "kimi-k2.6",
    "name": "Kimi K2.6",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.2%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-v4-flash:0731",
    "name": "DeepSeek V4 Flash",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "79.0%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "deepseek-v4-pro:0813",
    "name": "DeepSeek V4 Pro",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "sweScore": "80.6%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "kimi-k2.7-code",
    "name": "Kimi K2.7 Code",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.4%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss:120b",
    "name": "GPT OSS 120B",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "62.4%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3-super",
    "name": "Nemotron 3 Super",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S",
    "sweScore": "60.5%",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "kimi-k3",
    "name": "Kimi K3",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "S+",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gemma4:31b",
    "name": "Gemma 4 31B",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "52.0%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "gpt-oss:20b",
    "name": "GPT OSS 20B",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "sweScore": "50.3%",
    "context": "128k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "mistral-large-3:675b",
    "name": "Mistral Large 3 675B Cloud",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "qwen3.5:397b",
    "name": "Qwen 3.5 Cloud",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A+",
    "context": "256k",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "nemotron-3-nano:30b",
    "name": "Nemotron 3 Nano 30B",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "code",
      "text"
    ],
    "access": [
      "free-forever"
    ],
    "status": "operational",
    "freeLimit": "Free plan \u00b7 session + weekly caps",
    "tags": [
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-06T00:00:00.000Z",
    "tier": "A-",
    "sweScore": "38.8%",
    "context": "1M",
    "sourceUrl": "https://freecodingmodels.vercel.app/models"
  },
  {
    "id": "ling-3.0-flash-fin:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-27T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen-3.8-flash-next:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-26T19:37:40.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-flash-search:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-26T13:59:01.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-flash-think-search:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-26T13:59:01.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-flash-thinking:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-26T13:59:01.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-flash:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-26T13:59:01.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-search:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-18T20:57:35.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-think-search:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-18T20:57:35.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3-thinking:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-18T20:57:35.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-5.3:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-18T20:57:35.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen3.8-27b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-14T15:55:10.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "dots-3-note-preview:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-12T00:00:00.000Z",
    "context": "500k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nemotron-3.5-lightning:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-11T12:52:31.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "lfm-2.5-2.6b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-11T00:00:00.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "sensenova-6.8-flash-lite:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-11T00:00:00.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "muse-glimmer-30b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-09T19:06:34.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nemotron-3.5-lightning-30b-a3b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-08-01T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "deepseek-v4-flash-0731:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-31T06:21:48.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-robotics-er-2-preview:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-30T00:00:00.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "laguna-s-2.1:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-21T16:51:23.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-3.6-flash:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-21T15:12:13.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-3.5-flash-lite:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-21T15:12:06.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "ising-calibration-1.5-31b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-13T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gpt-5.6-sol:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-09T00:00:00.000Z",
    "context": "1.1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "grok-chat-fast:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-08T00:00:00.000Z",
    "context": "488k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "laguna-xs-2.1:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-07-02T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "diffusiongemma-26b-a4b-it:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-06-10T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "north-mini-code:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-06-09T00:00:00.000Z",
    "context": "250k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nemotron-3-ultra-550b-a55b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-06-04T05:33:28.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "kinfra-text-embedding-0.6b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-06-01T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "kinfra-text-embedding-4b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-06-01T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-embedding-2:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-19T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-s2-preview-35b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-15T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-s2-preview-397b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-15T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-s2-preview:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-15T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v5-omni-nano:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-12T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v5-omni-small:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-12T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-3.1-flash-lite:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-05-07T15:47:08.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-28T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen3.6-27b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-27T01:57:44.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "deepseek-v4-flash:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-24T03:17:46.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gpt-image-2:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-21T00:00:00.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "riva-translate-4b-instruct-v2:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-15T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "swe-1-6-slow:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-07T00:00:00.000Z",
    "context": "6k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemma-4-26b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-04-03T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "minimax-m2.7:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-18T12:24:57.000Z",
    "context": "200k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nemotron-3-super-120b-a12b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-11T16:07:19.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "mercury-2:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-04T14:57:55.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "sarvam-30b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-01T00:00:00.000Z",
    "context": "64k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "sea-lion-e5-embedding-600m:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-01T00:00:00.000Z",
    "context": "1k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "sea-lion-modernbert-embedding-300m:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-01T00:00:00.000Z",
    "context": "1k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "sea-lion-modernbert-embedding-600m:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-03-01T00:00:00.000Z",
    "context": "1k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen3.5-4b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-02-23T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v5-text-nano:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-02-18T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v5-text-small:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-02-18T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "claude-opus-4.6:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-02-04T15:30:50.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-s1-pro:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-02-04T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen-sea-lion-v4.5-27b-it:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-02-01T00:00:00.000Z",
    "context": "256k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "typhoon-v2.5-30b-a3b-instruct:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-01-15T00:00:00.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-image-1:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2026-01-13T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "bielik-11b-v3.0-instruct:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-12-30T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-3-flash:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-12-17T15:57:58.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "mistral-large-3-675b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-12-02T00:00:00.000Z",
    "context": "250k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "glm-4.7-flash:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-12-01T00:00:00.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "villanova-2b-2512-preview-apnea-ft:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-12-01T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "manta-mini-1.0:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-10-30T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gpt-oss-safeguard-20b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-10-29T15:47:16.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nemotron-nano-12b-v2-vl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-10-28T00:00:00.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "kat-coder-air-v1:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-10-23T00:00:00.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen-sea-lion-v4-32b-it:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-10-16T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-flash-lite-latest:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-25T00:00:00.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-flash-lite:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-25T00:00:00.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "qwen3-next-80b-a3b-instruct:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-11T17:36:53.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "compound-mini:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-04T00:00:00.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "compound:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-04T00:00:00.000Z",
    "context": "128k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "embeddinggemma-300m:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-04T00:00:00.000Z",
    "context": "2k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-code-embeddings-0.5b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-04T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-code-embeddings-1.5b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-04T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-s1-mini:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-09-02T00:00:00.000Z",
    "context": "64k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "internvl-latest:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-08-25T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "internvl3.5-241b-a28b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-08-25T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "internvl3.5-latest:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-08-25T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "seed-oss-36b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-08-20T00:00:00.000Z",
    "context": "512k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gpt-oss-20b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-08-05T17:17:09.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "codestral-latest:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-08-01T20:20:30.000Z",
    "context": "250k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-latest:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-07-24T00:00:00.000Z",
    "context": "64k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "intern-s1:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-07-24T00:00:00.000Z",
    "context": "64k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-2.5-flash-lite:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-07-22T16:04:36.000Z",
    "context": "1M",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v4:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-06-25T00:00:00.000Z",
    "context": "32k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "mistral-nemotron:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-06-11T00:00:00.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "gemini-embedding-001:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-05-20T00:00:00.000Z",
    "context": "2k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "wai-nsfw-illustrious-sdxl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-05-08T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "plamo-embedding-1b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-04-11T00:00:00.000Z",
    "context": "4k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "llama-4-maverick-17b-128e-instruct:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-04-05T19:37:02.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "cogview-4-250304:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-03-04T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "cyberrealistic-pony:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2025-03-01T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "ntr-mix-il-noob-xl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-11-07T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nova-furry-pony:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-10-01T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "whisper-large-v3-turbo:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-10-01T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "llama-3.2-11b-vision:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-09-25T00:00:00.000Z",
    "context": "125k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v3:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-09-18T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "allam-2-7b:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-09-11T00:00:00.000Z",
    "context": "4k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "nova-anime-xl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-09-01T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "juggernaut-xl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-08-29T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "bge-multilingual-gemma2:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-07-26T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "tunix-pony:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-07-05T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "l3-70b-euryale-v2.1:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-06-11T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "wai-cute-pony:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-05-12T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "prefect-pony:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-05-06T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "swamponyxl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-04-23T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "quiet-goodnight-xl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-03-05T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v2-base-es:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-02-14T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v2-base-code:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-02-05T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "amponyxl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-02-02T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v2-base-de:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-01-15T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v2-base-zh:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2024-01-09T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "fustercluck:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-12-12T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "whisper-large-v3:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-11-07T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "jina-embeddings-v2-base-en:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-10-28T00:00:00.000Z",
    "context": "8k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "bge-small-en-v1.5:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-09-12T00:00:00.000Z",
    "context": "1k",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "albedobase-xl-31:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-09-05T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "albedobase-xl-sdxl:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-09-05T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "absolutereality:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-05-31T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "rev-animated:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-04-16T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "flat-2d-animerge:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-04-10T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "icbinp-i-cant-believe-its-not-photography:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-04-02T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "anything-v5:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-02-16T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "dreamshaper:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2023-01-12T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "deliberate:free",
    "provider": "UnoRouter",
    "providerSlug": "unorouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free \u00b7 about 1 request/min per model",
    "tags": [
      "website"
    ],
    "url": "https://unorouter.com/en/token",
    "addedAt": "2022-11-21T00:00:00.000Z",
    "sourceUrl": "https://unorouter.com/en/models"
  },
  {
    "id": "Gemini 3.8 Flash",
    "provider": "Google Gemini",
    "providerSlug": "googleai",
    "type": [
      "image",
      "audio"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "15 RPM, 1,500 RPD",
    "tags": [
      "website"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Kimi K3",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-07-16T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "deepseek-ai/deepseek-v4-flash",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-07-31T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "inclusionai/ling-3.0-flash:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-08-04T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-08-13T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3.8-27B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-08-14T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "agnes-2.0-flash",
    "provider": "Agnes AI",
    "providerSlug": "agnes-ai",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "30 RPM",
    "tags": [
      "website"
    ],
    "url": "https://agnes.ai/",
    "addedAt": "2026-06-30T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "nvidia/nemotron-3-ultra-550b-a55b:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-06-04T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "stepfun/step-3.7-flash:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-05-29T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Pro",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-04-24T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "poolside/laguna-s-2.1:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-07-21T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "cohere/north-mini-code:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-06-09T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Flash",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-04-24T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "poolside/laguna-xs-2.1:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-07-02T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-04-28T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "nvidia/nemotron-3-super-120b-a12b:free",
    "provider": "Kilo Code",
    "providerSlug": "kilo",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~200 req/hr",
    "tags": [
      "website"
    ],
    "url": "https://kilo.code/",
    "addedAt": "2026-03-11T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "GLM-4.7-Flash",
    "provider": "Z AI (Zhipu AI)",
    "providerSlug": "zai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1 concurrent request",
    "tags": [
      "website"
    ],
    "url": "https://z.ai/",
    "addedAt": "2026-01-19T00:00:00.000Z",
    "context": "200K"
  },
  {
    "id": "01-ai/yi-large",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/llama3-chatqa-1.5-70b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "writer/palmyra-fin-70b-32k",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "writer/palmyra-med-70b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "writer/palmyra-med-70b-32k",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Muse Glimmer 30B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-08-10T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Ling 3.0 Flash Fin (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-08-28T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "inclusionAI: Ling 3.0 Flash Sante (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-09-05T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "MiniMax: MiniMax M2.7 (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-03-18T00:00:00.000Z",
    "context": "197K"
  },
  {
    "id": "DeepSeek-V3.2 (Preview)",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM, 20 RPD, 200K TPD",
    "tags": [
      "website"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "GLM-4.6V-Flash",
    "provider": "Z AI (Zhipu AI)",
    "providerSlug": "zai",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1 concurrent request",
    "tags": [
      "website"
    ],
    "url": "https://z.ai/",
    "addedAt": "2025-12-08T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Moonshot Kimi K2",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2025-09-05T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Moonshot Kimi K2 0905",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2025-09-05T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Thinking Machines: Inkling Small (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-08-22T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Thinking Machines: Inkling (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-08-22T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Dots Studio: Dots 3 Note Preview (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-08-14T00:00:00.000Z",
    "context": "512K"
  },
  {
    "id": "Z.ai: GLM 5.2 (free)",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-08-17T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "Aion 3.0",
    "provider": "Aion Labs",
    "providerSlug": "aion-labs",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "15 RPM, 20K TPD",
    "tags": [
      "website"
    ],
    "url": "https://aionlabs.ai/",
    "addedAt": "2026-07-07T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "nvidia/llama-3.1-nemotron-ultra-253b-v1",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2025-04-07T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Gemma 4 31B IT",
    "provider": "Google Gemini",
    "providerSlug": "googleai",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Varies by model and account",
    "tags": [
      "website"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2026-04-02T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "Qwen/Qwen3.5-397B-A17B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-02-16T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3.5-122B-A10B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-02-25T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Aion 3.0 Mini",
    "provider": "Aion Labs",
    "providerSlug": "aion-labs",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "15 RPM, 20K TPD",
    "tags": [
      "website"
    ],
    "url": "https://aionlabs.ai/",
    "addedAt": "2026-07-07T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "@cf/qwen/qwen3.8-27b",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-08-14T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "agnes-1.5-flash",
    "provider": "Agnes AI",
    "providerSlug": "agnes-ai",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "30 RPM",
    "tags": [
      "website"
    ],
    "url": "https://agnes.ai/",
    "addedAt": "2026-06-30T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "Ling 3.0 Flash Fin",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://opencode.ai/",
    "addedAt": "2026-08-27T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "bigcode/starcoder2-15b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "google/deplot",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "google/gemma-2b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "google/recurrentgemma-2b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "microsoft/kosmos-2",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "microsoft/phi-3-vision-128k-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "microsoft/phi-3.5-moe-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "mistralai/mixtral-8x22b-v0.1",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/llama-3.1-nemotron-51b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/nemotron-4-340b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/nemotron-4-340b-reward",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/nemotron-parse",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/neva-22b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/nvclip",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/riva-translate-4b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/vila",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "writer/palmyra-creative-122b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Gemma 4 26B A4B IT",
    "provider": "Google Gemini",
    "providerSlug": "googleai",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Varies by model and account",
    "tags": [
      "website"
    ],
    "url": "https://aistudio.google.com/",
    "addedAt": "2026-04-03T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "google/diffusiongemma-26b-a4b-it",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-10T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen3-Coder-30B-A3B-Instruct",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "2 RPM (anonymous)",
    "tags": [
      "website"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2025-07-31T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "stepfun-ai/Step-3.7-Flash",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-05-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Mistral Small 4",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-03-16T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "adept/fuyu-8b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "aisingapore/sea-lion-7b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "google/codegemma-1.1-7b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "google/codegemma-7b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "ibm/granite-3.0-8b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "ibm/granite-8b-code-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nv-mistralai/mistral-nemo-12b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/mistral-nemo-minitron-8b-8k-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "zyphra/zamba2-7b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Mistral Medium 3.5 (128B)",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "agnes-image-2.0-flash",
    "provider": "Agnes AI",
    "providerSlug": "agnes-ai",
    "type": [
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "30 RPM (1K)",
    "tags": [
      "website"
    ],
    "url": "https://agnes.ai/",
    "addedAt": "2026-06-30T00:00:00.000Z",
    "context": "4K"
  },
  {
    "id": "agnes-image-2.1-flash",
    "provider": "Agnes AI",
    "providerSlug": "agnes-ai",
    "type": [
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "30 RPM (1K)",
    "tags": [
      "website"
    ],
    "url": "https://agnes.ai/",
    "addedAt": "2026-06-30T00:00:00.000Z",
    "context": "4K"
  },
  {
    "id": "gemma-4-31B-it (Preview)",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM, 20 RPD, 200K TPD",
    "tags": [
      "website"
    ],
    "url": "https://cloud.sambanova.ai/",
    "addedAt": "2026-04-02T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "mistralai/mistral-large-3-675b-instruct-2512",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2024-02-26T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/cosmos-reason2-8b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image",
      "video"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2025-12-01T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Google: Lyria 3 Pro Preview",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "image",
      "audio"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-03-30T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Google: Lyria 3 Clip Preview",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "image",
      "audio"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-03-30T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "GLM-4.5-Flash",
    "provider": "Z AI (Zhipu AI)",
    "providerSlug": "zai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "1 concurrent request",
    "tags": [
      "website"
    ],
    "url": "https://z.ai/",
    "addedAt": "2025-07-28T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "nvidia/nemotron-3.5-content-safety",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-04T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Mistral-Small-3.2-24B-Instruct",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "2 RPM (anonymous)",
    "tags": [
      "website"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2025-06-20T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Mistral-Nemo-Instruct-2407",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "2 RPM (anonymous)",
    "tags": [
      "website"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2024-07-01T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Codestral",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "agnes-video-v2.0",
    "provider": "Agnes AI",
    "providerSlug": "agnes-ai",
    "type": [
      "video"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "2 RPM",
    "tags": [
      "website"
    ],
    "url": "https://agnes.ai/",
    "addedAt": "2026-06-30T00:00:00.000Z",
    "context": "4K"
  },
  {
    "id": "mistralai/mistral-7b-instruct-v0.3",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2025-04-01T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "stepfun-ai/Step-3.5-Flash",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-04-02T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/baai/bge-large-en-v1.5",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Ministral 8B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "Ministral 14B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "Command A+ (218B)",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "436K"
  },
  {
    "id": "Command A (111B)",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "288K"
  },
  {
    "id": "Command A Reasoning",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "288K"
  },
  {
    "id": "Tencent-Hunyuan/Hy3",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-04-23T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "GLM-4.7-FlashX",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-01-19T00:00:00.000Z",
    "context": "200K"
  },
  {
    "id": "DeepSeek V4 Flash 0731",
    "provider": "LLM7.io",
    "providerSlug": "llm7",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://llm7.io/",
    "addedAt": "2026-08-16T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Mistral-7B-Instruct-v0.3",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "2 RPM (anonymous)",
    "tags": [
      "website"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2025-04-01T00:00:00.000Z",
    "context": "32K"
  },
  {
    "id": "Mistral Large 3",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2025-12-02T00:00:00.000Z",
    "context": "256K"
  },
  {
    "id": "Mixtral 8x7B",
    "provider": "Glhf.chat",
    "providerSlug": "glhf-chat",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Unlimited for free models",
    "tags": [
      "website"
    ],
    "url": "https://glhf.chat/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "33K"
  },
  {
    "id": "Aion 2.0",
    "provider": "Aion Labs",
    "providerSlug": "aion-labs",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "15 RPM, 20K TPD",
    "tags": [
      "website"
    ],
    "url": "https://aionlabs.ai/",
    "addedAt": "2026-02-23T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Command R+",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Command R7B",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Command A Vision",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Command R7B Arabic",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "ibm/granite-3.0-3b-a800m-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Abbreviation",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://cloud.siliconflow.cn/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "DeepSeek V4 Flash",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://opencode.ai/",
    "addedAt": "2026-06-28T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "nvidia/nemotron-nano-3-30b-a3b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2025-12-15T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Aya Expanse 32B",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2024-10-24T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Aion 2.5",
    "provider": "Aion Labs",
    "providerSlug": "aion-labs",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "15 RPM, 20K TPD",
    "tags": [
      "website"
    ],
    "url": "https://aionlabs.ai/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "Qwen3-32B",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "2 RPM (anonymous)",
    "tags": [
      "website"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2025-04-28T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "GLM-5.1",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Mistral 7B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-27T00:00:00.000Z",
    "context": "33K"
  },
  {
    "id": "Qwen 1.5 7B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-27T00:00:00.000Z",
    "context": "33K"
  },
  {
    "id": "Free Models Router",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "200 req/day (free tier)",
    "tags": [
      "website"
    ],
    "url": "https://openrouter.ai/models",
    "addedAt": "2026-02-01T00:00:00.000Z",
    "context": "200K"
  },
  {
    "id": "DeepSeek-R1",
    "provider": "Chutes.ai",
    "providerSlug": "chutes-ai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Community-powered, no hard cap",
    "tags": [
      "website"
    ],
    "url": "https://chutes.ai/",
    "addedAt": "2025-05-28T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Command A Translate",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "9K"
  },
  {
    "id": "MiniMax-M3",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "512K"
  },
  {
    "id": "whisper-large-v3",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text",
      "audio"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM, 2,000 RPD",
    "tags": [
      "website"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "whisper-large-v3-turbo",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text",
      "audio"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM, 2,000 RPD",
    "tags": [
      "website"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2026-05-10T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "opencompass/CompassJudger-1-32B-Instruct",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "XGenerationLab/XiYanSQL-QwenCoder-32B-2412",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "XGenerationLab/XiYanSQL-QwenCoder-32B-2504",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3.8-Flash-Next",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-08-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "meta/llama-3.2-90b-vision-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/riva-translate-4b-instruct-v1.1",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/ising-calibration-1.5-31b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-07-25T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/riva-translate-4b-instruct-v2",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-07-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/nemotron-3.5-lightning-30b-a3b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-08-13T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/llama-3.1-nemotron-70b-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2024-10-15T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Aya Vision 32B",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "20 RPM",
    "tags": [
      "website"
    ],
    "url": "https://cohere.com/",
    "addedAt": "2025-03-04T00:00:00.000Z",
    "context": "16K"
  },
  {
    "id": "Mixtral 8x7B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2023-12-11T00:00:00.000Z",
    "context": "33K"
  },
  {
    "id": "Gemma 4 31B IT",
    "provider": "LLM7.io",
    "providerSlug": "llm7",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://llm7.io/",
    "addedAt": "2026-08-07T00:00:00.000Z",
    "context": "262K"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B-Instruct-2507",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-07-21T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3.5-35B-A3B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-02-24T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3.5-27B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-02-24T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Aion-RP 1.0 (8B)",
    "provider": "Aion Labs",
    "providerSlug": "aion-labs",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "15 RPM, 20K TPD",
    "tags": [
      "website"
    ],
    "url": "https://aionlabs.ai/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "32K"
  },
  {
    "id": "ai21labs/jamba-1.5-large-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2024-08-22T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "GLM-4.5-Air",
    "provider": "Z AI (Zhipu AI)",
    "providerSlug": "zai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://z.ai/",
    "addedAt": "2025-07-25T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Mistral 7B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2023-09-27T00:00:00.000Z",
    "context": "33K"
  },
  {
    "id": "nvidia/llama-nemotron-embed-vl-1b-v2",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image",
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-02-10T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Ministral 3B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "~1 RPS, 500K TPM",
    "tags": [
      "website"
    ],
    "url": "https://console.mistral.ai/",
    "addedAt": "2026-08-02T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "MedAIBase/AntAngelMed",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "MusePublic/Qwen-Image-Edit",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "OpenGVLab/InternVL3_5-241B-A28B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "PaddlePaddle/ERNIE-4.5-21B-A3B-PT",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "PaddlePaddle/ERNIE-4.5-300B-A47B-PT",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "PaddlePaddle/ERNIE-4.5-VL-28B-A3B-PT",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen-Image-Edit",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-4B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Shanghai_AI_Laboratory/Intern-S1",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Shanghai_AI_Laboratory/Intern-S2-Preview",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "early-access/EA-29B-A4B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-08-22T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Llama 3.1 70B",
    "provider": "Cerebras",
    "providerSlug": "cerebras",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://cloud.cerebras.ai/",
    "addedAt": "2024-07-23T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/embed-qa-4",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/llama-3.2-nemoretriever-1b-vlm-embed-v1",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/llama-3.2-nv-embedqa-1b-v1",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/nemotron-3-embed-1b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-07-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/nv-embedqa-mistral-7b-v2",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "snowflake/arctic-embed-l",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-17T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Qwen/Qwen3-Coder-30B-A3B-Instruct",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-07-31T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "databricks/dbrx-instruct",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2024-03-27T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "meta/llama2-70b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2023-07-18T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "meituan-longcat/LongCat-Flash-Lite",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-01-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/baai/bge-m3",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/google/gemma-2b-it-lora",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/baai/bge-small-en-v1.5",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/baai/bge-base-en-v1.5",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/aisingapore/gemma-sea-lion-v4-27b-it",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/moondream/moondream3.1-9B-A2B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-07-10T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Llama 3.1 70B",
    "provider": "Chutes.ai",
    "providerSlug": "chutes-ai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Community-powered, no hard cap",
    "tags": [
      "website"
    ],
    "url": "https://chutes.ai/",
    "addedAt": "2024-07-23T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Qwen2.5-7B-Instruct",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Credit-metered",
    "tags": [
      "website"
    ],
    "url": "https://huggingface.co/models",
    "addedAt": "2024-10-16T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Qwen/Qwen3-VL-235B-A22B-Instruct",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-09-23T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Grok-2 Mini",
    "provider": "Grok (xAI)",
    "providerSlug": "xai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "$25/month free credits, resets monthly",
    "tags": [
      "website"
    ],
    "url": "https://x.ai/",
    "addedAt": "2026-06-27T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Shanghai_AI_Laboratory/Intern-S1-mini",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-04-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Llama 3.1 70B",
    "provider": "Glhf.chat",
    "providerSlug": "glhf-chat",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Unlimited for free models",
    "tags": [
      "website"
    ],
    "url": "https://glhf.chat/",
    "addedAt": "2024-07-23T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "@cf/mistral/mistral-7b-instruct-v0.2-lora",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/meta-llama/llama-2-7b-chat-hf-lora",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/google/gemma-7b-it-lora",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-Next-80B-A3B-Instruct",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-09-11T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "meta/llama-guard-4-12b",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Up to 40 RPM",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2025-04-05T00:00:00.000Z",
    "context": "1.0M"
  },
  {
    "id": "Qwen/Qwen3-VL-8B-Thinking",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-10-14T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "allam-2-7b",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://console.groq.com/",
    "addedAt": "2025-01-23T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "MiniMax/MiniMax-M1-80k",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-06-17T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B-Thinking-2507",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-07-25T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-VL-8B-Instruct",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-10-14T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "deepseek-v4-flash",
    "provider": "Cline",
    "providerSlug": "cline",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://cline.bot/",
    "addedAt": "2026-08-15T00:00:00.000Z",
    "context": "0"
  },
  {
    "id": "glm-5.3-flash",
    "provider": "Cline",
    "providerSlug": "cline",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://cline.bot/",
    "addedAt": "2026-08-27T00:00:00.000Z",
    "context": "0"
  },
  {
    "id": "mistralai/Mistral-Large-Instruct-2407",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2024-11-19T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-30B-A3B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-04-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-Next-80B-A3B-Thinking",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-09-11T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "PaddlePaddle/ERNIE-4.5-0.3B-PT",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen2.5-Coder-7B-Instruct",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Credit-metered",
    "tags": [
      "website"
    ],
    "url": "https://huggingface.co/models",
    "addedAt": "2024-09-19T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Meta-Llama-3.1-8B-Instruct",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Credit-metered",
    "tags": [
      "website"
    ],
    "url": "https://huggingface.co/models",
    "addedAt": "2024-07-23T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "gemma-3-4b-it",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Credit-metered",
    "tags": [
      "website"
    ],
    "url": "https://huggingface.co/models",
    "addedAt": "2025-03-12T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "Llama 3.1 Nemotron Safety Guard 8B v3",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "128K"
  },
  {
    "id": "laguna-s-2.1:free",
    "provider": "Cline",
    "providerSlug": "cline",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://cline.bot/",
    "addedAt": "2026-08-15T00:00:00.000Z",
    "context": "0"
  },
  {
    "id": "LongCat-2.0",
    "provider": "Cline",
    "providerSlug": "cline",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "See provider page",
    "tags": [
      "website"
    ],
    "url": "https://cline.bot/",
    "addedAt": "2026-08-29T00:00:00.000Z",
    "context": "0"
  },
  {
    "id": "Qwen/Qwen3-30B-A3B-Thinking-2507",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-08-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-14B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-04-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Grok-2",
    "provider": "Grok (xAI)",
    "providerSlug": "xai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "$25/month free credits, resets monthly",
    "tags": [
      "website"
    ],
    "url": "https://x.ai/",
    "addedAt": "2024-12-12T00:00:00.000Z",
    "context": "131K"
  },
  {
    "id": "nvidia/llama-3.1-nemoguard-8b-content-safety",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "nvidia/llama-3.1-nemoguard-8b-topic-control",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://build.nvidia.com/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "Qwen/Qwen3-8B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://modelscope.cn/models",
    "addedAt": "2025-04-28T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/meta/llama-3.2-3b-instruct",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2024-09-25T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/meta/llama-3.1-8b-instruct-fp8",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2024-07-23T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/meta/llama-3.2-1b-instruct",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2024-09-25T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/meta/llama-guard-3-8b",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/qwen/qwen3-embedding-0.6b",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/pfnet/plamo-embedding-1b",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "@cf/google/embeddinggemma-300m",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free tier \u00b7 see provider limits",
    "tags": [
      "website"
    ],
    "url": "https://developers.cloudflare.com/workers-ai/models/",
    "addedAt": "2026-06-29T00:00:00.000Z",
    "context": "8K"
  },
  {
    "id": "qwen3.8-27b",
    "name": "Qwen3.8 27B",
    "provider": "Experiential Cloud",
    "providerSlug": "experiential-cloud",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Promotion \u00b7 $5 free/day",
    "tags": [
      "website"
    ],
    "url": "https://platform.experientiallabs.ai/models/qwen3.8-27b",
    "addedAt": "2026-08-01T00:00:00.000Z",
    "tier": "Free promotion",
    "context": "1M",
    "sourceUrl": "https://platform.experientiallabs.ai/models"
  },
  {
    "id": "deepseek-v4-flash",
    "name": "DeepSeek V4 Flash",
    "provider": "Experiential Cloud",
    "providerSlug": "experiential-cloud",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Promotion \u00b7 $25 free/day",
    "tags": [
      "website"
    ],
    "url": "https://platform.experientiallabs.ai/models/deepseek-v4-flash",
    "addedAt": "2026-04-01T00:00:00.000Z",
    "tier": "Free promotion",
    "context": "1.05M",
    "sourceUrl": "https://platform.experientiallabs.ai/models"
  },
  {
    "id": "gpt-5.6-luna",
    "name": "GPT-5.6 Luna",
    "provider": "Experiential Cloud",
    "providerSlug": "experiential-cloud",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Promotion \u00b7 $5 free/day",
    "tags": [
      "website"
    ],
    "url": "https://platform.experientiallabs.ai/models/gpt-5.6-luna",
    "addedAt": "2026-07-01T00:00:00.000Z",
    "tier": "Free promotion",
    "context": "1.05M",
    "sourceUrl": "https://platform.experientiallabs.ai/models"
  },
  {
    "id": "claude-fable-5.1",
    "name": "Claude Fable 5.1",
    "provider": "Experiential Cloud",
    "providerSlug": "experiential-cloud",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free promotional route \u00b7 limit not stated",
    "tags": [
      "website"
    ],
    "url": "https://platform.experientiallabs.ai/models/claude-fable-5.1",
    "addedAt": "2026-09-01T00:00:00.000Z",
    "tier": "Free promotion",
    "context": "1M",
    "sourceUrl": "https://platform.experientiallabs.ai/models"
  },
  {
    "id": "gpt-6-astra",
    "name": "GPT-6 Astra",
    "provider": "Experiential Cloud",
    "providerSlug": "experiential-cloud",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier"
    ],
    "status": "operational",
    "freeLimit": "Free promotional route \u00b7 limit not stated",
    "tags": [
      "website"
    ],
    "url": "https://platform.experientiallabs.ai/models/gpt-6-astra",
    "addedAt": "2026-09-01T00:00:00.000Z",
    "tier": "Free promotion",
    "context": "1.05M",
    "sourceUrl": "https://platform.experientiallabs.ai/models"
  },
  {
    "id": "jamba-large-1.6",
    "name": "Jamba Large 1.6",
    "provider": "AI21 Labs",
    "providerSlug": "ai21",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of credits for 3 months",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://studio.ai21.com/account/api-key",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/ai21/"
  },
  {
    "id": "jamba-mini-2",
    "name": "Jamba Mini 2",
    "provider": "AI21 Labs",
    "providerSlug": "ai21",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of credits for 3 months",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://studio.ai21.com/account/api-key",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/ai21/"
  },
  {
    "id": "qwen3.5-plus-2026",
    "name": "Qwen 3.5 Plus Long",
    "provider": "Alibaba Model Studio",
    "providerSlug": "qwen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "1M tokens per model for 90 days",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://bailian.console.alibabacloud.com/?apiKey=1",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/alibaba/"
  },
  {
    "id": "DeepSeek-V4-Flash-0731",
    "name": "DeepSeek V4 Flash",
    "provider": "AMD Radeon Cloud",
    "providerSlug": "amd-radeon",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of usage per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://developer.amd.com.cn/radeon/tokenfactory",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/amd-radeon/"
  },
  {
    "id": "DeepSeek-V4-Flash-Vision-Exp",
    "name": "DeepSeek V4 Flash Vision",
    "provider": "AMD Radeon Cloud",
    "providerSlug": "amd-radeon",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of usage per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://developer.amd.com.cn/radeon/tokenfactory",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/amd-radeon/"
  },
  {
    "id": "MiniCPM5-1B",
    "name": "MiniCPM 5 1B",
    "provider": "AMD Radeon Cloud",
    "providerSlug": "amd-radeon",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of usage per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://developer.amd.com.cn/radeon/tokenfactory",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/amd-radeon/"
  },
  {
    "id": "MiniCPM-V46",
    "name": "MiniCPM V 4.6",
    "provider": "AMD Radeon Cloud",
    "providerSlug": "amd-radeon",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of usage per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://developer.amd.com.cn/radeon/tokenfactory",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/amd-radeon/"
  },
  {
    "id": "Qwen3.8-Flash-Next",
    "name": "Qwen 3.8 Flash Next",
    "provider": "AMD Radeon Cloud",
    "providerSlug": "amd-radeon",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$10 of usage per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://developer.amd.com.cn/radeon/tokenfactory",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/amd-radeon/"
  },
  {
    "id": "@cf/facebook/bart-large-cnn",
    "name": "BART Large CNN",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/huggingface/distilbert-sst-2-int8",
    "name": "DistilBERT SST 2",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/black-forest-labs/flux-1-schnell",
    "name": "FLUX.1 Schnell",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/ibm/granite-4.0-h-micro",
    "name": "Granite 4.0 H Micro",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/meta/llama-3.1-8b-instruct",
    "name": "Llama 3.1 8B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/meta/llama-3.2-11b-vision-instruct",
    "name": "Llama 3.2 11B Vision",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/llava-hf/llava-1.5-7b-hf",
    "name": "LLaVA 1.5 7B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/myshell-ai/melotts",
    "name": "MeloTTS",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/mistralai/mistral-7b-instruct-v0.2",
    "name": "Mistral 7B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/deepgram/nova-3",
    "name": "Nova 3",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/microsoft/phi-2",
    "name": "Phi 2",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/microsoft/resnet-50",
    "name": "Resnet 50",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/defog/sqlcoder-7b-2",
    "name": "SQLCoder 7B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/stabilityai/stable-diffusion-xl-base-1.0",
    "name": "Stable Diffusion XL",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/openai/whisper",
    "name": "Whisper",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "@cf/openai/whisper-large-v3-turbo",
    "name": "Whisper Large V3 Turbo",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "10,000 neurons per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dash.cloudflare.com/profile/api-tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/cloudflare-workers-ai/"
  },
  {
    "id": "command-a-03-2025",
    "name": "Command A",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "command-a-reasoning-08-2025",
    "name": "Command A Reasoning",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "command-a-translate-08-2025",
    "name": "Command A Translate",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "command-a-plus-05-2026",
    "name": "Command A+",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "command-r-08-2024",
    "name": "Command R",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "command-r-plus-08-2024",
    "name": "Command R+",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "command-r7b-12-2024",
    "name": "Command R7B",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "embed-english-v3.0",
    "name": "Embed English V3",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "embed-multilingual-v3.0",
    "name": "Embed Multilingual V3",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "embed-v4.0",
    "name": "Embed V4",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "rerank-english-v3.0",
    "name": "Rerank English V3",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "rerank-v3.5",
    "name": "Rerank V3.5",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://dashboard.cohere.com/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/cohere/"
  },
  {
    "id": "deepseek-v4-flash",
    "name": "DeepSeek V4 Flash",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "type": [
      "text"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Credits on sign-up",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://platform.deepseek.com/api_keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/deepseek/"
  },
  {
    "id": "deepseek-v4-flash-vision-exp",
    "name": "DeepSeek V4 Flash Vision",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Credits on sign-up",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://platform.deepseek.com/api_keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/deepseek/"
  },
  {
    "id": "deepseek-v4-pro",
    "name": "DeepSeek V4 Pro",
    "provider": "DeepSeek",
    "providerSlug": "deepseek",
    "type": [
      "text"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Credits on sign-up",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://platform.deepseek.com/api_keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/deepseek/"
  },
  {
    "id": "gemini-2.0-flash",
    "name": "Gemini 2.0 Flash",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-2.0-flash-lite",
    "name": "Gemini 2.0 Flash Lite",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-2.5-flash-image",
    "name": "Gemini 2.5 Flash Image",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-2.5-flash-preview-tts",
    "name": "Gemini 2.5 Flash TTS",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-3.1-flash-image",
    "name": "Gemini 3.1 Flash Image",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-3.1-flash-tts-preview",
    "name": "Gemini 3.1 Flash TTS",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-embedding-001",
    "name": "Gemini Embedding 001",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "gemini-embedding-2",
    "name": "Gemini Embedding 2",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "imagen-4.0-fast-generate-001",
    "name": "Imagen 4 Fast",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,500 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://aistudio.google.com/app/apikey",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/google-ai-studio/"
  },
  {
    "id": "openai/gpt-oss-safeguard-20b",
    "name": "GPT-OSS Safeguard 20B",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/groq/"
  },
  {
    "id": "qwen/qwen3.8-27b",
    "name": "Qwen 3.8 27B",
    "provider": "Groq",
    "providerSlug": "groq",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "1,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.groq.com/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/groq/"
  },
  {
    "id": "swiss-ai/Apertus-70B-Instruct-2509",
    "name": "Apertus 70B 2509",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "swiss-ai/Apertus-8B-Instruct-2509",
    "name": "Apertus 8B 2509",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "swiss-ai/Apertus-v1.5-70B",
    "name": "Apertus V1.5 70B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "swiss-ai/Apertus-v1.5-8B",
    "name": "Apertus V1.5 8B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/AutoGLM-Phone-9B-Multilingual",
    "name": "AutoGLM Phone 9B Multilingual",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/aya-expanse-32b",
    "name": "Aya Expanse 32B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/aya-vision-32b",
    "name": "Aya Vision 32B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "speakleash/Bielik-11B-v3.0-Instruct",
    "name": "Bielik 11B V3.0",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/c4ai-command-a-03-2025",
    "name": "C4ai Command A 03 2025",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/c4ai-command-r-08-2024",
    "name": "C4ai Command R 08 2024",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/c4ai-command-r7b-12-2024",
    "name": "C4ai Command R7B 12 2024",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/c4ai-command-r7b-arabic-02-2025",
    "name": "C4ai Command R7B Arabic 02 2025",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/command-a-reasoning-08-2025",
    "name": "Command A Reasoning 08 2025",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/command-a-translate-08-2025",
    "name": "Command A Translate 08 2025",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1",
    "name": "DeepSeek R1",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-0528",
    "name": "DeepSeek R1 0528",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
    "name": "DeepSeek R1 Distill Llama 70B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
    "name": "DeepSeek R1 Distill Llama 8B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
    "name": "DeepSeek R1 Distill Qwen 14B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "name": "DeepSeek R1 Distill Qwen 7B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3",
    "name": "DeepSeek V3",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3-0324",
    "name": "DeepSeek V3 0324",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3.1",
    "name": "DeepSeek V3.1",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3.1-Terminus",
    "name": "DeepSeek V3.1 Terminus",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3.2",
    "name": "DeepSeek V3.2",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3.2-Exp",
    "name": "DeepSeek V3.2 Exp",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Flash",
    "name": "DeepSeek V4 Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
    "name": "DeepSeek V4 Flash 0731",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Pro",
    "name": "DeepSeek V4 Pro",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
    "name": "DeepSeek V4 Pro 0813",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "baidu/ERNIE-4.5-VL-424B-A47B-Base-PT",
    "name": "ERNIE 4.5 VL 424B A47B Base PT",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "google/gemma-3-12b-it",
    "name": "Gemma 3 12B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "google/gemma-3-27b-it",
    "name": "Gemma 3 27B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "google/gemma-3-4b-it",
    "name": "Gemma 3 4B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "google/gemma-4-26B-A4B-it",
    "name": "Gemma 4 26B A4B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "google/gemma-4-31B-it",
    "name": "Gemma 4 31B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "aisingapore/Gemma-SEA-LION-v4-27B-IT",
    "name": "Gemma SEA LION V4 27B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4-32B-0414",
    "name": "GLM 4 32B 0414",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.5",
    "name": "GLM 4.5",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.5-Air",
    "name": "GLM 4.5 Air",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.5V",
    "name": "GLM 4.5V",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.5V-FP8",
    "name": "GLM 4.5V FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.6",
    "name": "GLM 4.6",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.6-FP8",
    "name": "GLM 4.6 FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.6V",
    "name": "GLM 4.6V",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.6V-Flash",
    "name": "GLM 4.6V Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.6V-FP8",
    "name": "GLM 4.6V FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.7",
    "name": "GLM 4.7",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.7-Flash",
    "name": "GLM 4.7 Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-4.7-FP8",
    "name": "GLM 4.7 FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5",
    "name": "GLM 5",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.1",
    "name": "GLM 5.1",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.1-FP8",
    "name": "GLM 5.1 FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.2",
    "name": "GLM 5.2",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.2-FP8",
    "name": "GLM 5.2 FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.3",
    "name": "GLM 5.3",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.3-BF16",
    "name": "GLM 5.3 BF16",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.3-Flash",
    "name": "GLM 5.3 Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "zai-org/GLM-5.3-Flash-BF16",
    "name": "GLM 5.3 Flash BF16",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "openai/gpt-oss-120b",
    "name": "GPT-OSS 120B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "openai/gpt-oss-20b",
    "name": "GPT-OSS 20B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "openai/gpt-oss-safeguard-20b",
    "name": "GPT-OSS Safeguard 20B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "ibm-granite/granite-4.2-30b",
    "name": "Granite 4.2 30B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "ibm-granite/granite-4.2-3b",
    "name": "Granite 4.2 3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "ibm-granite/granite-4.2-8b",
    "name": "Granite 4.2 8B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "NousResearch/Hermes-3-Llama-3.1-70B",
    "name": "Hermes 3 Llama 3.1 70B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "tencent/Hy3",
    "name": "Hy3",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "thinkingmachines/Inkling",
    "name": "Inkling",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "thinkingmachines/Inkling-Small",
    "name": "Inkling Small",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "moonshotai/Kimi-K2-Instruct",
    "name": "Kimi K2",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "moonshotai/Kimi-K2-Instruct-0905",
    "name": "Kimi K2 0905",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "moonshotai/Kimi-K2.5",
    "name": "Kimi K2.5",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "moonshotai/Kimi-K2.6",
    "name": "Kimi K2.6",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "moonshotai/Kimi-K2.7-Code",
    "name": "Kimi K2.7 Code",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "moonshotai/Kimi-K3",
    "name": "Kimi K3",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Sao10K/L3-8B-Lunaris-v1",
    "name": "L3 8B Lunaris V1",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Sao10K/L3-8B-Stheno-v3.2",
    "name": "L3 8B Stheno V3.2",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "inclusionAI/Ling-3.0-flash",
    "name": "Ling 3.0 Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "meta-llama/Llama-3.1-8B-Instruct",
    "name": "Llama 3.1 8B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "meta-llama/Llama-3.3-70B-Instruct",
    "name": "Llama 3.3 70B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
    "name": "Llama 4 Maverick 17B 128E FP8",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "meta-llama/Llama-4-Scout-17B-16E-Instruct",
    "name": "Llama 4 Scout 17B 16E",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "meta-llama/Llama-Guard-4-12B",
    "name": "Llama Guard 4 12B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "XiaomiMiMo/MiMo-V2.5",
    "name": "MiMo V2.5",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "XiaomiMiMo/MiMo-V2.5-Pro",
    "name": "MiMo V2.5 Pro",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "MiniMaxAI/MiniMax-M1-80k",
    "name": "MiniMax M1 80k",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "MiniMaxAI/MiniMax-M2",
    "name": "MiniMax M2",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "MiniMaxAI/MiniMax-M2.1",
    "name": "MiniMax M2.1",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "MiniMaxAI/MiniMax-M2.5",
    "name": "MiniMax M2.5",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "MiniMaxAI/MiniMax-M2.7",
    "name": "MiniMax M2.7",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "MiniMaxAI/MiniMax-M3",
    "name": "MiniMax M3",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "meta-models/Muse-Glimmer-30B",
    "name": "Muse Glimmer 30B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4",
    "name": "NVIDIA Nemotron 3 Ultra 550B A55B NVFP4",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
    "name": "NVIDIA Nemotron 3.5 Lightning 30B A3B BF16",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "microsoft/phi-4",
    "name": "Phi 4",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen2.5-72B-Instruct",
    "name": "Qwen 2.5 72B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen2.5-Coder-32B-Instruct",
    "name": "Qwen 2.5 Coder 32B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen2.5-Coder-3B-Instruct",
    "name": "Qwen 2.5 Coder 3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen2.5-Coder-7B-Instruct",
    "name": "Qwen 2.5 Coder 7B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen2.5-VL-72B-Instruct",
    "name": "Qwen 2.5 VL 72B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-14B",
    "name": "Qwen 3 14B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B",
    "name": "Qwen 3 235B A22B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B-Instruct-2507",
    "name": "Qwen 3 235B A22B 2507",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B-Thinking-2507",
    "name": "Qwen 3 235B A22B Thinking 2507",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-30B-A3B",
    "name": "Qwen 3 30B A3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-32B",
    "name": "Qwen 3 32B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-4B-Instruct-2507",
    "name": "Qwen 3 4B 2507",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-4B-Thinking-2507",
    "name": "Qwen 3 4B Thinking 2507",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-8B",
    "name": "Qwen 3 8B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-Coder-30B-A3B-Instruct",
    "name": "Qwen 3 Coder 30B A3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-Coder-480B-A35B-Instruct",
    "name": "Qwen 3 Coder 480B A35B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-Coder-Next",
    "name": "Qwen 3 Coder Next",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-Next-80B-A3B-Instruct",
    "name": "Qwen 3 Next 80B A3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-VL-235B-A22B-Instruct",
    "name": "Qwen 3 VL 235B A22B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-VL-235B-A22B-Thinking",
    "name": "Qwen 3 VL 235B A22B Thinking",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3-VL-30B-A3B-Instruct",
    "name": "Qwen 3 VL 30B A3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.5-122B-A10B",
    "name": "Qwen 3.5 122B A10B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.5-27B",
    "name": "Qwen 3.5 27B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.5-35B-A3B",
    "name": "Qwen 3.5 35B A3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.5-397B-A17B",
    "name": "Qwen 3.5 397B A17B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.5-9B",
    "name": "Qwen 3.5 9B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.6-27B",
    "name": "Qwen 3.6 27B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.6-35B-A3B",
    "name": "Qwen 3.6 35B A3B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.8-2.4T-A95B",
    "name": "Qwen 3.8 2.4T A95B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "Qwen/Qwen3.8-27B",
    "name": "Qwen 3.8 27B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "aisingapore/Qwen-SEA-LION-v4-32B-IT",
    "name": "Qwen SEA LION V4 32B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "stepfun-ai/Step-3.5-Flash",
    "name": "Step 3.5 Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "stepfun-ai/Step-3.7-Flash",
    "name": "Step 3.7 Flash",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "prism-ml/Ternary-Bonsai-27B-AWQ-4bit",
    "name": "Ternary Bonsai 27B AWQ 4bit",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "prism-ml/Ternary-Bonsai-27B-gguf",
    "name": "Ternary Bonsai 27B Gguf",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/tiny-aya-earth",
    "name": "Tiny Aya Earth",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/tiny-aya-fire",
    "name": "Tiny Aya Fire",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/tiny-aya-global",
    "name": "Tiny Aya Global",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "CohereLabs/tiny-aya-water",
    "name": "Tiny Aya Water",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "alpindale/WizardLM-2-8x22B",
    "name": "WizardLM 2 8x22B",
    "provider": "Hugging Face",
    "providerSlug": "huggingface",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$0.10 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://huggingface.co/settings/tokens",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/huggingface/"
  },
  {
    "id": "llama-3.3-70b",
    "name": "Llama 3.3 70B",
    "provider": "Jan",
    "providerSlug": "jan",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://jan.ai/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/jan/"
  },
  {
    "id": "qwen3",
    "name": "Qwen 3",
    "provider": "Jan",
    "providerSlug": "jan",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://jan.ai/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/jan/"
  },
  {
    "id": "llama-3.3-70b",
    "name": "Llama 3.3 70B",
    "provider": "llama.cpp",
    "providerSlug": "llama-cpp",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/ggml-org/llama.cpp/releases",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with -c at launch",
    "sourceUrl": "https://itsfree.ai/provider/llama-cpp/"
  },
  {
    "id": "qwen3",
    "name": "Qwen 3",
    "provider": "llama.cpp",
    "providerSlug": "llama-cpp",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/ggml-org/llama.cpp/releases",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with -c at launch",
    "sourceUrl": "https://itsfree.ai/provider/llama-cpp/"
  },
  {
    "id": "llama-3.3-70b",
    "name": "Llama 3.3 70B",
    "provider": "llamafile",
    "providerSlug": "llamafile",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/Mozilla-Ocho/llamafile/releases",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with -c at launch",
    "sourceUrl": "https://itsfree.ai/provider/llamafile/"
  },
  {
    "id": "open-mixtral-8x7b",
    "name": "Mixtral 8x7B",
    "provider": "llamafile",
    "providerSlug": "llamafile",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/Mozilla-Ocho/llamafile/releases",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with -c at launch",
    "sourceUrl": "https://itsfree.ai/provider/llamafile/"
  },
  {
    "id": "gemma4:31b",
    "name": "Gemma 4 31B",
    "provider": "LLM7.io",
    "providerSlug": "llm7",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "10 requests/minute (40 with a token)",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://token.llm7.io",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/llm7/"
  },
  {
    "id": "gpt-oss",
    "name": "GPT-OSS 120B",
    "provider": "LLM7.io",
    "providerSlug": "llm7",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "10 requests/minute (40 with a token)",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://token.llm7.io",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/llm7/"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT-OSS 120B",
    "provider": "LM Studio",
    "providerSlug": "lm-studio",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://lmstudio.ai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/lm-studio/"
  },
  {
    "id": "open-mixtral-8x7b",
    "name": "Mixtral 8x7B",
    "provider": "LM Studio",
    "providerSlug": "lm-studio",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://lmstudio.ai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/lm-studio/"
  },
  {
    "id": "qwen3",
    "name": "Qwen 3",
    "provider": "LM Studio",
    "providerSlug": "lm-studio",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://lmstudio.ai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/lm-studio/"
  },
  {
    "id": "codestral-latest",
    "name": "Codestral",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "devstral-small-latest",
    "name": "Devstral Small",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "labs-mistral-small",
    "name": "Labs Mistral Small",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "magistral-small-latest",
    "name": "Magistral Small",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "mistral-embed",
    "name": "Mistral Embed",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "mistral-moderation-latest",
    "name": "Mistral Moderation",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "open-mistral-nemo",
    "name": "Mistral Nemo",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "ocr-latest",
    "name": "Mistral OCR",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "mistral-small-latest",
    "name": "Mistral Small",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "mistral-small-2506",
    "name": "Mistral Small 2506",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "mistral-small-3.1-24b-instruct",
    "name": "Mistral Small 3.1",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "pixtral-12b-2409",
    "name": "Pixtral 12B",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Free mode and Labs",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.mistral.ai/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "256K",
    "sourceUrl": "https://itsfree.ai/provider/mistral/"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT-OSS 120B",
    "provider": "MLX",
    "providerSlug": "mlx",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/ml-explore/mlx-lm",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your unified memory allows",
    "sourceUrl": "https://itsfree.ai/provider/mlx/"
  },
  {
    "id": "qwen3",
    "name": "Qwen 3",
    "provider": "MLX",
    "providerSlug": "mlx",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/ml-explore/mlx-lm",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your unified memory allows",
    "sourceUrl": "https://itsfree.ai/provider/mlx/"
  },
  {
    "id": "Qwen2.5-Coder-7B",
    "name": "Qwen Coder",
    "provider": "MLX",
    "providerSlug": "mlx",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://github.com/ml-explore/mlx-lm",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your unified memory allows",
    "sourceUrl": "https://itsfree.ai/provider/mlx/"
  },
  {
    "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
    "name": "DeepSeek V4 Flash",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "ZhipuAI/GLM-4.7-Flash",
    "name": "GLM 4.7 Flash",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "ZhipuAI/GLM-5.2",
    "name": "GLM 5.2",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "MiniMax/MiniMax-M3",
    "name": "MiniMax M3",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "Qwen/Qwen3-Embedding-0.6B",
    "name": "Qwen 3 Embedding 0.6B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "Qwen/Qwen3-Embedding-4B",
    "name": "Qwen 3 Embedding 4B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "Qwen/Qwen3-Embedding-8B",
    "name": "Qwen 3 Embedding 8B",
    "provider": "ModelScope",
    "providerSlug": "modelscope",
    "type": [
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "2,000 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://modelscope.cn/my/myaccesstoken",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/cloud-modelscope/"
  },
  {
    "id": "meta-llama/Llama-3.3-70B-Instruct",
    "name": "Llama 3.3 70B",
    "provider": "Nebius AI Studio",
    "providerSlug": "nebius",
    "type": [
      "text"
    ],
    "access": [
      "signup-credits",
      "card-required"
    ],
    "status": "operational",
    "freeLimit": "$1 trial for 30 days",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://studio.nebius.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "128K",
    "sourceUrl": "https://itsfree.ai/provider/nebius/"
  },
  {
    "id": "meta-llama/Llama-3.3-70B-Instruct",
    "name": "Llama 3.3 70B",
    "provider": "Nscale",
    "providerSlug": "nscale",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 starter credit",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.nscale.com/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "128K",
    "sourceUrl": "https://itsfree.ai/provider/nscale/"
  },
  {
    "id": "meta-llama/Llama-4-Scout-17B-Instruct",
    "name": "Llama 4 Scout",
    "provider": "Nscale",
    "providerSlug": "nscale",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 starter credit",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://console.nscale.com/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "128K",
    "sourceUrl": "https://itsfree.ai/provider/nscale/"
  },
  {
    "id": "nvidia/ai-synthetic-video-detector",
    "name": "Ai Synthetic Video Detector",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "video"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "deepseek-ai/deepseek-v4-pro-0813",
    "name": "DeepSeek V4 Pro 0813",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "google/gemma-3-12b-it",
    "name": "Gemma 3 12B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "google/gemma-3-4b-it",
    "name": "Gemma 3 4B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "moonshotai/kimi-k3",
    "name": "Kimi K3",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
    "name": "Llama 3.1 Nemotron Safety Guard 8B V3",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "mistralai/mistral-large",
    "name": "Mistral Large",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "meta/muse-glimmer-30b",
    "name": "Muse Glimmer 30B",
    "provider": "NVIDIA NIM",
    "providerSlug": "nvidia",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "40 requests per minute",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://build.nvidia.com/settings/api-keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/nvidia-nim/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1",
    "name": "DeepSeek R1",
    "provider": "Ollama",
    "providerSlug": "ollama",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/ollama/"
  },
  {
    "id": "deepseek-v4-flash",
    "name": "DeepSeek V4",
    "provider": "Ollama",
    "providerSlug": "ollama",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/ollama/"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT-OSS 120B",
    "provider": "Ollama",
    "providerSlug": "ollama",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/ollama/"
  },
  {
    "id": "llama-3.3-70b",
    "name": "Llama 3.3 70B",
    "provider": "Ollama",
    "providerSlug": "ollama",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/ollama/"
  },
  {
    "id": "qwen3",
    "name": "Qwen 3",
    "provider": "Ollama",
    "providerSlug": "ollama",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/download",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Whatever your RAM allows",
    "sourceUrl": "https://itsfree.ai/provider/ollama/"
  },
  {
    "id": "glm-5.3",
    "name": "GLM 5.3",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Monthly starter credits",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/ollama-cloud/"
  },
  {
    "id": "glm-5.3-flash",
    "name": "GLM 5.3 Flash",
    "provider": "Ollama Cloud",
    "providerSlug": "ollama-cloud",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "Monthly starter credits",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://ollama.com/settings/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/ollama-cloud/"
  },
  {
    "id": "ling-flash-free",
    "name": "Ling Flash",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "6 free models",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://opencode.ai/auth",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/opencode-zen/"
  },
  {
    "id": "mimo-free",
    "name": "MiMo",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "6 free models",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://opencode.ai/auth",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/opencode-zen/"
  },
  {
    "id": "muse-spark-free",
    "name": "Muse Spark",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "6 free models",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://opencode.ai/auth",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/opencode-zen/"
  },
  {
    "id": "nemotron-3-lightning-free",
    "name": "Nemotron 3 Lightning",
    "provider": "OpenCode Zen",
    "providerSlug": "opencode-zen",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "6 free models",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://opencode.ai/auth",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/opencode-zen/"
  },
  {
    "id": "dots-studio/dots-3-note-preview:free",
    "name": "Dots 3 Note Preview",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "openrouter/free",
    "name": "Free Models Router",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "z-ai/glm-5.2:free",
    "name": "GLM 5.2",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "thinkingmachines/inkling:free",
    "name": "Inkling",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "thinkingmachines/inkling-small:free",
    "name": "Inkling Small",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "inclusionai/ling-3.0-flash-fin:free",
    "name": "Ling 3.0 Flash Fin",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "minimax/minimax-m2.7:free",
    "name": "MiniMax M2.7",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "minimax/minimax-m3:free",
    "name": "MiniMax M3",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "18 models at zero cost",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://openrouter.ai/workspaces/default/keys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/openrouter/"
  },
  {
    "id": "qwen-guard-gen-06b",
    "name": "Qwen 3Guard Gen 0.6B",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "qwen-guard-gen-8b",
    "name": "Qwen 3Guard Gen 8B",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "nvr-tts-en-us",
    "name": "Riva TTS English",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "audio"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "nvr-tts-de-de",
    "name": "Riva TTS German",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "audio"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "nvr-tts-it-it",
    "name": "Riva TTS Italian",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "audio"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "nvr-tts-es-es",
    "name": "Riva TTS Spanish",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "audio"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "stable-diffusion-xl",
    "name": "Stable Diffusion XL",
    "provider": "OVHcloud AI Endpoints",
    "providerSlug": "ovhcloud",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-forever",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "7 models at \u20ac0",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "262K",
    "sourceUrl": "https://itsfree.ai/provider/ovhcloud/"
  },
  {
    "id": "MiniMax-M3",
    "name": "MiniMax M3",
    "provider": "SambaNova",
    "providerSlug": "sambanova",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "20 requests per day",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://cloud.sambanova.ai/apis",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/sambanova/"
  },
  {
    "id": "THUDM/glm-4-9b-chat",
    "name": "GLM 4 9B",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "Per-model caps after KYC",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://cloud.siliconflow.cn/account/ak",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/siliconflow/"
  },
  {
    "id": "Qwen/Qwen2.5-7B-Instruct",
    "name": "Qwen 2.5 7B",
    "provider": "SiliconFlow",
    "providerSlug": "siliconflow",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "Per-model caps after KYC",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://cloud.siliconflow.cn/account/ak",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "131K",
    "sourceUrl": "https://itsfree.ai/provider/siliconflow/"
  },
  {
    "id": "deepseek/deepseek-v3.2-thinking",
    "name": "DeepSeek V3.2 Thinking",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "google/gemini-2.5-flash",
    "name": "Gemini 2.5 Flash",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "google/gemma-4-31b-it",
    "name": "Gemma 4 31B",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "zai/glm-5.3-flash",
    "name": "GLM 5.3 Flash",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "openai/gpt-5.4-mini",
    "name": "GPT 5.4 Mini",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "openai/gpt-oss-120b",
    "name": "GPT-OSS 120B",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "spacexai/grok-4.6",
    "name": "Grok 4.6",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "moonshotai/kimi-k2.7-code",
    "name": "Kimi K2.7 Code",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "meta/llama-4-maverick",
    "name": "Llama 4 Maverick",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "minimax/minimax-m3",
    "name": "MiniMax M3",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "nvidia/nemotron-3-super-120b-a12b",
    "name": "Nemotron 3 Super",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "alibaba/qwen3.8-flash-next",
    "name": "Qwen 3.8 Flash Next",
    "provider": "Vercel AI Gateway",
    "providerSlug": "vercel",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "status": "operational",
    "freeLimit": "$5 of credits per month",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://itsfree.ai/provider/vercel-ai-gateway/"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1",
    "name": "DeepSeek R1",
    "provider": "vLLM",
    "providerSlug": "vllm",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://docs.vllm.ai/en/latest/getting_started/installation.html",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with --max-model-len",
    "sourceUrl": "https://itsfree.ai/provider/vllm/"
  },
  {
    "id": "deepseek-v4-flash",
    "name": "DeepSeek V4",
    "provider": "vLLM",
    "providerSlug": "vllm",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://docs.vllm.ai/en/latest/getting_started/installation.html",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with --max-model-len",
    "sourceUrl": "https://itsfree.ai/provider/vllm/"
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT-OSS 120B",
    "provider": "vLLM",
    "providerSlug": "vllm",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://docs.vllm.ai/en/latest/getting_started/installation.html",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with --max-model-len",
    "sourceUrl": "https://itsfree.ai/provider/vllm/"
  },
  {
    "id": "llama-3.3-70b",
    "name": "Llama 3.3 70B",
    "provider": "vLLM",
    "providerSlug": "vllm",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://docs.vllm.ai/en/latest/getting_started/installation.html",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with --max-model-len",
    "sourceUrl": "https://itsfree.ai/provider/vllm/"
  },
  {
    "id": "qwen3",
    "name": "Qwen 3",
    "provider": "vLLM",
    "providerSlug": "vllm",
    "type": [
      "text"
    ],
    "access": [
      "free-forever",
      "open-source",
      "no-card",
      "no-signup"
    ],
    "status": "operational",
    "freeLimit": "Unlimited \u00b7 runs on your own hardware",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://docs.vllm.ai/en/latest/getting_started/installation.html",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Local runtime",
    "context": "Set with --max-model-len",
    "sourceUrl": "https://itsfree.ai/provider/vllm/"
  },
  {
    "id": "glm-4-flash",
    "name": "GLM 4 Flash",
    "provider": "Z.ai (Zhipu)",
    "providerSlug": "zai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "GLM Flash models for free",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://open.bigmodel.cn/usercenter/apikeys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "200K",
    "sourceUrl": "https://itsfree.ai/provider/zai/"
  },
  {
    "id": "glm-4.6-flash",
    "name": "GLM 4.6 Flash",
    "provider": "Z.ai (Zhipu)",
    "providerSlug": "zai",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "status": "operational",
    "freeLimit": "GLM Flash models for free",
    "tags": [
      "website",
      "tutorial"
    ],
    "url": "https://open.bigmodel.cn/usercenter/apikeys",
    "addedAt": "2026-09-02T00:00:00.000Z",
    "tier": "Free tier",
    "context": "200K",
    "sourceUrl": "https://itsfree.ai/provider/zai/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "inclusionai/ling-3.0-flash-sante:free",
    "name": "Ling 3.0 Flash Sante",
    "provider": "OpenRouter",
    "providerSlug": "openrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "Free route \u00b7 OpenRouter free-tier limits apply",
    "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-sante:free",
    "tier": "Free",
    "context": "262K",
    "sourceUrl": "https://openrouter.ai/api/v1/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "qwen-3.8-27b",
    "name": "Qwen 3.8 27B",
    "provider": "Cerebras",
    "providerSlug": "cerebras",
    "type": [
      "text",
      "code",
      "image"
    ],
    "access": [
      "signup-credits",
      "card-required"
    ],
    "freeLimit": "$5 trial credits after a verified payment method \u00b7 expire in 30 days",
    "url": "https://cloud.cerebras.ai/",
    "tier": "Free trial",
    "context": "64K",
    "sourceUrl": "https://inference-docs.cerebras.ai/support/rate-limits"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "gemini-3.8-flash",
    "name": "Gemini 3.8 Flash",
    "provider": "Google AI Studio",
    "providerSlug": "google",
    "type": [
      "text",
      "code",
      "image",
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "Free Flash/Lite quota \u00b7 daily limits vary",
    "url": "https://aistudio.google.com/apikey",
    "tier": "Free tier",
    "context": "1M",
    "sourceUrl": "https://aistudio.google.com/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "voxtral-mini-transcribe-2602",
    "name": "Voxtral Mini Transcribe 2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required",
      "data-training"
    ],
    "freeLimit": "Free Experiment / Free mode",
    "url": "https://console.mistral.ai/api-keys",
    "tier": "Free mode",
    "sourceUrl": "https://docs.mistral.ai/getting-started/models/models_overview"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "voxtral-mini-transcribe-realtime-2602",
    "name": "Voxtral Mini Transcribe Realtime",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required",
      "data-training"
    ],
    "freeLimit": "Free Experiment / Free mode",
    "url": "https://console.mistral.ai/api-keys",
    "tier": "Free mode",
    "sourceUrl": "https://docs.mistral.ai/getting-started/models/models_overview"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "mistral-moderation-2603",
    "name": "Mistral Moderation 2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required",
      "data-training"
    ],
    "freeLimit": "Free Experiment / Free mode",
    "url": "https://console.mistral.ai/api-keys",
    "tier": "Free mode",
    "context": "128K",
    "sourceUrl": "https://docs.mistral.ai/getting-started/models/models_overview"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "labs-leanstral-1.5",
    "name": "Leanstral 1.5",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required",
      "data-training"
    ],
    "freeLimit": "Free Experiment / Free mode",
    "url": "https://console.mistral.ai/api-keys",
    "tier": "Free mode",
    "sourceUrl": "https://docs.mistral.ai/getting-started/models/models_overview"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "zai-glm-5.2",
    "name": "Z.ai GLM 5.2",
    "provider": "Mistral AI",
    "providerSlug": "mistral",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "free-tier",
      "no-card",
      "phone-required",
      "data-training"
    ],
    "freeLimit": "Free Experiment / Free mode",
    "url": "https://console.mistral.ai/api-keys",
    "tier": "Free mode",
    "context": "1M",
    "sourceUrl": "https://docs.mistral.ai/getting-started/models/models_overview"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "command-a-vision-07-2025",
    "name": "Command A Vision",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "128K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "rerank-v4.0-pro",
    "name": "Rerank v4 Pro",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "32K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "rerank-v4.0-fast",
    "name": "Rerank v4 Fast",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "embedding"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "32K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "parse-v5.0",
    "name": "Parse v5",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "cohere-transcribe-03-2026",
    "name": "Cohere Transcribe",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tiny-aya-global",
    "name": "Tiny Aya Global",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "8K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tiny-aya-earth",
    "name": "Tiny Aya Earth",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "8K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tiny-aya-fire",
    "name": "Tiny Aya Fire",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "8K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tiny-aya-water",
    "name": "Tiny Aya Water",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "8K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "c4ai-aya-expanse-32b",
    "name": "Aya Expanse 32B",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "128K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "c4ai-aya-vision-32b",
    "name": "Aya Vision 32B",
    "provider": "Cohere",
    "providerSlug": "cohere",
    "type": [
      "text",
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "1,000 requests per month",
    "url": "https://dashboard.cohere.com/api-keys",
    "tier": "Free tier",
    "context": "16K",
    "sourceUrl": "https://docs.cohere.com/docs/models"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/deepgram/aura-1",
    "name": "Aura 1",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/aura-1/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/deepgram/aura-2-en",
    "name": "Aura 2 English",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/aura-2-en/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/deepgram/aura-2-es",
    "name": "Aura 2 Spanish",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/aura-2-es/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/deepgram/flux",
    "name": "Flux ASR",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "audio"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/flux/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/black-forest-labs/flux-2-dev",
    "name": "FLUX.2 Dev",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/flux-2-dev/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/black-forest-labs/flux-2-klein-4b",
    "name": "FLUX.2 Klein 4B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/flux-2-klein-4b/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "@cf/black-forest-labs/flux-2-klein-9b",
    "name": "FLUX.2 Klein 9B",
    "provider": "Cloudflare Workers AI",
    "providerSlug": "cloudflare",
    "type": [
      "image"
    ],
    "access": [
      "free-tier",
      "no-card"
    ],
    "freeLimit": "10,000 neurons/day \u00b7 Workers Free",
    "url": "https://dash.cloudflare.com/",
    "tier": "Free tier",
    "sourceUrl": "https://developers.cloudflare.com/workers-ai/models/flux-2-klein-9b/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "vyceai",
    "name": "Vyce AI",
    "provider": "Vyce AI",
    "providerSlug": "vyceai",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$50 signup credits + $10/day reward credits",
    "url": "https://vyceai.com/",
    "tier": "Signup credits",
    "sourceUrl": "https://vyceai.com/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "vyceai/gpt-5.6-new",
    "name": "GPT 5.6 Luna",
    "provider": "Vyce AI",
    "providerSlug": "vyceai",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$50 signup credits + $10/day reward credits",
    "url": "https://vyceai.com/signup",
    "tier": "Free tab",
    "sourceUrl": "https://vyceai.com/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "vyceai/claude-sonnet-4-6",
    "name": "Claude Sonnet 4.6",
    "provider": "Vyce AI",
    "providerSlug": "vyceai",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$50 signup credits + $10/day reward credits",
    "url": "https://vyceai.com/signup",
    "tier": "Free tab",
    "sourceUrl": "https://vyceai.com/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "vyceai/deepseek-v4-flash",
    "name": "DeepSeek V4 Flash",
    "provider": "Vyce AI",
    "providerSlug": "vyceai",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$50 signup credits + $10/day reward credits",
    "url": "https://vyceai.com/signup",
    "tier": "Free tab",
    "sourceUrl": "https://vyceai.com/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tabitoken",
    "name": "TaBiAI",
    "provider": "TaBiAI",
    "providerSlug": "tabitoken",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$125 GitHub signup credits + daily check-in",
    "url": "https://tabitoken.com/",
    "tier": "Signup credits",
    "sourceUrl": "https://tabitoken.com/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tabitoken/claude-opus-4-8",
    "name": "Claude Opus 4.8",
    "provider": "TaBiAI",
    "providerSlug": "tabitoken",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$125 credits \u00b7 billed per request",
    "url": "https://tabitoken.com/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://tabitoken.com/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tabitoken/claude-opus-4-8-thinking",
    "name": "Claude Opus 4.8 Thinking",
    "provider": "TaBiAI",
    "providerSlug": "tabitoken",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$125 credits \u00b7 billed per request",
    "url": "https://tabitoken.com/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://tabitoken.com/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tabitoken/claude-opus-5",
    "name": "Claude Opus 5",
    "provider": "TaBiAI",
    "providerSlug": "tabitoken",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$125 credits \u00b7 billed per request",
    "url": "https://tabitoken.com/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://tabitoken.com/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "tabitoken/claude-opus-5-thinking",
    "name": "Claude Opus 5 Thinking",
    "provider": "TaBiAI",
    "providerSlug": "tabitoken",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$125 credits \u00b7 billed per request",
    "url": "https://tabitoken.com/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://tabitoken.com/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "agentrouter",
    "name": "Agent Router",
    "provider": "Agent Router",
    "providerSlug": "agentrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$100 GitHub signup credits + $25 check-in",
    "url": "https://agentrouter.org/",
    "tier": "Signup credits",
    "sourceUrl": "https://agentrouter.org/"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "agentrouter/gpt-5.6-sol",
    "name": "GPT 5.6 Sol",
    "provider": "Agent Router",
    "providerSlug": "agentrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "Credits \u00b7 Claude/GPT daily batches",
    "url": "https://agentrouter.org/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://agentrouter.org/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "agentrouter/claude-opus-4-8",
    "name": "Claude Opus 4.8",
    "provider": "Agent Router",
    "providerSlug": "agentrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "Credits \u00b7 daily batch windows",
    "url": "https://agentrouter.org/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://agentrouter.org/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "agentrouter/claude-opus-5",
    "name": "Claude Opus 5",
    "provider": "Agent Router",
    "providerSlug": "agentrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "Credits \u00b7 daily batch windows",
    "url": "https://agentrouter.org/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://agentrouter.org/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "agentrouter/deepseek-v4-flash",
    "name": "DeepSeek V4 Flash",
    "provider": "Agent Router",
    "providerSlug": "agentrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$100 GitHub signup credits + $25 check-in",
    "url": "https://agentrouter.org/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://agentrouter.org/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "agentrouter/glm-5.3",
    "name": "GLM 5.3",
    "provider": "Agent Router",
    "providerSlug": "agentrouter",
    "type": [
      "text",
      "code"
    ],
    "access": [
      "signup-credits",
      "free-tier",
      "no-card"
    ],
    "freeLimit": "$100 GitHub signup credits + $25 check-in",
    "url": "https://agentrouter.org/pricing",
    "tier": "Signup credits",
    "sourceUrl": "https://agentrouter.org/pricing"
  },
  {
    "status": "operational",
    "tags": [
      "website"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "cometapi",
    "name": "CometAPI",
    "provider": "CometAPI",
    "providerSlug": "cometapi",
    "type": [
      "text",
      "code",
      "image",
      "video",
      "audio"
    ],
    "access": [
      "signup-credits",
      "no-card"
    ],
    "freeLimit": "Trial credits on signup \u00b7 no card",
    "url": "https://www.cometapi.com/",
    "tier": "Signup credits",
    "sourceUrl": "https://www.cometapi.com/"
  },
  {
    "status": "operational",
    "access": [
      "free-forever",
      "no-signup",
      "open-source"
    ],
    "tags": [
      "collection"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark",
    "id": "awesome-free-ai-apis",
    "name": "awesome-free-ai-apis",
    "provider": "GitHub",
    "providerSlug": "github",
    "type": [
      "text",
      "code",
      "image",
      "audio"
    ],
    "freeLimit": "450+ free LLM APIs from 31 providers \u00b7 updated daily",
    "url": "https://github.com/cheahjs/free-llm-api-resources",
    "sourceUrl": "https://github.com/cheahjs/free-llm-api-resources"
  },
  {
    "status": "operational",
    "access": [
      "free-forever",
      "no-signup",
      "open-source"
    ],
    "tags": [
      "collection"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark",
    "id": "awesome-free-llm-apis",
    "name": "awesome-free-llm-apis",
    "provider": "GitHub",
    "providerSlug": "github",
    "type": [
      "text",
      "code"
    ],
    "freeLimit": "Permanent free LLM APIs only \u00b7 OpenAI-compatible keys",
    "url": "https://github.com/mnfst/awesome-free-llm-apis"
  },
  {
    "status": "operational",
    "access": [
      "free-forever",
      "no-signup",
      "open-source"
    ],
    "tags": [
      "collection"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark",
    "id": "free-llm-api-hub",
    "name": "free-llm-api-hub",
    "provider": "GitHub",
    "providerSlug": "github",
    "type": [
      "text",
      "image",
      "audio",
      "embedding"
    ],
    "freeLimit": "Verified free-tier & trial-credit dataset \u00b7 sourced to provider docs",
    "url": "https://github.com/pacocartones/free-llm-api-hub"
  },
  {
    "status": "operational",
    "access": [
      "free-forever",
      "no-signup",
      "open-source"
    ],
    "tags": [
      "collection"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark",
    "id": "no-cost-ai",
    "name": "no-cost-ai",
    "provider": "GitHub",
    "providerSlug": "github",
    "type": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "freeLimit": "80+ free AI services for chat, image, video, voice & APIs",
    "url": "https://github.com/zebbern/no-cost-ai"
  },
  {
    "status": "operational",
    "access": [
      "free-forever",
      "no-signup",
      "open-source"
    ],
    "tags": [
      "collection"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "cardBg": "/cards/github.png",
    "cardTheme": "dark",
    "id": "free-ai-tools",
    "name": "free-ai-tools",
    "provider": "GitHub",
    "providerSlug": "github",
    "type": [
      "text",
      "code"
    ],
    "freeLimit": "Free and low-cost LLM APIs, IDEs, agents, and infra",
    "url": "https://github.com/ShaikhWarsi/free-ai-tools"
  },
  {
    "status": "operational",
    "access": [
      "free-forever",
      "no-signup"
    ],
    "tags": [
      "collection"
    ],
    "addedAt": "2026-09-08T00:00:00.000Z",
    "id": "itsfree-ai",
    "name": "itsfree.ai",
    "provider": "itsfree.ai",
    "providerSlug": "itsfree",
    "type": [
      "text",
      "code"
    ],
    "freeLimit": "25 providers with a real free tier \u00b7 compared side by side",
    "url": "https://itsfree.ai/"
  }
];
