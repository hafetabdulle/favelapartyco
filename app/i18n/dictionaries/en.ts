import type { TourContent, CategoryContent, BadgeContent } from '../types';

/**
 * English is the source dictionary — its shape defines the `Dictionary` type
 * that es.ts and pt.ts must satisfy, so a missing key is a build error.
 *
 * Headings that carry an italic accent are split into `title` + `accent`; the
 * accent is what gets wrapped in <em>. Where the accent reads more naturally
 * before the plain part in a language, `accentFirst` flips the order.
 */
const en = {
  nav: {
    home: 'Home',
    tours: 'Tours',
    concierge: 'Concierge',
    contact: 'Contact',
    whatsapp: 'WhatsApp Us',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    home_aria: 'Rio Explore — home',
  },

  common: {
    bookNow: 'Book Now',
    includes: 'Includes',
    optionalAddon: 'Optional add-on',
    readMore: 'Read more',
    showLess: 'Show less',
    seeDetails: 'See details',
    visitProfile: 'Visit profile',
    whatsappUs: 'WhatsApp Us',
    messageUs: 'Message us',
    orWhatsapp: 'Or message us on WhatsApp',
    quickQuestion: 'Quick question? WhatsApp us',
    photoCount: 'photos',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    goToPhoto: 'Go to photo',
    bookingMessage: "Hi! I'm interested in the",
  },

  home: {
    hero: {
      line1: 'Experience',
      line2: 'the Real',
      line3: 'Rio de Janeiro',
      reviews: 'Reviews',
      findUs: 'Find us on',
      viewAllTours: 'View All Tours',
      concierge: 'Concierge Service',
    },
    why: {
      eyebrow: 'Who we are',
      title: 'Why Choose',
      accent: 'Us?',
      body1:
        "At Rio Explore we don't just show you Rio de Janeiro — we help you live it. Every experience is built to connect you with the city's real culture, its communities and the corners the guidebooks never reach.",
      body2:
        "Because travel should leave you with people you've met, not just landmarks you've ticked off.",
      tagline: 'Travel like a local, not a tourist.',
      photoAlt: 'Milla and Tom in front of Christ the Redeemer',
    },
    features: {
      locals: {
        title: 'Local Guides',
        description: 'Born and raised in Rio, sharing the stories and corners you would never find alone.',
      },
      nightlife: {
        title: 'Real Nightlife',
        description: 'Rooftop bars, samba at Pedra do Sal, and a genuine favela party — not a tourist version.',
      },
      adventure: {
        title: 'Thrilling Adventures',
        description: 'Hang gliding over the coastline, sunrise hikes, waterfalls and doors-off helicopters.',
      },
      prices: {
        title: 'Honest Prices',
        description: 'Fair, transparent pricing with group discounts on most experiences.',
      },
      safe: {
        title: 'Safe & Looked After',
        description: 'We know these neighbourhoods. Solo travellers are in good hands from start to finish.',
      },
      booking: {
        title: 'Booked in Minutes',
        description: 'One message on WhatsApp and it is arranged. No forms, no waiting.',
      },
    },
    crew: {
      eyebrow: 'The people',
      title: 'Meet the',
      accent: 'Crew',
      subtitle: 'Local experts who actually live here, and are genuinely happy to show you around.',
      roles: {
        founder: 'Founder & Guide',
        localGuide: 'Local Guide',
        influencer: 'Influencer & Guide',
        manager: 'Manager',
        favelaGuide: 'Favela Guide',
      },
    },
    popular: {
      eyebrow: 'Most booked',
      title: 'Popular',
      accent: 'Tours',
      subtitle: 'Where most people start.',
      allExperiences: 'All 30 experiences',
      notes: {
        favela: 'R$190 each for 3 or more',
        party: 'Transport & shots included',
        hangGliding: 'GoPro video included',
      },
      tags: {
        local: 'Local Experiences',
        nightlife: 'Nightlife',
        adventure: 'Adventure',
      },
    },
    cta: {
      eyebrow: "Let's go",
      title: 'Ready for your',
      accent: 'Rio',
      titleEnd: 'adventure?',
      subtitle: 'One experience or a whole week planned for you — either way, it starts with a message.',
      bookTour: 'Book a Tour',
      concierge: 'Concierge Service',
    },
  },

  reviews: {
    eyebrow: 'Guest reviews',
    title: 'What Guests',
    accent: 'Say',
    verified: 'verified reviews',
    filterAll: 'All',
  },

  findUs: {
    eyebrow: 'Book anywhere',
    title: 'Find us',
    accent: 'on',
    subtitle:
      "We're on every platform you already trust — tap a logo to read our reviews or book there instead.",
    alsoOn: 'Also on',
    blurbs: {
      airbnb: 'See our experiences & reviews',
      tripadvisor: 'Read traveller reviews',
      getyourguide: 'Browse & book our tours',
    },
  },

  toursPage: {
    eyebrow: '30 experiences',
    title: 'Every corner of Rio,',
    accent: 'yours to explore',
    subtitle:
      'Top adventures, iconic parties, and unforgettable experiences — led by young people who live and breathe this city.',
    femaleOnly1: 'All experiences can be arranged as',
    femaleOnlyHighlight: 'female-only groups',
    femaleOnly2: 'upon request, accompanied by a female guide.',
    browseByCategory: 'Browse by category',
    experiencesCount: 'experiences',
    priceList: {
      eyebrow: 'At a glance',
      title: 'Quick',
      accent: 'price list',
      subtitle: 'Every experience and price in one place. All prices in Brazilian Reais.',
    },
    cta: {
      title: "Can't decide?",
      accent: "We'll plan it for you",
      subtitle:
        'Our concierge service handles your whole stay — itinerary, 24/7 support, and every tour at a discounted rate.',
      button: 'View Concierge Service',
    },
  },

  categories: {
    nightlife:     { label: 'Nightlife',              tagline: 'Bars, samba, rooftops and real favela parties' },
    'rio-culture': { label: 'Rio & Culture',          tagline: 'Landmarks, markets, football and everyday Rio' },
    adventure:     { label: 'Adventure & Adrenaline', tagline: 'Rio from the sky — flying over the city' },
    outdoors:      { label: 'Outdoors & Nature',      tagline: 'Sunrises, hikes, beaches and the ocean' },
    local:         { label: 'Local Experiences',      tagline: 'Rocinha from the inside, with the people who live there' },
  },

  badges: {
    'Most Popular': 'Most Popular',
    Premium: 'Premium',
  },

  concierge: {
    hero: {
      title: 'Your Rio,',
      accent: 'your way',
      subtitle:
        'Our concierge service plans your whole stay — itinerary, 24/7 support, and our tours at a discounted rate. Just show up and enjoy.',
    },
    intro: {
      title: 'Our',
      accent: 'concierge service',
      subtitle: 'Two options, depending on how much support and planning you want during your stay',
    },
    option1: {
      label: 'Option 1',
      title: 'Personalized Trip Assistance',
      price: '$50 USD',
      per: 'per day',
      cta: 'Get Started',
      includes: [
        'Help planning and scheduling your itinerary',
        '24/7 assistance and support throughout your stay',
        'Recommendations and coordination for activities and tours',
        'Access to our tours at a discounted rate compared to the prices listed on our website',
      ],
    },
    option2: {
      label: 'Option 2',
      title: 'All-Inclusive Experience Packages',
      subtitle: '$100 USD per day — everything in Option 1, plus a set of our best experiences',
      mostPopular: 'Most Popular',
      whatsIncluded: "What's Included",
      getQuote: 'Get Custom Quote',
      totalPerDay: 'total · $100 USD/day',
      packages: {
        three: {
          name: '3-Day Package',
          description: 'Everything in the all-inclusive service, plus:',
          includes: ['Sunrise hike', 'Favela party', 'Pedra do Sal', 'Additional tours at a discounted rate'],
        },
        five: {
          name: '5-Day Package',
          description: 'Everything in the all-inclusive service, plus:',
          includes: [
            'Sunrise hike',
            'Favela party',
            'Favela tour (drone video not included)',
            'Pedra do Sal',
            'Botafogo bar crawl',
            'Additional tours at a discounted rate',
          ],
        },
      },
    },
    fixedPriceNote:
      "Please note: helicopter rides and hang gliding have fixed prices, so we're unable to offer discounts on those activities.",
    included: {
      title: 'Everything',
      accent: 'taken care of',
      subtitle: 'Just bring yourself and get ready for adventure',
      items: {
        itinerary:  { title: 'Itinerary Planning',    description: 'We plan and schedule your days around what you actually want to do' },
        support:    { title: '24/7 Support',          description: 'Someone on the other end of the phone for your whole stay' },
        activities: { title: 'Activity Coordination', description: 'Recommendations and bookings for tours, restaurants and nightlife' },
        discounts:  { title: 'Discounted Tours',      description: 'Our experiences at a better rate than the prices listed on this site' },
        transport:  { title: 'Transport Sorted',      description: 'We arrange the transfers so you never have to work out how to get there' },
        nightlife:  { title: 'Nightlife Access',      description: 'Parties, bar crawls and events, with people who know the scene' },
        guides:     { title: 'Local Guides',          description: 'Born-and-raised Cariocas with you throughout' },
        safety:     { title: 'Safety First',          description: 'Your security and comfort are our top priorities' },
      },
    },
    form: {
      title: 'Request a',
      accent: 'custom quote',
      subtitle: 'Tell us about your dream Rio experience',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      whatsapp: 'WhatsApp Number',
      whatsappPlaceholder: '+55 21 12345-6789',
      package: 'Preferred Option',
      packagePlaceholder: 'Select an option',
      packageCustom: 'Custom duration',
      guests: 'Number of Guests',
      dates: 'Preferred Dates',
      datesPlaceholder: 'e.g., January 15–22, 2027',
      interests: 'Interests & Activities',
      interestsPlaceholder: 'e.g., Adventure sports, nightlife, culture, beaches',
      message: 'Additional Information',
      messagePlaceholder: 'Any special requests, dietary restrictions, or questions?',
      submit: 'Send via WhatsApp',
      submitting: 'Sending…',
      otherContact: 'Other Contact Options',
      disclaimer: 'Clicking "Send via WhatsApp" will open a pre-filled message on your device',
      messageIntro: "Hi! I'm interested in a Concierge Package:",
      labels: {
        name: 'Name',
        email: 'Email',
        whatsapp: 'WhatsApp',
        package: 'Option',
        guests: 'Number of Guests',
        dates: 'Preferred Dates',
        interests: 'Interests',
        message: 'Message',
      },
    },
    faq: {
      title: 'Common questions',
      items: [
        {
          question: 'Can I customize the activities?',
          answer:
            "Absolutely. Both options are fully flexible — tell us what you love (adventure, culture, nightlife, relaxation) and we'll build the itinerary around it.",
        },
        {
          question: 'Is accommodation included?',
          answer:
            'No — the concierge service covers planning, support and experiences. We are happy to recommend places to stay and help you book them.',
        },
        {
          question: 'Is it safe?',
          answer:
            'Your safety is our priority. Our local guides know these areas intimately and we take every precaution so you have a safe, memorable trip.',
        },
        {
          question: 'Can I extend my stay?',
          answer:
            'Yes. We can extend any package or build a completely custom duration — just tell us how long you are in Rio.',
        },
        {
          question: 'Do you offer group discounts?',
          answer:
            'Yes. The bigger your group, the better the per-person price. Message us for a group quote.',
        },
      ],
    },
    cta: {
      title: 'Still deciding?',
      accent: "Let's talk",
      subtitle:
        "No commitment needed — drop us a message and we'll help you figure out the perfect trip.",
      browseTours: 'Browse All Tours',
    },
  },

  contact: {
    title: "Let's plan your",
    accent: 'Rio adventure',
    subtitle:
      'Have questions? Want to book a tour? Reach out via WhatsApp for the fastest response — we usually reply within minutes.',
    chatNow: 'Chat Now',
    cards: {
      whatsapp: { title: 'WhatsApp', description: 'Fastest response — usually within minutes, 24/7' },
      camilla:  { title: 'Camilla',  description: 'Book directly with Camilla — your local host' },
      instagram:{ title: 'Instagram', description: 'See what we get up to every day' },
      email:    { title: 'Email',     description: 'For longer questions and group enquiries' },
    },
    form: {
      title: 'Send us a',
      accent: 'message',
      subtitle: "Tell us what you're after and we'll get back to you",
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'Tell us more…',
      submit: 'Send via WhatsApp',
      submitting: 'Sending…',
      intro: 'Contact Form Submission:',
    },
  },

  footer: {
    tagline: 'Authentic experiences in Rio de Janeiro, run by the people who actually live here.',
    explore: 'Explore',
    popular: 'Popular',
    getInTouch: 'Get in touch',
    findUsOn: 'Find us on',
    weAccept: 'We accept',
    rights: 'All rights reserved.',
    links: {
      allTours: 'All Tours',
      concierge: 'Concierge Service',
      contact: 'Contact Us',
      reviews: 'Reviews',
    },
  },

  toucan: {
    aria: 'A little toucan — tap it',
    title: 'You caught the toucan!',
    body1: "Here's",
    discount: '5% off',
    body2: 'any experience. Just send us this code when you book.',
    tapToCopy: 'Tap to copy',
    copied: 'Copied!',
    bookWith: 'Book with 5% off',
    dismiss: "Don't show the toucan again",
    whatsappMessage: "Hi! I found the toucan 🦜 — I'd like to use code",
    close: 'Close',
  },

  /** Per-tour copy, keyed by the tour id in app/data/tours.ts. */
  tourContent: {
    'pubcrawl-favela-party': {
      title: 'Pub Crawl & Real Favela Party with Locals in Rocinha',
      duration: '8 hours',
      description:
        'Party with local bars, rooftop views, Brazilian funk, drinks and a real favela party in Rocinha. Meet new people, party with locals, and experience a side of Rio most tourists never get to see.',
      includes: ['Transportation', 'Free shots', 'Rooftop bar', 'Local guide'],
    },
    'botafogo-bar-crawl': {
      title: 'Botafogo Bar Crawl',
      duration: '3 hours',
      description:
        "Visit the best local bars in one of Rio's liveliest neighborhoods, Botafogo. With a fun group and local guide, you'll enjoy good food, drinks and people.",
      includes: ['Bar-hopping experience', 'Local guide'],
    },
    'pedra-do-sal-samba': {
      title: 'Monday Night Samba at Pedra do Sal',
      duration: '6 hours',
      description:
        'Monday night at Pedra do Sal is the biggest samba party in Rio. Join a fun group, meet new people and dance to live music, samba, and the incredible energy of Pedra do Sal.',
      includes: ['Local guide', 'Van transfer to Pedra do Sal', 'Group experience'],
    },
    'ipanema-bar-crawl': {
      title: "Bar Hop Ipanema's Classic Bars",
      duration: '3 hours',
      description:
        "Experience the nightlife of Ipanema and Leblon visiting popular local bars, enjoying drinks, and meeting fellow travelers from around the world. Explore two of Rio's most iconic neighborhoods with a fun group and local guide.",
      includes: ['Local guide', 'Bar-hopping experience'],
    },
    'rocinha-rooftop-bbq': {
      title: 'Inside Rocinha, Rooftop BBQ with Locals',
      duration: '5 hours',
      description:
        'Experience an authentic night in the favela with a typical Brazilian churrasco surrounded by new friends, local and international. Connect through music, games, incredible rooftop views, dance and of course, good food.',
      includes: ['Local guide', 'Unlimited Brazilian BBQ', 'Vegetarian options', 'Beer pong'],
    },

    'christ-redeemer-ticket': {
      title: 'Christ the Redeemer Ticket & Transport',
      duration: '3 hours',
      priceNote: 'per person',
      description:
        'Visit a wonder of the world right here in Rio de Janeiro. The most iconic landmark, Christ the Redeemer, with everything taken care of, including your entrance ticket, transportation, and professional local guide. Discover the history, and enjoy some of the most spectacular panoramic views in Rio.',
      includes: ['Local guide', 'Transportation', 'Christ the Redeemer entrance ticket'],
    },
    'christ-selaron-steps': {
      title: 'Christ the Redeemer & Selarón Steps',
      duration: '3 hours',
      priceNote: 'per person',
      description:
        "Discover two of Rio's most iconic landmarks in one easy experience with private transportation and a local guide. Visit Christ the Redeemer for breathtaking city views before exploring the colorful and world-famous Selarón Steps.",
      includes: ['Local guide', 'Private transportation', 'Christ the Redeemer entrance ticket'],
    },
    'rio-full-day': {
      title: 'Rio Full-Day Tour',
      duration: '6 hours',
      priceNote: 'per person',
      description:
        "Discover the best of Rio in one unforgettable day, from Christ the Redeemer and Sugarloaf Mountain to Selarón Steps and the Museum of Tomorrow. Travel comfortably with private transportation and a local guide while experiencing some of the city's most iconic sights.",
      includes: ['Local guide', 'Private transportation'],
    },
    'sunrise-nature-landmarks': {
      title: "Sunrise in Rio's Nature Landmarks",
      duration: '5 hours',
      priceNote: 'per person',
      description:
        'Start your day watching the sun rise from Dona Marta before visiting Christ the Redeemer and the tropical beauty of Parque Lage and the Botanical Garden. Discover iconic landmarks and lush nature with a local guide.',
      includes: ['Local guide', 'Private transportation'],
    },
    'feira-da-gloria': {
      title: 'Eat & Drink at Feira da Glória',
      duration: '2 hours',
      priceNote: 'per person',
      description:
        'Try authentic Brazilian food and traditional drinks at Feira da Glória, one of the biggest Brazilian markets in Rio. Meet local vendors, discover Carioca flavors, and experience the culture and energy of Feira da Glória.',
      includes: ['Local guide', 'Food tastings'],
    },
    'full-sunday-eat-drink-shop': {
      title: 'Full Sunday, Eat Drink and Shop',
      duration: '3.5 hours',
      priceNote: 'per person',
      description:
        'Experience a local Sunday in Rio, from the colorful Selarón Steps, Feira da Glória and the famous Havaianas Concept Store. Explore with a local guide and customize your own pair of Havaianas.',
      includes: ['Local guide', 'Private transportation'],
    },
    'football-maracana': {
      title: 'Football Match at Maracanã',
      duration: 'Approximately 5 hours',
      price: 'Depends on the match',
      description:
        'Feel the passion of Brazilian football inside the legendary Maracanã Stadium alongside local fans and fellow travelers. With your official match ticket, local guide, and private transportation included, all you need to do is enjoy the atmosphere and experience the game like a Carioca.',
      includes: ['Official match ticket', 'Local guide', 'Private transportation'],
    },
    'vidigal-moto-tour': {
      title: 'Vidigal Moto Tour with Local Guide',
      duration: '2 hours',
      description:
        "Hop on a moto and explore Vidigal's narrow streets, stunning viewpoints, and local vibes with a trusted local guide. Feel the authentic favela energy!",
      includes: ['Moto-taxi rides', 'Local guide', 'Viewpoint stops', 'Explore narrow streets'],
    },

    'hang-gliding': {
      title: 'Hang Gliding',
      duration: 'Approximately 2 hours',
      priceNote: 'per person',
      description:
        "Soar above Rio's mountains, coastline, and beaches on an unforgettable hang gliding adventure. Take in breathtaking views from the sky and capture the experience with an included GoPro video.",
      includes: ['Professional pilot', 'GoPro video'],
      addons: [{ name: '360° video' }],
    },
    paragliding: {
      title: 'Paragliding',
      duration: 'Approximately 2 hours',
      priceNote: 'per person',
      description:
        "Soar above Rio's mountains, coastline, and beaches on an unforgettable paragliding adventure. Take in breathtaking views from the sky and capture the experience with an included GoPro video.",
      includes: ['Professional pilot', 'GoPro video'],
      addons: [{ name: '360° video' }],
    },
    'helicopter-doors-off': {
      title: 'Doors-Off Helicopter Flight',
      duration: '30-minute flight',
      priceNote: '1 person · R$1,200 each for 2 · R$1,100 each for 3',
      description:
        "See Rio from the ultimate perspective on a thrilling doors-off helicopter flight over the city's most iconic landmarks, mountains, and beaches. Capture incredible open-air photos and videos with unforgettable views of Christ the Redeemer, Sugarloaf Mountain, Rio's coastline, and more.",
      includes: ['30-minute doors-off helicopter flight'],
    },
    'helicopter-doors-on': {
      title: 'Helicopter Tour – With Doors',
      duration: '20 minutes',
      priceNote: 'total, up to 3 people',
      description:
        'Experience Rio from above in comfort and safety! See Christ, Sugarloaf, and the beaches with doors on. Total price for up to 3 people.',
      includes: ['Helicopter with doors', 'Professional pilot', 'Up to 3 people', 'Christ the Redeemer views'],
    },

    'morro-dois-irmaos-sunrise': {
      title: 'Sunrise Hike at Morro Dois Irmãos',
      duration: '5 hours',
      priceNote: 'per person · R$150 each for 2 or more',
      description:
        'Start your day above Rio with a gorgeous sunrise from the top of Morro Dois Irmãos. Ride through Vidigal by moto-taxi, start the easy to moderate hike, and finish the morning with a local breakfast.',
      includes: ['Local guide', 'Breakfast', 'All entrance fees'],
    },
    'pedra-bonita-picnic': {
      title: 'Picnic at the Top of Pedra Bonita',
      duration: '3 hours',
      description:
        "Escape into nature for an easy hike to the top of Pedra Bonita overlooking Rio's mountains, ocean, and coastline. Enjoy snacks and fresh fruit while taking in the golden-hour views with a fun group.",
      includes: ['Local guide', 'Transportation from Leblon', 'Snacks'],
    },
    'sunrise-waterfall': {
      title: 'Sunrise & Waterfall Adventure',
      duration: '6 hours',
      description:
        'Start your morning watching the sunrise over Rio from Vista Chinesa before heading into the rainforest for a waterfall adventure. Enjoy a light breakfast with panoramic views, hike through nature, and cool off with a swim beneath the falls.',
      includes: ['Local guide', 'Light breakfast', 'Transportation'],
    },
    'rio-ebike-tour': {
      title: 'Rio E-Bike Tour',
      duration: '3 hours',
      description:
        "Explore Rio with an easy electric bike ride through Copacabana, Botafogo, Flamengo, and the city's beautiful waterfront. Discover iconic neighborhoods, stop for incredible photos, and enjoy refreshing coconut water along the way.",
      includes: ['Electric bike', 'Local guide', 'Coconut water', 'Photos & videos'],
    },
    'sunrise-paddleboarding': {
      title: 'Sunrise Paddleboarding in Copacabana',
      duration: '2 hours',
      description:
        'Watch the sky change colors as you paddle into the sunrise off Copacabana Beach. This peaceful, beginner-friendly experience offers incredible coastal views, plus photos and videos to remember the morning.',
      includes: ['Local guide', 'Paddleboarding equipment', 'Safety lesson', 'Photos & videos'],
    },
    'girls-only-ipanema': {
      title: 'Girls-Only Ipanema Beach Day',
      duration: '3.5 hours',
      description:
        "Spend the afternoon at Ipanema Beach with a girls-only group, charcuterie, games, art, and good vibes. Relax by the ocean, make new friends, and enjoy one of Rio's best sunsets together.",
      includes: ['Local host', 'Charcuterie & snacks', 'Art supplies', 'Games & activities'],
    },
    'joatinga-hidden-beach': {
      title: 'Joatinga Hidden Beach Day',
      duration: '3 hours',
      description:
        "Escape the crowds and discover Joatinga, one of Rio's most beautiful hidden beaches surrounded by cliffs and tropical nature. Swim, relax, play altinha, and enjoy an authentic beach day with locals and fellow travelers.",
      includes: ['Local guide'],
    },
    'surf-lesson-arpoador': {
      title: 'Surf Lesson at Arpoador Beach',
      duration: '1 hour',
      description:
        "Catch your first waves and experience Rio's famous surf culture with a local instructor. Learn the basics, practice in the ocean, and enjoy a fun, beginner-friendly surf session at Arpoador.",
      includes: ['Local surf instructor', 'Surf equipment', 'Practical lesson', 'Basic surf theory'],
    },
    'futevolei-class': {
      title: 'Beginner Futevôlei Class',
      duration: '1 hour',
      description:
        "Learn one of Rio's most popular beach sports with a local instructor. Learn the basics of futevôlei, practice your technique on the sand, and enjoy a fun, beginner-friendly class while enjoying Rio's beaches.",
      includes: ['Local futevôlei instructor', 'Equipment', 'Practical lesson', 'Basic futevôlei techniques'],
    },
    'sugarloaf-hike': {
      title: 'Sugarloaf Hike',
      duration: '30 minutes',
      priceNote: 'private · R$150 per person in a group',
      description:
        "Experience a refreshing 30-minute hike with breathtaking views of Rio's iconic Sugarloaf mountain and surrounding beaches. Perfect for a quick adventure or as part of a larger tour.",
      includes: ['Professional guide', 'Scenic hiking trail', 'Panoramic views', 'Water & snacks'],
    },

    'rocinha-favela-tour': {
      title: 'Complete Rocinha Favela Tour',
      duration: '3 hours',
      priceNote: 'per person · R$190 each for 3 or more',
      description:
        "Discover Rocinha from the inside with a local guide, from a thrilling moto-taxi ride and viewpoints overlooking Rio, to capoeira, street art, football, and community life. Connect with locals and gain a deeper understanding of the culture, history, and everyday reality of Brazil's largest favela.",
      includes: ['Local guide'],
      addons: [{ name: 'Professional drone video' }],
    },
    'mini-rocinha-drone': {
      title: 'Mini Rocinha Tour & Drone Video',
      duration: '3 hours',
      priceNote: 'per person',
      description:
        'Explore Rocinha with a local guide, ride through the community by moto-taxi, and capture the experience from a new perspective. Finish with cinematic drone footage above the favela and take home a professional video of your adventure.',
      includes: ['Local guide', 'Professional drone video'],
    },
    'cria-hairstyle-makeover': {
      title: 'Brazilian “Cria” Hairstyle Makeover',
      duration: '3 hours',
      priceNote: 'per person',
      description:
        "Step into a local Rocinha barbershop and transform your look with a Brazilian style haircut and bleaching. More than just a haircut, it's a unique way to connect with local culture and experience the favela from a completely different perspective.",
      includes: ['Local guide', 'Haircut', 'Bleaching'],
    },
  },
};

/**
 * The three lookup maps get explicit types so that (a) optional per-tour fields
 * work, and (b) a locale missing a tour, category or badge is a build error.
 */
export type Dictionary = Omit<typeof en, 'categories' | 'badges' | 'tourContent'> & {
  categories: CategoryContent;
  badges: BadgeContent;
  tourContent: TourContent;
};

const dictionary: Dictionary = en;
export default dictionary;
