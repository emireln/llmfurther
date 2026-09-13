import { Language } from '../types';

interface Replacement {
  pattern: RegExp;
  replacement: string;
}

const PT_REPLACEMENTS: Replacement[] = [
  // Full phrases and sentences
  { pattern: /Free access tier available directly with provider\./gi, replacement: 'Plano de acesso gratuito disponível diretamente com o provedor.' },
  { pattern: /Free access tier available/gi, replacement: 'Plano de acesso gratuito disponível' },
  { pattern: /Free access tier/gi, replacement: 'Plano de acesso gratuito' },
  { pattern: /Free tier available/gi, replacement: 'Plano gratuito disponível' },
  { pattern: /Free Tier/g, replacement: 'Plano Gratuito' },
  { pattern: /Classic list of free LLM APIs and trial-credit providers/gi, replacement: 'Lista clássica de APIs gratuitas de LLM e provedores com créditos' },
  { pattern: /most are paid, some are free/gi, replacement: 'a maioria é paga, alguns são gratuitos' },
  { pattern: /free for some models/gi, replacement: 'gratuito para alguns modelos' },
  { pattern: /See provider page/gi, replacement: 'Consulte a página do provedor' },
  { pattern: /Free mode and Labs/gi, replacement: 'Modo gratuito e Labs' },
  { pattern: /Unlimited · runs on your own hardware/gi, replacement: 'Ilimitado · executa em seu próprio hardware' },
  { pattern: /runs on your own hardware/gi, replacement: 'executa em seu próprio hardware' },
  { pattern: /Free plan · session \+ weekly caps/gi, replacement: 'Plano grátis · limites de sessão e semanais' },
  { pattern: /Small dev tier · light use/gi, replacement: 'Plano dev básico · uso leve' },
  { pattern: /Free Experiment plan/gi, replacement: 'Plano Experimental Gratuito' },

  // Contextual phrases
  { pattern: /of credits per month/gi, replacement: 'em créditos por mês' },
  { pattern: /of credits per day/gi, replacement: 'em créditos por dia' },
  { pattern: /of usage per month/gi, replacement: 'de uso por mês' },
  { pattern: /of usage per day/gi, replacement: 'de uso por dia' },
  { pattern: /about 1 request\/min per model/gi, replacement: 'cerca de 1 req/min por modelo' },
  { pattern: /see provider limits/gi, replacement: 'consulte os limites do provedor' },
  { pattern: /with standard GitHub account/gi, replacement: 'com conta padrão do GitHub' },
  { pattern: /ultra-fast LPU inference/gi, replacement: 'inferência ultra-rápida na LPU' },
  { pattern: /instant inference on Groq LPU/gi, replacement: 'inferência instantânea na LPU Groq' },
  { pattern: /Free tier inference on standard speed tier/gi, replacement: 'Inferência gratuita na velocidade padrão' },
  { pattern: /free credits upon verification/gi, replacement: 'em créditos grátis após verificação' },
  { pattern: /Completely free tier access on SiliconCloud/gi, replacement: 'Acesso totalmente gratuito na SiliconCloud' },
  { pattern: /Daily free query quota via OpenRouter/gi, replacement: 'Cota diária de consultas gratuitas via OpenRouter' },
  { pattern: /Free access tier via OpenRouter free pool/gi, replacement: 'Acesso gratuito pelo pool livre do OpenRouter' },
  { pattern: /Free tier routing on OpenRouter/gi, replacement: 'Roteamento gratuito no OpenRouter' },
  { pattern: /Free forever via OpenRouter :free router/gi, replacement: 'Sempre grátis via OpenRouter :free' },
  { pattern: /trial tier/gi, replacement: 'plano de teste' },
  { pattern: /trial credits upon registration/gi, replacement: 'créditos de teste após o cadastro' },
  { pattern: /Gemini quotas vary by model/gi, replacement: 'Cotas do Gemini variam por modelo' },
  { pattern: /quotas vary by model/gi, replacement: 'cotas variam por modelo' },
  { pattern: /Flash models only/gi, replacement: 'apenas modelos Flash' },
  { pattern: /models only/gi, replacement: 'apenas modelos' },
  { pattern: /models at zero cost/gi, replacement: 'modelos a custo zero' },
  { pattern: /models at €0/gi, replacement: 'modelos a €0' },
  { pattern: /models at \$0/gi, replacement: 'modelos a $0' },
  { pattern: /no key needed/gi, replacement: 'sem necessidade de chave' },
  { pattern: /no key required/gi, replacement: 'sem necessidade de chave' },
  { pattern: /no card needed/gi, replacement: 'sem necessidade de cartão' },
  { pattern: /no card required/gi, replacement: 'sem necessidade de cartão' },
  { pattern: /Zen key required/gi, replacement: 'requer chave Zen' },
  { pattern: /\bno card\b/gi, replacement: 'sem cartão' },
  { pattern: /\bno key\b/gi, replacement: 'sem chave' },
  { pattern: /\bwith key\b/gi, replacement: 'com chave' },
  { pattern: /\bUp to\b/g, replacement: 'Até' },
  { pattern: /\bup to\b/g, replacement: 'até' },

  // Units and rates
  { pattern: /requests per month/gi, replacement: 'requisições por mês' },
  { pattern: /requests per day/gi, replacement: 'requisições por dia' },
  { pattern: /requests per minute/gi, replacement: 'requisições por minuto' },
  { pattern: /requests\/month/gi, replacement: 'requisições/mês' },
  { pattern: /requests\/day/gi, replacement: 'requisições/dia' },
  { pattern: /requests\/min/gi, replacement: 'requisições/min' },
  { pattern: /req\/month/gi, replacement: 'req/mês' },
  { pattern: /req\/day/gi, replacement: 'req/dia' },
  { pattern: /req\/min/gi, replacement: 'req/min' },
  { pattern: /req\/hr/gi, replacement: 'req/h' },
  { pattern: /tokens\/month/gi, replacement: 'tokens/mês' },
  { pattern: /tokens\/day/gi, replacement: 'tokens/dia' },
  { pattern: /tokens\/model/gi, replacement: 'tokens/modelo' },
  { pattern: /neurons per day/gi, replacement: 'neurônios por dia' },
  { pattern: /neurons\/day/gi, replacement: 'neurônios/dia' },
  { pattern: /free tokens/gi, replacement: 'tokens gratuitos' },
  { pattern: /free req\/day/gi, replacement: 'req grátis/dia' },
  { pattern: /Free tier\b/g, replacement: 'Plano gratuito' },
  { pattern: /free tier\b/g, replacement: 'plano gratuito' },
  { pattern: /Free plan\b/g, replacement: 'Plano gratuito' },
  { pattern: /free plan\b/g, replacement: 'plano gratuito' },
  { pattern: /Free forever\b/g, replacement: 'Sempre grátis' },
  { pattern: /free forever\b/g, replacement: 'sempre grátis' },
  { pattern: /Free sandbox\b/g, replacement: 'Sandbox gratuito' },
  { pattern: /\bUnlimited\b/g, replacement: 'Ilimitado' },
  { pattern: /\bunlimited\b/g, replacement: 'ilimitado' },
  { pattern: /\bFree ·/g, replacement: 'Grátis ·' },
  { pattern: /\bFree:\b/g, replacement: 'Grátis:' },
  { pattern: /\bFree\b/g, replacement: 'Grátis' },
  { pattern: /\bper model\b/gi, replacement: 'por modelo' },
  { pattern: /\bper month\b/gi, replacement: 'por mês' },
  { pattern: /\bper day\b/gi, replacement: 'por dia' },
  { pattern: /\bdays\b/gi, replacement: 'dias' },
  { pattern: /\banonymous\b/gi, replacement: 'anônimo' }
];

export function translateQuota(quota: string | undefined, lang: Language): string {
  if (!quota) return '';
  if (lang !== 'pt-BR') return quota;

  let result = quota;
  for (const { pattern, replacement } of PT_REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}
