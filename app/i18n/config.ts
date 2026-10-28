export const locales = ['en', 'es', 'pt', 'de', 'fr', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, { label: string; short: string; flag: string }> = {
  en: { label: 'English',    short: 'EN', flag: '🇬🇧' },
  es: { label: 'Español',    short: 'ES', flag: '🇪🇸' },
  pt: { label: 'Português',  short: 'PT', flag: '🇧🇷' },
  de: { label: 'Deutsch',    short: 'DE', flag: '🇩🇪' },
  fr: { label: 'Français',   short: 'FR', flag: '🇫🇷' },
  zh: { label: '中文',        short: '中文', flag: '🇨🇳' },
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Prefix an app path with the active locale: ('/tours', 'es') → '/es/tours' */
export const localePath = (path: string, locale: Locale): string => {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  const clean = path === '/' ? '' : path;
  return `/${locale}${clean}`;
};
