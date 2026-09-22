/**
 * Booking-platform marks drawn as inline SVG so they stay crisp at any size
 * and in both the dark footer and the light "Find us on" section.
 */

type MarkProps = { className?: string };

export const AirbnbMark = ({ className = 'w-full h-full' }: MarkProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#FF5A5F" />
    <path
      d="M24 10.5c-1.5 0-2.7.8-3.5 2.3-2 3.6-6.9 13-6.9 17.1 0 3.2 2.3 5.6 5.4 5.6 2 0 3.8-1 5-2.4 1.2 1.4 3 2.4 5 2.4 3.1 0 5.4-2.4 5.4-5.6 0-4.1-4.9-13.5-6.9-17.1-.8-1.5-2-2.3-3.5-2.3Zm0 3.4c.3 0 .6.2.9.8 1.9 3.4 6.2 12 6.2 15.2 0 1.7-1.1 2.9-2.7 2.9-1.4 0-2.7-1-3.6-2.3 1.3-1.9 2.2-3.7 2.2-5.3 0-1.9-1.3-3.3-3-3.3s-3 1.4-3 3.3c0 1.6.9 3.4 2.2 5.3-.9 1.3-2.2 2.3-3.6 2.3-1.6 0-2.7-1.2-2.7-2.9 0-3.2 4.3-11.8 6.2-15.2.3-.6.6-.8.9-.8Z"
      fill="#fff"
    />
  </svg>
);

export const TripAdvisorMark = ({ className = 'w-full h-full' }: MarkProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#34E0A1" />
    <path
      d="M24 14.5c-4.6 0-8.7 1.5-11.6 3.6H6l2.6 2.9a7.6 7.6 0 0 0 5.2 13.2 7.5 7.5 0 0 0 5.2-2.1L24 36l3-3.9a7.5 7.5 0 0 0 5.2 2.1 7.6 7.6 0 0 0 5.2-13.2l2.6-2.9h-6.4c-2.9-2.1-7-3.6-11.6-3.6Z"
      fill="#000"
    />
    <circle cx="15.8" cy="26.6" r="4.6" fill="#34E0A1" />
    <circle cx="32.2" cy="26.6" r="4.6" fill="#34E0A1" />
    <circle cx="15.8" cy="26.6" r="2.1" fill="#000" />
    <circle cx="32.2" cy="26.6" r="2.1" fill="#000" />
  </svg>
);

export const GetYourGuideMark = ({ className = 'w-full h-full' }: MarkProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#FF5533" />
    <path
      d="M24.6 22.2v4.1h4.1c-.9 2-2.8 3.3-5.1 3.3a5.8 5.8 0 0 1 0-11.6c1.5 0 2.9.6 3.9 1.5l3.1-3.1a10.2 10.2 0 1 0 3.2 7.4v-1.6h-9.2Z"
      fill="#fff"
    />
  </svg>
);

export const HeadoutMark = ({ className = 'w-full h-full' }: MarkProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#7317F8" />
    <path
      d="M13.2 21.6c-.7-1.6-1-2.6-.6-3 .4-.4 1.5-.3 3.3.1.9-1 3-2.2 5.8-3.1 6.4-2 12.8-1 14.3 2.2 1.5 3.2-2.5 7.5-8.9 9.5-2.8.9-5.3 1.2-7.2 1-1 1.5-1.8 2.3-2.4 2.2-.6-.1-.8-1.1-.8-2.8-1.6-.9-2.7-2-3.2-3.2a5 5 0 0 1-.3-2.9Zm2.6-.3c5 1.8 12.6 1.8 18.5-.6-2.1-1.7-6.8-2.4-11.6-.9-2.9.9-5.3 2.2-6.9 3.6Z"
      fill="#fff"
    />
  </svg>
);

export const MusementMark = ({ className = 'w-full h-full' }: MarkProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path d="M7 19.5 17.5 30v5.5a5.5 5.5 0 0 1-9.4 3.9A5.5 5.5 0 0 1 7 35.5v-16Z" fill="#B7BFC0" />
    <path d="M41 19.5 30.5 30v5.5a5.5 5.5 0 0 0 9.4 3.9 5.5 5.5 0 0 0 1.1-3.9v-16Z" fill="#B7BFC0" />
    <path
      d="M24 38 8.6 22.6a9.6 9.6 0 0 1 0-13.6 9.6 9.6 0 0 1 13.6 0l1.8 1.8 1.8-1.8a9.6 9.6 0 0 1 13.6 0 9.6 9.6 0 0 1 0 13.6L24 38Z"
      fill="#F2724F"
    />
  </svg>
);

export interface PlatformEntry {
  name: string;
  href?: string;
  Mark: (props: MarkProps) => JSX.Element;
  blurb: string;
}

/** The three profiles guests can leave / read reviews on. */
export const reviewPlatforms: PlatformEntry[] = [
  {
    name: 'Airbnb',
    href: 'https://www.airbnb.com.br/users/profile/1625610316727062295?previous_page_name=PdpExperience',
    Mark: AirbnbMark,
    blurb: 'See our experiences & reviews',
  },
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.com/Attraction_Review-g303506-d34228341-Reviews-RIO_EXPLORE-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html',
    Mark: TripAdvisorMark,
    blurb: 'Read traveller reviews',
  },
  {
    name: 'GetYourGuide',
    href: 'https://www.getyourguide.com/rioexplore-s721378/',
    Mark: GetYourGuideMark,
    blurb: 'Browse & book our tours',
  },
];

/** Everywhere else you can find Rio Explore. */
export const otherPlatforms: PlatformEntry[] = [
  { name: 'Headout',  Mark: HeadoutMark,  blurb: '' },
  { name: 'Musement', Mark: MusementMark, blurb: '' },
];
