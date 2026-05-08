import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/rio.png"
              alt="Rio Explore"
              width={200}
              height={67}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-neutral-400 text-sm leading-relaxed">
              Experience the authentic Rio de Janeiro with local guides and unforgettable adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/tours',               label: 'All Tours' },
                { href: '/private-experiences', label: 'Private Experiences' },
                { href: '/contact',             label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-[#FEDD00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Popular Tours</h4>
            <ul className="space-y-3">
              {[
                { href: '/tours#favela-tour-complete', label: 'Favela Tour by Day' },
                { href: '/tours#pubcrawl-party',       label: 'Pubcrawl & Favela Party' },
                { href: '/tours#hang-gliding',         label: 'Hang Gliding' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-[#FEDD00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-400 hover:text-[#25D366] transition-colors text-sm group"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:rioexploremanagement@gmail.com"
                className="flex items-center gap-2.5 text-neutral-400 hover:text-[#FEDD00] transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>rioexploremanagement@gmail.com</span>
              </a>

              {/* Social icons */}
              <div className="flex gap-3 pt-1">
                <a
                  href="https://www.instagram.com/rioexplore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#009739] transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="mailto:rioexploremanagement@gmail.com"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#009739] transition-all duration-200"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Platform badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-neutral-500 text-xs shrink-0 uppercase tracking-widest">Find us on:</span>
            <div className="flex flex-wrap items-center gap-2">
              {/* GetYourGuide */}
              <div className="h-8 px-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5" title="GetYourGuide">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <rect width="24" height="24" rx="4" fill="#FF5533"/>
                  <path d="M13.5 10.5H10v1.5h2v1c-.4.3-1 .5-1.7.5-1.6 0-2.8-1.2-2.8-2.8S8.7 7.9 10.3 7.9c.8 0 1.5.3 2 .7l1.1-1.1C12.6 6.6 11.5 6.2 10.3 6.2 7.9 6.2 6 8.1 6 10.5s1.9 4.3 4.3 4.3c1.2 0 2.3-.4 3-.9.7-.6 1.1-1.6 1.1-2.7v-.7h-1z" fill="white"/>
                </svg>
                <span className="text-xs font-medium text-neutral-300">GetYourGuide</span>
              </div>
              {/* TripAdvisor */}
              <div className="h-8 px-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5" title="TripAdvisor">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#00AA6C"/>
                  <circle cx="8.5" cy="12" r="2.5" fill="white"/>
                  <circle cx="15.5" cy="12" r="2.5" fill="white"/>
                  <circle cx="8.5" cy="12" r="1.1" fill="#00AA6C"/>
                  <circle cx="15.5" cy="12" r="1.1" fill="#00AA6C"/>
                  <path d="M9 15.5q3 1.8 6 0" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <span className="text-xs font-medium text-neutral-300">TripAdvisor</span>
              </div>
              {/* Airbnb */}
              <div className="h-8 px-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5" title="Airbnb">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#FF5A5F">
                  <path d="M12 1C8.14 1 5 4.14 5 8c0 5.25 6.18 13.39 6.45 13.73.14.18.36.27.55.27s.41-.09.55-.27C12.82 21.39 19 13.25 19 8c0-3.86-3.14-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
                <span className="text-xs font-medium text-neutral-300">Airbnb</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Rio Explore. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-neutral-600 text-xs mr-1">We accept:</span>
              {[
                { label: 'PayPal',  color: '#253B80', bg: '#253B80' },
                { label: 'Stripe',  color: '#635BFF', bg: '#635BFF' },
                { label: 'Revolut', color: '#fff',    bg: '#191C1F' },
                { label: 'Pix',     color: '#32BCAD', bg: '#32BCAD' },
              ].map(p => (
                <div key={p.label} className="h-7 px-2.5 bg-white/5 border border-white/10 rounded-md flex items-center">
                  <span className="text-xs font-medium text-neutral-400">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
