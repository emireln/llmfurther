export type ModalityType = 'text' | 'code' | 'image' | 'video' | 'audio' | 'embedding' | string;

export type AccessType = 
  | 'free-tier' 
  | 'free-forever' 
  | 'signup-credits' 
  | 'daily-quota'
  | 'no-card' 
  | 'card-required' 
  | 'phone-required' 
  | 'no-signup' 
  | 'open-source'
  | 'data-training'
  | string;

export type ModelStatus = 'operational' | 'degraded' | 'maintenance' | 'major' | string;

export interface ModelItem {
  id: string;
  name?: string;
  provider: string;
  providerSlug: string;
  type: ModalityType[];
  access: string[];
  status: ModelStatus;
  freeLimit: string;
  tags?: string[];
  url?: string;
  sourceUrl?: string;
  addedAt?: string;
  tier?: string;
  context?: string;
  sweScore?: string;
  cardBg?: string;
  cardTheme?: string;
  cardBgInvert?: boolean;
  [key: string]: any;
}

export interface ProviderItem {
  slug: string;
  name: string;
  models_count: number;
  types: string[];
  access_modes: string[];
  free_limits: string[];
  urls: string[];
  sample_models: string[];
  [key: string]: any;
}

export type Language = 'en' | 'pt-BR';
export type Theme = 'dark' | 'light';

export interface FilterState {
  search: string;
  selectedProviders: string[];
  selectedModalities: string[];
  selectedAccess: string[];
  selectedContext: string;
  selectedStatus: string;
  sortBy: 'popular' | 'name' | 'provider' | 'context';
}

export const getModelKey = (model: ModelItem): string => `${model.providerSlug || 'p'}::${model.id}`;
