'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

interface Props {
  photos: string[];
  alt: string;
  /** Tailwind height classes for the gallery frame */
  heightClass?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
}

/**
 * Swipeable photo carousel. Uses native scroll-snap so mobile gets real
 * momentum swiping for free; the arrows just drive scrollTo on desktop.
 */
export default function TourGallery({
  photos,
  alt,
  heightClass = 'h-72 sm:h-80',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  rounded = '',
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const single = photos.length <= 1;

  const goTo = useCallback((next: number) => {
    const el = trackRef.current;
    if (!el) return;
    const i = (next + photos.length) % photos.length;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
    setIndex(i);
  }, [photos.length]);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) setIndex(i);
  };

  return (
    <div className={`relative ${heightClass} w-full overflow-hidden group/gallery ${rounded}`}>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
      >
        {photos.map((src, i) => (
          <div key={src} className="relative h-full w-full flex-shrink-0 snap-center">
            <Image
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              fill
              className="object-cover"
              sizes={sizes}
              priority={priority && i === 0}
            />
          </div>
        ))}
      </div>

      {!single && (
        <>
          {/* Arrows — always visible on touch, fade in on desktop hover */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-md text-ink shadow-md flex items-center justify-center transition-opacity duration-200 sm:opacity-0 sm:group-hover/gallery:opacity-100 hover:bg-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-md text-ink shadow-md flex items-center justify-center transition-opacity duration-200 sm:opacity-0 sm:group-hover/gallery:opacity-100 hover:bg-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-ink/30 backdrop-blur-md">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/55 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
