'use client';

import { motion } from 'framer-motion';
import { reviewPlatforms, otherPlatforms } from './PlatformLogos';

export default function FindUsOn() {
  return (
    <section id="find-us-on" className="py-16 sm:py-28 bg-neutral-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 text-center"
        >
          <div className="w-10 h-1 bg-[#009739] mb-5 rounded-full mx-auto" />
          <h2
            className="font-display font-semibold text-neutral-900 leading-[1.05]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Find us <em className="italic text-[#009739]">on</em>
          </h2>
          <p className="text-neutral-500 mt-3 text-base sm:text-lg">
            Book with us wherever you like — tap a logo to see our profile and reviews
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {reviewPlatforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-3xl border border-neutral-200 p-7 sm:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300 transition-all duration-300"
            >
              <p.Mark className="w-20 h-20 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-105" />
              <h3 className="font-display font-semibold text-neutral-900 text-xl sm:text-2xl">{p.name}</h3>
              <p className="text-neutral-500 text-sm mt-1.5">{p.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#009739]">
                Visit profile
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          <span className="text-neutral-400 text-xs uppercase tracking-widest">Also on</span>
          {otherPlatforms.map(p => (
            <div key={p.name} className="flex items-center gap-2.5">
              <p.Mark className="w-8 h-8" />
              <span className="text-neutral-600 text-sm font-medium">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
