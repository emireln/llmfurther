# llmfurther

> **Clean, minimalist directory for discovering and comparing 900+ free AI models across 58 verified cloud providers.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Overview

**llmfurther** is a curated developer catalog engineered to make discovering free-tier AI APIs, open-weights inference endpoints, and generous cloud quotas effortless. Built with a focus on non-slop, high-speed UX, and retro-modern Bayer matrix dither graphics.

- **900+ AI Models**: Text, reasoning, multimodal vision, code generation, audio, and embeddings.
- **58 Cloud Providers**: Verified free tiers, zero-credit-card onboarding, daily quotas, and signup credits.
- **Dither Aesthetic**: Interactive WebGL GPU Dither Wave shader (`#ff3d5c` crimson accent), 64-level procedural Bayer Matrix Globe, and 2D fluid wave physics in the footer.
- **Developer First**: Instant cURL and OpenAI Python SDK snippets for every operational endpoint.
- **Side-by-Side Model Comparison**: Compare context windows, access requirements, benchmarks, and rate limits.
- **Multilingual & Theming**: Seamless English and Portuguese (PT-BR) localization with instant Dark/Light mode switching.

---

## Features

### 1. Minimalist Search & Filter Ribbon
- **Instant Search**: Fuzzy search across model names, architectures, families (Llama 3.3, DeepSeek R1/V3, Gemini 2.5/3.0, Claude, Mistral, Qwen, etc.), and providers.
- **Multi-criteria Custom Dropdowns**: Filter by Provider, Access Tier (Free Forever, No Card Required, Signup Credits, Open Source), Modality (Text, Code, Vision, Audio), Context Window size, and Sort order.
- **Zero Clutter**: Clean popovers designed without bloated text or fake terminal noise.

### 2. Rich Model Metadata & Fast Integration
- Real official SVG/PNG brand logos with multi-tier fallback cascade.
- Detailed modal inspection with specifications: Context length, SWE-bench metrics, access requirements, rate limits (RPM/RPD), and active operational state.
- Copy-paste ready code examples:
  - **Python (OpenAI SDK)**
  - **cURL / Shell CLI**

### 3. Retro-Modern Dither Graphics
- **Hero Wave**: GPU-accelerated WebGL shader running procedural 4-level Bayer matrix dithering in `#ff3d5c` crimson.
- **Interactive Footer Globe**: Procedural 3D Bayer sphere with draggable rotation, FBM landmasses, and latitude/longitude grid rings.
- **Fluid Wave Physics Footer**: Real-time 2D wave equation simulation ($u_{next} = 2u - u_{prev} + c^2 \nabla^2 u$) coupled with mouse velocity impulse injection and 8x8 Bayer dithering.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Graphics & Shaders**: [Three.js](https://threejs.org/) + HTML5 Canvas TypedArrays
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/emireln/llmfurther.git
cd llmfurther

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will start at `http://localhost:5173/`.

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
llmfurther/
├── public/
│   ├── assets/        # Provider and model logos (SVG/PNG)
│   ├── cards/         # Provider banner cards
│   └── logo.svg       # Vector Cat icon (dithered favicon)
├── src/
│   ├── components/
│   │   ├── background/
│   │   │   ├── DitherWave.tsx        # WebGL Bayer GPU shader
│   │   │   ├── DitherGlobe.tsx       # Procedural Bayer 8-level 3D globe
│   │   │   └── FooterDitherWaves.tsx # 2D wave equation physics simulation
│   │   ├── common/
│   │   │   ├── CatLogo.tsx           # Dithered Cat SVG component
│   │   │   ├── CustomDropdown.tsx    # Popover filter dropdown
│   │   │   └── ModelLogo.tsx         # Brand logo cascade fallback
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Navigation, theme & lang toggles
│   │   │   └── Footer.tsx            # Footer with globe and wave physics
│   │   └── models/
│   │       ├── ModelCard.tsx         # Model preview card
│   │       ├── ModelDetailModal.tsx  # Specs & code integration modal
│   │       ├── ModelFilters.tsx      # Minimalist filter ribbon
│   │       └── CompareModal.tsx      # Side-by-side comparison modal
│   ├── context/
│   │   ├── LanguageContext.tsx       # EN / PT-BR state
│   │   └── ThemeContext.tsx          # Dark / Light state
│   ├── data/
│   │   ├── models.ts                 # Catalog of 900+ models
│   │   ├── providers.ts              # Verified cloud providers
│   │   └── translations.ts           # Localization strings
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces
│   ├── App.tsx                       # Main application shell
│   ├── index.css                     # Design tokens & typography
│   └── main.tsx                      # App entrypoint
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Contributing

Contributions are welcome! If you'd like to submit new free models or providers, feel free to open a Pull Request or issue.

---

## License

MIT © [emireln](https://github.com/emireln)
