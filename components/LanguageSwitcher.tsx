'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { locales, localeNames, isLocale, type Locale } from '@/app/i18n/config';
import { useLocale, useT } from '@/app/i18n/LocaleProvider';

const COOKIE = 'rioexplore-locale';

/** Swap the locale segment of the current path: /es/tours → /pt/tours */
function repath(pathname: string, next: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts[0] = next;
  else parts.unshift(next);
  return `/${parts.join('/')}`;
}

export default function LanguageSwitcher({
  onDark = false,
  variant = 'dropdown',
}: {
  onDark?: boolean;
  variant?: 'dropdown' | 'inline';
}) {
  const locale = useLocale();
  const d = useT();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    // Remember the choice so the middleware stops guessing from the browser.
    document.cookie = `${COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
    setOpen(false);
    router.push(repath(pathname, next));
  };

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2" role="group" aria-label={d.nav.language}>
        {locales.map(l => (
          <button
            key={l}
            type="button"
            onClick={() => choose(l)}
            aria-current={l === locale ? 'true' : undefined}
            className={`min-h-[44px] px-4 rounded-full text-sm font-semibold border transition-colors duration-200 ${
              l === locale
                ? 'bg-ink text-cream border-ink'
                : 'bg-transparent text-ink-soft border-sand-dark hover:border-ink/40'
            }`}
          >
            <span aria-hidden="true" className="mr-1.5">{localeNames[l].flag}</span>
            {localeNames[l].short}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={d.nav.language}
        className={`min-h-[40px] px-3.5 rounded-full font-semibold text-sm flex items-center gap-1.5 border transition-all duration-300 ${
          onDark
            ? 'text-cream border-cream/30 hover:bg-cream/15'
            : 'text-ink-soft border-sand-dark hover:border-ink/40 hover:text-ink'
        }`}
      >
        <span aria-hidden="true">{localeNames[locale].flag}</span>
        {localeNames[locale].short}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            role="listbox"
            className="absolute right-0 top-full mt-2 w-44 bg-cream border border-sand rounded-2xl shadow-lift overflow-hidden py-1.5 z-50"
          >
            {locales.map(l => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => choose(l)}
                  className={`w-full min-h-[44px] px-4 flex items-center gap-2.5 text-sm transition-colors ${
                    l === locale
                      ? 'text-brazilian-green font-semibold bg-brazilian-green/[0.07]'
                      : 'text-ink-soft hover:bg-sand/50'
                  }`}
                >
                  <span aria-hidden="true">{localeNames[l].flag}</span>
                  {localeNames[l].label}
                  {l === locale && (
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
