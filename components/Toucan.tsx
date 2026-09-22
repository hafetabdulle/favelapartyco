'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CODE = 'WELCOMETORIO5';
const STORAGE_KEY = 'rioexplore-toucan-found';

const ToucanBird = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
    {/* tail */}
    <path d="M16 46c-6 3-11 9-13 16 6 1 13-1 18-5l-5-11Z" fill="#14100F" />
    {/* body */}
    <ellipse cx="38" cy="45" rx="22" ry="20" fill="#1C1917" />
    {/* wing */}
    <path d="M30 34c11-3 22 2 26 12-6 8-19 10-28 4-3-6-2-13 2-16Z" fill="#332F2C" />
    {/* head */}
    <circle cx="52" cy="30" r="16" fill="#1C1917" />
    {/* throat patch */}
    <path d="M46 40c6-4 14-4 19 0-1 7-7 11-13 10-4-1-6-5-6-10Z" fill="#FCE96A" />
    {/* beak — upper mandible */}
    <path d="M60 21c15-2 30 2 37 9H60V21Z" fill="#FDB913" />
    {/* beak — lower mandible */}
    <path d="M60 30h37c-7 7-22 10-37 8V30Z" fill="#F26B21" />
    {/* beak tip */}
    <path d="M91.5 26.5c2.3 1 4.1 2.3 5.5 3.5-1.3 1.3-3.1 2.4-5.3 3.4a24 24 0 0 0-.2-6.9Z" fill="#141210" />
    {/* eye */}
    <circle cx="54" cy="26" r="5.5" fill="#7DD3FC" />
    <circle cx="55" cy="26" r="2.8" fill="#0C0A09" />
    <circle cx="56.2" cy="24.8" r="1" fill="#fff" />
    {/* feet */}
    <path d="M34 64v6M44 64v6" stroke="#F26B21" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function Toucan() {
  const [open, setOpen] = useState(false);
  const [found, setFound] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') setFound(true);
    } catch {
      /* private browsing — just show it again */
    }
  }, []);

  const reveal = () => {
    setOpen(true);
    setFound(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the code is on screen anyway */
    }
  };

  if (hidden) return null;

  return (
    <>
      {/* Perched toucan */}
      <motion.button
        type="button"
        onClick={reveal}
        aria-label="A little toucan — tap it"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="fixed bottom-4 left-2.5 sm:bottom-5 sm:left-6 z-40 w-12 h-10 sm:w-20 sm:h-16 drop-shadow-lg"
      >
        <motion.div
          animate={{ y: [0, -7, 0], rotate: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="w-full h-full hover:scale-110 transition-transform duration-300"
        >
          <ToucanBird className="w-full h-full" />
        </motion.div>
        {!found && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brazilian-yellow opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brazilian-yellow" />
          </span>
        )}
      </motion.button>

      {/* Reward modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-cream rounded-[1.75rem] max-w-sm w-full p-7 sm:p-9 text-center shadow-lift grain"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full hover:bg-sand flex items-center justify-center text-ink-faint hover:text-ink transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <ToucanBird className="w-24 h-20 mx-auto mb-4" />

              <h3 className="font-display font-semibold text-ink text-3xl mb-2">
                You caught the toucan!
              </h3>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
                Here&apos;s <span className="font-semibold text-brazilian-green">5% off</span> any experience.
                Just send us this code when you book.
              </p>

              <button
                type="button"
                onClick={copy}
                className="w-full min-h-[56px] rounded-2xl border-2 border-dashed border-brazilian-green bg-brazilian-green/5 hover:bg-brazilian-green/10 transition-colors flex items-center justify-center gap-3 mb-4"
              >
                <span className="font-mono font-bold tracking-widest text-lg sm:text-xl text-brazilian-green-dark">{CODE}</span>
                <span className="text-xs font-semibold text-brazilian-green">{copied ? 'Copied!' : 'Tap to copy'}</span>
              </button>

              <a
                href={`https://wa.me/5521998477858?text=${encodeURIComponent(`Hi! I found the toucan 🦜 — I'd like to use code ${CODE}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-h-[52px] py-3.5 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base transition-colors duration-200 flex items-center justify-center"
              >
                Book with 5% off
              </a>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setHidden(true);
                }}
                className="text-xs text-ink-faint hover:text-ink-soft mt-4 transition-colors"
              >
                Don&apos;t show the toucan again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
