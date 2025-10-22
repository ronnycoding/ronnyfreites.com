'use client';

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const router = useRouter();
  const locale = useLocale();

  const content = {
    en: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.',
      button: 'Go Back Home',
    },
    es: {
      title: '404 - Página No Encontrada',
      description: 'La página que buscas no existe.',
      button: 'Volver al Inicio',
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="bg.canvas"
    >
      <VStack gap={6} textAlign="center" px={4}>
        <Heading size="2xl" fontWeight="bold">
          {t.title}
        </Heading>
        <Text fontSize="lg" color="fg.muted" maxW="md">
          {t.description}
        </Text>
        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => router.push(`/${locale}`)}
        >
          {t.button}
        </Button>
      </VStack>
    </Box>
  );
}
