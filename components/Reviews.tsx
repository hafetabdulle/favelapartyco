'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { reviews, type Review } from '@/app/data/reviews';
import { categories, type CategoryId } from '@/app/data/tours';
import { AirbnbMark, GetYourGuideMark } from './PlatformLogos';
import SectionHeading from './SectionHeading';
import { IconStar } from './Icons';

const ease = [0.16, 1, 0.3, 1] as const;

const Stars = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <div className="flex gap-0.5 text-brazilian-yellow-dark">
    {[0, 1, 2, 3, 4].map(i => <IconStar key={i} className={className} />)}
  </div>
);

const ViatorMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#3D5AFE" />
    <path d="M13 15h5.6l5.6 15.4L29.8 15h5.2L26.7 36h-5.2L13 15Z" fill="#fff" />
  </svg>
);

const PlatformBadge = ({ platform }: { platform: Review['platform'] }) => {
  const cls = 'w-5 h-5 flex-shrink-0 opacity-90';
  if (platform === 'airbnb') return <AirbnbMark className={cls} />;
  if (platform === 'getyourguide') return <GetYourGuideMark className={cls} />;
  return <ViatorMark className={cls} />;
};

const CLAMP_AT = 300;

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > CLAMP_AT;
  const shown = expanded || !isLong ? review.text : `${review.text.slice(0, CLAMP_AT).trimEnd()}…`;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25), ease }}
      className="flex-shrink-0 snap-start w-[85vw] max-w-sm sm:w-auto sm:max-w-none flex flex-col bg-cream hover:bg-white border border-sand rounded-3xl p-6 sm:p-7 hover:shadow-card hover:border-sand-dark transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <Stars />
        <PlatformBadge platform={review.platform} />
      </div>

      {review.highlight && (
        <p className="font-display font-semibold text-ink text-lg leading-snug mb-2.5 text-balance">
          {review.highlight}
        </p>
      )}

      <blockquote className="text-[0.925rem] text-ink-soft leading-relaxed flex-grow text-pretty">
        {shown}
      </blockquote>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          className="text-xs font-semibold text-brazilian-green hover:text-brazilian-green-dark mt-2.5 self-start underline underline-offset-4 decoration-brazilian-green/30"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <figcaption className="border-t border-sand pt-4 mt-5">
        <p className="font-semibold text-ink text-sm">{review.name}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1">
          {review.location && <span className="text-xs text-ink-faint">{review.location}</span>}
          <span className="text-xs text-brazilian-green">{review.tour}</span>
          <span className="text-xs text-ink-faint">{review.date}</span>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function Reviews() {
  const [filter, setFilter] = useState<CategoryId | 'all'>('all');

  const tabs = useMemo(
    () => [
      { id: 'all' as const, label: 'All', count: reviews.length },
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
    <section id="reviews" className="py-20 sm:py-32 bg-white border-y border-sand/70 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-9 sm:mb-11">
          <SectionHeading eyebrow="Guest reviews">
            What Guests <em>Say</em>
          </SectionHeading>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <Stars className="w-4 h-4" />
            <span className="text-ink-muted text-sm">
              <span className="font-display font-bold text-ink text-lg nums">5.0</span>
              {' · '}
              {reviews.length} verified reviews
            </span>
          </motion.div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-8 sm:flex-wrap sm:overflow-visible">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`flex-shrink-0 min-h-[42px] px-4 rounded-full text-sm font-medium transition-all duration-200 border ${
                filter === tab.id
                  ? 'bg-ink text-cream border-ink'
                  : 'bg-transparent text-ink-soft border-sand-dark hover:border-ink/40 hover:text-ink'
              }`}
            >
              {tab.label}
              <span className={`ml-1.5 nums ${filter === tab.id ? 'text-cream/50' : 'text-ink-faint'}`}>
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
