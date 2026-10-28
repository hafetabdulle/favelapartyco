'use client';

import { reviewPlatforms } from './PlatformLogos';
import { useT } from '@/app/i18n/LocaleProvider';

/**
 * Compact row of clickable booking-platform logos. Used in the hero (over the
 * photo) and in the mobile menu, alongside the big cards in the Find us on
 * section.
 */
export default function PlatformLinks({
  tone = 'dark',
  className = '',
}: {
  /** 'dark' = sitting on a photo/dark ground, 'light' = on cream. */
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const d = useT();
  const onDark = tone === 'dark';

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span
        className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
          onDark ? 'text-cream/50' : 'text-ink-faint'
        }`}
      >
        {d.findUs.title} {d.findUs.accent}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {reviewPlatforms.map(p => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            title={p.name}
            aria-label={`${d.common.visitProfile} — ${p.name}`}
            className={`group flex items-center gap-2 min-h-[44px] pl-1.5 pr-3 sm:pl-2 sm:pr-3.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
              onDark
                ? 'bg-cream/12 border-cream/25 hover:bg-cream/22 hover:border-cream/45'
                : 'bg-white border-sand hover:border-ink/30 hover:shadow-card'
            }`}
          >
            <p.Mark className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
            <span
              className={`text-xs font-semibold ${onDark ? 'text-cream/90' : 'text-ink-soft'}`}
            >
              {p.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
