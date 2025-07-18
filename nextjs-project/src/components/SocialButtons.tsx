'use client'

import { HStack, Button, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiThreads } from 'react-icons/si'

export function SocialButtons() {
  return (
    <HStack 
      gap={{ base: 2, md: 4 }} 
      pt={4} 
      flexWrap="wrap" 
      justify={{ base: 'center', md: 'flex-start' }}
    >
      <Link href="https://github.com/ronnycoding" target="_blank" style={{ textDecoration: 'none' }}>
        <Button
          variant="ghost"
          size={{ base: 'xs', md: 'sm' }}
          fontSize={{ base: 'xs', md: 'sm' }}>
          <FaGithub style={{ marginRight: '8px' }} />
          GitHub
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/ronnyfreites/" target="_blank" style={{ textDecoration: 'none' }}>
        <Button
          variant="ghost"
          size={{ base: 'xs', md: 'sm' }}
          fontSize={{ base: 'xs', md: 'sm' }}>
          <FaLinkedin style={{ marginRight: '8px' }} />
          LinkedIn
        </Button>
      </Link>
      <Link href="https://x.com/ronnyfreites" target="_blank" style={{ textDecoration: 'none' }}>
        <Button
          variant="ghost"
          size={{ base: 'xs', md: 'sm' }}
          fontSize={{ base: 'xs', md: 'sm' }}>
          <FaTwitter style={{ marginRight: '8px' }} />
          Twitter
        </Button>
      </Link>
      <Link href="https://www.threads.com/@ronnycoding" target="_blank" style={{ textDecoration: 'none' }}>
        <Button
          variant="ghost"
          size={{ base: 'xs', md: 'sm' }}
          fontSize={{ base: 'xs', md: 'sm' }}>
          <SiThreads style={{ marginRight: '8px' }} />
          Threads
        </Button>
      </Link>
    </HStack>
  )
}