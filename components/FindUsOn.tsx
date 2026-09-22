'use client';

import { motion } from 'framer-motion';
import { reviewPlatforms, otherPlatforms } from './PlatformLogos';
import SectionHeading from './SectionHeading';
import { IconArrow } from './Icons';

const ease = [0.16, 1, 0.3, 1] as const;

export default function FindUsOn() {
  return (
    <section id="find-us-on" className="py-20 sm:py-32 bg-cream-deep scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Book anywhere"
          align="center"
          subtitle="We're on every platform you already trust — tap a logo to read our reviews or book there instead."
          className="mb-12 sm:mb-16"
        >
          Find us <em>on</em>
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {reviewPlatforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group bg-white rounded-3xl border border-sand p-8 sm:p-10 flex flex-col items-center text-center shadow-card hover:shadow-lift hover:-translate-y-1.5 hover:border-sand-dark transition-all duration-500 ease-out-expo"
            >
              <p.Mark className="w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 mb-6 transition-transform duration-500 ease-out-expo group-hover:scale-[1.07]" />
              <h3 className="font-display font-semibold text-ink text-xl sm:text-2xl">{p.name}</h3>
              <p className="text-ink-muted text-sm mt-1.5 leading-relaxed">{p.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brazilian-green">
                Visit profile
                <IconArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
        >
          <span className="text-ink-faint text-[0.7rem] uppercase tracking-[0.18em] font-semibold">Also on</span>
          {otherPlatforms.map(p => (
            <div key={p.name} className="flex items-center gap-2.5">
              <p.Mark className="w-7 h-7" />
              <span className="text-ink-soft text-sm font-medium">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
