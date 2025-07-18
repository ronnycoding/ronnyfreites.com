'use client'

import { Button, Link, Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export function GitHubButton() {
  return (
    <Link href="https://github.com/ronnycoding" target="_blank" style={{ textDecoration: 'none' }}>
      <Button
        colorScheme="blue"
      >
        <Icon as={FaGithub} marginRight={2} />
        View All Projects on GitHub
      </Button>
    </Link>
  )
}