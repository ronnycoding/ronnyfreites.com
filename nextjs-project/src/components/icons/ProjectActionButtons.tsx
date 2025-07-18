'use client'

import { HStack, Button, Link, Icon } from '@chakra-ui/react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface ProjectActionButtonsProps {
  liveUrl?: string | null
  demoUrl?: string | null
  githubUrl?: string | null
}

export function ProjectActionButtons({ liveUrl, demoUrl, githubUrl }: ProjectActionButtonsProps) {
  return (
    <HStack gap={3} pt={2}>
      {liveUrl && (
        <Link href={liveUrl} target="_blank" style={{ textDecoration: 'none' }}>
          <Button
            size="sm"
            colorScheme="blue"
          >
            <Icon as={FaExternalLinkAlt} marginRight={2} />
            Live Site
          </Button>
        </Link>
      )}
      {demoUrl && (
        <Link href={demoUrl} target="_blank" style={{ textDecoration: 'none' }}>
          <Button
            size="sm"
            variant="outline"
          >
            <Icon as={FaExternalLinkAlt} marginRight={2} />
            Demo
          </Button>
        </Link>
      )}
      {githubUrl && (
        <Link href={githubUrl} target="_blank" style={{ textDecoration: 'none' }}>
          <Button
            size="sm"
            variant="outline"
          >
            <Icon as={FaGithub} marginRight={2} />
            GitHub
          </Button>
        </Link>
      )}
    </HStack>
  )
}