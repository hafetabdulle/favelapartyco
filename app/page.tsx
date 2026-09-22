'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reviews from '@/components/Reviews';
import FindUsOn from '@/components/FindUsOn';

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const GreenBar = () => (
  <div className="w-10 h-1 bg-[#009739] mb-5 rounded-full" />
);

export default function Home() {
  const teamMembers = [
    { name: 'Tom',       role: 'Founder & Guide',     image: '/images/tom.jpg',       objectPosition: 'top' },
    { name: 'Leroy',     role: 'Local Guide',          image: '/images/leroy.jpg',     objectPosition: 'top' },
    { name: 'Guilherme', role: 'Influencer & Guide',   image: '/images/Guilherme.jpg', objectPosition: 'top' },
    { name: 'Camilla',   role: 'Manager',              image: '/images/camilla.jpg',   objectPosition: 'top' },
    { name: 'Kim',       role: 'Local Guide',          image: '/images/kim.jpg',       objectPosition: 'center' },
    { name: 'Sherlock',  role: 'Favela Guide',         image: '/images/sherlock.jpg',  objectPosition: 'top' },
    { name: 'Thales',    role: 'Local Guide',          image: '/images/thales.jpg',    objectPosition: 'top' },
  ];

  const features = [
    { icon: '🏘️', title: 'Local Guides',           description: 'Born and raised in Rio, our guides share authentic stories and insider knowledge.', accent: 'green' },
    { icon: '🎉', title: 'Unforgettable Parties',   description: "Experience Rio's legendary nightlife with the best pubcrawls and favela parties.",  accent: 'yellow' },
    { icon: '🪂', title: 'Thrilling Adventures',    description: 'From hang gliding to hiking, get your adrenaline pumping with epic activities.',    accent: 'green' },
    { icon: '💰', title: 'Best Prices',             description: 'Quality experiences at fair prices. Group discounts available on most tours.',         accent: 'yellow' },
    { icon: '🔒', title: 'Safe & Secure',           description: 'Your safety is our priority. We know the areas and take every precaution.',           accent: 'green' },
    { icon: '📱', title: 'Easy Booking',            description: 'Book instantly via WhatsApp or our website. Quick responses guaranteed.',             accent: 'yellow' },
  ];

  const popularTours = [
    { title: 'Complete Rocinha Favela Tour', price: 'R$220',   badge: 'R$190 each for 3 or more',  emoji: '🏘️', image: '/images/tours/rocinha-favela-tour/01.jpg',    href: '/tours#rocinha-favela-tour' },
    { title: 'Pub Crawl & Favela Party',     price: 'R$170',   badge: 'Transport & shots included', emoji: '🎉', image: '/images/tours/pubcrawl-favela-party/01.jpg',  href: '/tours#pubcrawl-favela-party' },
    { title: 'Hang Gliding',                 price: 'R$1,300', badge: 'GoPro video included',       emoji: '🪂', image: '/images/tours/hang-gliding/01.jpg',           href: '/tours#hang-gliding' },
  ];

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/80 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-24">
          {/* Headline — display serif */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-semibold leading-[0.9] text-white mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            Experience<br />
            <em style={{ fontStyle: 'italic' }}>the Real</em><br />
            Rio de Janeiro
          </motion.h1>

          {/* Reviews / Find us on bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-10"
          >
            <Link
              href="/#reviews"
              className="inline-flex items-center gap-2 min-h-[44px] bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Reviews
            </Link>
            <Link
              href="/#find-us-on"
              className="inline-flex items-center gap-2 min-h-[44px] bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find us on
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto"
          >
            <Link
              href="/tours"
              className="min-h-[52px] sm:min-h-[56px] px-10 sm:px-12 py-3.5 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
            >
              View All Tours
            </Link>
            <Link
              href="/private-experiences"
              className="min-h-[52px] sm:min-h-[56px] px-10 sm:px-12 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/35 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center"
            >
              Private Experiences
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-7"
          >
            <a
              href="https://wa.me/5521998477858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
            >
              <WhatsAppIcon />
              <span>Quick question? WhatsApp us</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-16 sm:mb-24"
          >
            <div className="flex-shrink-0 w-60 h-60 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Milla and Tom in front of Christ the Redeemer"
                width={704}
                height={704}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 max-w-xl text-center md:text-left">
              <GreenBar />
              <h2 className="font-display font-semibold text-neutral-900 leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
                Why Choose <em className="italic text-[#009739]">Us?</em>
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
                At Rio Explore, we don&apos;t just show you Rio de Janeiro, we help you experience it. Every experience is designed to connect you with the city&apos;s authentic culture, local communities, and hidden gems. Because we believe travel should create meaningful human connections, not just check off landmarks.
              </p>
              <p className="text-base sm:text-lg font-medium text-[#009739] leading-relaxed">
                Travel like a local, not a tourist.
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4 ${
                  feature.accent === 'green' ? 'bg-[#009739]/10' : 'bg-[#009739]/5'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-16 sm:py-24 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <GreenBar />
            <h2
              className="font-display font-semibold text-neutral-900 leading-[1.05]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Meet the <em className="italic text-[#009739]">Crew</em>
            </h2>
            <p className="text-neutral-500 mt-3 text-base sm:text-lg">Local experts passionate about sharing the real Rio</p>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-5 sm:pb-0 hide-scrollbar snap-x snap-mandatory sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:gap-6 sm:overflow-visible">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex-shrink-0 snap-start w-40 sm:w-auto text-center"
              >
                <div className="mx-auto w-32 h-32 sm:w-32 sm:h-32 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-2xl overflow-hidden border-2 border-[#009739]/20 shadow-sm mb-3 hover:scale-105 hover:border-[#009739]/50 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </div>
                <p className="font-semibold text-neutral-900 text-sm">{member.name}</p>
                <p className="text-neutral-500 text-xs mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POPULAR TOURS ─── */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <GreenBar />
            <h2
              className="font-display font-semibold text-neutral-900 leading-[1.05]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Popular <em className="italic text-[#009739]">Tours</em>
            </h2>
            <p className="text-neutral-500 mt-3 text-base sm:text-lg">Our most loved experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {popularTours.map((tour, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white"
              >
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  {/* Price badge */}
                  <div className="absolute top-4 left-4 bg-[#009739] text-white text-lg sm:text-xl font-bold px-4 py-2 rounded-2xl shadow-lg">
                    {tour.price}
                  </div>
                  <div className="absolute top-4 right-4 text-2xl drop-shadow-lg">{tour.emoji}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-semibold text-xl sm:text-2xl leading-tight mb-1">{tour.title}</h3>
                    <p className="text-white/75 text-sm sm:text-base">{tour.badge}</p>
                  </div>
                </div>
                <div className="p-4">
                  <Link
                    href={tour.href}
                    className="block w-full min-h-[46px] py-3 bg-neutral-900 hover:bg-[#009739] text-white rounded-xl font-semibold text-sm text-center transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 min-h-[52px] px-10 py-3.5 bg-white border-2 border-[#009739] text-[#009739] hover:bg-[#009739] hover:text-white rounded-full font-semibold text-base sm:text-lg shadow-sm hover:shadow-lg transition-all duration-300"
            >
              View All Tours →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <Reviews />

      {/* ─── FIND US ON ─── */}
      <FindUsOn />

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#009739]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#009739]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-10 h-1 bg-[#009739] mb-6 rounded-full mx-auto" />
            <h2
              className="font-display font-semibold text-neutral-900 leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            >
              Ready for your<br />
              <em className="italic text-[#009739]">Rio</em> adventure?
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you want a single tour or a complete multi-day experience, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
              <Link
                href="/tours"
                className="min-h-[54px] sm:min-h-[56px] px-10 sm:px-14 py-3.5 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
              >
                Book a Tour
              </Link>
              <Link
                href="/private-experiences"
                className="min-h-[54px] sm:min-h-[56px] px-10 sm:px-14 py-3.5 bg-white border-2 border-[#009739] text-[#009739] hover:bg-[#009739] hover:text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center"
              >
                Concierge Service
              </Link>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#009739] transition-colors text-sm"
              >
                <WhatsAppIcon />
                <span>Or message us on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
