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
      includes: ['2 nights accommodation', '3 daily activities', 'All meals', 'Airport transfers', 'Local guide'],
      price: 'From 2,500R per person',
      emoji: '🌟'
    },
    {
      duration: '7 Days',
      description: 'Complete Rio experience',
      includes: ['6 nights accommodation', '7 daily activities', 'All meals', 'Airport transfers', 'Local guide', 'Rio highlights tour'],
      price: 'From 5,500R per person',
      emoji: '✨',
      popular: true
    },
    {
      duration: '10 Days',
      description: 'Ultimate Brazilian adventure',
      includes: ['9 nights accommodation', '10 daily activities', 'All meals', 'Airport transfers', 'Local guide', 'Extended trips available'],
      price: 'From 7,500R per person',
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
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        package: '',
        guests: '',
        dates: '',
        interests: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 sm:py-32 bg-neutral-100 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_9154.JPG"
            alt="Private Rio Experiences"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-neutral-900/70 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white mb-4 sm:mb-6 drop-shadow-2xl px-4">
              Private Experiences
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-lg px-4">
              Let us create a custom Rio adventure just for you. Everything included - accommodations, activities, meals, and transport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4 px-4">
              Choose Your Package
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 px-4">All packages are fully customizable</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-2 ${
                  pkg.popular ? 'border-brazilian-green' : 'border-neutral-200 hover:border-brazilian-yellow/60'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-brazilian-green text-white text-sm font-semibold px-4 py-2 text-center">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="text-6xl mb-4">{pkg.emoji}</div>

                  <h3 className="text-3xl font-semibold text-neutral-900 mb-2">
                    {pkg.duration}
                  </h3>

                  <p className="text-neutral-600 mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <p className="text-3xl font-semibold text-brazilian-green mb-4">
                      {pkg.price}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="font-semibold text-neutral-900 text-sm">What's Included:</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="text-sm text-neutral-600 flex items-start">
                          <svg className="w-5 h-5 text-brazilian-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, package: pkg.duration });
                      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full min-h-[52px] py-3.5 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 sm:py-24 bg-neutral-100 relative">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brazilian-green/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4 px-4">
              Everything Taken Care Of
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 px-4">Just bring yourself and get ready for adventure</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border-2 border-neutral-200"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-12 sm:py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4 px-4">
              Request a Custom Quote
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 px-4">Tell us about your dream Rio experience</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 mb-2">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                placeholder="+55 21 12345-6789"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-neutral-700 mb-2">
                  Preferred Package *
                </label>
                <select
                  id="package"
                  required
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                >
                  <option value="">Select a package</option>
                  <option value="3 Days">3 Days</option>
                  <option value="7 Days">7 Days (1 Week)</option>
                  <option value="10 Days">10 Days</option>
                  <option value="Custom">Custom Duration</option>
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-2">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  id="guests"
                  required
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                  placeholder="2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dates" className="block text-sm font-medium text-neutral-700 mb-2">
                Preferred Dates
              </label>
              <input
                type="text"
                id="dates"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                placeholder="e.g., January 15-22, 2025"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-neutral-700 mb-2">
                Interests & Activities
              </label>
              <input
                type="text"
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                placeholder="e.g., Adventure sports, nightlife, culture, beaches"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all resize-none text-base"
                placeholder="Any special requests, dietary restrictions, or questions?"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 min-h-[56px] py-4 bg-brazilian-green hover:bg-brazilian-green-dark text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
              </button>

              <Link
                href="/contact"
                className="flex-1 min-h-[56px] py-4 bg-white hover:bg-brazilian-yellow-light text-brazilian-green rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-brazilian-green flex items-center justify-center"
              >
                Other Contact Options
              </Link>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-24 bg-neutral-100 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 mb-3 sm:mb-4 px-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I customize the activities?',
                answer: 'Absolutely! All packages are fully customizable. Tell us what you love - adventure, culture, nightlife, relaxation - and we\'ll create the perfect itinerary.'
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl p-6 shadow-sm border-2 border-neutral-200"
              >
                <h3 className="font-semibold text-neutral-900 text-lg mb-2">{faq.question}</h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
