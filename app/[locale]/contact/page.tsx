'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { useT } from '@/app/i18n/LocaleProvider';
import { IconWhatsApp, IconArrow } from '@/components/Icons';

const ease = [0.16, 1, 0.3, 1] as const;

const IconInstagram = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconMail = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function ContactPage() {
  const d = useT();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const f = d.contact.form;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `${f.intro}

${f.name}: ${formData.name}
${f.email}: ${formData.email}
${f.subject}: ${formData.subject}

${f.message}:
${formData.message}`;

    window.open(`https://wa.me/5521998477858?text=${encodeURIComponent(message)}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const cards = [
    {
      href: 'https://wa.me/5521998477858',
      Icon: IconWhatsApp,
      ...d.contact.cards.whatsapp,
      primary: true,
    },
    { href: 'https://wa.me/5521997599075', Icon: IconWhatsApp, ...d.contact.cards.camilla, primary: false },
    { href: 'https://www.instagram.com/rioexplore/', Icon: IconInstagram, ...d.contact.cards.instagram, primary: false },
    { href: 'mailto:rioexploremanagement@gmail.com', Icon: IconMail, ...d.contact.cards.email, primary: false },
  ];

  const field =
    'w-full min-h-[52px] px-4 py-3 bg-white border border-sand rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base';
  const labelCls = 'block text-sm font-medium text-ink-soft mb-2';

  return (
    <div className="pt-28 sm:pt-32 bg-cream">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="w-10 h-1 bg-brazilian-green mb-6 rounded-full" />
            <h1
              className="font-display font-semibold text-ink leading-tight mb-5 text-balance"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              {d.contact.title} <em className="text-brazilian-green">{d.contact.accent}</em>
            </h1>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
              {d.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {cards.map((card, i) => (
              <motion.a
                key={card.href}
                href={card.href}
                target={card.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className={`group rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lift hover:-translate-y-1 flex flex-col ${
                  card.primary
                    ? 'bg-brazilian-green text-white hover:bg-brazilian-green-dark'
                    : 'bg-white border border-sand hover:border-brazilian-green/40'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    card.primary ? 'bg-white/15' : 'bg-brazilian-green/10'
                  }`}
                >
                  <card.Icon className={`w-6 h-6 ${card.primary ? '' : 'text-brazilian-green'}`} />
                </div>
                <h3
                  className={`font-display font-semibold text-xl mb-1 ${
                    card.primary ? '' : 'text-ink'
                  }`}
                >
                  {card.title}
                </h3>
                <p className={`text-sm mb-5 flex-grow ${card.primary ? 'text-white/80' : 'text-ink-muted'}`}>
                  {card.description}
                </p>
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all w-fit ${
                    card.primary
                      ? 'bg-white/15 group-hover:bg-white/25'
                      : 'bg-brazilian-green/10 text-brazilian-green group-hover:bg-brazilian-green/15'
                  }`}
                >
                  {d.contact.chatNow}
                  <IconArrow className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-28 bg-white border-y border-sand/70">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={f.subtitle} className="mb-10" size="md">
            {f.title} <em>{f.accent}</em>
          </SectionHeading>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              <label htmlFor="subject" className={labelCls}>{f.subject} *</label>
              <input id="subject" type="text" required value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                className={field} placeholder={f.subjectPlaceholder} />
            </div>

            <div>
              <label htmlFor="message" className={labelCls}>{f.message} *</label>
              <textarea id="message" rows={6} required value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className={`${field} resize-none`} placeholder={f.messagePlaceholder} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[54px] bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? f.submitting : f.submit}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
