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
    image: '/images/IMG_9154.JPG'
  },
  {
    id: 'favela-tour-complete',
    title: 'Favela Tour – Complete (Rocinha)',
    price: '250R',
    duration: '3 hours',
    includes: ['Motorcycle ride to the top', '2 panoramic viewpoints with stunning views', 'Visit to Joana\'s house inside Rua 1', 'Street art gallery visit', 'Local football court experience', 'Deep insight into favela life & history'],
    description: 'The full Rocinha experience! Everything from the Standard Tour plus exclusive stops, deeper cultural insights, and more time to truly connect with the community.',
    emoji: '🏘️',
    highlight: 'Most Popular',
    image: '/images/IMG_9155.JPG'
  },
  {
    id: 'pubcrawl-party',
    title: 'Pubcrawl & Favela Party',
    price: '150R',
    includes: ['Transport included', 'Free shots', 'Rooftop bars', 'Party guide'],
    description: 'Dive into Rio\'s nightlife like a local! Experience rooftop bars, music, drinks, and a real party inside the favela streets — an experience like no other.',
    emoji: '🎉',
    image: '/images/IMG_0899.PNG'
  },
  {
    id: 'city-tour',
    title: 'Rio de Janeiro City Tour',
    price: '590R',
    duration: 'Full day',
    includes: ['Christ the Redeemer visit', 'Selarón Steps', 'Lapa neighborhood', 'Maracanã stadium', 'Comfortable transport', 'Professional guide'],
    description: 'The complete Rio experience! Starting from Cardeal Arcoverde station in Copacabana, we visit all the main attractions with comfort and safety.',
    emoji: '✨',
    highlight: 'Complete Experience',
    image: '/images/IMG_9229.JPG'
  },
  {
    id: 'pedra-sal',
    title: 'Pedra do Sal Pubcrawl',
    price: '150R',
    duration: 'Every Monday',
    includes: ['Transport included', 'Welcome beer', 'Local guide', 'Cultural experience'],
    description: 'Feel the soul of Rio with live samba, street parties, and caipirinhas at the city\'s most iconic Monday night spot. The best way to experience authentic Brazilian culture!',
    emoji: '🍹',
    image: '/images/IMG_0900.PNG'
  },
  {
    id: 'sunrise-hike',
    title: 'Morro Dois Irmãos Sunrise Hike + Breakfast',
    price: '190R',
    duration: '4 hours',
    includes: ['Early morning transport', 'Mini Vidigal tour', 'Snacks & water', 'Local breakfast after hike', 'Professional guide'],
    description: 'Start early to witness a magical sunrise above Rio\'s skyline 🌅. Begin with a mini tour through Vidigal\'s vibrant streets, then hike up for unforgettable panoramic views.',
    emoji: '🌄',
    image: '/images/IMG_9230.JPG'
  },
  {
    id: 'football',
    title: 'Football Match in Maracanã',
    price: '280R - 480R',
    duration: 'Depends on match',
    includes: ['Match ticket', 'Transport (round trip)', 'Welcome drink', 'Guide included'],
    description: 'Experience Brazilian football passion! Watch the game at the legendary Maracanã stadium. Feel the energy and passion of Rio\'s football culture. Price varies by match.',
    emoji: '⚽',
    image: '/images/IMG_0903.PNG'
  },
  {
    id: 'hang-gliding',
    title: 'Hang Gliding',
    price: '750R',
    duration: '2-3 hours',
    includes: ['Professional pilot', 'Video included', 'All equipment', 'Hotel pickup'],
    description: 'Soar above Rio\'s beaches and mountains for a once-in-a-lifetime flight — pure adrenaline and breathtaking scenery. Video of your flight included!',
    emoji: '🪂',
    highlight: 'Top Adventure',
    image: '/images/IMG_0904.PNG'
  },
  {
    id: 'helicopter',
    title: 'Helicopter Tour (No Doors)',
    price: '1150R per person',
    duration: '30 minutes',
    includes: ['Doorless helicopter', 'Professional pilot', 'Epic photo ops', 'Christ the Redeemer views'],
    description: 'Experience Rio from above with the wind in your hair! See Christ, Sugarloaf, and the beaches like never before. The ultimate aerial adventure.',
    emoji: '🚁',
    highlight: 'Premium',
    image: '/images/IMG_9229.JPG'
  },
  {
    id: 'moto-tour',
    title: 'Vidigal Moto Tour with Local Guide',
    price: '190R',
    duration: '2 hours',
    includes: ['Moto-taxi rides', 'Local guide', 'Viewpoint stops', 'Explore narrow streets', 'Authentic favela experience'],
    description: 'Hop on a moto and explore Vidigal\'s narrow streets, stunning viewpoints, and local vibes with a trusted local guide. Feel the authentic favela energy!',
    emoji: '🏍️',
    image: '/images/IMG_9155.JPG'
  }
];

export default function ToursPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-brazilian-green/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 mb-4 sm:mb-6 px-4">
              Our Tours
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed px-4">
              From cultural experiences to adrenaline-pumping adventures, find your perfect Rio experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                id={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-2 border-neutral-200 hover:border-brazilian-yellow/60 flex flex-col"
              >
                {/* Tour Image */}
                {tour.image && (
                  <div className="relative h-48 sm:h-56 w-full">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Highlight Badge on image */}
                    {tour.highlight && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brazilian-green text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                        {tour.highlight}
                      </div>
                    )}
                    {/* Emoji overlay */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-4xl sm:text-5xl drop-shadow-lg">{tour.emoji}</div>
                  </div>
                )}

                {/* Highlight Badge (for tours without images) */}
                {!tour.image && tour.highlight && (
                  <div className="bg-brazilian-green text-white text-xs sm:text-sm font-semibold px-4 py-2 text-center">
                    {tour.highlight}
                  </div>
                )}

                <div className="p-5 sm:p-8 flex-grow flex flex-col">
                  {/* Emoji (only show if no image) */}
                  {!tour.image && <div className="text-5xl sm:text-6xl mb-4">{tour.emoji}</div>}

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2 sm:mb-3 leading-tight">
                    {tour.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-2xl sm:text-3xl font-semibold text-brazilian-green">
                      {tour.price}
                    </p>
                    {tour.discountPrice && (
                      <p className="text-xs sm:text-sm text-brazilian-green-dark font-medium mt-1">
                        {tour.discountPrice}
                      </p>
                    )}
                    {tour.duration && (
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">{tour.duration}</p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                    {tour.description}
                  </p>

                  {/* Includes */}
                  {tour.includes && tour.includes.length > 0 && (
                    <div className="mb-5 sm:mb-6 space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-neutral-900">Includes:</p>
                      <ul className="space-y-1">
                        {tour.includes.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-neutral-600 flex items-start">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brazilian-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Book Button - Green with WHITE text */}
                  <a
                    href={`https://wa.me/5521998477858?text=Hi! I'm interested in the ${tour.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] sm:min-h-[52px] py-3 sm:py-3.5 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-sm sm:text-base text-center shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center mt-auto"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Price Comparison */}
      <section className="py-12 sm:py-24 bg-neutral-100 relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brazilian-green/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4 px-4">
              Quick Price Comparison
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 px-4">All prices in Brazilian Reais (R$)</p>
          </motion.div>

          {/* Mobile: Stack layout */}
          <div className="sm:hidden space-y-4">
            {tours.map((tour) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 shadow-sm border-2 border-brazilian-yellow/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{tour.emoji}</span>
                  <span className="text-xl font-semibold text-brazilian-green">
                    {tour.price}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">{tour.title}</h3>
                {tour.duration && (
                  <p className="text-sm text-neutral-600">{tour.duration}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop: Table layout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:block bg-white rounded-3xl shadow-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-brazilian-green text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tour</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {tours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tour.emoji}</span>
                          <span className="font-medium text-neutral-900">{tour.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-semibold text-brazilian-green">{tour.price}</span>
                        {tour.discountPrice && (
                          <div className="text-sm text-brazilian-green-dark">{tour.discountPrice}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-neutral-600">
                        {tour.duration || 'Contact us'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 px-4">
              Can't Decide? Get a Custom Package
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
              Want to experience multiple tours? We offer custom multi-day packages with everything included.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mt-6 sm:mt-8 max-w-lg mx-auto"
          >
            {/* Green button with WHITE text */}
            <Link
              href="/private-experiences"
              className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-8 sm:px-12 py-3.5 sm:py-4 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              View Private Packages
            </Link>
            {/* White button with green border */}
            <a
              href="https://wa.me/5521998477858"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-8 sm:px-12 py-3.5 sm:py-4 bg-white hover:bg-brazilian-yellow-light text-brazilian-green rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-brazilian-green inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
