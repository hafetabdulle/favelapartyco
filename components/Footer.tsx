import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/rio.png"
              alt="Rio Explore"
              width={200}
              height={67}
              className="h-14 w-auto"
            />
            <p className="text-neutral-600 text-sm leading-relaxed">
              Experience the authentic Rio de Janeiro with local guides and unforgettable adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tours" className="text-neutral-600 hover:text-brazilian-green transition-colors text-sm">
                  All Tours
                </Link>
              </li>
              <li>
                <Link href="/private-experiences" className="text-neutral-600 hover:text-brazilian-green transition-colors text-sm">
                  Private Experiences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-brazilian-green transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900">Popular Tours</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tours#favela-tour" className="text-neutral-600 hover:text-brazilian-green transition-colors text-sm">
                  Favela Tour by Day
                </Link>
              </li>
              <li>
                <Link href="/tours#pubcrawl" className="text-neutral-600 hover:text-brazilian-green transition-colors text-sm">
                  Pubcrawl & Favela Party
                </Link>
              </li>
              <li>
                <Link href="/tours#hang-gliding" className="text-neutral-600 hover:text-brazilian-green transition-colors text-sm">
                  Hang Gliding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5521998477858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-neutral-600 hover:text-green-500 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.instagram.com/favelapartyco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-brazilian-green hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-brazilian-green hover:text-white transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Advertised on */}
        <div className="mt-10 pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-neutral-400 text-xs shrink-0">Find us on:</span>
            <div className="flex flex-wrap items-center gap-2">
              {/* GetYourGuide */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center gap-1.5" title="GetYourGuide">
                <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="#FF5533">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.5 17.5h-1v-6h1v6zm-.5-7.5a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
                <span className="text-xs font-semibold text-neutral-800">GetYourGuide</span>
              </div>
              {/* TripAdvisor */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center gap-1.5" title="TripAdvisor">
                <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.07 0 3.984.63 5.568 1.706l1.557-1.557.375 2.625A9.43 9.43 0 0121.5 12c0 5.247-4.253 9.5-9.5 9.5S2.5 17.247 2.5 12 6.753 2.5 12 2.5v2zm-3.5 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#00AA6C"/>
                </svg>
                <span className="text-xs font-semibold text-neutral-800">TripAdvisor</span>
              </div>
              {/* Airbnb */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center gap-1.5" title="Airbnb">
                <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 5c1.226 0 2.086.893 2.086 2.107 0 1.226-.86 2.108-2.086 2.108S9.914 8.333 9.914 7.107C9.914 5.893 10.774 5 12 5zm4.5 10.5c-.36 1.14-1.68 2.14-2.82 2.64-.48.2-.96.36-1.44.36h-.48c-.48 0-.96-.16-1.44-.36-1.14-.5-2.46-1.5-2.82-2.64-.12-.36-.12-.72 0-1.08.24-.84 1.02-1.32 1.86-1.32.48 0 .9.12 1.26.36l.84.6V12c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1.86l.84-.6c.36-.24.78-.36 1.26-.36.84 0 1.62.48 1.86 1.32.12.36.12.72 0 1.08z" fill="#FF5A5F"/>
                </svg>
                <span className="text-xs font-semibold text-neutral-800">Airbnb</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Rio Explore. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-xs mr-1">We accept:</span>
              {/* PayPal */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center" title="PayPal">
                <svg viewBox="0 0 101 32" className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.237 2.93H5.532c-.463 0-.856.336-.928.794L2.05 24.794a.557.557 0 00.55.644h3.175c.463 0 .856-.337.928-.795l.638-4.042c.071-.458.465-.795.927-.795h2.1c4.368 0 6.888-2.113 7.546-6.306.296-1.832.012-3.27-.844-4.277-.94-1.109-2.603-1.693-4.833-1.693v-.6zm.767 6.213c-.362 2.376-2.178 2.376-3.934 2.376h-1l .7-4.428c.042-.269.276-.466.549-.466h.457c1.196 0 2.325 0 2.908.682.349.407.455 1.01.32 1.836zM30.73 9.05h-3.188a.557.557 0 00-.549.466l-.141.895-.224-.325c-.694-1.007-2.24-1.344-3.784-1.344-3.54 0-6.566 2.682-7.155 6.443-.306 1.876.129 3.67 1.18 4.918 .966 1.148 2.346 1.626 3.99 1.626 2.854 0 4.438-1.834 4.438-1.834l-.142.888a.557.557 0 00.549.644h2.872c.463 0 .856-.337.928-.795l1.723-10.937a.557.557 0 00-.548-.645zm-4.447 6.236c-.31 1.832-1.764 3.063-3.616 3.063-.929 0-1.674-.299-2.151-.864-.474-.562-.652-1.362-.502-2.252.29-1.816 1.766-3.086 3.59-3.086.91 0 1.649.301 2.135.873.489.576.681 1.382.544 2.266zM48.15 9.05h-3.204c-.31 0-.6.154-.775.41l-4.474 6.59-1.897-6.337c-.119-.396-.484-.663-.897-.663h-3.15a.557.557 0 00-.528.736l3.572 10.48-3.358 4.737a.557.557 0 00.455.882h3.2c.308 0 .596-.151.772-.404l10.79-15.578a.557.557 0 00-.507-.853z" fill="#253B80"/>
                  <path d="M57.952 2.93h-6.705c-.463 0-.856.336-.928.794L47.765 24.794a.557.557 0 00.549.644h3.405c.324 0 .599-.235.65-.556l.671-4.281c.071-.458.465-.795.927-.795h2.1c4.368 0 6.888-2.113 7.546-6.306.296-1.832.012-3.27-.844-4.277-.94-1.109-2.602-1.693-4.832-1.693l-.585-.6zm.767 6.213c-.362 2.376-2.178 2.376-3.934 2.376h-1l.7-4.428c.042-.269.276-.466.549-.466h.457c1.196 0 2.325 0 2.908.682.35.407.455 1.01.32 1.836zM76.446 9.05h-3.188a.557.557 0 00-.549.466l-.141.895-.224-.325c-.694-1.007-2.241-1.344-3.784-1.344-3.54 0-6.566 2.682-7.155 6.443-.306 1.876.129 3.67 1.18 4.918.966 1.148 2.346 1.626 3.99 1.626 2.854 0 4.438-1.834 4.438-1.834l-.142.888a.557.557 0 00.549.644h2.872c.463 0 .856-.337.928-.795l1.723-10.937a.557.557 0 00-.497-.645zm-4.447 6.236c-.31 1.832-1.764 3.063-3.616 3.063-.929 0-1.674-.299-2.151-.864-.474-.562-.652-1.362-.502-2.252.29-1.816 1.766-3.086 3.59-3.086.91 0 1.649.301 2.135.873.489.576.681 1.382.544 2.266zM79.503 3.328l-2.577 16.394a.557.557 0 00.549.644h2.747c.463 0 .856-.337.928-.795l2.542-16.108a.557.557 0 00-.549-.644h-3.092a.557.557 0 00-.548.509z" fill="#179BD7"/>
                </svg>
              </div>
              {/* Stripe */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center" title="Stripe">
                <svg viewBox="0 0 60 25" className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.94 10.94 0 01-4.56.93c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.65zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.44.94V5.27h3.94l.2 1.01c.56-.69 1.68-1.26 3.23-1.26 2.9 0 5.62 2.6 5.62 7.6 0 5.37-2.7 7.68-5.63 7.68zM40 8.95c-.99 0-1.58.38-1.97.9l.04 6.05c.36.5.93.87 1.93.87 1.5 0 2.54-1.65 2.54-3.9C42.54 10.59 41.5 8.95 40 8.95zM28.24 5.27h4.44V20h-4.44V5.27zm0-4.7l4.44-.94v3.56l-4.44.94V.57zm-4.99 14.7l.54 4.73H20.3l-.38-2.97c-.88 1.96-2.65 3.26-5.02 3.26-3.7 0-6.48-3.06-6.48-7.65C8.42 7.37 11.3 5 14.94 5c1.98 0 3.44.7 4.32 1.88V5.27h4.32l.5 9.54-.84.46zM16.1 17.4c1.56 0 2.63-1.3 2.63-3.8 0-2.5-1.1-3.72-2.65-3.72-1.51 0-2.64 1.24-2.64 3.75 0 2.47 1.1 3.77 2.66 3.77zm-12.49-.1c.85 0 1.67-.19 2.37-.51V20c-.75.26-1.75.44-2.9.44C.9 20.44 0 18.9 0 16.53V8.92H1.82V5.27H0V1.54l4.44-.94v4.67H7.3v3.65H4.44v6.98c0 1.01.47 1.4 1.17 1.4z" fill="#635BFF"/>
                </svg>
              </div>
              {/* Revolut */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center gap-1.5" title="Revolut">
                <svg viewBox="0 0 28 28" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0zm4.374 20.125l-3.01-4.813H13.5v4.813H10V7.875h5.25c2.9 0 4.813 1.575 4.813 3.85 0 1.838-1.05 3.15-2.712 3.675l3.324 4.725h-4.301zm-2.362-7.35c1.05 0 1.663-.525 1.663-1.4s-.613-1.4-1.663-1.4H13.5v2.8h2.512z" fill="#191C1F"/>
                </svg>
                <span className="text-xs font-semibold text-neutral-800">Revolut</span>
              </div>
              {/* Pix */}
              <div className="h-8 px-3 bg-white border border-neutral-200 rounded-lg flex items-center justify-center gap-1.5" title="Pix">
                <svg viewBox="0 0 512 512" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M376.4 322.6c-22.4 0-43.4-8.7-59.2-24.5l-80.7-80.7c-6.4-6.4-17.6-6.4-24 0l-81 81c-15.8 15.8-36.8 24.5-59.2 24.5H56l102.5 102.5c33.4 33.4 87.5 33.4 120.9 0L382 322.6h-5.6zM72.3 189.4h.8c22.4 0 43.4 8.7 59.2 24.5l81 81c6.6 6.6 17.4 6.6 24 0l80.7-80.7c15.8-15.8 36.8-24.5 59.2-24.5h5.6L280.3 87.1c-33.4-33.4-87.5-33.4-120.9 0L56.7 189.4h15.6zM437.7 210.6L376.4 149h-9.4c-17.3 0-33.6 6.8-45.8 19l-80.7 80.7c-12.3 12.3-33.7 12.3-46 0l-81-81c-12.2-12.2-28.5-19-45.8-19h-9.4L57 210.6c-33.4 33.4-33.4 87.5 0 120.9l61.2 61.2h9.4c17.3 0 33.6-6.8 45.8-19l81-81c12.3-12.3 33.7-12.3 46 0l80.7 80.7c12.2 12.2 28.5 19 45.8 19h9.4l61.2-61.2c33.6-33.4 33.6-87.5.2-120.6z" fill="#32BCAD"/>
                </svg>
                <span className="text-xs font-semibold text-neutral-800">Pix</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
