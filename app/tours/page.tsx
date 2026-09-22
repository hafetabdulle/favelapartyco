'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories, tours, type Tour } from '@/app/data/tours';
import TourGallery from '@/components/TourGallery';

function TourCard({ tour, index }: { tour: Tour; index: number }) {
  return (
    <motion.div
      id={tour.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
      className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-400 border border-neutral-100 scroll-mt-28"
    >
      {/* Gallery */}
      <div className="relative flex-shrink-0">
        <TourGallery
          photos={tour.photos}
          alt={tour.title}
          heightClass="h-72 sm:h-80 lg:h-[22rem]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Badge */}
        {tour.badge && (
          <div
            className={`absolute top-4 left-4 z-10 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md ${
              tour.badge === 'Premium' ? 'bg-amber-400 text-amber-950' : 'bg-[#009739] text-white'
            }`}
          >
            {tour.badge}
          </div>
        )}
        {/* Photo count */}
        {tour.photos.length > 1 && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {tour.photos.length}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-display font-semibold text-neutral-900 leading-snug mb-3 text-lg sm:text-xl">
          {tour.title}
        </h3>

        {/* Price — large and prominent */}
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 mb-3">
          <span className="font-display font-bold text-[#009739] text-2xl sm:text-3xl leading-none">
            {tour.price}
          </span>
          {tour.priceNote && (
            <span className="text-sm font-medium text-neutral-500">{tour.priceNote}</span>
          )}
        </div>

        {tour.duration && (
          <p className="text-sm text-neutral-500 mb-4 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tour.duration}
          </p>
        )}

        <p className="text-sm sm:text-[0.95rem] text-neutral-600 leading-relaxed mb-5 flex-grow">
          {tour.description}
        </p>

        {tour.includes && tour.includes.length > 0 && (
          <div className="mb-4 space-y-1.5">
            <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wide">Includes</p>
            <ul className="space-y-1">
              {tour.includes.map((item, i) => (
                <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#009739] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tour.addons && tour.addons.length > 0 && (
          <div className="mb-4 p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
            <p className="text-xs font-semibold text-neutral-800 mb-1.5 uppercase tracking-wide">Optional add-on</p>
            {tour.addons.map((addon, i) => (
              <p key={i} className="text-sm text-neutral-600">
                {addon.name}: <span className="font-bold text-[#009739]">{addon.price}</span>
              </p>
            ))}
          </div>
        )}

        <a
          href={`https://wa.me/5521998477858?text=${encodeURIComponent(`Hi! I'm interested in the ${tour.title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[50px] py-3.5 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-semibold text-base text-center transition-all duration-200 flex items-center justify-center mt-auto"
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
}

export default function ToursPage() {
  return (
    <div className="pt-28 sm:pt-32 bg-white">

      {/* Hero */}
      <section className="pt-10 pb-10 sm:pt-16 sm:pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="w-10 h-1 bg-[#009739] mb-6 rounded-full" />
            <h1
              className="font-display font-semibold text-neutral-900 leading-tight mb-5"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              Every corner of Rio,{' '}
              <em className="italic text-[#009739]">yours to explore</em>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-5">
              Top adventures, iconic parties, and unforgettable experiences — led by young people who live and breathe this city.
            </p>
            <div className="flex items-start gap-3 max-w-xl rounded-2xl bg-pink-50 border border-pink-200 px-4 py-3.5">
              <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.5-4.5" />
              </svg>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                All experiences can be arranged as <span className="font-semibold text-pink-600">female-only groups</span> upon request, accompanied by a female guide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category jump nav */}
      <div className="sticky top-24 sm:top-28 z-30 bg-white/95 backdrop-blur-xl border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar py-3">
            {categories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-full text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-[#009739] hover:text-white transition-all duration-200"
              >
                <span aria-hidden="true">{cat.emoji}</span>
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Category sections */}
      {categories.map((cat, ci) => {
        const list = tours.filter(t => t.category === cat.id);
        if (list.length === 0) return null;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-12 sm:py-20 scroll-mt-40 ${ci % 2 === 1 ? 'bg-neutral-50/70' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-12"
              >
                <div className="w-10 h-1 bg-[#009739] mb-5 rounded-full" />
                <h2
                  className="font-display font-semibold text-neutral-900 leading-[1.05]"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
                >
                  {cat.label}
                </h2>
                <p className="text-neutral-500 mt-2.5 text-base sm:text-lg">{cat.tagline}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {list.map((tour, i) => (
                  <TourCard key={tour.id} tour={tour} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Price Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <div className="w-10 h-1 bg-[#009739] mb-5 rounded-full" />
            <h2 className="font-display font-semibold text-neutral-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Quick Price Overview
            </h2>
            <p className="text-neutral-500 text-sm">All prices in Brazilian Reais (R$)</p>
          </motion.div>

          {categories.map(cat => {
            const list = tours.filter(t => t.category === cat.id);
            if (list.length === 0) return null;
            return (
              <div key={cat.id} className="mb-8 last:mb-0">
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-3">{cat.label}</h3>

                {/* Mobile cards */}
                <div className="sm:hidden space-y-2.5">
                  {list.map(tour => (
                    <a
                      key={tour.id}
                      href={`#${tour.id}`}
                      className="flex items-center justify-between bg-white rounded-2xl px-4 py-3.5 border border-neutral-200/70"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xl flex-shrink-0">{tour.emoji}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-neutral-900 leading-snug">{tour.title}</p>
                          {tour.duration && <p className="text-xs text-neutral-500">{tour.duration}</p>}
                        </div>
                      </div>
                      <p className="text-base font-bold text-[#009739] text-right ml-3 flex-shrink-0">{tour.price}</p>
                    </a>
                  ))}
                </div>

                {/* Desktop table */}
                <div className="hidden sm:block rounded-2xl overflow-hidden border border-neutral-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#009739] text-white">
                        <th className="px-6 py-3.5 text-left font-semibold text-sm">Experience</th>
                        <th className="px-6 py-3.5 text-left font-semibold text-sm">Price</th>
                        <th className="px-6 py-3.5 text-left font-semibold text-sm">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {list.map((tour, i) => (
                        <tr key={tour.id} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{tour.emoji}</span>
                              <a href={`#${tour.id}`} className="font-medium text-neutral-900 text-sm hover:text-[#009739] transition-colors">
                                {tour.title}
                              </a>
                              {tour.badge && (
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                  tour.badge === 'Premium' ? 'bg-amber-100 text-amber-700' : 'bg-[#009739]/10 text-[#009739]'
                                }`}>{tour.badge}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-bold text-[#009739] text-base">{tour.price}</span>
                            {tour.priceNote && <div className="text-xs text-neutral-500">{tour.priceNote}</div>}
                          </td>
                          <td className="px-6 py-4 text-sm text-neutral-500">{tour.duration || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#009739]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#009739]/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-10 h-1 bg-[#009739] mb-4 rounded-full mx-auto" />
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Can&apos;t decide?{' '}
              <em className="italic text-[#009739]">We&apos;ll plan it for you</em>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Our concierge service plans your whole stay — itinerary, support and tours at a discounted rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center pt-2 max-w-md mx-auto">
              <Link
                href="/private-experiences"
                className="min-h-[52px] px-8 py-3 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                View Concierge Service
              </Link>
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] px-8 py-3 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-[#009739]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
