'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { href: '/',                    label: 'Home' },
    { href: '/tours',               label: 'Tours' },
    { href: '/private-experiences', label: 'Private Experiences' },
    { href: '/contact',             label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 sm:h-32 overflow-visible">
            {/* Logo */}
            <Link href="/" className="flex items-center overflow-visible">
              <Image
                src="/images/rio.png"
                alt="Rio Explore"
                width={440}
                height={110}
                className="h-28 sm:h-32 md:h-38 w-auto scale-110 sm:scale-125 origin-left"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-neutral-700 hover:text-[#009739]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[40px] px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center ${
                  scrolled
                    ? 'bg-[#009739] text-white hover:bg-[#006B28]'
                    : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25'
                }`}
              >
                WhatsApp Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200 ${
                scrolled ? 'hover:bg-neutral-100' : 'hover:bg-white/15'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 rounded-full origin-center transition-all ${
                    scrolled ? 'bg-neutral-800' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-full h-0.5 rounded-full transition-all ${
                    scrolled ? 'bg-neutral-800' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 rounded-full origin-center transition-all ${
                    scrolled ? 'bg-neutral-800' : 'bg-white'
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
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl font-semibold text-neutral-800 hover:text-[#009739] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="pt-6"
              >
                <a
                  href="https://wa.me/5521998477858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 bg-[#009739] text-white rounded-full font-semibold text-lg hover:bg-[#006B28] transition-colors duration-200 shadow-lg"
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
