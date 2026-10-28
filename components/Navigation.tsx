'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import L from './L';
import LanguageSwitcher from './LanguageSwitcher';
import PlatformLinks from './PlatformLinks';
import { useT } from '@/app/i18n/LocaleProvider';
import { isLocale } from '@/app/i18n/config';

/** Routes whose hero is a full-bleed photo, so the nav can sit on it in white. */
const PHOTO_HERO_ROUTES = ['/', '/private-experiences'];

/** '/pt/private-experiences' → '/private-experiences' */
function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts.shift();
  return `/${parts.join('/')}`;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const d = useT();

  /** True only when the nav is floating over a dark photo hero. */
  const onDark = !scrolled && PHOTO_HERO_ROUTES.includes(stripLocale(pathname));
  /** The mobile menu lays a cream sheet under the nav, so the mark has to go dark. */
  const markDark = onDark && !isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // Close the mobile menu when the route changes (e.g. after a language swap).
  useEffect(() => setIsOpen(false), [pathname]);

  const navLinks = [
    { href: '/',                    label: d.nav.home },
    { href: '/tours',               label: d.nav.tours },
    { href: '/private-experiences', label: d.nav.concierge },
    { href: '/contact',             label: d.nav.contact },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          onDark ? 'bg-transparent' : 'bg-cream/85 backdrop-blur-xl border-b border-sand'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 sm:h-28 overflow-visible">
            {/* The logo art has a lot of transparent padding, so the image box is much
                taller than the wordmark. Keep the clickable area to the nav bar itself
                and let the art overflow visually, or it swallows clicks on the hero. */}
            <L
              href="/"
              aria-label={d.nav.home_aria}
              className="relative flex items-center h-20 w-44 sm:w-52 md:w-60 flex-shrink-0"
            >
              <Image
                src="/images/rio.png"
                alt="Rio Explore"
                width={440}
                height={440}
                className={`pointer-events-none absolute left-[-1.25rem] sm:left-[-1.5rem] top-1/2 -translate-y-1/2 h-36 sm:h-44 md:h-52 w-auto max-w-none transition-[filter] duration-500 ${
                  markDark ? 'brightness-0 invert drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]' : ''
                }`}
                priority
              />
            </L>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(link => (
                <L
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    onDark
                      ? 'text-cream/85 hover:text-cream'
                      : 'text-ink-soft hover:text-brazilian-green'
                  }`}
                >
                  {link.label}
                </L>
              ))}

              <LanguageSwitcher onDark={onDark} />

              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[40px] px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center ${
                  onDark
                    ? 'bg-cream/12 backdrop-blur-sm text-cream border border-cream/30 hover:bg-cream/22'
                    : 'bg-ink text-cream hover:bg-brazilian-green'
                }`}
              >
                {d.nav.whatsapp}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200 ${
                onDark ? 'hover:bg-cream/15' : 'hover:bg-sand/60'
              }`}
              aria-label={isOpen ? d.nav.closeMenu : d.nav.openMenu}
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 rounded-full origin-center transition-all ${
                    markDark ? 'bg-cream' : 'bg-ink'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-full h-0.5 rounded-full transition-all ${
                    markDark ? 'bg-cream' : 'bg-ink'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 rounded-full origin-center transition-all ${
                    markDark ? 'bg-cream' : 'bg-ink'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-cream z-40 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full gap-7 px-4 py-28">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <L
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl font-semibold text-ink hover:text-brazilian-green transition-colors duration-200"
                  >
                    {link.label}
                  </L>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="pt-4"
              >
                <a
                  href="https://wa.me/5521998477858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[54px] px-10 bg-brazilian-green text-white rounded-full font-semibold text-lg hover:bg-brazilian-green-dark transition-colors duration-200 shadow-banner"
                >
                  {d.nav.whatsapp}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08 }}
                className="pt-4"
              >
                <PlatformLinks tone="light" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 2) * 0.08 }}
                className="pt-2 flex flex-col items-center gap-3"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink-faint">
                  {d.nav.language}
                </span>
                <LanguageSwitcher variant="inline" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
