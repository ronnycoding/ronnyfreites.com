'use client'

import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FaDownload, FaFilePdf } from 'react-icons/fa'

export default function DownloadCVSection() {
  const cvDownloadUrl = process.env.NEXT_PUBLIC_CV_DOWNLOAD_URL

  if (!cvDownloadUrl) {
    return null // Don't render if no URL is provided
  }

  return (
    <Box bg="bg.muted" py={16} id="cv">
      <Container maxW={'7xl'}>
        <VStack gap={8} align="stretch">
          <VStack gap={4} textAlign="center">
            <Heading size="xl">
              Download My CV
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="3xl">
              Get a comprehensive overview of my experience, skills, and achievements 
              in a downloadable PDF format.
            </Text>
          </VStack>

          <Box 
            bg="bg.subtle" 
            p={8} 
            rounded="lg" 
            border="1px" 
            borderColor="border.muted"
            textAlign="center"
            maxW="md"
            mx="auto"
          >
            <VStack gap={6}>
              <Icon as={FaFilePdf} w={12} h={12} color="red.400" />
              
              <VStack gap={2}>
                <Heading size="lg">
                  Ronny Freites - CV
                </Heading>
                <Text color="fg.muted">
                  Senior Software Engineer Resume
                </Text>
              </VStack>

              <HStack gap={4} flexWrap="wrap" justify="center">
                <Link href={cvDownloadUrl} target="_blank" style={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                  >
                    <Icon as={FaDownload} marginRight={3} />
                    Download PDF
                  </Button>
                </Link>
                
                <Link href={cvDownloadUrl} target="_blank" style={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    variant="outline"
                    _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                  >
                    View Online
                  </Button>
                </Link>
              </HStack>

              <Text fontSize="sm" color="fg.muted">
                PDF format • Updated regularly • Professional layout
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}