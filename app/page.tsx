'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-neutral-100">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_9229.JPG"
            alt="Rio de Janeiro"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-neutral-900/70 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white leading-[1.1] drop-shadow-2xl px-2"
            >
              Experience the Real
              <br />
              Rio de Janeiro
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4"
            >
              Authentic experiences that connect travelers with the true spirit of Rio de Janeiro.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-6 sm:pt-8 w-full max-w-lg mx-auto px-4"
            >
              {/* Primary CTA - Brazilian Green with WHITE text for perfect contrast */}
              <Link
                href="/tours"
                className="w-full sm:w-auto min-h-[54px] sm:min-h-[56px] px-8 sm:px-12 py-3.5 sm:py-4 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                View All Tours
              </Link>
              {/* Secondary CTA - White with green border and DARK GREEN text */}
              <Link
                href="/private-experiences"
                className="w-full sm:w-auto min-h-[54px] sm:min-h-[56px] px-8 sm:px-12 py-3.5 sm:py-4 bg-white hover:bg-brazilian-yellow-light text-brazilian-green rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-brazilian-green flex items-center justify-center"
              >
                Private Experiences
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-8 sm:pt-12 px-4"
            >
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/90 hover:text-brazilian-yellow font-medium transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Quick questions? WhatsApp us</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator with green accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1.5 h-3 bg-brazilian-yellow rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section - White background with subtle yellow accent */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Subtle yellow decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12 sm:mb-20"
          >
            {/* Heading with Tom's image */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Tom's circular image */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brazilian-green shadow-lg">
                  <Image
                    src="/images/tom.jpg"
                    alt="Tom"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 text-center sm:text-left">
                Why choose me?
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed px-4 text-center">
              I&apos;ve traveled to more than 20 countries around the world, and I know exactly what it feels like to arrive in a city like this—so much to do, so many people to meet, and so many moments waiting to happen.
            </p>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed px-4 mt-4 text-center">
              With my help, you&apos;ll make the most of your vacation and connect with Rio at its fullest. Get ready to experience the city, the energy, the culture, and the vibe in the best possible way!
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏘️',
                title: 'Local Guides',
                description: 'Born and raised in Rio, our guides share authentic stories and insider knowledge.',
                accent: 'green'
              },
              {
                icon: '🎉',
                title: 'Unforgettable Parties',
                description: 'Experience Rio\'s legendary nightlife with the best pubcrawls and favela parties.',
                accent: 'yellow'
              },
              {
                icon: '🪂',
                title: 'Thrilling Adventures',
                description: 'From hang gliding to hiking, get your adrenaline pumping with epic activities.',
                accent: 'green'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Quality experiences at fair prices. Group discounts available on most tours.',
                accent: 'yellow'
              },
              {
                icon: '🔒',
                title: 'Safe & Secure',
                description: 'Your safety is our priority. We know the areas and take every precaution.',
                accent: 'green'
              },
              {
                icon: '📱',
                title: 'Easy Booking',
                description: 'Book instantly via WhatsApp or our website. Quick responses guaranteed.',
                accent: 'yellow'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-2 ${
                  feature.accent === 'green'
                    ? 'border-brazilian-green/20 hover:border-brazilian-green/40'
                    : 'border-brazilian-yellow/30 hover:border-brazilian-yellow/60'
                }`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-16 sm:py-24 bg-neutral-50 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4">
              Meet the Team
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 px-4">
              Local experts passionate about sharing the real Rio
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              {
                name: 'Tom',
                role: 'Founder & Guide',
                bio: 'A young traveler and entrepreneur, a dreamer passionate about Rio, adventure, and meeting new people from all around the world. 🚀',
                image: '/images/tom.jpg',
                objectPosition: 'center 15%'
              },
              {
                name: 'Leroy',
                role: 'Local Guide',
                bio: 'Born and raised in Rocinha, a local guide, surf lover, and expert in the history of the communities. Passionate about sharing favela culture and real stories. 🌊🏘️',
                image: '/images/leroy.jpg',
                objectPosition: 'center 15%'
              },
              {
                name: 'Guilherme',
                role: 'Influencer & Guide',
                bio: 'An influencer and tour guide, passionate about parties and the good life. Communication and adventure are the pillars of his essence. 🌎🎉',
                image: '/images/Guilherme.jpg',
                objectPosition: 'center 15%'
              },
              {
                name: 'Camilla',
                role: 'Rio Expert',
                bio: 'Passionate about Rio de Janeiro, its culture, and the vibrant energy that makes this city unique. Loves sharing authentic experiences and the true spirit of Rio. 🌴🩷',
                image: '/images/camilla.jpg',
                objectPosition: 'center 15%'
              },
              {
                name: 'Lidson',
                role: 'Hiking Guide',
                bio: 'Expert hiking guide with deep knowledge of Rio\'s trails and mountains. Passionate about nature and sharing the breathtaking views Rio has to offer. 🏔️🌿',
                image: '/images/lidson.jpg',
                objectPosition: 'center 15%'
              },
              {
                name: 'Kim',
                role: 'Local Guide',
                bio: 'A warm and knowledgeable local guide with a passion for sharing Rio\'s culture, community, and authentic experiences with visitors from around the world. 🌎🩷',
                image: '/images/kim.jpg',
                objectPosition: 'center 15%'
              },
              {
                name: 'Sherlock',
                role: 'Favela Guide',
                bio: 'Born in the favela and proud of it. Sherlock brings unmatched authenticity and insight into favela life, culture, and community. 🏘️🔍',
                image: '/images/sherlock.jpg',
                objectPosition: 'center 15%'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-brazilian-green shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.objectPosition }}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">{member.name}</h3>
                <p className="text-xs sm:text-sm text-brazilian-green font-medium mb-2">{member.role}</p>
                <p className="text-xs text-neutral-500 leading-relaxed hidden sm:block">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Preview - Light background with green accent */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-brazilian-green/5 to-neutral-100 relative">
        {/* Subtle green decorative element */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4 px-4">
              Popular Tours
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 px-4">
              Our most loved experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Favela Tour by Day',
                price: '250R',
                discount: '220R for 2+',
                duration: '3 hours',
                emoji: '🏘️',
                image: '/images/IMG_9154.JPG'
              },
              {
                title: 'Pubcrawl & Favela Party',
                price: '170R',
                includes: 'Transport & shots',
                emoji: '🎉',
                image: '/images/IMG_1118.PNG'
              },
              {
                title: 'Hang Gliding',
                price: '950R',
                includes: 'Video +200R',
                emoji: '🪂',
                image: '/images/hanggliding.jpg'
              }
            ].map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-neutral-200 hover:border-brazilian-yellow/60 overflow-hidden"
              >
                {/* Tour Image */}
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-3xl sm:text-4xl drop-shadow-lg">{tour.emoji}</div>
                </div>

                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2 sm:mb-3 leading-tight">{tour.title}</h3>
                  <div className="space-y-1 sm:space-y-2 mb-5 sm:mb-6">
                    {/* Price in Brazilian green - dark enough for perfect readability */}
                    <p className="text-2xl sm:text-3xl font-semibold text-brazilian-green">
                      {tour.price}
                    </p>
                    {tour.discount && (
                      <p className="text-xs sm:text-sm text-brazilian-green-dark font-medium">{tour.discount}</p>
                    )}
                    {tour.duration && (
                      <p className="text-sm sm:text-base text-neutral-600">{tour.duration}</p>
                    )}
                    {tour.includes && (
                      <p className="text-sm sm:text-base text-neutral-600">{tour.includes}</p>
                    )}
                  </div>
                  {/* Green button with WHITE text */}
                  <Link
                    href="/tours"
                    className="block w-full min-h-[46px] sm:min-h-[48px] py-3 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-sm sm:text-base text-center shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {/* White button with green border and dark green text */}
            <Link
              href="/tours"
              className="inline-block min-h-[52px] px-10 py-4 bg-white hover:bg-brazilian-yellow-light text-brazilian-green rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-brazilian-green"
            >
              View All 9+ Tours
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-24 bg-neutral-50 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-4 px-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="text-neutral-500 text-sm ml-2">5.0 · Verified reviews</span>
            </div>
            <p className="text-base sm:text-lg text-neutral-600 px-4">Real experiences from real travelers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                name: 'Luzie',
                location: '',
                highlight: 'Once-in-a-lifetime',
                tour: 'Pubcrawl & Real Favela Party',
                date: 'March 2026',
                text: "We had the absolute best time on this tour and Tom was such a great host, he knows his stuff and was such a fun person to hang out with! We immediately knew that it's gonna be a great night and it really was! Loved connecting with all these amazing people and I'd recommend this to everyone! A big obrigada to the guides! <3"
              },
              {
                name: 'Christian',
                location: 'Los Angeles, CA',
                highlight: 'Once-in-a-lifetime',
                tour: 'Pubcrawl & Real Favela Party',
                date: 'March 2026',
                text: 'Amazing! The hosts were very kind and made me feel very welcomed!!! People in RIO really know how to PARTY!!! Highly recommend if you want to meet new people!'
              },
              {
                name: 'Mikaela',
                location: '',
                highlight: '',
                tour: 'Favela Tour & Night Favela Party',
                date: 'March 2026',
                text: "We had an amazing experience with Tom's tour company and would highly recommend it to anyone visiting Rio! Both the Favela Tour and the Night Favela Party Tour were unforgettable — we booked the night tour twice because we loved it so much. Guilherme was incredible, so welcoming and fun. Kimberly (day tour) was an absolute angel — warm, welcoming, and incredibly knowledgeable. Both tours felt authentic and respectful of the community."
              },
              {
                name: 'Κωνσταντίνα',
                location: 'Greece',
                highlight: '',
                tour: '',
                date: 'April 2026',
                text: "Guilherme is the best host and one of the happiest, most energetic people I've met in Rio. Without him, our night wouldn't have been nearly as amazing! He made sure everyone was having a great time and introduced us to many people — everyone was incredibly welcoming. I would definitely do it again! Thank you for the wonderful experience Guii ❤️"
              },
              {
                name: 'Karl',
                location: 'Frankfurt, Germany',
                highlight: '',
                tour: '',
                date: 'April 2026',
                text: "An incredible experience — something completely new, with great guides. Rarely have I seen someone who radiates such enthusiasm, enjoyment of their work, and warmth as Guilherme! Lidson is also extremely likeable and very knowledgeable; you feel very safe with the two of them. The bars are great, and it's even better on the street!! You have an incredible amount of fun."
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border-2 border-neutral-200 hover:border-brazilian-yellow/50 transition-all duration-300 flex flex-col"
              >
                {/* Top: stars + Airbnb badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF5A5F">
                    <path d="M12 1C8.14 1 5 4.14 5 8c0 5.25 6.18 13.39 6.45 13.73.14.18.36.27.55.27s.41-.09.55-.27C12.82 21.39 19 13.25 19 8c0-3.86-3.14-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                  </svg>
                </div>

                {/* Highlight tag */}
                {review.highlight && (
                  <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3 w-fit">
                    {review.highlight}
                  </span>
                )}

                {/* Review text */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed flex-grow mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer info */}
                <div className="border-t border-neutral-100 pt-4">
                  <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                  <div className="flex flex-wrap gap-x-2 mt-0.5">
                    {review.location && (
                      <span className="text-xs text-neutral-500">{review.location}</span>
                    )}
                    {review.tour && (
                      <span className="text-xs text-brazilian-green">{review.tour}</span>
                    )}
                    <span className="text-xs text-neutral-400">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White with subtle yellow accent */}
      <section className="py-16 sm:py-24 bg-white relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brazilian-green/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 px-4">
              Ready for an Adventure?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed px-4">
              Whether you want a single day tour or a complete multi-day Rio experience, we&apos;ve got you covered.
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
              href="/tours"
              className="w-full sm:w-auto min-h-[54px] sm:min-h-[56px] px-10 sm:px-12 py-3.5 sm:py-4 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Book a Tour
            </Link>
            {/* White button with green border and DARK GREEN text */}
            <Link
              href="/private-experiences"
              className="w-full sm:w-auto min-h-[54px] sm:min-h-[56px] px-10 sm:px-12 py-3.5 sm:py-4 bg-white hover:bg-brazilian-yellow-light text-brazilian-green rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-brazilian-green flex items-center justify-center"
            >
              Custom Package
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
