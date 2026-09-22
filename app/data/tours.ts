export type CategoryId =
  | 'nightlife'
  | 'rio-culture'
  | 'adventure'
  | 'outdoors'
  | 'local';

export interface Category {
  id: CategoryId;
  label: string;
  tagline: string;
  emoji: string;
}

export interface Tour {
  id: string;
  category: CategoryId;
  title: string;
  price: string;
  priceNote?: string;
  duration?: string;
  description: string;
  includes?: string[];
  addons?: { name: string; price: string }[];
  photos: string[];
  emoji: string;
  badge?: 'Most Popular' | 'Premium';
}

export const categories: Category[] = [
  { id: 'nightlife',   label: 'Nightlife',             tagline: 'Bars, samba, rooftops and real favela parties', emoji: '🎉' },
  { id: 'rio-culture', label: 'Rio & Culture',         tagline: 'Landmarks, markets, football and everyday Rio',  emoji: '🗺️' },
  { id: 'adventure',   label: 'Adventure & Adrenaline', tagline: 'Rio from the sky — flying over the city',       emoji: '🪂' },
  { id: 'outdoors',    label: 'Outdoors & Nature',     tagline: 'Sunrises, hikes, beaches and the ocean',         emoji: '🌄' },
  { id: 'local',       label: 'Local Experiences',     tagline: 'Rocinha from the inside, with the people who live there', emoji: '🏘️' },
];

/** Build the photo paths for a tour gallery: /images/tours/<slug>/01.jpg … */
const gallery = (slug: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `/images/tours/${slug}/${String(i + 1).padStart(2, '0')}.jpg`);

export const tours: Tour[] = [
  /* ─────────────────────────── NIGHTLIFE ─────────────────────────── */
  {
    id: 'pubcrawl-favela-party',
    category: 'nightlife',
    title: 'Pub Crawl & Real Favela Party with Locals in Rocinha',
    price: 'R$170',
    duration: '8 hours',
    description:
      'Party with local bars, rooftop views, Brazilian funk, drinks and a real favela party in Rocinha. Meet new people, party with locals, and experience a side of Rio most tourists never get to see.',
    includes: ['Transportation', 'Free shots', 'Rooftop bar', 'Local guide'],
    photos: gallery('pubcrawl-favela-party', 5),
    emoji: '🎉',
    badge: 'Most Popular',
  },
  {
    id: 'botafogo-bar-crawl',
    category: 'nightlife',
    title: 'Botafogo Bar Crawl',
    price: 'R$100',
    duration: '3 hours',
    description:
      "Visit the best local bars in one of Rio's liveliest neighborhoods, Botafogo. With a fun group and local guide, you'll enjoy good food, drinks and people.",
    includes: ['Bar-hopping experience', 'Local guide'],
    photos: gallery('botafogo-bar-crawl', 5),
    emoji: '🍺',
  },
  {
    id: 'pedra-do-sal-samba',
    category: 'nightlife',
    title: 'Monday Night Samba at Pedra do Sal',
    price: 'R$190',
    duration: '6 hours',
    description:
      'Monday night at Pedra do Sal is the biggest samba party in Rio. Join a fun group, meet new people and dance to live music, samba, and the incredible energy of Pedra do Sal.',
    includes: ['Local guide', 'Van transfer to Pedra do Sal', 'Group experience'],
    photos: gallery('pedra-do-sal-samba', 5),
    emoji: '🎶',
    badge: 'Most Popular',
  },
  {
    id: 'ipanema-bar-crawl',
    category: 'nightlife',
    title: "Bar Hop Ipanema's Classic Bars",
    price: 'R$100',
    duration: '3 hours',
    description:
      "Experience the nightlife of Ipanema and Leblon visiting popular local bars, enjoying drinks, and meeting fellow travelers from around the world. Explore two of Rio's most iconic neighborhoods with a fun group and local guide.",
    includes: ['Local guide', 'Bar-hopping experience'],
    photos: gallery('ipanema-bar-crawl', 3),
    emoji: '🍹',
  },
  {
    id: 'rocinha-rooftop-bbq',
    category: 'nightlife',
    title: 'Inside Rocinha, Rooftop BBQ with Locals',
    price: 'R$150',
    duration: '5 hours',
    description:
      'Experience an authentic night in the favela with a typical Brazilian churrasco surrounded by new friends, local and international. Connect through music, games, incredible rooftop views, dance and of course, good food.',
    includes: ['Local guide', 'Unlimited Brazilian BBQ', 'Vegetarian options', 'Beer pong'],
    photos: gallery('rocinha-rooftop-bbq', 4),
    emoji: '🍖',
  },

  /* ────────────────────────── RIO & CULTURE ───────────────────────── */
  {
    id: 'christ-redeemer-ticket',
    category: 'rio-culture',
    title: 'Christ the Redeemer Ticket & Transport',
    price: 'R$450',
    priceNote: 'per person',
    duration: '3 hours',
    description:
      'Visit a wonder of the world right here in Rio de Janeiro. The most iconic landmark, Christ the Redeemer, with everything taken care of, including your entrance ticket, transportation, and professional local guide. Discover the history, and enjoy some of the most spectacular panoramic views in Rio.',
    includes: ['Local guide', 'Transportation', 'Christ the Redeemer entrance ticket'],
    photos: gallery('christ-redeemer-ticket', 5),
    emoji: '✝️',
  },
  {
    id: 'christ-selaron-steps',
    category: 'rio-culture',
    title: 'Christ the Redeemer & Selarón Steps',
    price: 'R$555',
    priceNote: 'per person',
    duration: '3 hours',
    description:
      'Discover two of Rio\'s most iconic landmarks in one easy experience with private transportation and a local guide. Visit Christ the Redeemer for breathtaking city views before exploring the colorful and world-famous Selarón Steps.',
    includes: ['Local guide', 'Private transportation', 'Christ the Redeemer entrance ticket'],
    photos: gallery('christ-selaron-steps', 3),
    emoji: '✨',
  },
  {
    id: 'rio-full-day',
    category: 'rio-culture',
    title: 'Rio Full-Day Tour',
    price: 'R$680',
    priceNote: 'per person',
    duration: '6 hours',
    description:
      'Discover the best of Rio in one unforgettable day, from Christ the Redeemer and Sugarloaf Mountain to Selarón Steps and the Museum of Tomorrow. Travel comfortably with private transportation and a local guide while experiencing some of the city\'s most iconic sights.',
    includes: ['Local guide', 'Private transportation'],
    photos: gallery('rio-full-day', 5),
    emoji: '🗺️',
  },
  {
    id: 'sunrise-nature-landmarks',
    category: 'rio-culture',
    title: "Sunrise in Rio's Nature Landmarks",
    price: 'R$400',
    priceNote: 'per person',
    duration: '5 hours',
    description:
      'Start your day watching the sun rise from Dona Marta before visiting Christ the Redeemer and the tropical beauty of Parque Lage and the Botanical Garden. Discover iconic landmarks and lush nature with a local guide.',
    includes: ['Local guide', 'Private transportation'],
    photos: gallery('sunrise-nature-landmarks', 4),
    emoji: '🌇',
  },
  {
    id: 'feira-da-gloria',
    category: 'rio-culture',
    title: 'Eat & Drink at Feira da Glória',
    price: 'R$170',
    priceNote: 'per person',
    duration: '2 hours',
    description:
      'Try authentic Brazilian food and traditional drinks at Feira da Glória, one of the biggest Brazilian markets in Rio. Meet local vendors, discover Carioca flavors, and experience the culture and energy of Feira da Glória.',
    includes: ['Local guide', 'Food tastings'],
    photos: gallery('feira-da-gloria', 5),
    emoji: '🥘',
  },
  {
    id: 'full-sunday-eat-drink-shop',
    category: 'rio-culture',
    title: 'Full Sunday, Eat Drink and Shop',
    price: 'R$180',
    priceNote: 'per person',
    duration: '3.5 hours',
    description:
      'Experience a local Sunday in Rio, from the colorful Selarón Steps, Feira da Glória and the famous Havaianas Concept Store. Explore with a local guide and customize your own pair of Havaianas.',
    includes: ['Local guide', 'Private transportation'],
    photos: gallery('full-sunday-eat-drink-shop', 3),
    emoji: '🩴',
  },
  {
    id: 'football-maracana',
    category: 'rio-culture',
    title: 'Football Match at Maracanã',
    price: 'Depends on the match',
    duration: 'Approximately 5 hours',
    description:
      'Feel the passion of Brazilian football inside the legendary Maracanã Stadium alongside local fans and fellow travelers. With your official match ticket, local guide, and private transportation included, all you need to do is enjoy the atmosphere and experience the game like a Carioca.',
    includes: ['Official match ticket', 'Local guide', 'Private transportation'],
    photos: gallery('football-maracana', 5),
    emoji: '⚽',
  },
  {
    id: 'vidigal-moto-tour',
    category: 'rio-culture',
    title: 'Vidigal Moto Tour with Local Guide',
    price: 'R$190',
    duration: '2 hours',
    description:
      "Hop on a moto and explore Vidigal's narrow streets, stunning viewpoints, and local vibes with a trusted local guide. Feel the authentic favela energy!",
    includes: ['Moto-taxi rides', 'Local guide', 'Viewpoint stops', 'Explore narrow streets'],
    photos: ['/images/IMG_9230.JPG'],
    emoji: '🏍️',
  },

  /* ─────────────────── ADVENTURE & ADRENALINE ────────────────────── */
  {
    id: 'hang-gliding',
    category: 'adventure',
    title: 'Hang Gliding',
    price: 'R$1,300',
    priceNote: 'per person',
    duration: 'Approximately 2 hours',
    description:
      "Soar above Rio's mountains, coastline, and beaches on an unforgettable hang gliding adventure. Take in breathtaking views from the sky and capture the experience with an included GoPro video.",
    includes: ['Professional pilot', 'GoPro video'],
    addons: [{ name: '360° video', price: 'R$300' }],
    photos: gallery('hang-gliding', 5),
    emoji: '🪂',
  },
  {
    id: 'paragliding',
    category: 'adventure',
    title: 'Paragliding',
    price: 'R$1,300',
    priceNote: 'per person',
    duration: 'Approximately 2 hours',
    description:
      "Soar above Rio's mountains, coastline, and beaches on an unforgettable paragliding adventure. Take in breathtaking views from the sky and capture the experience with an included GoPro video.",
    includes: ['Professional pilot', 'GoPro video'],
    addons: [{ name: '360° video', price: 'R$300' }],
    photos: [...gallery('paragliding', 1), '/images/paragliding.jpg'],
    emoji: '🪂',
  },
  {
    id: 'helicopter-doors-off',
    category: 'adventure',
    title: 'Doors-Off Helicopter Flight',
    price: 'R$1,300',
    priceNote: '1 person · R$1,200 each for 2 · R$1,100 each for 3',
    duration: '30-minute flight',
    description:
      "See Rio from the ultimate perspective on a thrilling doors-off helicopter flight over the city's most iconic landmarks, mountains, and beaches. Capture incredible open-air photos and videos with unforgettable views of Christ the Redeemer, Sugarloaf Mountain, Rio's coastline, and more.",
    includes: ['30-minute doors-off helicopter flight'],
    photos: gallery('helicopter-doors-off', 5),
    emoji: '🚁',
    badge: 'Premium',
  },
  {
    id: 'helicopter-doors-on',
    category: 'adventure',
    title: 'Helicopter Tour – With Doors',
    price: 'R$1,990',
    priceNote: 'total, up to 3 people',
    duration: '20 minutes',
    description:
      'Experience Rio from above in comfort and safety! See Christ, Sugarloaf, and the beaches with doors on. Total price for up to 3 people.',
    includes: ['Helicopter with doors', 'Professional pilot', 'Up to 3 people', 'Christ the Redeemer views'],
    photos: gallery('helicopter-doors-on', 4),
    emoji: '🚁',
  },

  /* ───────────────────── OUTDOORS & NATURE ───────────────────────── */
  {
    id: 'morro-dois-irmaos-sunrise',
    category: 'outdoors',
    title: 'Sunrise Hike at Morro Dois Irmãos',
    price: 'R$190',
    priceNote: 'per person · R$150 each for 2 or more',
    duration: '5 hours',
    description:
      'Start your day above Rio with a gorgeous sunrise from the top of Morro Dois Irmãos. Ride through Vidigal by moto-taxi, start the easy to moderate hike, and finish the morning with a local breakfast.',
    includes: ['Local guide', 'Breakfast', 'All entrance fees'],
    photos: gallery('morro-dois-irmaos-sunrise', 5),
    emoji: '🌄',
    badge: 'Most Popular',
  },
  {
    id: 'pedra-bonita-picnic',
    category: 'outdoors',
    title: 'Picnic at the Top of Pedra Bonita',
    price: 'R$250',
    duration: '3 hours',
    description:
      "Escape into nature for an easy hike to the top of Pedra Bonita overlooking Rio's mountains, ocean, and coastline. Enjoy snacks and fresh fruit while taking in the golden-hour views with a fun group.",
    includes: ['Local guide', 'Transportation from Leblon', 'Snacks'],
    photos: gallery('pedra-bonita-picnic', 5),
    emoji: '🧺',
  },
  {
    id: 'sunrise-waterfall',
    category: 'outdoors',
    title: 'Sunrise & Waterfall Adventure',
    price: 'R$300',
    duration: '6 hours',
    description:
      'Start your morning watching the sunrise over Rio from Vista Chinesa before heading into the rainforest for a waterfall adventure. Enjoy a light breakfast with panoramic views, hike through nature, and cool off with a swim beneath the falls.',
    includes: ['Local guide', 'Light breakfast', 'Transportation'],
    photos: gallery('sunrise-waterfall', 3),
    emoji: '🌊',
  },
  {
    id: 'rio-ebike-tour',
    category: 'outdoors',
    title: 'Rio E-Bike Tour',
    price: 'R$400',
    duration: '3 hours',
    description:
      "Explore Rio with an easy electric bike ride through Copacabana, Botafogo, Flamengo, and the city's beautiful waterfront. Discover iconic neighborhoods, stop for incredible photos, and enjoy refreshing coconut water along the way.",
    includes: ['Electric bike', 'Local guide', 'Coconut water', 'Photos & videos'],
    photos: gallery('rio-ebike-tour', 5),
    emoji: '🚲',
  },
  {
    id: 'sunrise-paddleboarding',
    category: 'outdoors',
    title: 'Sunrise Paddleboarding in Copacabana',
    price: 'R$190',
    duration: '2 hours',
    description:
      'Watch the sky change colors as you paddle into the sunrise off Copacabana Beach. This peaceful, beginner-friendly experience offers incredible coastal views, plus photos and videos to remember the morning.',
    includes: ['Local guide', 'Paddleboarding equipment', 'Safety lesson', 'Photos & videos'],
    photos: gallery('sunrise-paddleboarding', 5),
    emoji: '🏄',
  },
  {
    id: 'girls-only-ipanema',
    category: 'outdoors',
    title: 'Girls-Only Ipanema Beach Day',
    price: 'R$150',
    duration: '3.5 hours',
    description:
      "Spend the afternoon at Ipanema Beach with a girls-only group, charcuterie, games, art, and good vibes. Relax by the ocean, make new friends, and enjoy one of Rio's best sunsets together.",
    includes: ['Local host', 'Charcuterie & snacks', 'Art supplies', 'Games & activities'],
    photos: gallery('girls-only-ipanema', 4),
    emoji: '🏖️',
  },
  {
    id: 'joatinga-hidden-beach',
    category: 'outdoors',
    title: 'Joatinga Hidden Beach Day',
    price: 'R$150',
    duration: '3 hours',
    description:
      "Escape the crowds and discover Joatinga, one of Rio's most beautiful hidden beaches surrounded by cliffs and tropical nature. Swim, relax, play altinha, and enjoy an authentic beach day with locals and fellow travelers.",
    includes: ['Local guide'],
    photos: gallery('joatinga-hidden-beach', 3),
    emoji: '🏝️',
  },
  {
    id: 'surf-lesson-arpoador',
    category: 'outdoors',
    title: 'Surf Lesson at Arpoador Beach',
    price: 'R$250',
    duration: '1 hour',
    description:
      "Catch your first waves and experience Rio's famous surf culture with a local instructor. Learn the basics, practice in the ocean, and enjoy a fun, beginner-friendly surf session at Arpoador.",
    includes: ['Local surf instructor', 'Surf equipment', 'Practical lesson', 'Basic surf theory'],
    photos: gallery('surf-lesson-arpoador', 4),
    emoji: '🏄‍♂️',
  },
  {
    id: 'futevolei-class',
    category: 'outdoors',
    title: 'Beginner Futevôlei Class',
    price: 'R$250',
    duration: '1 hour',
    description:
      "Learn one of Rio's most popular beach sports with a local instructor. Learn the basics of futevôlei, practice your technique on the sand, and enjoy a fun, beginner-friendly class while enjoying Rio's beaches.",
    includes: ['Local futevôlei instructor', 'Equipment', 'Practical lesson', 'Basic futevôlei techniques'],
    photos: gallery('futevolei-class', 1),
    emoji: '🏐',
  },
  {
    id: 'sugarloaf-hike',
    category: 'outdoors',
    title: 'Sugarloaf Hike',
    price: 'R$300',
    priceNote: 'private · R$150 per person in a group',
    duration: '30 minutes',
    description:
      "Experience a refreshing 30-minute hike with breathtaking views of Rio's iconic Sugarloaf mountain and surrounding beaches. Perfect for a quick adventure or as part of a larger tour.",
    includes: ['Professional guide', 'Scenic hiking trail', 'Panoramic views', 'Water & snacks'],
    photos: ['/images/sugarloaf.jpg'],
    emoji: '🏔️',
  },

  /* ───────────────────── LOCAL EXPERIENCES ───────────────────────── */
  {
    id: 'rocinha-favela-tour',
    category: 'local',
    title: 'Complete Rocinha Favela Tour',
    price: 'R$220',
    priceNote: 'per person · R$190 each for 3 or more',
    duration: '3 hours',
    description:
      "Discover Rocinha from the inside with a local guide, from a thrilling moto-taxi ride and viewpoints overlooking Rio, to capoeira, street art, football, and community life. Connect with locals and gain a deeper understanding of the culture, history, and everyday reality of Brazil's largest favela.",
    includes: ['Local guide'],
    addons: [{ name: 'Professional drone video', price: 'R$200' }],
    photos: gallery('rocinha-favela-tour', 5),
    emoji: '🏘️',
    badge: 'Most Popular',
  },
  {
    id: 'mini-rocinha-drone',
    category: 'local',
    title: 'Mini Rocinha Tour & Drone Video',
    price: 'R$280',
    priceNote: 'per person',
    duration: '3 hours',
    description:
      'Explore Rocinha with a local guide, ride through the community by moto-taxi, and capture the experience from a new perspective. Finish with cinematic drone footage above the favela and take home a professional video of your adventure.',
    includes: ['Local guide', 'Professional drone video'],
    photos: gallery('mini-rocinha-drone', 8),
    emoji: '🎬',
  },
  {
    id: 'cria-hairstyle-makeover',
    category: 'local',
    title: 'Brazilian “Cria” Hairstyle Makeover',
    price: 'R$450',
    priceNote: 'per person',
    duration: '3 hours',
    description:
      "Step into a local Rocinha barbershop and transform your look with a Brazilian style haircut and bleaching. More than just a haircut, it's a unique way to connect with local culture and experience the favela from a completely different perspective.",
    includes: ['Local guide', 'Haircut', 'Bleaching'],
    photos: gallery('cria-hairstyle-makeover', 5),
    emoji: '💈',
  },
];

export const toursByCategory = (id: CategoryId) => tours.filter(t => t.category === id);
