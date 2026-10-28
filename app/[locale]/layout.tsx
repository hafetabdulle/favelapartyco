import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Toucan from '@/components/Toucan';
import { LocaleProvider } from '@/app/i18n/LocaleProvider';
import { getDictionary } from '@/app/i18n';
import { locales, isLocale, type Locale } from '@/app/i18n/config';

/** Pre-render one static tree per language. */
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Rio Explore — Authentic Rio de Janeiro Tours & Experiences',
    description:
      'Experience the real Rio with guided favela tours, pub crawls, sunrise hikes, hang gliding and custom multi-day trips. Book your unforgettable Brazilian experience today.',
  },
  es: {
    title: 'Rio Explore — Tours y experiencias auténticas en Río de Janeiro',
    description:
      'Vive el Río real con tours por la favela, rutas de bares, caminatas al amanecer, ala delta y viajes a medida de varios días. Reserva hoy tu experiencia brasileña inolvidable.',
  },
  pt: {
    title: 'Rio Explore — Passeios e experiências autênticas no Rio de Janeiro',
    description:
      'Viva o Rio de verdade com tours na favela, rolês de bar, trilhas ao nascer do sol, asa-delta e roteiros personalizados. Reserve hoje a sua experiência inesquecível.',
  },
  de: {
    title: 'Rio Explore — Authentische Touren & Erlebnisse in Rio de Janeiro',
    description:
      'Erlebe das echte Rio mit Favela-Touren, Bar-Touren, Wanderungen zum Sonnenaufgang, Drachenfliegen und individuell geplanten Reisen. Buche heute dein unvergessliches Erlebnis.',
  },
  fr: {
    title: 'Rio Explore — Excursions et expériences authentiques à Rio de Janeiro',
    description:
      'Vivez le vrai Rio avec des visites de favela, des tournées des bars, des randonnées au lever du soleil, du deltaplane et des séjours sur mesure. Réservez votre expérience inoubliable.',
  },
  zh: {
    title: 'Rio Explore — 里约热内卢地道行程与体验',
    description:
      '法维拉导览、酒吧巡游、日出徒步、滑翔翼，还有量身定制的多日行程，带你体验真正的里约热内卢。立即预订你的难忘之旅。',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  return {
    ...meta[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map(l => [l, `/${l}`])),
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <LocaleProvider locale={locale} dictionary={dictionary}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toucan />
        </LocaleProvider>
      </body>
    </html>
  );
}
