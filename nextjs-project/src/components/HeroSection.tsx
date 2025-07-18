import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Icon,
  IconProps,
  VStack,
} from '@chakra-ui/react'
import { SocialButtons } from './SocialButtons'

export default function HeroSection() {
  return (
    <Container maxW={'7xl'} pt={{ base: 4, md: 8 }} px={{ base: 4, md: 6 }}>
      <Stack
        align={'center'}
        gap={{ base: 6, md: 10 }}
        py={{ base: 8, md: 16 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} gap={{ base: 4, md: 8 }} w={{ base: 'full', md: 'auto' }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '6xl' }}
            textAlign={{ base: 'center', md: 'left' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.solid',
                zIndex: -1,
              }}>
              Ronny Freites
            </Text>
            <br />
            <Text as={'span'} color={'blue.solid'}>
              Senior Software Engineer
            </Text>
          </Heading>
          <Text 
            color={'fg.muted'} 
            fontSize={{ base: 'md', md: 'lg' }}
            textAlign={{ base: 'center', md: 'left' }}
            maxW={{ base: 'full', md: 'none' }}>
            Senior Software Engineer with 9+ years of experience specializing in enterprise 
            full-stack development, serverless architecture, e-commerce platform engineering, 
            and AI-powered solutions. Proven track record of architecting and maintaining 
            mission-critical systems processing millions of events daily.
          </Text>
          <Stack 
            gap={{ base: 3, sm: 4, md: 6 }} 
            direction={{ base: 'column', sm: 'row' }}
            align={{ base: 'center', sm: 'flex-start' }}
            w="full">
            <Link href="#projects" style={{ textDecoration: 'none' }}>
              <Button
                rounded={'full'}
                size={{ base: 'md', md: 'lg' }}
                fontWeight={'normal'}
                px={{ base: 4, md: 6 }}
                w={{ base: 'full', sm: 'auto' }}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                View My Work
              </Button>
            </Link>
            <Link href="#contact" style={{ textDecoration: 'none' }}>
              <Button
                rounded={'full'}
                size={{ base: 'md', md: 'lg' }}
                fontWeight={'normal'}
                px={{ base: 4, md: 6 }}
                w={{ base: 'full', sm: 'auto' }}>
                Get In Touch
              </Button>
            </Link>
          </Stack>
          <SocialButtons />
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          display={{ base: 'none', md: 'flex' }}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={'blue.muted'}
          />
          <Box
            position={'relative'}
            height={{ base: '200px', md: '300px' }}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
            bg={'bg.subtle'}>
            <VStack gap={4} p={8} height="full" justify="center">
              <Heading size="md" textAlign="center">
                Ready to build amazing software together?
              </Heading>
              <Text textAlign="center" color={'fg.muted'}>
                Let&apos;s discuss your next project and how I can help bring your ideas to life.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.492 5.166 101.262 33.757 145.83 68.282 35.305 27.365 76.607 64.431 109.549 105.27 45.133 55.774 60.644 118.797 49.248 185.268-15.173 88.593-91.711 145.927-174.5 191.054-39.822 21.698-84.117 39.535-130.617 44.21-72.96 7.324-145.83-16.128-130.904-154.465z"
        fill="currentColor"
      />
    </Icon>
  )
}