'use client'

import {
  VStack,
  Heading,
  Button,
  Link,
} from '@chakra-ui/react'
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
} from 'react-icons/fa'
import { SiThreads } from 'react-icons/si'
import { ClientIcon } from './icons/ClientIcon'

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronnyfreites/',
    color: 'linkedin'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/ronnycoding',
    color: 'blue'
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    href: 'https://x.com/ronnyfreites',
    color: 'twitter'
  },
  {
    icon: SiThreads,
    label: 'Threads',
    href: 'https://www.threads.com/@ronnycoding',
    color: 'purple'
  }
]

export function SocialLinksSection() {
  return (
    <VStack gap={6} align="stretch">
      <Heading size="lg" mb={4}>
        Connect With Me
      </Heading>
      
      <VStack gap={4} align="stretch">
        {socialLinks.map((social, index) => (
          <Link key={index} href={social.href} target="_blank" style={{ textDecoration: 'none' }}>
            <Button
              size="lg"
              variant="outline"
              justifyContent="flex-start"
              width="full"
              _hover={{ 
                transform: 'translateY(-2px)',
                shadow: 'lg' 
              }}
            >
              <ClientIcon icon={social.icon} marginRight={3} />
              {social.label}
            </Button>
          </Link>
        ))}
      </VStack>
    </VStack>
  )
}