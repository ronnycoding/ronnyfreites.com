'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { HStack } from '@chakra-ui/react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const segments = pathname.split('/').filter(Boolean);
    const currentLocale = segments[0];

    // Remove locale if it's 'en' or 'es'
    if (currentLocale === 'en' || currentLocale === 'es') {
      segments.shift();
    }

    // Build new path
    const path = segments.length > 0 ? segments.join('/') : '';
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <HStack gap={2}>
      <Button
        variant={locale === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <Button
        variant={locale === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => switchLocale('es')}
        aria-label="Cambiar a Español"
      >
        ES
      </Button>
    </HStack>
  );
}
