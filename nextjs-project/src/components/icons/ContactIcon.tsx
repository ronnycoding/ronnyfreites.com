'use client'

import { Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface ContactIconProps {
  icon: IconType
  color: string
  w?: number
  h?: number
}

export function ContactIcon({ icon, color, w = 5, h = 5 }: ContactIconProps) {
  return (
    <Icon
      as={icon}
      w={w}
      h={h}
      color={`${color}.500`}
    />
  )
}