import React, { useState, useMemo, useEffect } from 'react';
import { MODELS_DATA } from './data/models';
import { PROVIDERS_DATA } from './data/providers';
import { ModelItem, FilterState, getModelKey } from './types';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import { DitherWave } from './components/background/DitherWave';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ModelCard } from './components/models/ModelCard';
import { ModelListItem } from './components/models/ModelListItem';
import { ModelFilters } from './components/models/ModelFilters';
import { ModelDetailModal } from './components/models/ModelDetailModal';
import { CompareModal } from './components/models/CompareModal';
import { Scale } from 'lucide-react';

export const App: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    selectedProviders: [],
    selectedModalities: [],
    selectedAccess: [],
    selectedContext: '',
    selectedStatus: '',
    sortBy: 'popular',
  });

  // View Mode State: Grid vs List
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Pagination / Display limit
  const [displayCount, setDisplayCount] = useState<number>(36);

  // Modals & Selection
  const [selectedModel, setSelectedModel] = useState<ModelItem | null>(null);
  const [compareList, setCompareList] = useState<ModelItem[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

  // Reset pagination when any filter changes to prevent weird pagination bugs
  useEffect(() => {
    setDisplayCount(36);
  }, [filters]);

  // Body scroll locking when any modal is open
  useEffect(() => {
    const isModalOpen = selectedModel !== null || isCompareOpen;
    if (isModalOpen) {
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
  }, [selectedModel, isCompareOpen]);

  // Compare Toggle using unique model key
  const toggleCompare = (model: ModelItem) => {
    const modelKey = getModelKey(model);
    setCompareList(prev => {
      const exists = prev.some(m => getModelKey(m) === modelKey);
      if (exists) {
        return prev.filter(m => getModelKey(m) !== modelKey);
      }
      if (prev.length >= 3) {
        // Sliding window: keep max 3 without blocking alert
        return [...prev.slice(1), model];
      }
      return [...prev, model];
    });
  };

  const removeCompare = (targetKey: string) => {
    setCompareList(prev => prev.filter(m => getModelKey(m) !== targetKey && m.id !== targetKey));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  // Provider List for Filter component
  const availableProviders = useMemo(() => {
    return PROVIDERS_DATA.map(p => ({ slug: p.slug, name: p.name }));
  }, []);

  // Filtered and Sorted Models
  const filteredModels = useMemo(() => {
    const q = filters.search.trim().toLowerCase();

    const res = MODELS_DATA.filter(model => {
      // 1. Search Query
      if (q) {
        const matchesName = (model.name || '').toLowerCase().includes(q);
        const matchesId = model.id.toLowerCase().includes(q);
        const matchesProvider = model.provider.toLowerCase().includes(q);
        const matchesTags = (model.tags || []).some(tag => tag.toLowerCase().includes(q));
        const matchesType = (model.type || []).some(type => type.toLowerCase().includes(q));
        if (!matchesName && !matchesId && !matchesProvider && !matchesTags && !matchesType) {
          return false;
        }
      }

      // 2. Providers Filter
      if (filters.selectedProviders.length > 0) {
        if (!filters.selectedProviders.includes(model.providerSlug)) {
          return false;
        }
      }

      // 3. Modalities Filter
      if (filters.selectedModalities.length > 0) {
        const hasModality = filters.selectedModalities.some(m =>
          (model.type || []).includes(m as any)
        );
        if (!hasModality) return false;
      }

      // 4. Access Type Filter
      if (filters.selectedAccess.length > 0) {
        const hasAccess = filters.selectedAccess.some(a =>
          (model.access || []).includes(a)
        );
        if (!hasAccess) return false;
      }

      // 5. Context Filter
      if (filters.selectedContext) {
        const getCtxNum = (ctx?: string) => {
          if (!ctx) return 0;
          const lower = ctx.toLowerCase();
          if (lower.includes('m')) return parseFloat(lower) * 1000000;
          if (lower.includes('k')) return parseFloat(lower) * 1000;
          return parseFloat(lower) || 0;
        };
        const ctxVal = getCtxNum(model.context);
        const reqMap: Record<string, number> = { '8k': 8000, '32k': 32000, '128k': 128000, '1m': 1000000 };
        const minReq = reqMap[filters.selectedContext] || 0;
        if (ctxVal < minReq) return false;
      }

      // 6. Status Filter
      if (filters.selectedStatus && model.status !== filters.selectedStatus) {
        return false;
      }

      return true;
    });

    // Sorting
    if (filters.sortBy === 'name') {
      res.sort((a, b) => (a.name || a.id).localeCompare(b.name || b.id));
    } else if (filters.sortBy === 'provider') {
      res.sort((a, b) => a.provider.localeCompare(b.provider));
    } else if (filters.sortBy === 'context') {
      const getContextNum = (ctx?: string) => {
        if (!ctx) return 0;
        const lower = ctx.toLowerCase();
        if (lower.includes('m')) return parseFloat(lower) * 1000000;
        if (lower.includes('k')) return parseFloat(lower) * 1000;
        return parseFloat(lower) || 0;
      };
      res.sort((a, b) => getContextNum(b.context) - getContextNum(a.context));
    }

    return res;
  }, [filters]);

  const displayedModels = filteredModels.slice(0, displayCount);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Top Header */}
      <Header
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Hero Section with Live Dither Wave Background */}
      <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        {/* Exact Dither Wave WebGL Canvas Component */}
        <div className="absolute inset-0 z-0 opacity-45 dark:opacity-55 pointer-events-none">
          <DitherWave
            speed={0.7000000000000001}
            intensity={3}
            scale={2.5}
            downScale={0.8500000000000001}
            secondaryColor="#ff3d5c"
            primaryColor={theme === 'dark' ? '#161616' : '#f0f0f0'}
            tertiaryColor={theme === 'dark' ? '#080808' : '#fafafa'}
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-sans max-w-4xl mx-auto leading-tight">
            {t.tagline}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
            {t.subtitle}
          </p>

          {/* Key Metric Counters: Solid Styling (No pastel/translucent colors) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-10">
            <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs text-left">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#ff3d5c] block">
                {MODELS_DATA.length}+
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                {t.stats.models}
              </span>
            </div>

            <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs text-left">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block">
                {PROVIDERS_DATA.length}
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                {t.stats.providers}
              </span>
            </div>

            <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs text-left">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block">
                100%
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                {t.stats.freeForever}
              </span>
            </div>

            <div className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs text-left">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#ff3d5c] block">
                50+
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1 block">
                {t.stats.dailyQuotas}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Explorer Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 min-h-[600px]">
        {/* Filters & Search Controls */}
        <ModelFilters
          filters={filters}
          onChange={setFilters}
          totalFiltered={filteredModels.length}
          totalModels={MODELS_DATA.length}
          availableProviders={availableProviders}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Model Cards Grid or List */}
        {displayedModels.length === 0 ? (
          <div className="py-20 text-center rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <p className="font-mono text-sm text-neutral-500">
              {t.filters.noResults}
            </p>
            <button
              onClick={() =>
                setFilters({
                  search: '',
                  selectedProviders: [],
                  selectedModalities: [],
                  selectedAccess: [],
                  selectedContext: '',
                  selectedStatus: '',
                  sortBy: 'popular',
                })
              }
              className="mt-3 px-4 py-1.5 text-xs font-mono text-[#ff3d5c] hover:underline font-semibold cursor-pointer"
            >
              {t.filters.resetFilters}
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedModels.map(model => {
              const modelKey = getModelKey(model);
              const isCompared = compareList.some(m => getModelKey(m) === modelKey);
              return (
                <ModelCard
                  key={modelKey}
                  model={model}
                  onSelect={setSelectedModel}
                  isCompared={isCompared}
                  onToggleCompare={toggleCompare}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {displayedModels.map(model => {
              const modelKey = getModelKey(model);
              const isCompared = compareList.some(m => getModelKey(m) === modelKey);
              return (
                <ModelListItem
                  key={modelKey}
                  model={model}
                  onSelect={setSelectedModel}
                  isCompared={isCompared}
                  onToggleCompare={toggleCompare}
                />
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {displayedModels.length < filteredModels.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setDisplayCount(prev => prev + 36)}
              className="px-6 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-[#ff3d5c] dark:hover:border-[#ff3d5c] text-neutral-800 dark:text-neutral-200 font-mono text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer"
            >
              {t.pagination.loadMore} ({filteredModels.length - displayedModels.length} {t.pagination.remaining})
            </button>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      <ModelDetailModal
        model={selectedModel}
        onClose={() => setSelectedModel(null)}
      />

      {/* Compare Modal */}
      <CompareModal
        models={compareList}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemove={removeCompare}
        onClear={clearCompare}
      />

      {/* Floating Side-by-Side Action Pill: Mobile / Smaller screens only (sm:hidden) */}
      {compareList.length > 0 && !isCompareOpen && (
        <div className="sm:hidden fixed bottom-5 inset-x-4 z-40 flex justify-center pointer-events-none">
          <button
            onClick={() => setIsCompareOpen(true)}
            className="pointer-events-auto w-full max-w-sm flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ff3d5c] text-white font-mono text-xs font-bold shadow-2xl hover:bg-[#e02e4c] active:scale-98 transition-all cursor-pointer border border-[#ff3d5c]"
          >
            <Scale className="w-4 h-4" />
            <span>{t.compare.sideBySide} ({compareList.length}/3)</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};
