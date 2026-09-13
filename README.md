# llmfurther

An open, high-performance catalog and comparison directory indexing 900+ free AI models across 58 verified cloud providers.

Repository: https://github.com/emireln/llmfurther

---

## Overview

llmfurther is a developer-focused registry designed to eliminate the friction of discovering free-tier AI APIs, open-weights inference endpoints, and cloud developer allowances. Rather than relying on marketing claims or opaque aggregators, llmfurther provides verified, actionable technical specifications for each model and provider: context lengths, SWE-bench evaluation metrics, authentication constraints, rate limits, and ready-to-run API request templates.

The application is built around a retro-computational aesthetic inspired by Bayer matrix dithering, utilizing GPU shaders and real-time canvas wave simulations while maintaining a minimalist, high-contrast user interface with solid colors and zero translucent washes.

---

## Core Capabilities

### 1. Catalog and Indexing
- 900+ models categorized across text generation, reasoning, multimodal vision, code synthesis, audio processing, and embeddings.
- 58 cloud providers verified for free access mechanisms, including perpetual free tiers, daily quota resets, and signup credits without credit card requirements.
- Standardized specifications covering maximum context windows (from 8K up to 1M+ tokens), operational health status, and SWE-bench score benchmarks.

### 2. Side-by-Side Comparison Matrix
- Compare up to three models simultaneously.
- Direct spec inspection covering access requirements, free limits, context sizes, operational states, and direct console links.
- Keyboard-accessible modal interface with scroll locking and sliding-window model selection.

### 3. Fast Filtering and Search Engine
- In-memory compound filtering across providers, access tiers (Free Forever, Daily Quota, No Card, Signup Credits, Open Source), modalities, and minimum context thresholds.
- Full-text search querying model identifiers, names, provider slugs, and architecture tags.
- Dropdown menus engineered with solid visual states, keyboard accessibility, and immediate filter resets.

### 4. Code Integration Snippets
- Pre-configured, copy-ready code snippets for every indexed model:
  - Python via OpenAI SDK (`base_url` redirection to provider endpoints).
  - Raw cURL request templates for terminal execution.
- Fast clipboard copy with tactile visual confirmation.

### 5. Dither Graphics Engine
- GPU WebGL Dither Wave: Procedural shader field rendering Bayer matrix dithering with a `#ff3d5c` crimson accent.
- Interactive 3D Dither Globe: Canvas-based spherical coordinate projection with draggable rotation, fractional Brownian motion landmasses, and multi-level Bayer quantization.
- 2D Fluid Wave Simulation: Real-time discrete wave equation simulation integrated into the footer, responding dynamically to mouse velocity and displacement.
- Procedural Micro-Dither on Actions: Interactive Bayer matrix dot shimmer activated on button hover states.

### 6. Localization and Theming
- Full bilingual localization: English (EN) and Portuguese (PT-BR) covering all navigation, controls, tooltips, dialogs, and descriptions.
- Solid Dark and Light color palettes with high visual contrast, structured borders, and no washed-out pastel tints.

---

## Architecture and Stack

- Framework: React 18 / 19 with TypeScript (strict typing enabled)
- Build System: Vite
- Styling: Tailwind CSS (custom solid color tokens and typography)
- Shaders and Mathematics: WebGL GLSL fragment shaders and HTML5 Canvas TypedArrays
- Icons: Lucide React and custom vector assets
- State Management: React Context API for runtime language and theme persistence

---

## Getting Started

### Prerequisites

- Node.js 18.x or newer
- npm 9.x or pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/emireln/llmfurther.git

# Navigate into project directory
cd llmfurther

# Install dependencies
npm install

# Start local development server
npm run dev
```

The local development server will start at `http://localhost:5173/`.

### Production Build

```bash
# Type-check and compile optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Directory Layout

```
llmfurther/
├── public/
│   ├── assets/                 # Provider and model brand vectors (SVG/PNG)
│   ├── cards/                  # Provider visual identity cards
│   └── logo.svg                # Vector mark
├── src/
│   ├── components/
│   │   ├── background/
│   │   │   ├── DitherWave.tsx         # GPU WebGL Bayer shader background
│   │   │   ├── DitherGlobe.tsx        # Procedural 3D Bayer globe
│   │   │   └── FooterDitherWaves.tsx  # 2D discrete wave equation simulation
│   │   ├── common/
│   │   │   ├── CatLogo.tsx            # Dithered brand mark
│   │   │   ├── CustomDropdown.tsx     # Solid filter popovers
│   │   │   ├── GitHubButton.tsx       # Star button with Bayer hover animation
│   │   │   ├── ModelLogo.tsx          # Brand logo cascade with fallbacks
│   │   │   └── Tooltip.tsx            # High-contrast accessible tooltips
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Standardized navigation and controls
│   │   │   └── Footer.tsx             # Interactive wave footer with links
│   │   └── models/
│   │       ├── CompareModal.tsx       # Side-by-side spec comparison table
│   │       ├── ModelCard.tsx          # Solid model preview card
│   │       ├── ModelDetailModal.tsx   # Detailed specs and code snippets
│   │       └── ModelFilters.tsx       # Multi-parameter filter ribbon
│   ├── context/
│   │   ├── LanguageContext.tsx        # EN / PT-BR runtime provider
│   │   └── ThemeContext.tsx           # Dark / Light theme provider
│   ├── data/
│   │   ├── models.ts                  # 900+ indexed models dataset
│   │   ├── providers.ts               # 58 verified cloud providers dataset
│   │   └── translations.ts            # Complete EN and PT-BR dictionaries
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces and key utilities
│   ├── App.tsx                        # Root layout and query pipeline
│   ├── index.css                      # Tailwind base and design tokens
│   └── main.tsx                       # React application mount
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## Data Schema

Each model entry in the catalog adheres to the `ModelItem` interface:

```typescript
interface ModelItem {
  id: string;                      // Canonical model identifier (e.g. "deepseek/deepseek-r1")
  name: string;                    // Human-readable model title
  provider: string;                // Provider display name
  providerSlug: string;            // Normalized provider key
  context?: string;                // Maximum context window size (e.g. "128k", "1m")
  tags?: string[];                 // Architectural or category tags
  type?: ('text' | 'code' | 'image' | 'video' | 'audio' | 'embedding')[];
  access?: string[];               // Access traits ("free-forever", "no-card", etc.)
  status?: 'operational' | 'degraded' | 'maintenance';
  sweScore?: number | null;        // SWE-bench verified benchmark score
  freeLimit?: string;              // Specific free quota or rate limit text
  url?: string;                    // Console or API endpoint URL
}
```

---

## Contributing

Contributions to expand model coverage, update rate limits, or report degraded provider status are welcomed.

1. Fork the repository at https://github.com/emireln/llmfurther
2. Create a feature branch (`git checkout -b feature/model-update`)
3. Commit your modifications with descriptive commit messages
4. Push to your fork and submit a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
