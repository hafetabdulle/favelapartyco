'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories, tours, type Tour } from '@/app/data/tours';
import TourGallery from '@/components/TourGallery';
import SectionHeading from '@/components/SectionHeading';
import { categoryIcons, IconCheck, IconClock, IconArrow, IconWhatsApp, IconCamera } from '@/components/Icons';

const ease = [0.16, 1, 0.3, 1] as const;

function TourCard({ tour, index }: { tour: Tour; index: number }) {
  return (
    <motion.article
      id={tour.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3), ease }}
      className="group bg-white rounded-[1.75rem] overflow-hidden flex flex-col border border-sand shadow-card hover:shadow-lift hover:border-sand-dark transition-all duration-500 ease-out-expo scroll-mt-44"
    >
      <div className="relative flex-shrink-0">
        <TourGallery
          photos={tour.photos}
          alt={tour.title}
          heightClass="h-[17rem] sm:h-[19rem]"
          sizes="(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 31vw"
        />
        {tour.badge && (
          <div
            className={`absolute top-4 left-4 z-10 text-[0.65rem] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full shadow-md ${
              tour.badge === 'Premium'
                ? 'bg-brazilian-yellow text-ink'
                : 'bg-brazilian-green text-white'
            }`}
          >
            {tour.badge}
          </div>
        )}
        {tour.photos.length > 1 && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-ink/40 backdrop-blur-md text-cream text-xs font-medium px-2.5 py-1.5 rounded-full nums">
            <IconCamera className="w-3.5 h-3.5" />
            {tour.photos.length}
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="font-display font-semibold text-ink leading-[1.15] text-[1.35rem] sm:text-2xl text-balance mb-4">
          {tour.title}
        </h3>

        {/* Price */}
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 mb-3">
          <span className="font-display font-bold text-brazilian-green text-[2.1rem] sm:text-[2.4rem] leading-none nums">
            {tour.price}
          </span>
          {tour.priceNote && (
            <span className="text-sm font-medium text-ink-muted">{tour.priceNote}</span>
          )}
        </div>

        {tour.duration && (
          <p className="text-sm text-ink-faint mb-5 flex items-center gap-1.5">
            <IconClock className="w-4 h-4" />
            {tour.duration}
          </p>
        )}

        <p className="text-[0.95rem] text-ink-soft leading-relaxed mb-6 flex-grow text-pretty">
          {tour.description}
        </p>

        {tour.includes && tour.includes.length > 0 && (
          <div className="mb-5">
            <p className="text-[0.65rem] font-bold text-ink-faint uppercase tracking-[0.16em] mb-2.5">Includes</p>
            <ul className="space-y-1.5">
              {tour.includes.map(item => (
                <li key={item} className="text-sm text-ink-soft flex items-start gap-2.5">
                  <IconCheck className="w-4 h-4 text-brazilian-green mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tour.addons && tour.addons.length > 0 && (
          <div className="mb-5 px-4 py-3.5 bg-cream rounded-2xl border border-sand">
            <p className="text-[0.65rem] font-bold text-ink-faint uppercase tracking-[0.16em] mb-1.5">Optional add-on</p>
            {tour.addons.map(addon => (
              <p key={addon.name} className="text-sm text-ink-soft">
                {addon.name} <span className="font-bold text-brazilian-green nums">+{addon.price}</span>
              </p>
            ))}
          </div>
        )}

        <a
          href={`https://wa.me/5521998477858?text=${encodeURIComponent(`Hi! I'm interested in the ${tour.title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[52px] bg-ink hover:bg-brazilian-green text-cream rounded-full font-semibold text-base text-center transition-colors duration-300 flex items-center justify-center gap-2 mt-auto"
        >
          Book Now
          <IconArrow className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default function ToursPage() {
  const [active, setActive] = useState<string>(categories[0].id);

  /* Highlight the category chip for whichever section is in view. */
  useEffect(() => {
    const sections = categories
      .map(c => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-5">
              <span className="h-px w-6 bg-brazilian-green/50" />
              30 experiences
            </p>
            <h1
              className="font-display font-semibold text-ink leading-[0.98] mb-6 text-balance"
              style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5rem)' }}
            >
              Every corner of Rio, <em className="text-brazilian-green">yours to explore</em>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl mb-7 text-pretty">
              Top adventures, iconic parties, and unforgettable experiences — led by young people who
              live and breathe this city.
            </p>
            <div className="flex items-start gap-3.5 max-w-xl rounded-2xl bg-pink-50 border border-pink-200/80 px-5 py-4">
              <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 12v9M9 18h6" />
              </svg>
              <p className="text-[0.95rem] text-ink-soft leading-relaxed">
                All experiences can be arranged as{' '}
                <span className="font-semibold text-pink-600">female-only groups</span> upon request,
                accompanied by a female guide.
              </p>
            </div>
          </motion.div>

          {/* Category index */}
          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="lg:col-span-5 hidden lg:block"
            aria-label="Browse by category"
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink-faint mb-1 pb-4 border-b border-sand">
              Browse by category
            </p>
            <ul>
              {categories.map((cat, i) => {
                const Icon = categoryIcons[cat.id];
                const count = tours.filter(t => t.category === cat.id).length;
                return (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className="group flex items-center gap-4 py-4 border-b border-sand hover:border-brazilian-green/50 transition-colors"
                    >
                      <span className="font-display text-sm text-ink-faint nums w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <Icon className="w-5 h-5 text-brazilian-green flex-shrink-0" />
                      <span className="font-display font-semibold text-xl text-ink group-hover:text-brazilian-green transition-colors flex-grow">
                        {cat.label}
                      </span>
                      <span className="text-sm text-ink-faint nums">{count}</span>
                      <IconArrow className="w-4 h-4 text-ink-faint group-hover:text-brazilian-green group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
          </div>
        </div>
      </section>

      {/* Sticky chips stay inside this wrapper so they stop at the last
          category rather than floating over the price list and footer. */}
      <div className="relative">
      {/* Category nav */}
      <div className="sticky top-24 sm:top-28 z-30 bg-cream/85 backdrop-blur-xl border-y border-sand">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar py-3">
            {categories.map(cat => {
              const Icon = categoryIcons[cat.id];
              const isActive = active === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex-shrink-0 inline-flex items-center gap-2 min-h-[42px] px-4 rounded-full text-sm font-medium border transition-all duration-300 ${
                    isActive
                      ? 'bg-ink text-cream border-ink'
                      : 'bg-transparent text-ink-soft border-sand-dark hover:border-ink/40 hover:text-ink'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category sections */}
      {categories.map((cat, ci) => {
        const list = tours.filter(t => t.category === cat.id);
        if (list.length === 0) return null;
        const Icon = categoryIcons[cat.id];
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-16 sm:py-24 scroll-mt-40 ${
              ci % 2 === 1 ? 'bg-white border-y border-sand/70' : 'bg-cream'
            }`}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <div className="flex items-start gap-5 mb-10 sm:mb-14">
                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-brazilian-green/10 text-brazilian-green items-center justify-center flex-shrink-0 mt-1">
                  <Icon className="w-7 h-7" />
                </div>
                <SectionHeading
                  eyebrow={`${String(ci + 1).padStart(2, '0')} — ${list.length} experiences`}
                  subtitle={cat.tagline}
                  size="md"
                >
                  {cat.label}
                </SectionHeading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                {list.map((tour, i) => (
                  <TourCard key={tour.id} tour={tour} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      </div>

      {/* Price Overview */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="At a glance"
            subtitle="Every experience and price in one place. All prices in Brazilian Reais."
            className="mb-12 sm:mb-16"
          >
            Quick <em>price list</em>
          </SectionHeading>

          <div className="space-y-10">
            {categories.map(cat => {
              const list = tours.filter(t => t.category === cat.id);
              if (list.length === 0) return null;
              return (
                <div key={cat.id}>
                  <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-faint mb-3 pb-3 border-b border-sand">
                    {cat.label}
                  </h3>
                  <ul>
                    {list.map(tour => (
                      <li key={tour.id}>
                        <a
                          href={`#${tour.id}`}
                          className="group flex items-baseline justify-between gap-4 py-3.5 border-b border-sand/60 hover:border-brazilian-green/40 transition-colors"
                        >
                          <span className="min-w-0">
                            <span className="text-[0.95rem] text-ink group-hover:text-brazilian-green transition-colors font-medium">
                              {tour.title}
                            </span>
                            {tour.duration && (
                              <span className="block text-xs text-ink-faint mt-0.5">{tour.duration}</span>
                            )}
                          </span>
                          <span className="text-right flex-shrink-0">
                            <span className="font-display font-bold text-ink text-lg nums">{tour.price}</span>
                            {tour.priceNote && (
                              <span className="block text-[0.7rem] text-ink-faint">{tour.priceNote}</span>
                            )}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 bg-brazilian-green-deep overflow-hidden grain">
        <div className="absolute -top-28 -left-20 w-[26rem] h-[26rem] bg-brazilian-green/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-[24rem] h-[24rem] bg-brazilian-yellow/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <h2
              className="font-display font-semibold text-cream leading-[1.02] mb-6 text-balance"
              style={{ fontSize: 'clamp(2.1rem, 5vw, 3.6rem)' }}
            >
              Can&apos;t decide? <em className="text-brazilian-yellow">We&apos;ll plan it for you</em>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed max-w-lg mx-auto mb-9 text-pretty">
              Our concierge service handles your whole stay — itinerary, 24/7 support, and every tour
              at a discounted rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
              <Link
                href="/private-experiences"
                className="min-h-[54px] px-10 bg-cream hover:bg-white text-brazilian-green-deep rounded-full font-bold text-base transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
              >
                View Concierge Service
              </Link>
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[54px] px-10 border border-cream/35 hover:bg-cream/10 text-cream rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <IconWhatsApp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
