import type { TourId, CategoryId, BadgeId } from '@/app/data/tours';

export interface TourCopy {
  title: string;
  description: string;
  duration: string;
  includes: string[];
  /** Qualifier shown next to the price, e.g. "per person". */
  priceNote?: string;
  /** Only where the price itself is copy rather than a number. */
  price?: string;
  /** Names only — the surcharges live on the tour in app/data/tours.ts. */
  addons?: { name: string }[];
}

export type TourContent = Record<TourId, TourCopy>;
export type CategoryContent = Record<CategoryId, { label: string; tagline: string }>;
export type BadgeContent = Record<BadgeId, string>;
