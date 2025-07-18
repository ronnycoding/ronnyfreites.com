import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import { ContactIconDisplay } from './icons/ContactIcons'
import { SocialLinksSection } from './SocialLinksSection'

const contactInfo = [
  {
    type: 'email' as const,
    label: 'Email',
    value: 'Contact via LinkedIn',
    href: 'https://www.linkedin.com/in/ronnyfreites/',
    color: 'blue'
  },
  {
    type: 'location' as const,
    label: 'Location',
    value: 'Costa Rica (Remote)',
    href: null,
    color: 'green'
  },
  {
    type: 'experience' as const,
    label: 'Experience',
    value: '9+ Years',
    href: null,
    color: 'purple'
  }
]


export default function ContactSection() {

  return (
    <Box bg="bg.muted" py={16} id="contact">
      <Container maxW={'7xl'}>
        <VStack gap={12} align="stretch">
          <VStack gap={4} textAlign="center">
            <Heading size="xl">
              Let&apos;s Work Together
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="3xl">
              I&apos;m always interested in discussing new opportunities, innovative projects, 
              and ways to contribute to meaningful software solutions. Let&apos;s connect!
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box>
              <VStack gap={6} align="stretch">
                <Heading size="lg" mb={4}>
                  Get In Touch
                </Heading>
                
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    bg="bg.subtle"
                    p={4}
                    rounded="lg"
                    border="1px"
                    borderColor="border.muted"
                  >
                    <HStack gap={4}>
                      <ContactIconDisplay
                        type={info.type}
                        color={info.color}
                      />
                      <VStack align="start" gap={1}>
                        <Text fontWeight="bold" fontSize="sm">
                          {info.label}
                        </Text>
                        {info.href ? (
                          <Link
                            href={info.href}
                            target="_blank"
                            color={`${info.color}.500`}
                            _hover={{ textDecoration: 'underline' }}
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <Text color="fg.muted">
                            {info.value}
                          </Text>
                        )}
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box>
              <SocialLinksSection />

              <Box
                bg="bg.emphasized"
                p={6}
                rounded="lg"
                mt={6}
              >
                <VStack gap={3} textAlign="center">
                  <Heading size="md" color="blue.600">
                    Open to Opportunities
                  </Heading>
                  <Text fontSize="sm" color="white">
                    Currently open to senior software engineering roles, 
                    technical leadership positions, and consulting opportunities.
                  </Text>
                </VStack>
              </Box>
            </Box>
          </SimpleGrid>

          <Box
            bg="bg.subtle"
            p={8}
            rounded="lg"
            border="1px"
            borderColor="border.muted"
            textAlign="center"
          >
            <VStack gap={4}>
              <Heading size="lg">
                What I Bring to Your Team
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
                <VStack gap={2}>
                  <Text fontWeight="bold" color="blue.500">
                    Technical Excellence
                  </Text>
                  <Text fontSize="sm" color="fg.muted">
                    9+ years of enterprise experience with modern technologies
                  </Text>
                </VStack>
                <VStack gap={2}>
                  <Text fontWeight="bold" color="green.500">
                    Leadership
                  </Text>
                  <Text fontSize="sm" color="fg.muted">
                    Proven track record of leading teams and mentoring developers
                  </Text>
                </VStack>
                <VStack gap={2}>
                  <Text fontWeight="bold" color="purple.500">
                    Innovation
                  </Text>
                  <Text fontSize="sm" color="fg.muted">
                    Always exploring cutting-edge solutions and best practices
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}