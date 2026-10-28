import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, isLocale } from './app/i18n/config';

const COOKIE = 'rioexplore-locale';

/**
 * Everyone lands on English unless they have explicitly picked another
 * language before — we deliberately do not sniff Accept-Language, because a
 * browser set to Spanish does not mean the visitor wants the site in Spanish.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const saved = request.cookies.get(COOKIE)?.value;
  const locale = saved && isLocale(saved) ? saved : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals, the image folder and files with an extension.
  matcher: ['/((?!_next|images|favicon.ico|.*\\..*).*)'],
};
