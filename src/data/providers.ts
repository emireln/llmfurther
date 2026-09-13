import { ProviderItem } from '../types';

export const PROVIDERS_DATA: ProviderItem[] = [
  {
    "slug": "google",
    "name": "Google AI Studio",
    "models_count": 8,
    "types": [
      "text",
      "code",
      "image",
      "audio",
      "video"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "daily-quota"
    ],
    "free_limits": [
      "1,500 requests/day free tier",
      "15 RPM Gemini flash models"
    ],
    "urls": [
      "https://aistudio.google.com/"
    ],
    "sample_models": [
      "gemini-3.8-flash",
      "gemini-3.8-pro",
      "gemini-3.8-flash-lite",
      "gemini-2.5-flash"
    ]
  },
  {
    "slug": "openrouter",
    "name": "OpenRouter",
    "models_count": 35,
    "types": [
      "text",
      "code",
      "image"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "Free pool routers (:free suffix)",
      "Daily trial credits"
    ],
    "urls": [
      "https://openrouter.ai/models"
    ],
    "sample_models": [
      "claude-4-sonnet",
      "claude-4-haiku",
      "gpt-5-mini",
      "mistral-nemo-2-24b"
    ]
  },
  {
    "slug": "groq",
    "name": "Groq",
    "models_count": 12,
    "types": [
      "text",
      "code"
    ],
    "access_modes": [
      "free-forever",
      "no-card"
    ],
    "free_limits": [
      "30 RPM · 500k tokens/min LPU speed"
    ],
    "urls": [
      "https://console.groq.com/"
    ],
    "sample_models": [
      "deepseek-r2",
      "llama-4-scout",
      "llama-3.3-70b-versatile"
    ]
  },
  {
    "slug": "siliconflow",
    "name": "SiliconFlow",
    "models_count": 20,
    "types": [
      "text",
      "code"
    ],
    "access_modes": [
      "free-forever",
      "no-card"
    ],
    "free_limits": [
      "Free unlimited inference on standard speed tier"
    ],
    "urls": [
      "https://siliconflow.cn/"
    ],
    "sample_models": [
      "deepseek-v4",
      "qwen-3-72b-instruct"
    ]
  },
  {
    "slug": "together",
    "name": "Together AI",
    "models_count": 18,
    "types": [
      "text",
      "code"
    ],
    "access_modes": [
      "free-tier",
      "signup-credits"
    ],
    "free_limits": [
      "$5.00 trial credits upon registration"
    ],
    "urls": [
      "https://api.together.ai/"
    ],
    "sample_models": [
      "llama-4-70b",
      "meta-llama/Llama-3.3-70B-Instruct-Turbo"
    ]
  },
  {
    "slug": "cerebras",
    "name": "Cerebras",
    "models_count": 8,
    "types": [
      "text",
      "code"
    ],
    "access_modes": [
      "free-forever",
      "no-card"
    ],
    "free_limits": [
      "1M tokens/day · 30 RPM at 1800 tok/sec"
    ],
    "urls": [
      "https://cloud.cerebras.ai/"
    ],
    "sample_models": [
      "gemma-3-27b",
      "llama3.1-70b"
    ]
  },
  {
    "slug": "cohere",
    "name": "Cohere",
    "models_count": 6,
    "types": [
      "text",
      "code",
      "embedding"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "1,000 requests/month trial tier"
    ],
    "urls": [
      "https://dashboard.cohere.com/"
    ],
    "sample_models": [
      "command-r-plus-v2",
      "command-r"
    ]
  },
  {
    "slug": "agentrouter",
    "name": "Agent Router",
    "models_count": 6,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "$100 GitHub signup credits + $25 check-in",
      "Credits \u00b7 Claude/GPT daily batches",
      "Credits \u00b7 daily batch windows"
    ],
    "urls": [
      "https://agentrouter.org/",
      "https://agentrouter.org/pricing"
    ],
    "sample_models": [
      "agentrouter",
      "agentrouter/gpt-5.6-sol",
      "agentrouter/claude-opus-4-8",
      "agentrouter/claude-opus-5",
      "agentrouter/deepseek-v4-flash"
    ]
  },
  {
    "slug": "agnes-ai",
    "name": "Agnes AI",
    "models_count": 5,
    "types": [
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "2 RPM",
      "30 RPM",
      "30 RPM (1K)"
    ],
    "urls": [
      "https://agnes.ai/"
    ],
    "sample_models": [
      "agnes-2.0-flash",
      "agnes-1.5-flash",
      "agnes-image-2.0-flash",
      "agnes-image-2.1-flash",
      "agnes-video-v2.0"
    ]
  },
  {
    "slug": "ai21",
    "name": "AI21 Labs",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "$10 of credits for 3 months"
    ],
    "urls": [
      "https://studio.ai21.com/account/api-key"
    ],
    "sample_models": [
      "jamba-large-1.6",
      "jamba-mini-2"
    ]
  },
  {
    "slug": "aion-labs",
    "name": "Aion Labs",
    "models_count": 5,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "15 RPM, 20K TPD"
    ],
    "urls": [
      "https://aionlabs.ai/"
    ],
    "sample_models": [
      "Aion 3.0",
      "Aion 3.0 Mini",
      "Aion 2.0",
      "Aion 2.5",
      "Aion-RP 1.0 (8B)"
    ]
  },
  {
    "slug": "amd-radeon",
    "name": "AMD Radeon Cloud",
    "models_count": 5,
    "types": [
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "$10 of usage per day"
    ],
    "urls": [
      "https://developer.amd.com.cn/radeon/tokenfactory"
    ],
    "sample_models": [
      "DeepSeek-V4-Flash-0731",
      "DeepSeek-V4-Flash-Vision-Exp",
      "MiniCPM5-1B",
      "MiniCPM-V46",
      "Qwen3.8-Flash-Next"
    ]
  },
  {
    "slug": "api-airforce",
    "name": "Api.Airforce",
    "models_count": 1,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "most are paid, some are free"
    ],
    "urls": [
      "https://api.airforce/models/?sort=price"
    ],
    "sample_models": [
      "api-airforce"
    ]
  },
  {
    "slug": "cerebras",
    "name": "Cerebras",
    "models_count": 5,
    "types": [
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "card-required",
      "free-forever",
      "free-tier",
      "signup-credits"
    ],
    "free_limits": [
      "$5 trial credits after a verified payment method \u00b7 expire in 30 days",
      "1M tokens/day, 5 req/min (per model)",
      "Free \u00b7 generous dev tier",
      "Removed from public Cerebras endpoints \u00b7 3 Sep 2026",
      "See provider page"
    ],
    "urls": [
      "https://cloud.cerebras.ai/"
    ],
    "sample_models": [
      "cerebras",
      "gpt-oss-120b",
      "gemma-4-31b",
      "Llama 3.1 70B",
      "qwen-3.8-27b"
    ]
  },
  {
    "slug": "chutes-ai",
    "name": "Chutes.ai",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "Community-powered, no hard cap"
    ],
    "urls": [
      "https://chutes.ai/"
    ],
    "sample_models": [
      "DeepSeek-R1",
      "Llama 3.1 70B"
    ]
  },
  {
    "slug": "cline",
    "name": "Cline",
    "models_count": 4,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "See provider page"
    ],
    "urls": [
      "https://cline.bot/"
    ],
    "sample_models": [
      "deepseek-v4-flash",
      "glm-5.3-flash",
      "laguna-s-2.1:free",
      "LongCat-2.0"
    ]
  },
  {
    "slug": "cloudflare",
    "name": "Cloudflare Workers AI",
    "models_count": 63,
    "types": [
      "audio",
      "code",
      "embedding",
      "image",
      "text"
    ],
    "access_modes": [
      "card-required",
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "10,000 neurons per day",
      "10,000 neurons/day",
      "10,000 neurons/day \u00b7 Workers Free",
      "Free tier \u00b7 see provider limits",
      "Free \u00b7 10k neurons/day"
    ],
    "urls": [
      "https://dash.cloudflare.com/",
      "https://dash.cloudflare.com/profile/api-tokens",
      "https://developers.cloudflare.com/workers-ai/"
    ],
    "sample_models": [
      "cloudflare-workers-ai",
      "@cf/moonshotai/kimi-k2.6",
      "@cf/moonshotai/kimi-k2.7-code",
      "@cf/zai-org/glm-5.2",
      "@cf/zai-org/glm-4.7-flash"
    ]
  },
  {
    "slug": "codestral",
    "name": "Codestral",
    "models_count": 1,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever"
    ],
    "free_limits": [
      "Free \u00b7 30 req/min, 2000/day"
    ],
    "urls": [
      "https://console.mistral.ai/api-keys/"
    ],
    "sample_models": [
      "codestral-2508"
    ]
  },
  {
    "slug": "cohere",
    "name": "Cohere",
    "models_count": 34,
    "types": [
      "audio",
      "embedding",
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "1,000 requests per month",
      "1,000 requests/month, 20 req/min (shared)",
      "20 RPM"
    ],
    "urls": [
      "https://cohere.com",
      "https://dashboard.cohere.com/api-keys"
    ],
    "sample_models": [
      "cohere",
      "Command A+ (218B)",
      "Command A (111B)",
      "Command A Reasoning",
      "Command R+"
    ]
  },
  {
    "slug": "cometapi",
    "name": "CometAPI",
    "models_count": 1,
    "types": [
      "audio",
      "code",
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "Trial credits on signup \u00b7 no card"
    ],
    "urls": [
      "https://www.cometapi.com/"
    ],
    "sample_models": [
      "cometapi"
    ]
  },
  {
    "slug": "deepseek",
    "name": "DeepSeek",
    "models_count": 3,
    "types": [
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "Credits on sign-up"
    ],
    "urls": [
      "https://platform.deepseek.com/api_keys"
    ],
    "sample_models": [
      "deepseek-v4-flash",
      "deepseek-v4-flash-vision-exp",
      "deepseek-v4-pro"
    ]
  },
  {
    "slug": "experiential-cloud",
    "name": "Experiential Cloud",
    "models_count": 5,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "Free promotional route \u00b7 limit not stated",
      "Promotion \u00b7 $25 free/day",
      "Promotion \u00b7 $5 free/day"
    ],
    "urls": [
      "https://platform.experientiallabs.ai/models/claude-fable-5.1",
      "https://platform.experientiallabs.ai/models/deepseek-v4-flash",
      "https://platform.experientiallabs.ai/models/gpt-5.6-luna",
      "https://platform.experientiallabs.ai/models/gpt-6-astra",
      "https://platform.experientiallabs.ai/models/qwen3.8-27b"
    ],
    "sample_models": [
      "qwen3.8-27b",
      "deepseek-v4-flash",
      "gpt-5.6-luna",
      "claude-fable-5.1",
      "gpt-6-astra"
    ]
  },
  {
    "slug": "github",
    "name": "GitHub",
    "models_count": 7,
    "types": [
      "audio",
      "code",
      "embedding",
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "450+ free LLM APIs from 31 providers \u00b7 updated daily",
      "80+ free AI services for chat, image, video, voice & APIs",
      "Classic list of free LLM APIs and trial-credit providers",
      "Free and low-cost LLM APIs, IDEs, agents, and infra",
      "Permanent free LLM APIs only \u00b7 OpenAI-compatible keys"
    ],
    "urls": [
      "https://cheahjs-free-llm-api-resources.mintlify.app/",
      "https://docs.github.com/en/github-models/about-github-models",
      "https://github.com/ShaikhWarsi/free-ai-tools",
      "https://github.com/mnfst/awesome-free-llm-apis",
      "https://github.com/pacocartones/free-llm-api-hub",
      "https://github.com/zebbern/no-cost-ai"
    ],
    "sample_models": [
      "free-llm-api-resources",
      "github-models",
      "awesome-free-ai-apis",
      "awesome-free-llm-apis",
      "free-llm-api-hub"
    ]
  },
  {
    "slug": "glhf-chat",
    "name": "Glhf.chat",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "Unlimited for free models"
    ],
    "urls": [
      "https://glhf.chat/"
    ],
    "sample_models": [
      "Mixtral 8x7B",
      "Llama 3.1 70B"
    ]
  },
  {
    "slug": "google",
    "name": "Google AI Studio",
    "models_count": 11,
    "types": [
      "audio",
      "code",
      "embedding",
      "image",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "1,500 requests per day",
      "1,500 requests/day",
      "Free Flash/Lite quota \u00b7 daily limits vary"
    ],
    "urls": [
      "https://aistudio.google.com/",
      "https://aistudio.google.com/apikey",
      "https://aistudio.google.com/app/apikey"
    ],
    "sample_models": [
      "gemini-2.5-flash",
      "gemini-2.0-flash",
      "gemini-2.0-flash-lite",
      "gemini-2.5-flash-image",
      "gemini-2.5-flash-preview-tts"
    ]
  },
  {
    "slug": "googleai",
    "name": "Google AI",
    "models_count": 13,
    "types": [
      "audio",
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier"
    ],
    "free_limits": [
      "15 RPM, 1,500 RPD",
      "Free \u00b7 Gemini quotas vary by model",
      "Varies by model and account"
    ],
    "urls": [
      "https://aistudio.google.com/apikey"
    ],
    "sample_models": [
      "gemini-3.7-flash",
      "gemini-3.6-flash",
      "gemini-3.5-flash",
      "gemini-3.1-pro-preview",
      "gemini-3-flash-preview"
    ]
  },
  {
    "slug": "groq",
    "name": "Groq",
    "models_count": 12,
    "types": [
      "audio",
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "1,000 requests per day",
      "20 RPM, 2,000 RPD",
      "Free tier \u00b7 see provider limits",
      "Free \u00b7 ~30-50 RPM per model",
      "See provider page"
    ],
    "urls": [
      "https://console.groq.com/keys"
    ],
    "sample_models": [
      "openai/gpt-oss-120b",
      "openai/gpt-oss-20b",
      "qwen/qwen3.6-27b",
      "groq/compound",
      "groq/compound-mini"
    ]
  },
  {
    "slug": "huggingface",
    "name": "HuggingFace",
    "models_count": 140,
    "types": [
      "audio",
      "code",
      "embedding",
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "$0.10 of credits per month",
      "$0.10/month in credits (subject to change)",
      "Credit-metered"
    ],
    "urls": [
      "https://huggingface.co/docs/inference-providers/en/index",
      "https://huggingface.co/settings/tokens"
    ],
    "sample_models": [
      "huggingface-inference",
      "Qwen2.5-7B-Instruct",
      "Qwen2.5-Coder-7B-Instruct",
      "Meta-Llama-3.1-8B-Instruct",
      "gemma-3-4b-it"
    ]
  },
  {
    "slug": "itsfree",
    "name": "itsfree.ai",
    "models_count": 1,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-signup"
    ],
    "free_limits": [
      "25 providers with a real free tier \u00b7 compared side by side"
    ],
    "urls": [
      "https://itsfree.ai/"
    ],
    "sample_models": [
      "itsfree-ai"
    ]
  },
  {
    "slug": "jan",
    "name": "Jan",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://jan.ai/download"
    ],
    "sample_models": [
      "llama-3.3-70b",
      "qwen3"
    ]
  },
  {
    "slug": "kilo",
    "name": "Kilo Gateway",
    "models_count": 11,
    "types": [
      "audio",
      "code",
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "data-training",
      "free-forever",
      "free-tier",
      "no-signup"
    ],
    "free_limits": [
      "200 requests/hour per IP (shared) for free models",
      "Free \u00b7 no key needed",
      "~200 req/hr"
    ],
    "urls": [
      "https://kilo.ai/docs/gateway",
      "https://kilo.ai/docs/providers/"
    ],
    "sample_models": [
      "kilo-gateway",
      "kilo-auto/free",
      "kilo-auto/small",
      "inclusionai/ling-3.0-flash:free",
      "nvidia/nemotron-3-ultra-550b-a55b:free"
    ]
  },
  {
    "slug": "llama-cpp",
    "name": "llama.cpp",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://github.com/ggml-org/llama.cpp/releases"
    ],
    "sample_models": [
      "llama-3.3-70b",
      "qwen3"
    ]
  },
  {
    "slug": "llamafile",
    "name": "llamafile",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://github.com/Mozilla-Ocho/llamafile/releases"
    ],
    "sample_models": [
      "llama-3.3-70b",
      "open-mixtral-8x7b"
    ]
  },
  {
    "slug": "llm7",
    "name": "LLM7",
    "models_count": 9,
    "types": [
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card",
      "no-signup"
    ],
    "free_limits": [
      "10 requests/minute (40 with a token)",
      "Free tier \u00b7 see provider limits",
      "Free \u00b7 no key needed"
    ],
    "urls": [
      "https://token.llm7.io",
      "https://token.llm7.io/"
    ],
    "sample_models": [
      "minimax-m2.7",
      "gemini-3.1-flash-lite",
      "gpt-oss:20b",
      "mistral-Nemo-Instruct-2407",
      "codestral-latest"
    ]
  },
  {
    "slug": "lm-studio",
    "name": "LM Studio",
    "models_count": 3,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://lmstudio.ai"
    ],
    "sample_models": [
      "gpt-oss-120b",
      "open-mixtral-8x7b",
      "qwen3"
    ]
  },
  {
    "slug": "mistral",
    "name": "Mistral La Plateforme",
    "models_count": 34,
    "types": [
      "audio",
      "code",
      "embedding",
      "text"
    ],
    "access_modes": [
      "data-training",
      "free-forever",
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "free_limits": [
      "2,000 requests/day, 30 req/min",
      "Experiment plan, limits set per model",
      "Free Experiment / Free mode",
      "Free Experiment plan",
      "Free mode and Labs"
    ],
    "urls": [
      "https://codestral.mistral.ai/",
      "https://console.mistral.ai/",
      "https://console.mistral.ai/api-keys",
      "https://console.mistral.ai/api-keys/"
    ],
    "sample_models": [
      "mistral-la-plateforme",
      "mistral-codestral",
      "mistral-large-2512",
      "mistral-medium-3-5",
      "mistral-small-2603"
    ]
  },
  {
    "slug": "mlx",
    "name": "MLX",
    "models_count": 3,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://github.com/ml-explore/mlx-lm"
    ],
    "sample_models": [
      "gpt-oss-120b",
      "qwen3",
      "Qwen2.5-Coder-7B"
    ]
  },
  {
    "slug": "modelscope",
    "name": "ModelScope",
    "models_count": 54,
    "types": [
      "code",
      "embedding",
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "free_limits": [
      "2,000 requests per day",
      "Free tier \u00b7 see provider limits"
    ],
    "urls": [
      "https://modelscope.cn/my/myaccesstoken"
    ],
    "sample_models": [
      "deepseek-ai/DeepSeek-V4-Pro-0813",
      "Qwen/Qwen3.8-27B",
      "deepseek-ai/DeepSeek-V4-Pro",
      "deepseek-ai/DeepSeek-V4-Flash",
      "Qwen/Qwen3.5-397B-A17B"
    ]
  },
  {
    "slug": "nebius",
    "name": "Nebius AI Studio",
    "models_count": 1,
    "types": [
      "text"
    ],
    "access_modes": [
      "card-required",
      "signup-credits"
    ],
    "free_limits": [
      "$1 trial for 30 days"
    ],
    "urls": [
      "https://studio.nebius.com/settings/api-keys"
    ],
    "sample_models": [
      "meta-llama/Llama-3.3-70B-Instruct"
    ]
  },
  {
    "slug": "nscale",
    "name": "Nscale",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "$5 starter credit"
    ],
    "urls": [
      "https://console.nscale.com/"
    ],
    "sample_models": [
      "meta-llama/Llama-3.3-70B-Instruct",
      "meta-llama/Llama-4-Scout-17B-Instruct"
    ]
  },
  {
    "slug": "nvidia",
    "name": "NVIDIA",
    "models_count": 96,
    "types": [
      "code",
      "embedding",
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "free_limits": [
      "100+ free LLMs",
      "40 requests per minute",
      "Free tier \u00b7 see provider limits",
      "Free \u00b7 1000 req/month",
      "Up to 40 RPM"
    ],
    "urls": [
      "https://build.nvidia.com/",
      "https://build.nvidia.com/settings/api-keys"
    ],
    "sample_models": [
      "nvidia-nim",
      "moonshotai/kimi-k2.6",
      "deepseek-ai/deepseek-v4-pro",
      "deepseek-ai/deepseek-v4-flash-0731",
      "stepfun-ai/step-3.7-flash"
    ]
  },
  {
    "slug": "ollama",
    "name": "Ollama",
    "models_count": 5,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://ollama.com/download"
    ],
    "sample_models": [
      "deepseek-ai/DeepSeek-R1",
      "deepseek-v4-flash",
      "gpt-oss-120b",
      "llama-3.3-70b",
      "qwen3"
    ]
  },
  {
    "slug": "ollama-cloud",
    "name": "Ollama Cloud",
    "models_count": 19,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "Free plan \u00b7 session + weekly caps",
      "Monthly starter credits"
    ],
    "urls": [
      "https://ollama.com/settings/keys"
    ],
    "sample_models": [
      "nemotron-3-ultra",
      "glm-5.1",
      "glm-5.2",
      "minimax-m2.7",
      "minimax-m3"
    ]
  },
  {
    "slug": "opencode",
    "name": "OpenCode Zen",
    "models_count": 1,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "data-training",
      "free-tier"
    ],
    "free_limits": [
      "7 free models, no published quota"
    ],
    "urls": [
      "https://opencode.ai/docs/zen/"
    ],
    "sample_models": [
      "opencode-zen"
    ]
  },
  {
    "slug": "opencode-zen",
    "name": "OpenCode Zen",
    "models_count": 11,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "6 free models",
      "Free tier \u00b7 see provider limits",
      "Free \u00b7 Zen key required"
    ],
    "urls": [
      "https://opencode.ai/auth",
      "https://opencode.ai/docs/zen/"
    ],
    "sample_models": [
      "big-pickle",
      "mimo-v2.5-free",
      "nemotron-3-ultra-free",
      "hy3-free",
      "nemotron-3.5-lightning-free"
    ]
  },
  {
    "slug": "openrouter",
    "name": "OpenRouter",
    "models_count": 34,
    "types": [
      "audio",
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "18 models at zero cost",
      "200 req/day (free tier)",
      "50 free req/day \u00b7 1000 with $10 credit",
      "Free route \u00b7 OpenRouter free-tier limits apply",
      "free for some models"
    ],
    "urls": [
      "https://openrouter.ai/inclusionai/ling-3.0-flash-sante:free",
      "https://openrouter.ai/keys",
      "https://openrouter.ai/models",
      "https://openrouter.ai/workspaces/default/keys"
    ],
    "sample_models": [
      "openrouter",
      "nvidia/nemotron-3-ultra-550b-a55b:free",
      "poolside/laguna-xs-2.1:free",
      "cohere/north-mini-code:free",
      "poolside/laguna-s-2.1:free"
    ]
  },
  {
    "slug": "orcarouter",
    "name": "OrcaRouter",
    "models_count": 1,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "signup-credits"
    ],
    "free_limits": [
      "coupons for free usage \u2014 check Offers page"
    ],
    "urls": [
      "https://www.orcarouter.ai/offers"
    ],
    "sample_models": [
      "orcarouter-offers"
    ]
  },
  {
    "slug": "ovhcloud",
    "name": "OVHcloud AI",
    "models_count": 22,
    "types": [
      "audio",
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card",
      "no-signup"
    ],
    "free_limits": [
      "2 RPM (anonymous)",
      "7 models at \u20ac0",
      "Free sandbox \u00b7 2 RPM no key \u00b7 400 RPM with key"
    ],
    "urls": [
      "https://endpoints.ai.cloud.ovh.net/",
      "https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/"
    ],
    "sample_models": [
      "Qwen3.5-397B-A17B",
      "Qwen3.6-27B",
      "gpt-oss-120b",
      "gpt-oss-20b",
      "Meta-Llama-3_3-70B-Instruct"
    ]
  },
  {
    "slug": "pollinations",
    "name": "Pollinations AI",
    "models_count": 10,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever"
    ],
    "free_limits": [
      "Free \u00b7 daily Pollen grants \u00b7 key at enter.pollinations.ai"
    ],
    "urls": [
      "https://enter.pollinations.ai/"
    ],
    "sample_models": [
      "laguna",
      "minimax-m2.7",
      "qwen-coder",
      "deepseek",
      "kimi-code"
    ]
  },
  {
    "slug": "qwen",
    "name": "Alibaba DashScope",
    "models_count": 24,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "free_limits": [
      "1M tokens per model for 90 days",
      "1M tokens/model \u00b7 90 days (Singapore)"
    ],
    "urls": [
      "https://bailian.console.alibabacloud.com/?apiKey=1",
      "https://modelstudio.console.alibabacloud.com/"
    ],
    "sample_models": [
      "qwen3.7-max",
      "qwen3-max",
      "qwen3.6-plus",
      "qwen3-235b-a22b",
      "qwen3.7-plus"
    ]
  },
  {
    "slug": "requesty",
    "name": "Requesty",
    "models_count": 12,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever"
    ],
    "free_limits": [
      "Free \u00b7 200 req/day \u00b7 no card"
    ],
    "urls": [
      "https://app.requesty.ai/"
    ],
    "sample_models": [
      "nvidia/nemotron-3-ultra-550b-a55b",
      "poolside/laguna-xs.2",
      "nvidia/nemotron-3-super-120b-a12b",
      "poolside/laguna-m.1",
      "google/gemma-4-31b-it"
    ]
  },
  {
    "slug": "routeway",
    "name": "Routeway",
    "models_count": 10,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever"
    ],
    "free_limits": [
      "Free :free models only"
    ],
    "urls": [
      "https://routeway.ai/"
    ],
    "sample_models": [
      "laguna-xs.2:free",
      "step-3.7-flash:free",
      "gpt-oss-120b:free",
      "gemma-4-31b-it:free",
      "nemotron-3-nano-30b-a3b:free"
    ]
  },
  {
    "slug": "sambanova",
    "name": "SambaNova",
    "models_count": 9,
    "types": [
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "20 RPM, 20 RPD, 200K TPD",
      "20 requests per day",
      "Small dev tier \u00b7 light use"
    ],
    "urls": [
      "https://cloud.sambanova.ai/",
      "https://cloud.sambanova.ai/apis"
    ],
    "sample_models": [
      "MiniMax-M2.7",
      "DeepSeek-V3.1",
      "DeepSeek-V3.2",
      "gpt-oss-120b",
      "gemma-4-31B-it"
    ]
  },
  {
    "slug": "scaleway",
    "name": "Scaleway",
    "models_count": 15,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "1M free tokens"
    ],
    "urls": [
      "https://console.scaleway.com/iam/api-keys"
    ],
    "sample_models": [
      "devstral-2-123b-instruct-2512",
      "qwen3-235b-a22b-instruct-2507",
      "glm-5.2",
      "deepseek-v4-flash-0731",
      "qwen3.5-397b-a17b"
    ]
  },
  {
    "slug": "siliconflow",
    "name": "SiliconFlow",
    "models_count": 6,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "free_limits": [
      "Free \u00b7 3 models @ $0 \u00b7 1000 RPM",
      "Per-model caps after KYC",
      "See provider page"
    ],
    "urls": [
      "https://cloud.siliconflow.cn/account/ak",
      "https://cloud.siliconflow.com/"
    ],
    "sample_models": [
      "THUDM/GLM-Z1-9B-0414",
      "Qwen/Qwen3-8B",
      "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
      "Abbreviation",
      "THUDM/glm-4-9b-chat"
    ]
  },
  {
    "slug": "tabitoken",
    "name": "TaBiAI",
    "models_count": 5,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "$125 GitHub signup credits + daily check-in",
      "$125 credits \u00b7 billed per request"
    ],
    "urls": [
      "https://tabitoken.com/",
      "https://tabitoken.com/pricing"
    ],
    "sample_models": [
      "tabitoken",
      "tabitoken/claude-opus-4-8",
      "tabitoken/claude-opus-4-8-thinking",
      "tabitoken/claude-opus-5",
      "tabitoken/claude-opus-5-thinking"
    ]
  },
  {
    "slug": "tokenrouter",
    "name": "TokenRouter",
    "models_count": 1,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "free models appear occasionally \u2014 check the catalog"
    ],
    "urls": [
      "https://www.tokenrouter.com/models"
    ],
    "sample_models": [
      "tokenrouter"
    ]
  },
  {
    "slug": "unorouter",
    "name": "UnoRouter",
    "models_count": 129,
    "types": [
      "audio",
      "code",
      "embedding",
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "free-tier",
      "no-card"
    ],
    "free_limits": [
      "Free \u00b7 about 1 request/min per model"
    ],
    "urls": [
      "https://unorouter.com/en/token"
    ],
    "sample_models": [
      "ling-3.0-flash-fin:free",
      "qwen-3.8-flash-next:free",
      "glm-5.3-flash-search:free",
      "glm-5.3-flash-think-search:free",
      "glm-5.3-flash-thinking:free"
    ]
  },
  {
    "slug": "vercel",
    "name": "Vercel AI Gateway",
    "models_count": 13,
    "types": [
      "code",
      "image",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "$5 of credits per month",
      "$5/mo recurring credits"
    ],
    "urls": [
      "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai",
      "https://vercel.com/docs/ai-gateway"
    ],
    "sample_models": [
      "vercel-ai-gateway",
      "deepseek/deepseek-v3.2-thinking",
      "google/gemini-2.5-flash",
      "google/gemma-4-31b-it",
      "zai/glm-5.3-flash"
    ]
  },
  {
    "slug": "vllm",
    "name": "vLLM",
    "models_count": 5,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-forever",
      "no-card",
      "no-signup",
      "open-source"
    ],
    "free_limits": [
      "Unlimited \u00b7 runs on your own hardware"
    ],
    "urls": [
      "https://docs.vllm.ai/en/latest/getting_started/installation.html"
    ],
    "sample_models": [
      "deepseek-ai/DeepSeek-R1",
      "deepseek-v4-flash",
      "gpt-oss-120b",
      "llama-3.3-70b",
      "qwen3"
    ]
  },
  {
    "slug": "vyceai",
    "name": "Vyce AI",
    "models_count": 4,
    "types": [
      "code",
      "text"
    ],
    "access_modes": [
      "free-tier",
      "no-card",
      "signup-credits"
    ],
    "free_limits": [
      "$50 signup credits + $10/day reward credits"
    ],
    "urls": [
      "https://vyceai.com/",
      "https://vyceai.com/signup"
    ],
    "sample_models": [
      "vyceai",
      "vyceai/gpt-5.6-new",
      "vyceai/claude-sonnet-4-6",
      "vyceai/deepseek-v4-flash"
    ]
  },
  {
    "slug": "xai",
    "name": "Grok (xAI)",
    "models_count": 2,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "$25/month free credits, resets monthly"
    ],
    "urls": [
      "https://x.ai/"
    ],
    "sample_models": [
      "Grok-2 Mini",
      "Grok-2"
    ]
  },
  {
    "slug": "zai",
    "name": "ZAI",
    "models_count": 13,
    "types": [
      "code",
      "image",
      "text",
      "video"
    ],
    "access_modes": [
      "free-forever",
      "free-tier",
      "no-card",
      "phone-required"
    ],
    "free_limits": [
      "1 concurrent request",
      "Free tier \u00b7 see provider limits",
      "Free \u00b7 Flash models only",
      "GLM Flash models for free"
    ],
    "urls": [
      "https://open.bigmodel.cn/usercenter/apikeys",
      "https://z.ai/"
    ],
    "sample_models": [
      "zai/glm-5.2",
      "zai/glm-4.7-flash",
      "zai/glm-4.5-flash",
      "zai/glm-5-turbo",
      "zai/glm-4.7"
    ]
  },
  {
    "slug": "zenmux",
    "name": "Zenmux",
    "models_count": 1,
    "types": [
      "text"
    ],
    "access_modes": [
      "free-tier"
    ],
    "free_limits": [
      "free for some models"
    ],
    "urls": [
      "https://zenmux.ai/invite/555LC2"
    ],
    "sample_models": [
      "zenmux"
    ]
  }
];
