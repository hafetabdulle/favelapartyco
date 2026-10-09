'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useLocale } from '@/app/i18n/LocaleProvider';
import { localePath } from '@/app/i18n/config';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

/**
 * next/link that prefixes app paths with the active locale, so every internal
 * link keeps the visitor in the language they chose. External links, mailto:
 * and bare hashes pass straight through.
 */
export default function L({ href, ...rest }: Props) {
  const locale = useLocale();
  return <Link href={localePath(href, locale)} {...rest} />;
}
