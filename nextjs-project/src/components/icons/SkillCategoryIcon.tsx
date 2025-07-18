'use client'

import { Icon, HStack, Heading } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface SkillCategoryIconProps {
  icon: IconType
  title: string
  color: string
}

export function SkillCategoryIcon({ icon, title, color }: SkillCategoryIconProps) {
  return (
    <HStack gap={3}>
      <Icon
        as={icon}
        w={6}
        h={6}
        color={`${color}.500`}
      />
      <Heading size="md" color={`${color}.500`}>
        {title}
      </Heading>
    </HStack>
  )
}