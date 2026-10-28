import type { Locale } from './config';
import type { Dictionary } from './dictionaries/en';
import en from './dictionaries/en';
import es from './dictionaries/es';
import pt from './dictionaries/pt';
import de from './dictionaries/de';
import fr from './dictionaries/fr';
import zh from './dictionaries/zh';

const dictionaries: Record<Locale, Dictionary> = { en, es, pt, de, fr, zh };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale] ?? en;

export type { Dictionary };
export * from './config';
