'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { reviews, type Review } from '@/app/data/reviews';
import { categories, type CategoryId } from '@/app/data/tours';
import { AirbnbMark, GetYourGuideMark } from './PlatformLogos';

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ViatorMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#3D5AFE" />
    <path d="M13 15h5.6l5.6 15.4L29.8 15h5.2L26.7 36h-5.2L13 15Z" fill="#fff" />
  </svg>
);

const PlatformBadge = ({ platform }: { platform: Review['platform'] }) => {
  const cls = 'w-5 h-5 flex-shrink-0';
  if (platform === 'airbnb') return <AirbnbMark className={cls} />;
  if (platform === 'getyourguide') return <GetYourGuideMark className={cls} />;
  return <ViatorMark className={cls} />;
};

const CLAMP_AT = 320;

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > CLAMP_AT;
  const shown = expanded || !isLong ? review.text : `${review.text.slice(0, CLAMP_AT).trimEnd()}…`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
      className="flex-shrink-0 snap-start w-[85vw] max-w-sm sm:w-auto sm:max-w-none flex flex-col bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-md hover:border-neutral-300 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
        </div>
        <PlatformBadge platform={review.platform} />
      </div>

      {review.highlight && (
        <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1 mb-3 w-fit">
          {review.highlight}
        </span>
      )}

      <p className="text-sm text-neutral-700 leading-relaxed flex-grow">{shown}</p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          className="text-xs font-semibold text-[#009739] hover:text-[#006B28] mt-2 self-start"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <div className="border-t border-neutral-100 pt-3.5 mt-5">
        <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
        <div className="flex flex-wrap gap-x-2 mt-0.5">
          {review.location && <span className="text-xs text-neutral-500">{review.location}</span>}
          <span className="text-xs text-[#009739]">{review.tour}</span>
          <span className="text-xs text-neutral-400">{review.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const [filter, setFilter] = useState<CategoryId | 'all'>('all');

  const tabs = useMemo(
    () => [
      { id: 'all' as const, label: 'All reviews', count: reviews.length },
      ...categories.map(c => ({
        id: c.id,
        label: c.label,
        count: reviews.filter(r => r.category === c.id).length,
      })),
    ],
    []
  );

  const shown = filter === 'all' ? reviews : reviews.filter(r => r.category === filter);

  return (
    <section id="reviews" className="py-16 sm:py-28 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10"
        >
          <div>
            <div className="w-10 h-1 bg-[#009739] mb-5 rounded-full" />
            <h2
              className="font-display font-semibold text-neutral-900 leading-[1.05]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              What Guests <em className="italic text-[#009739]">Say</em>
            </h2>
            <div className="flex items-center gap-1.5 mt-3">
              {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
              <span className="text-neutral-500 text-sm ml-1">
                5.0 · {reviews.length} verified reviews
              </span>
            </div>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base italic">Real travelers, real stories</p>
        </motion.div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6 sm:flex-wrap sm:overflow-visible">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`flex-shrink-0 min-h-[40px] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                filter === tab.id
                  ? 'bg-[#009739] text-white border-[#009739] shadow-sm'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {tab.label}
              <span className={filter === tab.id ? 'text-white/70 ml-1.5' : 'text-neutral-400 ml-1.5'}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 sm:pb-0 hide-scrollbar snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible items-start">
          {shown.map((review, i) => (
            <ReviewCard key={`${review.name}-${review.tour}-${review.date}-${i}`} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
