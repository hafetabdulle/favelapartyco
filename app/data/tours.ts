/**
 * Structural tour data only — anything language-dependent (titles, descriptions,
 * durations, "includes" lists, add-on names) lives in app/i18n/dictionaries.
 * Prices stay here because they are the same in every language.
 */

export type CategoryId =
  | 'nightlife'
  | 'rio-culture'
  | 'adventure'
  | 'outdoors'
  | 'local';

export const categoryIds: CategoryId[] = [
  'nightlife',
  'rio-culture',
  'adventure',
  'outdoors',
  'local',
];

export type TourId =
  // Nightlife
  | 'pubcrawl-favela-party'
  | 'botafogo-bar-crawl'
  | 'pedra-do-sal-samba'
  | 'ipanema-bar-crawl'
  | 'rocinha-rooftop-bbq'
  // Rio & Culture
  | 'christ-redeemer-ticket'
  | 'christ-selaron-steps'
  | 'rio-full-day'
  | 'sunrise-nature-landmarks'
  | 'feira-da-gloria'
  | 'full-sunday-eat-drink-shop'
  | 'football-maracana'
  | 'vidigal-moto-tour'
  // Adventure & Adrenaline
  | 'hang-gliding'
  | 'paragliding'
  | 'helicopter-doors-off'
  | 'helicopter-doors-on'
  // Outdoors & Nature
  | 'morro-dois-irmaos-sunrise'
  | 'pedra-bonita-picnic'
  | 'sunrise-waterfall'
  | 'rio-ebike-tour'
  | 'sunrise-paddleboarding'
  | 'girls-only-ipanema'
  | 'joatinga-hidden-beach'
  | 'surf-lesson-arpoador'
  | 'futevolei-class'
  | 'sugarloaf-hike'
  // Local Experiences
  | 'rocinha-favela-tour'
  | 'mini-rocinha-drone'
  | 'cria-hairstyle-makeover';

export type BadgeId = 'Most Popular' | 'Premium';

export interface Tour {
  id: TourId;
  category: CategoryId;
  /** Shown as-is in every language. Omitted when the price is copy ("Depends on the match"). */
  price?: string;
  /** Add-on surcharges, in the same order as the add-on names in the dictionary. */
  addonPrices?: string[];
  photos: string[];
  badge?: BadgeId;
}

/** Build the photo paths for a tour gallery: /images/tours/<slug>/01.jpg … */
const gallery = (slug: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `/images/tours/${slug}/${String(i + 1).padStart(2, '0')}.jpg`);

export const tours: Tour[] = [
  /* ─── NIGHTLIFE ─── */
  { id: 'pubcrawl-favela-party', category: 'nightlife', price: 'R$170', photos: gallery('pubcrawl-favela-party', 5), badge: 'Most Popular' },
  { id: 'botafogo-bar-crawl',    category: 'nightlife', price: 'R$100', photos: gallery('botafogo-bar-crawl', 5) },
  { id: 'pedra-do-sal-samba',    category: 'nightlife', price: 'R$190', photos: gallery('pedra-do-sal-samba', 5), badge: 'Most Popular' },
  { id: 'ipanema-bar-crawl',     category: 'nightlife', price: 'R$100', photos: gallery('ipanema-bar-crawl', 3) },
  { id: 'rocinha-rooftop-bbq',   category: 'nightlife', price: 'R$150', photos: gallery('rocinha-rooftop-bbq', 4) },

  /* ─── RIO & CULTURE ─── */
  { id: 'christ-redeemer-ticket',     category: 'rio-culture', price: 'R$450', photos: gallery('christ-redeemer-ticket', 5) },
  { id: 'christ-selaron-steps',       category: 'rio-culture', price: 'R$555', photos: gallery('christ-selaron-steps', 3) },
  { id: 'rio-full-day',               category: 'rio-culture', price: 'R$680', photos: gallery('rio-full-day', 5) },
  { id: 'sunrise-nature-landmarks',   category: 'rio-culture', price: 'R$400', photos: gallery('sunrise-nature-landmarks', 4) },
  { id: 'feira-da-gloria',            category: 'rio-culture', price: 'R$170', photos: gallery('feira-da-gloria', 5) },
  { id: 'full-sunday-eat-drink-shop', category: 'rio-culture', price: 'R$180', photos: gallery('full-sunday-eat-drink-shop', 3) },
  { id: 'football-maracana',          category: 'rio-culture', photos: gallery('football-maracana', 5) },
  { id: 'vidigal-moto-tour',          category: 'rio-culture', price: 'R$190', photos: ['/images/IMG_9230.JPG'] },

  /* ─── ADVENTURE & ADRENALINE ─── */
  { id: 'hang-gliding',         category: 'adventure', price: 'R$1,300', addonPrices: ['R$300'], photos: gallery('hang-gliding', 5) },
  { id: 'paragliding',          category: 'adventure', price: 'R$1,300', addonPrices: ['R$300'], photos: [...gallery('paragliding', 1), '/images/paragliding.jpg'] },
  { id: 'helicopter-doors-off', category: 'adventure', price: 'R$1,300', photos: gallery('helicopter-doors-off', 5), badge: 'Premium' },
  { id: 'helicopter-doors-on',  category: 'adventure', price: 'R$1,990', photos: gallery('helicopter-doors-on', 4) },

  /* ─── OUTDOORS & NATURE ─── */
  { id: 'morro-dois-irmaos-sunrise', category: 'outdoors', price: 'R$190', photos: gallery('morro-dois-irmaos-sunrise', 5), badge: 'Most Popular' },
  { id: 'pedra-bonita-picnic',       category: 'outdoors', price: 'R$250', photos: gallery('pedra-bonita-picnic', 5) },
  { id: 'sunrise-waterfall',         category: 'outdoors', price: 'R$300', photos: gallery('sunrise-waterfall', 3) },
  { id: 'rio-ebike-tour',            category: 'outdoors', price: 'R$400', photos: gallery('rio-ebike-tour', 5) },
  { id: 'sunrise-paddleboarding',    category: 'outdoors', price: 'R$190', photos: gallery('sunrise-paddleboarding', 5) },
  { id: 'girls-only-ipanema',        category: 'outdoors', price: 'R$150', photos: gallery('girls-only-ipanema', 4) },
  { id: 'joatinga-hidden-beach',     category: 'outdoors', price: 'R$150', photos: gallery('joatinga-hidden-beach', 3) },
  { id: 'surf-lesson-arpoador',      category: 'outdoors', price: 'R$250', photos: gallery('surf-lesson-arpoador', 4) },
  { id: 'futevolei-class',           category: 'outdoors', price: 'R$250', photos: gallery('futevolei-class', 1) },
  { id: 'sugarloaf-hike',            category: 'outdoors', price: 'R$300', photos: ['/images/sugarloaf.jpg'] },

  /* ─── LOCAL EXPERIENCES ─── */
  { id: 'rocinha-favela-tour',     category: 'local', price: 'R$220', addonPrices: ['R$200'], photos: gallery('rocinha-favela-tour', 5), badge: 'Most Popular' },
  { id: 'mini-rocinha-drone',      category: 'local', price: 'R$280', photos: gallery('mini-rocinha-drone', 8) },
  { id: 'cria-hairstyle-makeover', category: 'local', price: 'R$450', photos: gallery('cria-hairstyle-makeover', 5) },
];

export const toursByCategory = (id: CategoryId) => tours.filter(t => t.category === id);
