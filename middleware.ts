import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, isLocale, type Locale } from './app/i18n/config';

const COOKIE = 'rioexplore-locale';

/** Best match from the Accept-Language header, falling back to English. */
function fromHeader(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(',')
    .map(part => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // A remembered choice beats the browser header.
  const saved = request.cookies.get(COOKIE)?.value;
  const locale = saved && isLocale(saved) ? saved : fromHeader(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals, the image folder and files with an extension.
  matcher: ['/((?!_next|images|favicon.ico|.*\\..*).*)'],
};
