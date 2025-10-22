'use client'

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Icon,
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { LanguageSwitcher } from './shared/LanguageSwitcher'
import { ThemeToggle } from './shared/ThemeToggle'

const Links = ['About', 'Experience', 'Skills', 'Projects', 'CV', 'Contact']

const NavLink = ({ children, href, onClick }: { children: string; href: string; onClick?: () => void }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'bg.emphasized',
    }}
    href={href}
    onClick={onClick}>
    {children}
  </Link>
)

export default function Navigation() {
  const { open: isOpen, onClose, onToggle } = useDisclosure()

  return (
    <>
      <Box bg={'bg.muted'} px={4} position="fixed" w="100%" top={0} zIndex={1000} backdropFilter="blur(10px)" borderBottom="1px" borderColor="border.muted">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            display={{ md: 'none' }}
            onClick={onToggle}
          >
            <Icon as={isOpen ? FaTimes : FaBars} />
          </IconButton>
          <HStack gap={8} alignItems={'center'}>
            <Box fontWeight="bold" fontSize="xl">Ronny Freites</Box>
            <HStack
              as={'nav'}
              gap={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} href={`#${link.toLowerCase()}`}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap={2}>
            <ThemeToggle />
            <LanguageSwitcher />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} gap={4}>
              {Links.map((link) => (
                <NavLink key={link} href={`#${link.toLowerCase()}`} onClick={onClose}>{link}</NavLink>
              ))}
              <Flex gap={2} pt={2}>
                <ThemeToggle />
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}