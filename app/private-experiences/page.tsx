'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivateExperiencesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    package: '',
    guests: '',
    dates: '',
    interests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    {
      duration: '3 Days',
      description: 'Perfect weekend getaway',
      includes: ['3 daily activities', 'All meals', 'Airport transfers', 'Local guide'],
      price: 'Price on request',
      emoji: '🌟'
    },
    {
      duration: '7 Days',
      description: 'Complete Rio experience',
      includes: ['7 daily activities', 'All meals', 'Airport transfers', 'Local guide', 'Rio highlights tour'],
      price: 'Price on request',
      emoji: '✨',
      popular: true
    },
    {
      duration: '10 Days',
      description: 'Ultimate Brazilian adventure',
      includes: ['10 daily activities', 'All meals', 'Airport transfers', 'Local guide', 'Extended trips available'],
      price: 'Price on request',
      emoji: '🌴'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hi! I'm interested in a Private Experience Package:

Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Package: ${formData.package}
Number of Guests: ${formData.guests}
Preferred Dates: ${formData.dates}
Interests: ${formData.interests}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521998477858?text=${encodedMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', whatsapp: '', package: '', guests: '', dates: '', interests: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white">

      {/* Hero — full-bleed image */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/images/IMG_9154.JPG"
          alt="Private Rio Experiences"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="w-10 h-1 bg-[#FEDD00] mb-5 rounded-full" />
            <h1
              className="font-display font-semibold text-white leading-tight mb-4 drop-shadow-xl"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              Your Rio,{' '}
              <em className="italic text-[#FEDD00]">your way</em>
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-lg drop-shadow-md">
              Fully customized packages for couples, groups, and solo adventurers. We handle everything — just show up and enjoy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <div className="w-10 h-1 bg-[#FEDD00] mb-5 rounded-full" />
            <h2
              className="font-display font-semibold text-neutral-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Choose your <em className="italic text-[#009739]">package</em>
            </h2>
            <p className="text-neutral-500 text-base mt-2">All packages are fully customizable — just a starting point</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  pkg.popular
                    ? 'ring-2 ring-[#009739] shadow-md'
                    : 'border border-neutral-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-[#009739] text-white text-xs font-semibold px-4 py-2.5 text-center uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="text-5xl mb-4">{pkg.emoji}</div>

                  <h3 className="font-display font-semibold text-neutral-900 text-3xl mb-1">
                    {pkg.duration}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-5">{pkg.description}</p>

                  <div className="mb-6">
                    <p className="font-display text-2xl font-semibold text-[#009739]">{pkg.price}</p>
                  </div>

                  <div className="space-y-2 mb-8 flex-grow">
                    <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-3">What&apos;s Included</p>
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#009739] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm text-neutral-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, package: pkg.duration });
                      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full min-h-[48px] py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-[#009739] hover:bg-[#006B28] text-white shadow-md'
                        : 'bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200'
                    }`}
                  >
                    Get Custom Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <div className="w-10 h-1 bg-[#FEDD00] mb-5 rounded-full" />
            <h2
              className="font-display font-semibold text-neutral-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Everything <em className="italic text-[#009739]">taken care of</em>
            </h2>
            <p className="text-neutral-500 text-base mt-2">Just bring yourself and get ready for adventure</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: '🏨', title: 'Accommodations', description: 'Comfortable hotels or hostels in prime locations' },
              { icon: '🎯', title: 'Daily Activities', description: 'Curated mix of tours, adventures, and cultural experiences' },
              { icon: '🍽️', title: 'All Meals', description: 'Breakfast, lunch, and dinner featuring local cuisine' },
              { icon: '🚗', title: 'Transport', description: 'Airport pickup, all transfers, and activity transport' },
              { icon: '👨‍🏫', title: 'Local Guide', description: 'Expert guide with you throughout your journey' },
              { icon: '🎉', title: 'Nightlife', description: 'Access to best parties, pubcrawls, and events' },
              { icon: '📸', title: 'Photo Ops', description: 'Visit all the iconic Instagram spots' },
              { icon: '🔒', title: 'Safety First', description: 'Your security and comfort are our top priorities' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 border border-neutral-200/60 hover:border-[#009739]/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="w-10 h-1 bg-[#FEDD00] mb-5 rounded-full" />
            <h2
              className="font-display font-semibold text-neutral-900 mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Request a <em className="italic text-[#009739]">custom quote</em>
            </h2>
            <p className="text-neutral-500 text-base">Tell us about your dream Rio experience</p>
          </motion.div>

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
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 mb-2">WhatsApp Number *</label>
              <input
                type="tel"
                id="whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                placeholder="+55 21 12345-6789"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-neutral-700 mb-2">Preferred Package *</label>
                <select
                  id="package"
                  required
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                >
                  <option value="">Select a package</option>
                  <option value="3 Days">3 Days</option>
                  <option value="7 Days">7 Days (1 Week)</option>
                  <option value="10 Days">10 Days</option>
                  <option value="Custom">Custom Duration</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-2">Number of Guests *</label>
                <input
                  type="number"
                  id="guests"
                  required
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                  placeholder="2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dates" className="block text-sm font-medium text-neutral-700 mb-2">Preferred Dates</label>
              <input
                type="text"
                id="dates"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                placeholder="e.g., January 15–22, 2025"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-neutral-700 mb-2">Interests & Activities</label>
              <input
                type="text"
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full min-h-[52px] px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all text-base"
                placeholder="e.g., Adventure sports, nightlife, culture, beaches"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Additional Information</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#009739] focus:border-transparent outline-none transition-all resize-none text-base"
                placeholder="Any special requests, dietary restrictions, or questions?"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 min-h-[52px] py-3.5 bg-[#009739] hover:bg-[#006B28] text-white rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send via WhatsApp'}
              </button>
              <Link
                href="/contact"
                className="flex-1 min-h-[52px] py-3.5 bg-white hover:bg-neutral-50 text-neutral-700 rounded-full font-semibold text-base transition-all duration-200 border border-neutral-200 flex items-center justify-center"
              >
                Other Contact Options
              </Link>
            </div>

            <p className="text-center text-xs text-neutral-400 pt-1">
              Clicking &quot;Send via WhatsApp&quot; will open a pre-filled message on your device
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <div className="w-10 h-1 bg-[#FEDD00] mb-5 rounded-full" />
            <h2
              className="font-display font-semibold text-neutral-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'Can I customize the activities?',
                answer: 'Absolutely! All packages are fully customizable. Tell us what you love — adventure, culture, nightlife, relaxation — and we\'ll create the perfect itinerary.'
              },
              {
                question: 'What type of accommodation is included?',
                answer: 'We offer various accommodation options from budget-friendly hostels to boutique hotels. Let us know your preference and budget.'
              },
              {
                question: 'Is it safe?',
                answer: 'Your safety is our #1 priority. Our local guides know the areas intimately and we take every precaution to ensure you have a safe, memorable experience.'
              },
              {
                question: 'What if I want to extend my stay?',
                answer: 'No problem! We can extend any package or create a completely custom duration. Just let us know how long you want to stay.'
              },
              {
                question: 'Do you offer group discounts?',
                answer: 'Yes! The more people in your group, the better the price per person. Contact us for a custom group quote.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-xl px-6 py-5 border border-neutral-200/60"
              >
                <h3 className="font-semibold text-neutral-900 text-base mb-2">{faq.question}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#006B28] grain relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="w-10 h-1 bg-[#FEDD00] mb-4 rounded-full mx-auto" />
            <h2
              className="font-display font-semibold text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Still deciding?{' '}
              <em className="italic text-[#FEDD00]">Let&apos;s talk</em>
            </h2>
            <p className="text-white/75 text-base leading-relaxed max-w-md mx-auto">
              No commitment needed — just drop us a message and we&apos;ll help you figure out the perfect experience for your trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-3 bg-[#FEDD00] hover:bg-yellow-300 text-neutral-900 rounded-full font-semibold text-base transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/tours"
                className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-semibold text-base transition-all duration-200"
              >
                Browse All Tours
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
