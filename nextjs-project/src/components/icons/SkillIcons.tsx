'use client'

import { Icon, HStack, Heading } from '@chakra-ui/react'
import { 
  FaServer, 
  FaReact, 
  FaCloud, 
  FaBrain, 
  FaPlug,
  FaCode 
} from 'react-icons/fa'

interface SkillIconProps {
  type: 'backend' | 'frontend' | 'cloud' | 'ai' | 'integration' | 'architecture'
  title: string
  color: string
}

const iconMap = {
  backend: FaServer,
  frontend: FaReact,
  cloud: FaCloud,
  ai: FaBrain,
  integration: FaPlug,
  architecture: FaCode,
}

export function SkillIcon({ type, title, color }: SkillIconProps) {
  const IconComponent = iconMap[type]
  
  return (
    <HStack gap={3}>
      <Icon
        as={IconComponent}
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