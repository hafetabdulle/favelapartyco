'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Tour {
  id: string;
  title: string;
  price: string;
  discountPrice?: string;
  duration?: string;
  includes?: string[];
  description: string;
  emoji: string;
  highlight?: string;
  image?: string;
  accentColor?: string;
  addons?: {
    name: string;
    price: string;
  }[];
}

const tours: Tour[] = [
  {
    id: 'favela-tour-standard',
    title: 'Favela Tour – Standard (Rocinha)',
    price: '160R',
    duration: '1.5 hours',
    includes: ['Motorcycle ride to the top of Rocinha', 'Capoeira show with local performers', 'Visit to the famous "Rua 1"', 'Return walk down or moto-taxi (+R$10)'],
    description: 'Discover the Real Rocinha! Explore the largest favela in Brazil with an authentic experience that connects you directly with local life, art, and culture.',
    emoji: '🛵',
    highlight: 'Best Value',
    image: '/images/IMG_9154.JPG',
    addons: [
      { name: 'Professional Photographer (Canon G7X Mark III)', price: 'Contact us' },
      { name: 'Drone Video (unique aerial footage)', price: 'R$150 per person' }
    ]
  },
  {
    id: 'favela-tour-complete',
    title: 'Favela Tour – Complete (Rocinha)',
    price: '250R/person',
    discountPrice: '220R for 2+ people',
    duration: '3 hours',
    includes: ['Motorcycle ride to the top', '2 panoramic viewpoints with stunning views', 'Visit to Joana\'s house inside Rua 1', 'Street art gallery visit', 'Local football court experience', 'Deep insight into favela life & history'],
    description: 'The full Rocinha experience! Everything from the Standard Tour plus exclusive stops, deeper cultural insights, and more time to truly connect with the community.',
    emoji: '🏘️',
    highlight: 'Most Popular',
    image: '/images/IMG_9155.JPG',
    addons: [
      { name: 'Professional Photographer (Canon G7X Mark III)', price: 'Contact us' },
      { name: 'Drone Video (unique aerial footage)', price: 'R$150 per person' }
    ]
  },
  {
    id: 'pubcrawl-party',
    title: 'Pubcrawl & Favela Party',
    price: '190R',
    duration: '6 hours',
    includes: ['Transport included', 'Free shots', 'Rooftop bars', 'Party guide'],
    description: 'Dive into Rio\'s nightlife like a local! Experience rooftop bars, music, drinks, and a real party inside the favela streets — an experience like no other.',
    emoji: '🎉',
    image: '/images/IMG_1118.PNG',
    accentColor: 'red'
  },
  {
    id: 'churrasco-rooftop',
    title: 'Authentic Brazilian Churrasco on a Favela Rooftop',
    price: '190R',
    duration: '5 hours',
    includes: ['Unlimited Brazilian BBQ', 'Vegetarian options available', 'Local host', 'Beer pong tournament', 'Karaoke', 'Music & dancing', 'Rooftop views', 'Social experience with travelers & locals'],
    description: 'Experience an authentic Brazilian churrasco night on a rooftop in Rocinha. Enjoy unlimited BBQ, music, dancing, karaoke, games, and incredible views while meeting travelers and locals.',
    emoji: '🍖',
    image: '/images/bbqchurrasco.jpg',
  },
  {
    id: 'city-tour',
    title: 'Christ the Redeemer & Selarón Steps',
    price: '600R',
    duration: 'Full day',
    includes: ['Tickets', 'Tour guide', 'Public transportation', 'Option to upgrade to private transfer (+extra cost)'],
    description: 'Explore two of Rio\'s most iconic landmarks! Visit the magnificent Christ the Redeemer statue and discover the colorful Selarón Steps with their 250+ staircase tiles. Perfect blend of culture and views.',
    emoji: '✨',
    highlight: 'Complete Experience',
    image: '/images/christtheredeemer.jpg',
    addons: [
      { name: 'Maracanã Stadium Tour', price: '200R per person' }
    ]
  },
  {
    id: 'landmark-adventure',
    title: 'Landmark Adventure in the Heart of Rio',
    price: '380R',
    duration: '6 hours',
    includes: ['Private transportation', 'Local English-speaking guide', 'Hotel pick-up & drop-off'],
    description: "Discover Rio de Janeiro's most iconic landmarks in one unforgettable day. Visit Christ the Redeemer, the Brazilian Flag Staircase, the Museum of Tomorrow, Selarón Steps, and Sugarloaf Mountain with a local guide and private transportation.",
    emoji: '🗺️',
    image: '/images/landmark.jpg',
  },
  {
    id: 'sunrise-hike',
    title: 'Morro Dois Irmãos Sunrise Hike + Breakfast',
    price: '190R/person',
    discountPrice: '150R for 2+ people',
    duration: '4 hours',
    includes: ['Early morning transport', 'Mini Vidigal tour', 'Snacks & water', 'Local breakfast after hike', 'Professional guide'],
    description: 'Start early to witness a magical sunrise above Rio\'s skyline 🌅. Begin with a mini tour through Vidigal\'s vibrant streets, then hike up for unforgettable panoramic views.',
    emoji: '🌄',
    image: '/images/IMG_1127.PNG'
  },
  {
    id: 'sugarloaf-hike',
    title: 'Sugar Loaf Hike',
    price: '300R (private) / 150R per person (group)',
    duration: '30 minutes',
    includes: ['Professional guide', 'Scenic hiking trail', 'Panoramic views', 'Water & snacks'],
    description: 'Experience a refreshing 30-minute hike with breathtaking views of Rio\'s iconic Sugar Loaf mountain and surrounding beaches. Perfect for a quick adventure or as part of a larger tour.',
    emoji: '🏔️',
    image: '/images/sugarloaf.jpg'
  },
  {
    id: 'football',
    title: 'Football Match in Maracanã',
    price: '280R - 480R',
    duration: 'Depends on match',
    includes: ['Match ticket', 'Transport (round trip)', 'Welcome drink', 'Guide included'],
    description: 'Experience Brazilian football passion! Watch the game at the legendary Maracanã stadium. Feel the energy and passion of Rio\'s football culture. Price varies by match.',
    emoji: '⚽',
    image: '/images/IMG_1123.PNG'
  },
  {
    id: 'paragliding',
    title: 'Paragliding',
    price: '890R',
    duration: '2–3 hours',
    includes: ['Professional pilot', 'All equipment', 'Video available (+200R)'],
    description: "Soar above Rio's beaches and mountains on a paragliding flight designed for everyone — smoother, more comfortable, and more accessible than other aerial sports, without missing any of the adrenaline or breathtaking views. Professional video available for an additional R$200.",
    emoji: '🪂',
    highlight: 'Top Adventure',
    image: '/images/paragliding.jpg',
    addons: [
      { name: 'Professional video', price: '200R' }
    ]
  },
  {
    id: 'hang-gliding',
    title: 'Hang Gliding',
    price: '950R',
    duration: '2-3 hours',
    includes: ['Professional pilot', 'All equipment', 'Video available (+200R)'],
    description: 'Soar above Rio\'s beaches and mountains for a once-in-a-lifetime flight — pure adrenaline and breathtaking scenery. Professional video of your flight available for 200R extra.',
    emoji: '🪂',
    highlight: 'Top Adventure',
    image: '/images/hanggliding.jpg'
  },
  {
    id: 'helicopter-doors-on',
    title: 'Helicopter Tour – With Doors',
    price: '1990R total',
    duration: '20 minutes',
    includes: ['Helicopter with doors', 'Professional pilot', 'Up to 3 people', 'Christ the Redeemer views', 'Panoramic views of beaches and mountains'],
    description: 'Experience Rio from above in comfort and safety! See Christ, Sugarloaf, and the beaches with doors on. Total price for up to 3 people.',
    emoji: '🚁',
    image: '/images/helicopter.jpg'
  },
  {
    id: 'helicopter-doors-off',
    title: 'Helicopter Tour – Without Doors',
    price: '1050R per person',
    duration: '30 minutes',
    includes: ['Doorless helicopter', 'Professional pilot', 'Epic photo ops', 'Christ the Redeemer views', 'Up to 3 people', 'Wind-in-your-hair experience'],
    description: 'Experience Rio from above with the wind in your hair! See Christ, Sugarloaf, and the beaches like never before. The ultimate open-air aerial adventure.',
    emoji: '🚁',
    highlight: 'Premium',
    image: '/images/helicopter.jpg'
  },
  {
    id: 'christ-visit-only',
    title: 'Christ the Redeemer Visit Only',
    price: '450R per person',
    duration: '3-4 hours',
    includes: ['Transportation', 'Entrance ticket', 'Professional guide'],
    description: 'Visit the iconic Christ the Redeemer statue with hassle-free transportation and skip-the-line entrance. Perfect for those who want to focus on this world-famous landmark.',
    emoji: '✝️',
    image: '/images/christtheredeemer.jpg'
  },
  {
    id: 'moto-tour',
    title: 'Vidigal Moto Tour with Local Guide',
    price: '190R',
    duration: '2 hours',
    includes: ['Moto-taxi rides', 'Local guide', 'Viewpoint stops', 'Explore narrow streets', 'Authentic favela experience'],
    description: 'Hop on a moto and explore Vidigal\'s narrow streets, stunning viewpoints, and local vibes with a trusted local guide. Feel the authentic favela energy!',
    emoji: '🏍️',
    image: '/images/IMG_9230.JPG'
  },
  {
    id: 'botafogo-bar-crawl',
    title: 'Botafogo Bar Crawl',
    price: '190R',
    duration: '3 hours',
    includes: ['Bar-hopping experience', 'Local guide', 'Visit to multiple local bars', '3 drinks / 5 beers', 'Shared appetizer'],
    description: "Explore Botafogo's nightlife through authentic local bars. Enjoy a social bar-hopping experience with a fun group and lively atmosphere.",
    emoji: '🍺',
    image: '/images/botofongo.jpg',
  },
  {
    id: 'eat-drink-feira',
    title: 'Eat & Drink like a Local at Feira da Glória',
    price: '250R',
    duration: '2 hours',
    includes: ['Guided visit to Feira da Glória', 'Local English-speaking guide', 'Authentic Brazilian food tastings', 'Traditional drinks', 'Cultural insights and local stories'],
    description: "Experience one of Rio's most authentic local traditions at the famous Feira da Glória. Wander through the vibrant Sunday street market where Cariocas gather to eat, drink, and socialize while tasting delicious local specialties.",
    emoji: '🥘',
    image: '/images/eatdrinklocal.jpg',
  },
  {
    id: 'sunset-pedra-bonita',
    title: 'Sunset Experience + Picnic – Pedra Bonita',
    price: '250R/person',
    discountPrice: '190R for 2+ people',
    duration: '4 hours',
    includes: ['Guided hike', 'Picnic with snacks & drinks', 'Sunset experience', 'Small group'],
    description: "Watch one of Rio's most beautiful sunsets from Pedra Bonita. Enjoy an easy hike, breathtaking views, and a curated picnic with a relaxed, social vibe.",
    emoji: '🌅',
    image: '/images/sunset-pedra-bonita.jpg',
  },
  {
    id: 'paddleboard-sunrise',
    title: 'Sunrise Paddle Board Ocean Experience',
    price: '190R',
    duration: '2 hours',
    includes: ['Life jacket', 'Sand instruction session', 'Waterproof cover', 'Photos & videos during the experience', 'Full guided accompaniment'],
    description: 'Start your day with an unforgettable sunrise at sea. Enjoy a guided ocean session with stunning views, peaceful vibes, and a unique connection to nature — perfect for beginners and experienced alike.',
    emoji: '🏄',
    highlight: 'New Experience',
    image: '/images/paddleboard-sunrise.jpg',
    addons: [
      { name: 'Drone images & video (aerial footage)', price: '80R – 100R' }
    ]
  },
  {
    id: 'girls-beach-day',
    title: 'Girls Beach Day with Charcuterie',
    price: '150R',
    duration: '4 hours',
    includes: ['Girls-only beach picnic', 'Local host', 'Food & drinks', 'Painting & drawing materials', 'Sunset experience', 'Group photos', 'Charcuterie board'],
    description: "Spend the perfect girls-only day at Ipanema Beach with a relaxing beach picnic. Enjoy food, drinks, swimming, painting, drawing, taking photos, and end the afternoon watching Rio's unforgettable sunset together.",
    emoji: '🏖️',
    image: '/images/girlsbeachday.jpg',
  },
  {
    id: 'rio-night-pedra-sal',
    title: 'Rio Night Experience – Pedra do Sal Bar Crawl',
    price: '190R',
    duration: '6 hours',
    includes: ['Local host', 'Group experience', 'Van transfer', 'Nightlife experience'],
    description: "Experience Rio's cultural nightlife with live samba, vibrant energy, and a social group atmosphere in one of the city's most iconic areas.",
    emoji: '🎶',
    image: '/images/rio-night-pedra-sal.jpg',
  },
  {
    id: 'sunrise-waterfall',
    title: 'Sunrise Experience & Waterfall Adventure',
    price: '250R/person',
    discountPrice: '190R for 2+ people',
    duration: '6 hours',
    includes: ['Sunrise at Vista Chinesa', 'Light breakfast with scenic views', 'Guided Horto Waterfall trail', 'Time to swim and relax at the waterfall', 'Photos and breathtaking viewpoints', 'Optional group lunch after the experience (additional cost)'],
    description: 'Experience one of the most magical mornings in Rio! Watch the sunrise from the iconic Vista Chinesa, enjoy a light breakfast with panoramic city views, then continue into nature for a refreshing waterfall adventure in the Tijuca Forest.',
    emoji: '🌊',
    highlight: 'New Experience',
    image: '/images/waterfall.jpg',
  },
  {
    id: 'drone-video',
    title: 'Infamous Drone Video',
    price: '250R',
    duration: '1.5 hours',
    includes: ['Guided walk through the alleys', 'Professional drone video footage', 'Motorcycle ride up & down the favela'],
    description: 'Capture unforgettable moments in the heart of Rocinha with a unique drone-focused experience. Ride through the favela by motorcycle, explore the local alleys, and finish with incredible rooftop drone footage overlooking Rio de Janeiro.',
    emoji: '🎬',
    image: '/images/drone.jpg',
  },
  {
    id: 'haircut-favela',
    title: 'Haircut & Color in the Favela',
    price: '400R',
    duration: '1.5 hours',
    includes: ['Professional men\'s haircut', 'Hair bleaching or color service', 'Barber styling and finishing', 'Authentic Rocinha barbershop experience', 'Photos during the experience', 'Local host assistance'],
    description: 'Get a fresh cut inside the heart of Rocinha with an authentic local barber experience. Relax, upgrade your style, and experience the energy of one of Rio\'s most vibrant communities while being treated by skilled local barbers.',
    emoji: '💈',
    image: '/images/haircut.jpg',
  },
  {
    id: 'concierge-service',
    title: 'Concierge Service',
    price: 'Custom Pricing',
    duration: '24/7 during your stay',
    includes: ['Full-time personal assistance', 'Pre-arrival trip planning & analysis', 'Personalized recommendations', 'Tour booking & organization', 'Restaurant & nightlife reservations', 'Social events coordination', 'Emergency support'],
    description: '24/7 full-time assistance during your stay (or for the days you choose). I personally take care of you with recommendations, support, planning, and guide you in any tours you want to book. The service starts before you arrive in Rio — I analyze and organize your trip objectives to arrange everything: parties, social events, restaurants, bars, nightlife, meetings, experiences... whatever you want, I\'ll make it happen and be fully available for you.',
    emoji: '🎯',
    highlight: 'VIP Service',
    accentColor: 'red'
  }
];

export default function ToursPage() {
  return (
    <div className="pt-28 sm:pt-32 bg-white">

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-white">
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
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-3">
              Top adventures, iconic parties, and unforgettable experiences — led by people who live and breathe this city.
            </p>
            <p className="text-xs text-neutral-400">All prices are subject to an additional 10% tax.</p>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                id={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
                className="bg-white rounded-2xl overflow-hidden flex flex-col group shadow-sm hover:shadow-lg transition-all duration-400"
              >
                {/* Image */}
                {tour.image ? (
                  <div className="relative h-56 sm:h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Price badge */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
                      <p className="text-sm font-semibold text-[#009739] leading-tight">{tour.price}</p>
                      {tour.discountPrice && (
                        <p className="text-[10px] text-neutral-500 leading-tight">{tour.discountPrice}</p>
                      )}
                    </div>
                    {/* Highlight badge */}
                    {tour.highlight && (
                      <div className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                        tour.highlight === 'Premium'
                          ? 'bg-amber-400 text-amber-900'
                          : tour.highlight === 'VIP Service'
                          ? 'bg-[#FEDD00] text-neutral-900'
                          : 'bg-[#009739] text-white'
                      }`}>
                        {tour.highlight}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={`h-24 flex items-center justify-center flex-shrink-0 ${
                    tour.highlight === 'VIP Service' ? 'bg-neutral-800' :
                    tour.accentColor === 'red' ? 'bg-red-50' : 'bg-white'
                  }`}>
                    <span className="text-5xl">{tour.emoji}</span>
                    {tour.highlight && (
                      <div className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                        tour.highlight === 'VIP Service' ? 'bg-[#FEDD00] text-neutral-900' : 'bg-[#009739] text-white'
                      }`}>
                        {tour.highlight}
                      </div>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {!tour.image && <div className="text-2xl mb-3 hidden">{tour.emoji}</div>}

                  <h3 className="font-display font-semibold text-neutral-900 leading-snug mb-1 text-lg sm:text-xl">
                    {tour.title}
                  </h3>

                  {/* Price for no-image tours */}
                  {!tour.image && (
                    <div className="mb-2">
                      <p className="text-lg font-semibold text-[#009739]">{tour.price}</p>
                      {tour.discountPrice && (
                        <p className="text-xs text-[#006B28] font-medium">{tour.discountPrice}</p>
                      )}
                    </div>
                  )}

                  {tour.duration && (
                    <p className="text-xs text-neutral-500 mb-3 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {tour.duration}
                    </p>
                  )}

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-grow">
                    {tour.description}
                  </p>

                  {/* Includes */}
                  {tour.includes && tour.includes.length > 0 && (
                    <div className="mb-4 space-y-1.5">
                      <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wide">Includes</p>
                      <ul className="space-y-1">
                        {tour.includes.map((item, i) => (
                          <li key={i} className="text-xs text-neutral-600 flex items-start gap-2">
                            <svg className="w-3.5 h-3.5 text-[#009739] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Add-ons */}
                  {tour.addons && tour.addons.length > 0 && (
                    <div className="mb-4 p-3 bg-white rounded-xl border border-neutral-200">
                      <p className="text-xs font-semibold text-neutral-800 mb-1.5">Optional Add-ons</p>
                      {tour.addons.map((addon, i) => (
                        <p key={i} className="text-xs text-neutral-600">
                          {addon.name}: <span className="font-semibold text-[#009739]">{addon.price}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  <a
                    href={`https://wa.me/5521998477858?text=${encodeURIComponent(`Hi! I'm interested in the ${tour.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] py-3 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-semibold text-sm text-center transition-all duration-200 flex items-center justify-center mt-auto"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
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
            <p className="text-neutral-500 text-sm">All prices in Brazilian Reais (R$) · Subject to 10% tax</p>
          </motion.div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {tours.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center justify-between bg-white rounded-2xl px-4 py-3.5 border border-neutral-200/60"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{tour.emoji}</span>
                  <div>
                    <p className="text-sm font-medium text-neutral-900 leading-snug">{tour.title}</p>
                    {tour.duration && <p className="text-xs text-neutral-500">{tour.duration}</p>}
                  </div>
                </div>
                <div className="text-right ml-3 flex-shrink-0">
                  <p className="text-sm font-semibold text-[#009739]">{tour.price}</p>
                  {tour.discountPrice && <p className="text-[10px] text-[#006B28]">{tour.discountPrice}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block rounded-2xl overflow-hidden border border-neutral-200"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-[#009739] text-white">
                  <th className="px-6 py-4 text-left font-semibold text-sm">Tour</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Price</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {tours.map((tour, i) => (
                  <tr key={tour.id} className={`hover:bg-white transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tour.emoji}</span>
                        <span className="font-medium text-neutral-900 text-sm">{tour.title}</span>
                        {tour.highlight && (
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            tour.highlight === 'Premium' ? 'bg-amber-100 text-amber-700' :
                            tour.highlight === 'VIP Service' ? 'bg-[#FEDD00]/40 text-neutral-800' :
                            'bg-[#009739]/10 text-[#009739]'
                          }`}>{tour.highlight}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#009739] text-sm">{tour.price}</span>
                      {tour.discountPrice && (
                        <div className="text-xs text-[#006B28]">{tour.discountPrice}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500">{tour.duration || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
              Want to experience multiple tours? We build custom multi-day packages with everything included — activities, transport, and local expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center pt-2 max-w-md mx-auto">
              <Link
                href="/private-experiences"
                className="min-h-[52px] px-8 py-3 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                View Private Packages
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
