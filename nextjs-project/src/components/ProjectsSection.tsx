import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react'
import { ProjectActionButtons } from './icons/ProjectActionButtons'
import { GitHubButton } from './icons/GitHubButton'

const projects = [
  {
    title: 'ShipEase Commerce Platform',
    subtitle: 'Founder & Lead Developer',
    description: 'Comprehensive shipping and fulfillment management platform integrating with e-commerce platforms for automated order processing.',
    highlights: [
      'TurboRepo monorepo with microservices architecture',
      'Hasura GraphQL engine with 47+ database tables and real-time subscriptions',
      'Google Maps API integration for distance-based shipping calculations',
      'Multi-platform support: Shopify, BigCommerce, WooCommerce, Magento',
      'Go-based notification microservice with 22+ email templates'
    ],
    technologies: ['Remix', 'Shopify API', 'Hasura GraphQL', 'PostgreSQL', 'Go', 'Docker', 'Vercel', 'Fly.io'],
    liveUrl: 'https://shipeasesoftware.com',
    demoUrl: 'https://shipeasecommerce.com',
    githubUrl: null,
    featured: true
  },
  {
    title: 'Guanacaste Lots For Sale',
    subtitle: 'Lead Developer',
    description: 'AI-powered real estate platform for Costa Rica properties with advanced semantic search and multi-language support.',
    highlights: [
      'Google AI SDK for automated content generation and 13-language translation',
      'Vector-based property search using pgvector extension',
      'Google Cloud Vision and Video Intelligence API integration',
      'WhatsApp-style messaging system with property inquiry management',
      'Content safety validation and moderation'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Material-UI', 'Google Cloud APIs', 'Firebase'],
    liveUrl: 'https://guanacastelotsforsale.com',
    demoUrl: null,
    githubUrl: null,
    featured: true
  },
  {
    title: 'Astro WordPress Starter',
    subtitle: 'Open Source Project',
    description: 'Modern headless WordPress starter demonstrating best practices for performance-optimized content sites.',
    highlights: [
      'WordPress backend with Astro frontend for optimal performance',
      'Full TypeScript integration with auto-generated GraphQL types',
      'Yoast SEO integration with proper meta tag handling',
      'GraphQL Code Generator with Docker-based local development',
      'Open source community contribution'
    ],
    technologies: ['Astro 4.x', 'TypeScript', 'WordPress', 'WPGraphQL', 'Apollo Client', 'Docker'],
    liveUrl: null,
    demoUrl: null,
    githubUrl: 'https://github.com/ronnycoding/astro-wp',
    featured: false
  },
  {
    title: 'LinkedIn MCP Server',
    subtitle: 'AI Integration Project',
    description: 'Comprehensive LinkedIn Model Context Protocol server enabling AI assistants to interact with LinkedIn&apos;s API.',
    highlights: [
      'Full LinkedIn OAuth 2.0 authentication flow with token management',
      'FastMCP server implementation for Claude AI integration',
      '120+ LinkedIn Pages Data Portability API endpoints coverage',
      'Content validation and guidelines enforcement for LinkedIn posting',
      'Professional networking automation capabilities'
    ],
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'authlib', 'FastMCP', 'LinkedIn API'],
    liveUrl: null,
    demoUrl: null,
    githubUrl: 'https://github.com/ronnycoding/linkedin-mcp',
    featured: false
  },
  {
    title: 'LoudCrowd Enterprise Platform',
    subtitle: 'Senior Software Engineer',
    description: 'Mission-critical enterprise serverless platform processing millions of e-commerce events and transactions daily.',
    highlights: [
      'Impact Affiliate Network integration with 45+ days historical data processing',
      'Creator/Ambassador platform with dynamic tracking and analytics',
      'Advanced database optimization and intelligent product sorting',
      'Expandable widget system with multiple positioning options',
      'Real-time analytics dashboards and commission calculation engines'
    ],
    technologies: ['Python Flask', 'React/TypeScript', 'Apollo GraphQL', 'PostgreSQL', 'AWS Lambda', 'AWS RDS'],
    liveUrl: null,
    demoUrl: null,
    githubUrl: null,
    featured: true
  }
]

export default function ProjectsSection() {

  return (
    <Container maxW={'7xl'} py={16} id="projects">
      <VStack gap={8} align="stretch">
        <VStack gap={4} textAlign="center">
          <Heading size="xl">
            Featured Projects
          </Heading>
          <Text fontSize="lg" color="fg.muted" maxW="3xl">
            A showcase of innovative software solutions ranging from enterprise platforms 
            to AI-powered applications and open-source contributions.
          </Text>
        </VStack>
        
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="bg.subtle"
              p={6}
              rounded="lg"
              shadow="lg"
              border={project.featured ? "2px" : "1px"}
              borderColor={project.featured ? "blue.400" : "border.muted"}
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
              position="relative"
            >
              {project.featured && (
                <Badge
                  position="absolute"
                  top={-2}
                  right={4}
                  colorScheme="blue"
                  variant="solid"
                  fontSize="xs"
                  px={3}
                  py={1}
                >
                  Featured
                </Badge>
              )}

              <VStack align="stretch" gap={4}>
                <VStack align="start" gap={2}>
                  <Heading size="lg" color="blue.500">
                    {project.title}
                  </Heading>
                  <Text fontWeight="semibold" color="fg.muted" fontSize="sm">
                    {project.subtitle}
                  </Text>
                </VStack>

                <Text color="fg.muted">
                  {project.description}
                </Text>

                <Box>
                  <Text fontWeight="bold" mb={2} fontSize="sm">
                    Key Highlights:
                  </Text>
                  <VStack align="stretch" gap={1}>
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <Box key={i} fontSize="xs" pl={4} position="relative" color="fg.muted">
                        <Box
                          position="absolute"
                          left={0}
                          top="0.4em"
                          w={1.5}
                          h={1.5}
                          bg="blue.400"
                          rounded="full"
                        />
                        {highlight}
                      </Box>
                    ))}
                  </VStack>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2} fontSize="sm">
                    Technologies:
                  </Text>
                  <HStack gap={1} flexWrap="wrap">
                    {project.technologies.slice(0, 6).map((tech, i) => (
                      <Badge
                        key={i}
                        colorScheme="blue"
                        variant="subtle"
                        fontSize="xs"
                        px={2}
                        py={0.5}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 && (
                      <Text fontSize="xs" color="fg.muted">
                        +{project.technologies.length - 6} more
                      </Text>
                    )}
                  </HStack>
                </Box>

                <ProjectActionButtons
                  liveUrl={project.liveUrl}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                />
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
            <Heading size="lg">
              Open Source Contributions
            </Heading>
            <Text fontSize="lg" color="fg.muted">
              Active contributor to the developer community with multiple open-source projects
              and 10+ years of leadership in Costa Rica&apos;s JavaScript ecosystem (CostaRicaJS).
            </Text>
            <GitHubButton />
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}