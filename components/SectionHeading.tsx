'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  /** Small caps label above the heading, e.g. "02 — Nightlife" */
  eyebrow?: string;
  /** Heading text. Wrap the accented words in <em> for the serif italic. */
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  /** Light text for use on the dark sections. */
  tone?: 'dark' | 'light';
  size?: 'lg' | 'md';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  children,
  subtitle,
  align = 'left',
  tone = 'dark',
  size = 'lg',
  className = '',
}: Props) {
  const centered = align === 'center';
  const fontSize = size === 'lg' ? 'clamp(2.3rem, 5vw, 4.25rem)' : 'clamp(1.9rem, 3.6vw, 3rem)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${centered ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${centered ? 'justify-center' : ''} ${tone === 'light' ? 'text-brazilian-yellow' : ''}`}>
          <span className={`h-px w-6 ${tone === 'light' ? 'bg-brazilian-yellow/60' : 'bg-brazilian-green/50'}`} />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-semibold leading-[1.02] text-balance ${
          tone === 'light' ? 'text-cream' : 'text-ink'
        }`}
        style={{ fontSize }}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty ${
            tone === 'light' ? 'text-cream/65' : 'text-ink-muted'
          } ${centered ? 'mx-auto' : 'max-w-xl'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
