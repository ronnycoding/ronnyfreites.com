import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  Link,
} from '@chakra-ui/react'
import { SkillIcon } from './icons/SkillIcons'

const skillCategories = [
  {
    title: 'Backend Technologies',
    type: 'backend' as const,
    color: 'green',
    skills: [
      'TypeScript', 'Python', 'JavaScript', 'C#', 'Go', 'Java',
      'Node.js', 'Flask', '.NET Core', 'Express.js',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite',
      'GraphQL', 'REST APIs', 'Serverless', 'Microservices'
    ]
  },
  {
    title: 'Frontend Technologies',
    type: 'frontend' as const,
    color: 'blue',
    skills: [
      'React', 'Next.js', 'Astro', 'Angular', 'React Native',
      'Apollo Client', 'Remix', 'Material-UI', 'Chakra UI', 'Tailwind CSS',
      'Redux', 'TypeScript', 'Webpack', 'Vite', 'Turbo'
    ]
  },
  {
    title: 'Cloud & DevOps',
    type: 'cloud' as const,
    color: 'orange',
    skills: [
      'AWS Lambda', 'AWS RDS', 'AWS S3', 'DynamoDB', 'CloudFormation',
      'Google Cloud', 'Docker', 'Docker Compose',
      'Vercel', 'Fly.io', 'Serverless Framework',
      'Prisma ORM', 'Git', 'GitHub Actions'
    ]
  },
  {
    title: 'AI & Machine Learning',
    type: 'ai' as const,
    color: 'purple',
    skills: [
      'Google AI SDK (Gemini)', 'OpenAI APIs', 'AWS AI Services',
      'Vector databases (pgvector)', 'Semantic search', 'Content generation',
      'Multi-language translation', 'Content safety validation',
      'Prompt Engineering', 'LLM Integration'
    ]
  },
  {
    title: 'Integration & APIs',
    type: 'integration' as const,
    color: 'teal',
    skills: [
      'Shopify API', 'WooCommerce', 'Salesforce Commerce Cloud',
      'Stripe', 'Payoneer', 'Instagram API', 'TikTok API',
      'Facebook API', 'Klaviyo', 'Braze', 'Mailchimp', 'SendGrid'
    ]
  },
  {
    title: 'Architecture & Patterns',
    type: 'architecture' as const,
    color: 'red',
    skills: [
      'Event-driven systems', 'SOLID Principles', 'Clean Architecture',
      'Domain-driven Design', 'Test-driven Development',
      'Continuous Integration', 'Agile Methodologies',
      'Code Review', 'Technical Leadership', 'Mentoring'
    ]
  }
]

export default function SkillsSection() {

  return (
    <Container maxW={'7xl'} py={16} id="skills">
      <VStack gap={8} align="stretch">
        <VStack gap={4} textAlign="center">
          <Heading size="xl">
            Technical Expertise
          </Heading>
          <Text fontSize="lg" color="fg.muted" maxW="3xl">
            A comprehensive skill set developed over 9+ years of professional experience,
            spanning from backend architecture to AI integration and everything in between.
          </Text>
        </VStack>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg="bg.subtle"
              p={6}
              rounded="lg"
              shadow="lg"
              border="1px"
              borderColor="border.muted"
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
            >
              <VStack align="stretch" gap={4}>
                <SkillIcon 
                  type={category.type}
                  title={category.title}
                  color={category.color}
                />

                <Box>
                  <HStack gap={2} flexWrap="wrap">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        colorScheme={category.color}
                        variant="subtle"
                        fontSize="xs"
                        px={2}
                        py={1}
                        mb={2}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box
          bg="bg.muted"
          p={8}
          rounded="lg"
          textAlign="center"
        >
          <VStack gap={4}>
            <Heading size="lg" color="blue.600">
              Continuous Learning
            </Heading>
            <Text fontSize="lg" color="white">
              25+ professional certifications across cloud platforms, AI/ML, and modern development practices.
              Always staying current with the latest technologies and best practices.
            </Text>
            <HStack gap={4} flexWrap="wrap" justify="center">
              <Badge colorScheme="blue" size="lg" px={3} py={1}>
                AWS Certified
              </Badge>
              <Link href="https://frontendmasters.com/u/ronnycoding/" target="_blank" style={{ textDecoration: 'none' }}>
                <Badge colorScheme="orange" size="lg" px={3} py={1} cursor="pointer" _hover={{ transform: 'scale(1.05)' }}>
                  Frontend Masters Graduate
                </Badge>
              </Link>
              <Badge colorScheme="blue" size="lg" px={3} py={1}>
                AI/ML Certified
              </Badge>
              <Badge colorScheme="blue" size="lg" px={3} py={1}>
                Community Leader
              </Badge>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}