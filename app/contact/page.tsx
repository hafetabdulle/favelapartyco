'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521998477858?text=${encodedMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-b from-brazilian-green/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              Have questions? Want to book a tour? We&apos;re here to help and respond quickly!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/5521998477858"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">WhatsApp</h3>
              <p className="text-white mb-4">Fastest response - usually within minutes!</p>
              <div className="inline-block min-h-[48px] px-8 py-3 bg-white text-green-600 rounded-full font-semibold">
                Chat Now
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/favelapartyco/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Instagram</h3>
              <p className="text-white mb-4">Follow us for daily Rio content & stories</p>
              <div className="inline-block min-h-[48px] px-8 py-3 bg-white text-purple-600 rounded-full font-semibold">
                Follow Us
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:hello@favelapartyco.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brazilian-green rounded-3xl p-8 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Email</h3>
              <p className="text-white mb-4">For detailed inquiries and bookings</p>
              <div className="inline-block min-h-[48px] px-8 py-3 bg-white text-brazilian-green rounded-full font-semibold">
                Send Email
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-neutral-100 relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brazilian-green/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-neutral-600">We&apos;ll get back to you as soon as possible</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-sm p-8 sm:p-10 border-2 border-neutral-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Email Address *
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

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full min-h-[52px] px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all text-base"
                >
                  <option value="">Select a subject</option>
                  <option value="Tour Booking">Tour Booking</option>
                  <option value="Private Experience">Private Experience</option>
                  <option value="Group Booking">Group Booking</option>
                  <option value="General Question">General Question</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-brazilian-green focus:border-transparent outline-none transition-all resize-none text-base"
                  placeholder="Tell us what you're interested in..."
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

                <a
                  href="mailto:hello@favelapartyco.com"
                  className="flex-1 min-h-[56px] py-4 bg-white hover:bg-brazilian-yellow-light text-brazilian-green rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-brazilian-green flex items-center justify-center"
                >
                  Send via Email
                </a>
              </div>

              <p className="text-center text-sm text-neutral-500">
                Prefer instant messaging? Click &quot;Send via WhatsApp&quot; to continue the conversation on WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brazilian-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900">
              Follow Our Adventures
            </h2>
            <p className="text-xl text-neutral-600">
              See what our guests are experiencing daily on social media
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/favelapartyco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-neutral-100 relative">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brazilian-green/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border-2 border-neutral-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-brazilian-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl font-semibold text-neutral-900">Location</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Rio de Janeiro, Brazil
                <br />
                <span className="text-sm">We operate tours throughout Rio and surrounding areas</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border-2 border-neutral-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-brazilian-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-semibold text-neutral-900">Response Time</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                WhatsApp: Within minutes (24/7)
                <br />
                Email: Within 24 hours
                <br />
                <span className="text-sm text-brazilian-green font-medium">We&apos;re always here to help!</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
