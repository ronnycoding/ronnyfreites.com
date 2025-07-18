'use client'

import { Icon } from '@chakra-ui/react'
import { 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCode
} from 'react-icons/fa'

interface ContactIconDisplayProps {
  type: 'email' | 'location' | 'experience'
  color: string
}

const iconMap = {
  email: FaEnvelope,
  location: FaMapMarkerAlt,
  experience: FaCode,
}

export function ContactIconDisplay({ type, color }: ContactIconDisplayProps) {
  const IconComponent = iconMap[type]
  
  return (
    <Icon
      as={IconComponent}
      w={5}
      h={5}
      color={`${color}.500`}
    />
  )
}