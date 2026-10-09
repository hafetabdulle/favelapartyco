'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import L from '@/components/L';
import SectionHeading from '@/components/SectionHeading';
import { useT } from '@/app/i18n/LocaleProvider';
import {
  IconCalendar, IconSupport, IconRoute, IconPrice, IconCar, IconParty,
  IconGuide, IconSafe, IconCheck, IconWhatsApp,
} from '@/components/Icons';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ConciergePage() {
  const d = useT();
  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', package: '', guests: '', dates: '', interests: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    {
      ...d.concierge.option2.packages.three,
      price: '$300 USD',
      value: '3-Day Package',
      popular: false,
    },
    {
      ...d.concierge.option2.packages.five,
      price: '$500 USD',
      value: '5-Day Package',
      popular: true,
    },
  ];

  const includedItems = [
    { Icon: IconCalendar, ...d.concierge.included.items.itinerary },
    { Icon: IconSupport,  ...d.concierge.included.items.support },
    { Icon: IconRoute,    ...d.concierge.included.items.activities },
    { Icon: IconPrice,    ...d.concierge.included.items.discounts },
    { Icon: IconCar,      ...d.concierge.included.items.transport },
    { Icon: IconParty,    ...d.concierge.included.items.nightlife },
    { Icon: IconGuide,    ...d.concierge.included.items.guides },
    { Icon: IconSafe,     ...d.concierge.included.items.safety },
  ];

  const f = d.concierge.form;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `${f.messageIntro}

${f.labels.name}: ${formData.name}
${f.labels.email}: ${formData.email}
${f.labels.whatsapp}: ${formData.whatsapp}
${f.labels.package}: ${formData.package}
${f.labels.guests}: ${formData.guests}
${f.labels.dates}: ${formData.dates}
${f.labels.interests}: ${formData.interests}
${f.labels.message}: ${formData.message}`;

    window.open(`https://wa.me/5521998477858?text=${encodeURIComponent(message)}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', whatsapp: '', package: '', guests: '', dates: '', interests: '', message: '' });
    }, 1000);
  };

  const field =
    'w-full min-h-[52px] px-4 py-3 bg-white border border-sand rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base';
  const labelCls = 'block text-sm font-medium text-ink-soft mb-2';

  const goToForm = (value: string) => {
    setFormData({ ...formData, package: value });
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden grain">
        <Image
          src="/images/IMG_9154.JPG"
          alt="Rio Explore concierge"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/25" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            <div className="w-10 h-1 bg-brazilian-green mb-5 rounded-full" />
            <h1
              className="font-display font-semibold text-cream leading-tight mb-4 text-balance"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              {d.concierge.hero.title} <em>{d.concierge.hero.accent}</em>
            </h1>
            <p className="text-cream/85 text-base sm:text-lg leading-relaxed max-w-lg text-pretty">
              {d.concierge.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={d.concierge.option1.label + ' + ' + d.concierge.option2.label}
            subtitle={d.concierge.intro.subtitle}
            className="mb-10 sm:mb-14"
            size="md"
          >
            {d.concierge.intro.title} <em>{d.concierge.intro.accent}</em>
          </SectionHeading>

          {/* Option 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-white rounded-3xl border border-sand p-6 sm:p-10 mb-10 sm:mb-14 shadow-card"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              <div className="md:w-2/5">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brazilian-green bg-brazilian-green/10 rounded-full px-3 py-1 mb-4">
                  {d.concierge.option1.label}
                </span>
                <h3 className="font-display font-semibold text-ink text-2xl sm:text-3xl mb-3 leading-snug text-balance">
                  {d.concierge.option1.title}
                </h3>
                <p className="font-display font-bold text-brazilian-green text-4xl nums">
                  {d.concierge.option1.price}
                </p>
                <p className="text-ink-muted text-sm mt-1">{d.concierge.option1.per}</p>
              </div>
              <div className="md:w-3/5 space-y-3">
                {d.concierge.option1.includes.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-brazilian-green mt-0.5 flex-shrink-0" />
                    <span className="text-base text-ink-soft leading-relaxed">{item}</span>
                  </div>
                ))}
                <button
                  onClick={() => goToForm(`${d.concierge.option1.title} (${d.concierge.option1.price}/${d.concierge.option1.per})`)}
                  className="mt-5 min-h-[50px] px-8 py-3 bg-white hover:bg-cream-deep text-ink border border-sand-dark rounded-full font-semibold text-sm transition-all duration-200"
                >
                  {d.concierge.option1.cta}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Option 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brazilian-green bg-brazilian-green/10 rounded-full px-3 py-1 mb-3">
              {d.concierge.option2.label}
            </span>
            <h3 className="font-display font-semibold text-ink text-2xl sm:text-3xl text-balance">
              {d.concierge.option2.title}
            </h3>
            <p className="text-ink-muted text-base mt-1.5 text-pretty">{d.concierge.option2.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
                className={`bg-white rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lift hover:-translate-y-1 ${
                  pkg.popular ? 'ring-2 ring-brazilian-green shadow-card' : 'border border-sand'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-brazilian-green text-white text-xs font-semibold px-4 py-2.5 text-center uppercase tracking-widest">
                    {d.concierge.option2.mostPopular}
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-display font-semibold text-ink text-3xl mb-1">{pkg.name}</h3>
                  <p className="text-ink-muted text-sm mb-5">{pkg.description}</p>

                  <div className="mb-6">
                    <p className="font-display text-4xl font-bold text-brazilian-green leading-none nums">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-ink-muted mt-1.5">{d.concierge.option2.totalPerDay}</p>
                  </div>

                  <div className="space-y-2 mb-8 flex-grow">
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">
                      {d.concierge.option2.whatsIncluded}
                    </p>
                    {pkg.includes.map(item => (
                      <div key={item} className="flex items-start gap-2.5">
                        <IconCheck className="w-4 h-4 text-brazilian-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ink-soft">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => goToForm(pkg.value)}
                    className={`w-full min-h-[50px] py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-brazilian-green hover:bg-brazilian-green-dark text-white shadow-md'
                        : 'bg-white hover:bg-cream-deep text-ink border border-sand-dark'
                    }`}
                  >
                    {d.concierge.option2.getQuote}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3.5 max-w-3xl"
          >
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">{d.concierge.fixedPriceNote}</p>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 sm:py-28 bg-white border-y border-sand/70">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={d.concierge.included.subtitle}
            className="mb-10 sm:mb-14"
            size="md"
          >
            {d.concierge.included.title} <em>{d.concierge.included.accent}</em>
          </SectionHeading>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {includedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-cream rounded-2xl p-5 border border-sand hover:border-brazilian-green/40 transition-all duration-200"
              >
                <item.Icon className="w-6 h-6 text-brazilian-green mb-4" />
                <h3 className="font-semibold text-ink text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="booking-form" className="py-20 sm:py-28 bg-cream scroll-mt-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={f.subtitle} className="mb-10" size="md">
            {f.title} <em>{f.accent}</em>
          </SectionHeading>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelCls}>{f.name} *</label>
                <input id="name" type="text" required value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className={field} placeholder={f.namePlaceholder} />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>{f.email} *</label>
                <input id="email" type="email" required value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={field} placeholder={f.emailPlaceholder} />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className={labelCls}>{f.whatsapp} *</label>
              <input id="whatsapp" type="tel" required value={formData.whatsapp}
                onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                className={field} placeholder={f.whatsappPlaceholder} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="package" className={labelCls}>{f.package} *</label>
                <select id="package" required value={formData.package}
                  onChange={e => setFormData({ ...formData, package: e.target.value })}
                  className={field}>
                  <option value="">{f.packagePlaceholder}</option>
                  <option value={`${d.concierge.option1.title} (${d.concierge.option1.price}/${d.concierge.option1.per})`}>
                    {d.concierge.option1.title} — {d.concierge.option1.price}/{d.concierge.option1.per}
                  </option>
                  <option value="3-Day Package">
                    {d.concierge.option2.packages.three.name} — $300 USD
                  </option>
                  <option value="5-Day Package">
                    {d.concierge.option2.packages.five.name} — $500 USD
                  </option>
                  <option value="Custom">{f.packageCustom}</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className={labelCls}>{f.guests} *</label>
                <input id="guests" type="number" required min="1" value={formData.guests}
                  onChange={e => setFormData({ ...formData, guests: e.target.value })}
                  className={field} placeholder="2" />
              </div>
            </div>

            <div>
              <label htmlFor="dates" className={labelCls}>{f.dates}</label>
              <input id="dates" type="text" value={formData.dates}
                onChange={e => setFormData({ ...formData, dates: e.target.value })}
                className={field} placeholder={f.datesPlaceholder} />
            </div>

            <div>
              <label htmlFor="interests" className={labelCls}>{f.interests}</label>
              <input id="interests" type="text" value={formData.interests}
                onChange={e => setFormData({ ...formData, interests: e.target.value })}
                className={field} placeholder={f.interestsPlaceholder} />
            </div>

            <div>
              <label htmlFor="message" className={labelCls}>{f.message}</label>
              <textarea id="message" rows={5} value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className={`${field} resize-none`} placeholder={f.messagePlaceholder} />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 min-h-[54px] bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? f.submitting : f.submit}
              </button>
              <L
                href="/contact"
                className="flex-1 min-h-[54px] bg-white hover:bg-cream-deep text-ink-soft rounded-full font-semibold text-base transition-all duration-200 border border-sand-dark flex items-center justify-center"
              >
                {f.otherContact}
              </L>
            </div>

            <p className="text-center text-xs text-ink-faint pt-1">{f.disclaimer}</p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-white border-y border-sand/70">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-10 sm:mb-14" size="md">
            {d.concierge.faq.title}
          </SectionHeading>

          <div className="space-y-4">
            {d.concierge.faq.items.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-cream rounded-2xl px-6 py-5 border border-sand"
              >
                <h3 className="font-semibold text-ink text-base mb-2">{faq.question}</h3>
                <p className="text-ink-muted text-sm leading-relaxed text-pretty">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 bg-brazilian-green-deep overflow-hidden grain">
        <div className="absolute -top-28 -left-20 w-[26rem] h-[26rem] bg-brazilian-green/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-[24rem] h-[24rem] bg-brazilian-yellow/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <h2
              className="font-display font-semibold text-cream leading-[1.02] mb-6 text-balance"
              style={{ fontSize: 'clamp(2.1rem, 5vw, 3.6rem)' }}
            >
              {d.concierge.cta.title} <em className="text-brazilian-yellow">{d.concierge.cta.accent}</em>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed max-w-lg mx-auto mb-9 text-pretty">
              {d.concierge.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[54px] px-10 bg-cream hover:bg-white text-brazilian-green-deep rounded-full font-bold text-base transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5"
              >
                <IconWhatsApp className="w-5 h-5" />
                {d.common.whatsappUs}
              </a>
              <L
                href="/tours"
                className="min-h-[54px] px-10 border border-cream/35 hover:bg-cream/10 text-cream rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center"
              >
                {d.concierge.cta.browseTours}
              </L>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
