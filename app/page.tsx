'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reviews from '@/components/Reviews';
import FindUsOn from '@/components/FindUsOn';
import SectionHeading from '@/components/SectionHeading';
import {
  IconLocals, IconParty, IconAdventure, IconPrice, IconSafe, IconBooking,
  IconWhatsApp, IconStar, IconPin, IconArrow,
} from '@/components/Icons';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const teamMembers = [
    { name: 'Tom',       role: 'Founder & Guide',   image: '/images/tom.jpg',       objectPosition: 'top' },
    { name: 'Leroy',     role: 'Local Guide',        image: '/images/leroy.jpg',     objectPosition: 'top' },
    { name: 'Guilherme', role: 'Influencer & Guide', image: '/images/Guilherme.jpg', objectPosition: 'top' },
    { name: 'Camilla',   role: 'Manager',            image: '/images/camilla.jpg',   objectPosition: 'top' },
    { name: 'Kim',       role: 'Local Guide',        image: '/images/kim.jpg',       objectPosition: 'center' },
    { name: 'Sherlock',  role: 'Favela Guide',       image: '/images/sherlock.jpg',  objectPosition: 'top' },
    { name: 'Thales',    role: 'Local Guide',        image: '/images/thales.jpg',    objectPosition: 'top' },
  ];

  const features = [
    { Icon: IconLocals,    title: 'Local Guides',         description: 'Born and raised in Rio, sharing the stories and corners you would never find alone.' },
    { Icon: IconParty,     title: 'Real Nightlife',       description: "Rooftop bars, samba at Pedra do Sal, and a genuine favela party — not a tourist version." },
    { Icon: IconAdventure, title: 'Thrilling Adventures', description: 'Hang gliding over the coastline, sunrise hikes, waterfalls and doors-off helicopters.' },
    { Icon: IconPrice,     title: 'Honest Prices',        description: 'Fair, transparent pricing with group discounts on most experiences.' },
    { Icon: IconSafe,      title: 'Safe & Looked After',  description: 'We know these neighbourhoods. Solo travellers are in good hands from start to finish.' },
    { Icon: IconBooking,   title: 'Booked in Minutes',    description: 'One message on WhatsApp and it is arranged. No forms, no waiting.' },
  ];

  const popularTours = [
    { title: 'Complete Rocinha Favela Tour', price: 'R$220', note: 'R$190 each for 3 or more', image: '/images/tours/rocinha-favela-tour/01.jpg',   href: '/tours#rocinha-favela-tour',   tag: 'Local Experiences' },
    { title: 'Pub Crawl & Favela Party',     price: 'R$170', note: 'Transport & shots included', image: '/images/tours/pubcrawl-favela-party/01.jpg', href: '/tours#pubcrawl-favela-party', tag: 'Nightlife' },
    { title: 'Hang Gliding',                 price: 'R$1,300', note: 'GoPro video included',     image: '/images/tours/hang-gliding/01.jpg',          href: '/tours#hang-gliding',          tag: 'Adventure' },
  ];

  return (
    <div className="bg-cream">
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_9229.JPG"
            alt="A group looking out over Rio de Janeiro"
            fill
            className="object-cover object-center scale-105"
            priority
            quality={90}
          />
        </div>
        {/* Legibility wash, then a fade into the page colour so the seam disappears */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 z-10 bg-gradient-to-t from-cream to-transparent" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
            className="font-display font-semibold leading-[0.88] text-cream text-balance drop-shadow-[0_2px_30px_rgba(0,0,0,0.35)]"
            style={{ fontSize: 'clamp(3.1rem, 10.5vw, 8.5rem)' }}
          >
            Experience<br />
            <em className="text-brazilian-yellow">the Real</em><br />
            Rio de Janeiro
          </motion.h1>

          {/* Reviews / Find us on */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="flex flex-wrap justify-center gap-2.5 mt-9 sm:mt-11"
          >
            <Link
              href="/#reviews"
              className="group inline-flex items-center gap-2 min-h-[46px] bg-cream/12 hover:bg-cream/22 backdrop-blur-md border border-cream/25 hover:border-cream/45 text-cream text-sm sm:text-[0.95rem] font-medium px-5 sm:px-6 rounded-full transition-all duration-300"
            >
              <IconStar className="w-4 h-4 text-brazilian-yellow" />
              Reviews
            </Link>
            <Link
              href="/#find-us-on"
              className="group inline-flex items-center gap-2 min-h-[46px] bg-cream/12 hover:bg-cream/22 backdrop-blur-md border border-cream/25 hover:border-cream/45 text-cream text-sm sm:text-[0.95rem] font-medium px-5 sm:px-6 rounded-full transition-all duration-300"
            >
              <IconPin className="w-4 h-4" />
              Find us on
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto mt-5"
          >
            <Link
              href="/tours"
              className="group min-h-[54px] px-9 sm:px-11 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base shadow-banner transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              View All Tours
              <IconArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/private-experiences"
              className="min-h-[54px] px-9 sm:px-11 bg-cream/10 hover:bg-cream/20 backdrop-blur-sm text-cream border border-cream/30 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center"
            >
              Concierge Service
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-7"
          >
            <a
              href="https://wa.me/5521998477858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/55 hover:text-cream transition-colors duration-200 text-sm"
            >
              <IconWhatsApp className="w-4 h-4" />
              <span>Quick question? WhatsApp us</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── WHY CHOOSE US ──────────────────── */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
            {/* Photo — offset with a colour block behind it */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease }}
              className="lg:col-span-5 relative mx-auto lg:mx-0 w-full max-w-sm lg:max-w-none"
            >
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-brazilian-green/10 -rotate-2" />
              <div className="relative aspect-square rounded-[1.75rem] overflow-hidden shadow-lift grain">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Milla and Tom in front of Christ the Redeemer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Who we are" subtitle="">
                Why Choose <em>Us?</em>
              </SectionHeading>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="mt-7 space-y-5 max-w-xl"
              >
                <p className="text-lg sm:text-xl text-ink-soft leading-relaxed text-pretty">
                  At Rio Explore we don&apos;t just show you Rio de Janeiro — we help you live it. Every
                  experience is built to connect you with the city&apos;s real culture, its communities and
                  the corners the guidebooks never reach.
                </p>
                <p className="text-base text-ink-muted leading-relaxed text-pretty">
                  Because travel should leave you with people you&apos;ve met, not just landmarks you&apos;ve ticked off.
                </p>
                <p className="font-display text-2xl sm:text-3xl text-brazilian-green">
                  <em>Travel like a local, not a tourist.</em>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand rounded-3xl overflow-hidden border border-sand">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-cream hover:bg-white p-7 sm:p-9 transition-colors duration-300"
              >
                <feature.Icon className="w-7 h-7 text-brazilian-green mb-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <h3 className="font-display font-semibold text-ink text-xl mb-2">{feature.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed text-pretty">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── CREW ──────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-y border-sand/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The people"
            subtitle="Local experts who actually live here, and are genuinely happy to show you around."
            className="mb-12 sm:mb-16"
          >
            Meet the <em>Crew</em>
          </SectionHeading>

          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-5 sm:pb-0 hide-scrollbar snap-x snap-mandatory sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:overflow-visible">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                className="flex-shrink-0 snap-start w-36 sm:w-auto group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-deep mb-3.5 shadow-card">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    style={{ objectPosition: member.objectPosition }}
                    sizes="(max-width: 640px) 144px, 15vw"
                  />
                </div>
                <p className="font-display font-semibold text-ink text-base leading-tight">{member.name}</p>
                <p className="text-ink-faint text-xs mt-0.5 tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── POPULAR TOURS ──────────────────── */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
            <SectionHeading eyebrow="Most booked" subtitle="Where most people start.">
              Popular <em>Tours</em>
            </SectionHeading>
            <Link
              href="/tours"
              className="group hidden sm:inline-flex items-center gap-2 text-ink font-semibold text-base border-b-2 border-brazilian-green/30 hover:border-brazilian-green pb-1 transition-colors shrink-0"
            >
              All 30 experiences
              <IconArrow className="w-4 h-4 text-brazilian-green transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
            {popularTours.map((tour, i) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                <Link href={tour.href} className="group block">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card group-hover:shadow-lift transition-shadow duration-500 grain">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 92vw, 32vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/5" />

                    <span className="absolute top-5 left-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream/85 bg-ink/35 backdrop-blur-md border border-cream/20 px-3 py-1.5 rounded-full">
                      {tour.tag}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-display font-bold text-brazilian-yellow text-4xl sm:text-[2.75rem] leading-none nums mb-2.5">
                        {tour.price}
                      </p>
                      <h3 className="font-display font-semibold text-cream text-2xl leading-tight text-balance">
                        {tour.title}
                      </h3>
                      <p className="text-cream/65 text-sm mt-1.5">{tour.note}</p>
                    </div>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-ink font-semibold text-sm">
                    See details
                    <IconArrow className="w-4 h-4 text-brazilian-green transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link
              href="/tours"
              className="flex items-center justify-center gap-2 min-h-[54px] w-full bg-white border border-sand-dark text-ink rounded-full font-semibold text-base"
            >
              All 30 experiences
              <IconArrow className="w-4 h-4 text-brazilian-green" />
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
      <FindUsOn />

      {/* ──────────────────────── CTA ──────────────────────── */}
      <section className="relative py-24 sm:py-36 bg-brazilian-green-deep overflow-hidden grain">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-brazilian-green/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-[26rem] h-[26rem] bg-brazilian-yellow/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="eyebrow text-brazilian-yellow justify-center mb-5">
              <span className="h-px w-6 bg-brazilian-yellow/60" />
              Let&apos;s go
            </p>
            <h2
              className="font-display font-semibold text-cream leading-[0.95] mb-6 text-balance"
              style={{ fontSize: 'clamp(2.7rem, 7vw, 5.5rem)' }}
            >
              Ready for your<br />
              <em className="text-brazilian-yellow">Rio</em> adventure?
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed text-pretty">
              One experience or a whole week planned for you — either way, it starts with a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
              <Link
                href="/tours"
                className="min-h-[56px] px-11 bg-cream hover:bg-white text-brazilian-green-deep rounded-full font-bold text-base transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
              >
                Book a Tour
              </Link>
              <Link
                href="/private-experiences"
                className="min-h-[56px] px-11 bg-transparent border border-cream/35 hover:bg-cream/10 text-cream rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center"
              >
                Concierge Service
              </Link>
            </div>
            <a
              href="https://wa.me/5521998477858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/50 hover:text-cream transition-colors text-sm mt-8"
            >
              <IconWhatsApp className="w-4 h-4" />
              <span>Or message us on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
