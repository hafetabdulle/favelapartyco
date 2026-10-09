import type { Locale } from './config';
import type { Dictionary } from './dictionaries/en';
import en from './dictionaries/en';
import es from './dictionaries/es';
import pt from './dictionaries/pt';

const dictionaries: Record<Locale, Dictionary> = { en, es, pt };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale] ?? en;

export type { Dictionary };
export * from './config';
