'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from './config';
import type { Dictionary } from './dictionaries/en';

interface LocaleContextValue {
  locale: Locale;
  d: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, d: dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside a <LocaleProvider>');
  return ctx;
}

/** The active locale code, e.g. 'pt'. */
export const useLocale = (): Locale => useLocaleContext().locale;

/** The active dictionary. Convention: `const d = useT();` then `d.nav.tours`. */
export const useT = (): Dictionary => useLocaleContext().d;
