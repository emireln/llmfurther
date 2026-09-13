import React from 'react';
import { FilterState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { CustomDropdown, DropdownOption } from '../common/CustomDropdown';
import { Tooltip } from '../common/Tooltip';
import { Search, X, RotateCcw, LayoutGrid, List } from 'lucide-react';

interface ModelFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalFiltered: number;
  totalModels: number;
  availableProviders: { slug: string; name: string }[];
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const ModelFilters: React.FC<ModelFiltersProps> = ({
  filters,
  onChange,
  totalFiltered,
  totalModels,
  availableProviders,
  viewMode,
  onViewModeChange,
}) => {
  const { t } = useLanguage();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, search: e.target.value });
  };

  const clearSearch = () => {
    onChange({ ...filters, search: '' });
  };

  const resetFilters = () => {
    onChange({
      search: '',
      selectedProviders: [],
      selectedModalities: [],
      selectedAccess: [],
      selectedContext: '',
      selectedStatus: '',
      sortBy: 'popular',
    });
  };

  const hasActiveFilters =
    Boolean(filters.search) ||
    filters.selectedProviders.length > 0 ||
    filters.selectedModalities.length > 0 ||
    filters.selectedAccess.length > 0 ||
    Boolean(filters.selectedContext) ||
    Boolean(filters.selectedStatus) ||
    filters.sortBy !== 'popular';

  // Provider options
  const providerOptions: DropdownOption[] = [
    { value: '', label: t.filters.all + ' ' + t.filters.provider },
    ...availableProviders.map(p => ({
      value: p.slug,
      label: p.name,
    })),
  ];

  // Access options
  const accessOptions: DropdownOption[] = [
    { value: '', label: t.filters.all + ' ' + t.filters.access },
    { value: 'free-forever', label: t.accessLabels['free-forever'] },
    { value: 'free-tier', label: t.accessLabels['free-tier'] },
    { value: 'daily-quota', label: t.accessLabels['daily-quota'] },
    { value: 'signup-credits', label: t.accessLabels['signup-credits'] },
    { value: 'no-card', label: t.accessLabels['no-card'] },
    { value: 'open-source', label: t.accessLabels['open-source'] },
  ];

  // Modality options
  const modalityOptions: DropdownOption[] = [
    { value: '', label: t.filters.all + ' ' + t.filters.modality },
    { value: 'text', label: t.modalities.text },
    { value: 'code', label: t.modalities.code },
    { value: 'image', label: t.modalities.image },
    { value: 'audio', label: t.modalities.audio },
    { value: 'embedding', label: t.modalities.embedding },
  ];

  // Context options
  const contextOptions: DropdownOption[] = [
    { value: '', label: t.filters.all + ' ' + t.filters.context },
    { value: '8k', label: '≥ 8K' },
    { value: '32k', label: '≥ 32K' },
    { value: '128k', label: '≥ 128K' },
    { value: '1m', label: '≥ 1M' },
  ];

  // Sort options
  const sortOptionsList: DropdownOption[] = [
    { value: 'popular', label: t.sortOptions.popular },
    { value: 'name', label: t.sortOptions.name },
    { value: 'context', label: t.sortOptions.context },
    { value: 'provider', label: t.sortOptions.provider },
  ];

  return (
    <div className="w-full space-y-3 mb-6 relative z-30">
      {/* Sleek Minimalist Tool Ribbon */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5">
        {/* Search Input: Solid borders & background */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-9 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-xs font-mono focus:outline-none focus:border-[#ff3d5c] dark:focus:border-[#ff3d5c] focus:ring-1 focus:ring-[#ff3d5c] transition-all"
          />
          {filters.search && (
            <button
              onClick={clearSearch}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Minimalist Dropdowns Row */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Provider Dropdown */}
          <CustomDropdown
            label={t.filters.provider}
            options={providerOptions}
            selectedValue={filters.selectedProviders[0] || ''}
            onChange={val => onChange({ ...filters, selectedProviders: val ? [val] : [] })}
          />

          {/* Access Dropdown */}
          <CustomDropdown
            label={t.filters.access}
            options={accessOptions}
            selectedValue={filters.selectedAccess[0] || ''}
            onChange={val => onChange({ ...filters, selectedAccess: val ? [val] : [] })}
          />

          {/* Modality Dropdown */}
          <CustomDropdown
            label={t.filters.modality}
            options={modalityOptions}
            selectedValue={filters.selectedModalities[0] || ''}
            onChange={val => onChange({ ...filters, selectedModalities: val ? [val] : [] })}
          />

          {/* Context Dropdown */}
          <CustomDropdown
            label={t.filters.context}
            options={contextOptions}
            selectedValue={filters.selectedContext || ''}
            onChange={val => onChange({ ...filters, selectedContext: val })}
          />

          {/* Sort Dropdown */}
          <CustomDropdown
            label={t.filters.sort}
            options={sortOptionsList}
            selectedValue={filters.sortBy}
            onChange={val => onChange({ ...filters, sortBy: val as FilterState['sortBy'] })}
          />

          {/* Clear Filters Button with Tooltip */}
          {hasActiveFilters && (
            <Tooltip content={t.filters.clearAll} position="top">
              <button
                onClick={resetFilters}
                className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-[#ff3d5c] hover:border-[#ff3d5c] transition-colors shrink-0 cursor-pointer shadow-xs"
                aria-label={t.filters.clearAll}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Streamlined Live Count Header & Grid/List Switcher */}
      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 px-0.5">
        <div className="flex items-center gap-2">
          <span>
            {t.filters.showing}{' '}
            <span className="font-bold text-neutral-900 dark:text-neutral-100">
              {totalFiltered}
            </span>{' '}
            {t.filters.of} {totalModels} {t.filters.models}
          </span>
          {hasActiveFilters && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d5c] animate-pulse" />
          )}
        </div>

        {/* Grid / List View Switcher */}
        <div className="flex items-center p-0.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 shadow-2xs">
          <Tooltip content={t.filters.gridView} position="top">
            <button
              onClick={() => onViewModeChange('grid')}
              aria-label={t.filters.gridView}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-neutral-800 text-[#ff3d5c] shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
          </Tooltip>
          <Tooltip content={t.filters.listView} position="top">
            <button
              onClick={() => onViewModeChange('list')}
              aria-label={t.filters.listView}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-neutral-800 text-[#ff3d5c] shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
