'use client'

import { Icon, IconProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface ClientIconProps extends Omit<IconProps, 'as'> {
  icon: IconType
}

export function ClientIcon({ icon, ...props }: ClientIconProps) {
  return <Icon as={icon} {...props} />
}