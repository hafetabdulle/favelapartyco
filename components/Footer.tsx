import Link from 'next/link';
import Image from 'next/image';
import { reviewPlatforms, otherPlatforms } from './PlatformLogos';
import { IconWhatsApp } from './Icons';

const quickLinks = [
  { href: '/tours',               label: 'All Tours' },
  { href: '/private-experiences', label: 'Concierge Service' },
  { href: '/contact',             label: 'Contact Us' },
  { href: '/#reviews',            label: 'Reviews' },
];

const popularTours = [
  { href: '/tours#rocinha-favela-tour',   label: 'Complete Rocinha Favela Tour' },
  { href: '/tours#pubcrawl-favela-party', label: 'Pub Crawl & Favela Party' },
  { href: '/tours#pedra-do-sal-samba',    label: 'Monday Night Samba' },
  { href: '/tours#hang-gliding',          label: 'Hang Gliding' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Image
              src="/images/rio.png"
              alt="Rio Explore"
              width={440}
              height={440}
              className="h-32 w-auto -ml-6 brightness-0 invert"
            />
            <p className="text-cream/50 text-[0.95rem] leading-relaxed max-w-xs -mt-5">
              Authentic experiences in Rio de Janeiro, run by the people who actually live here.
            </p>
            <a
              href="https://wa.me/5521998477858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[48px] px-6 bg-brazilian-green hover:bg-brazilian-green-light text-white rounded-full font-semibold text-sm transition-colors duration-200"
            >
              <IconWhatsApp className="w-4 h-4" />
              Message us
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-5">
            <h4 className="font-semibold text-cream/40 text-[0.65rem] uppercase tracking-[0.18em] mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 hover:text-brazilian-yellow transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-cream/40 text-[0.65rem] uppercase tracking-[0.18em] mb-5">Popular</h4>
            <ul className="space-y-3">
              {popularTours.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 hover:text-brazilian-yellow transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-semibold text-cream/40 text-[0.65rem] uppercase tracking-[0.18em] mb-5">Get in touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream/70 hover:text-[#25D366] transition-colors text-sm"
              >
                <IconWhatsApp className="w-4 h-4 flex-shrink-0" />
                <span>+55 21 99847-7858</span>
              </a>
              <a
                href="mailto:rioexploremanagement@gmail.com"
                className="flex items-center gap-2.5 text-cream/70 hover:text-brazilian-yellow transition-colors text-sm break-all"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>rioexploremanagement@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/rioexplore/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream/70 hover:text-brazilian-yellow transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@rioexplore</span>
              </a>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="mt-16 pt-10 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="text-cream/40 text-[0.65rem] shrink-0 uppercase tracking-[0.18em] font-semibold">
              Find us on
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {reviewPlatforms.map(p => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.name}
                  className="h-12 px-4 bg-cream/[0.06] hover:bg-cream/[0.12] border border-cream/10 hover:border-cream/25 rounded-2xl flex items-center gap-2.5 transition-all duration-300"
                >
                  <p.Mark className="h-6 w-6" />
                  <span className="text-sm font-medium text-cream/85">{p.name}</span>
                </a>
              ))}
              {otherPlatforms.map(p => (
                <div
                  key={p.name}
                  title={p.name}
                  className="h-12 px-4 bg-cream/[0.06] border border-cream/10 rounded-2xl flex items-center gap-2.5"
                >
                  <p.Mark className="h-6 w-6" />
                  <span className="text-sm font-medium text-cream/85">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-cream/35 text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} Rio Explore. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 order-1 sm:order-2">
              <span className="text-cream/35 text-xs mr-1">We accept</span>
              {['PayPal', 'Stripe', 'Revolut', 'Wise', 'Pix'].map(label => (
                <div key={label} className="h-8 px-3 bg-cream/[0.06] border border-cream/10 rounded-lg flex items-center">
                  <span className="text-xs font-medium text-cream/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
