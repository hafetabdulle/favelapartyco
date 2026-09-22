/**
 * Line icons drawn on a common 24px grid with a 1.5 stroke, so the feature
 * rows read as one set. Replaces the emoji, which rendered differently on
 * every platform and clashed with the serif headings.
 */

type P = { className?: string };
const base = (className = 'w-full h-full') =>
  ({
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  });

export const IconLocals = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M3 21V10.5L9 6l6 4.5V21" />
    <path d="M15 21V13h6v8" />
    <path d="M7 21v-4.5h4V21" />
    <path d="M1.5 21h21" />
  </svg>
);

export const IconParty = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 20.5 8.8 8.8a1 1 0 0 1 1.5-.45l5.35 5.35a1 1 0 0 1-.45 1.5L4 20.5Z" />
    <path d="M14.5 3.5c0 1.2.8 2 2 2M19 8c-1.2 0-2 .8-2 2M20.5 3.5l-1.8 1.8M13.5 9.5 12 8" />
  </svg>
);

export const IconAdventure = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M2.5 9.5a9.5 9.5 0 0 1 19 0l-4.75 3-4.75-3-4.75 3-4.75-3Z" />
    <path d="M12 12.5V18M12 18l-3 3.5M12 18l3 3.5" />
  </svg>
);

export const IconPrice = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6.5v11M14.8 9.2a3 3 0 0 0-2.8-1.4c-1.6 0-2.7.9-2.7 2.1 0 3 5.5 1.6 5.5 4.5 0 1.3-1.2 2.2-2.8 2.2a3.1 3.1 0 0 1-2.9-1.5" />
  </svg>
);

export const IconSafe = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 2.5 4.5 5.8v5.4c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10V5.8L12 2.5Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </svg>
);

export const IconBooking = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 5.5h3M11 18.5h2" />
  </svg>
);

export const IconCalendar = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

export const IconSupport = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="2.5" y="13" width="4" height="6" rx="2" />
    <rect x="17.5" y="13" width="4" height="6" rx="2" />
    <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-2" />
  </svg>
);

export const IconRoute = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 18h5.5a3.5 3.5 0 0 0 0-7h-4a3.5 3.5 0 0 1 0-7h1.5" />
  </svg>
);

export const IconCar = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M3 16.5v-3l2-5.2A2 2 0 0 1 6.9 7h10.2a2 2 0 0 1 1.9 1.3l2 5.2v3" />
    <path d="M3 13.5h18M6.5 16.5v2H4v-2M20 16.5v2h-2.5v-2" />
    <circle cx="7.5" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconGuide = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20.5a7 7 0 0 1 14 0" />
  </svg>
);

export const IconCamera = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="2.5" y="6.5" width="19" height="13" rx="2.5" />
    <path d="M8.5 6.5 10 4h4l1.5 2.5" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const IconArrow = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconStar = ({ className = 'w-full h-full' }: P) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10.5" r="2.5" />
  </svg>
);

export const IconBeach = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M2.5 19.5c1.6-1.3 3.2-1.3 4.8 0 1.6 1.3 3.2 1.3 4.8 0 1.6-1.3 3.2-1.3 4.8 0 1.3 1 2.5 1.2 3.8.6" />
    <circle cx="17.5" cy="6.5" r="3" />
    <path d="M3 16 9.5 7.5 16 16" />
  </svg>
);

export const IconCulture = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 2.5 3 8v1.5h18V8l-9-5.5Z" />
    <path d="M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8M3 21h18" />
  </svg>
);

/** Category → icon, used by the tours page chips and section headers. */
export const categoryIcons = {
  nightlife: IconParty,
  'rio-culture': IconCulture,
  adventure: IconAdventure,
  outdoors: IconBeach,
  local: IconLocals,
} as const;

export const IconWhatsApp = ({ className = 'w-full h-full' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
