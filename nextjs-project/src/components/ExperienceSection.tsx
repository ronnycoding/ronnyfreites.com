import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Badge,
} from '@chakra-ui/react'

const experiences = [
  {
    company: 'LoudCrowd',
    position: 'Senior Software Engineer',
    period: 'Apr 2022 - Present (3+ years)',
    location: 'Remote',
    description: 'Architected and maintained a mission-critical enterprise serverless platform processing millions of e-commerce events and transactions daily. Led full-stack development with focus on GraphQL optimization, third-party integrations, and scalable system architecture.',
    achievements: [
      'Impact Affiliate Network Integration: Spearheaded development of robust web event processing pipelines handling 45+ days of historical data with sophisticated error handling and automated retry mechanisms',
      'Creator/Ambassador Platform: Architected comprehensive influencer marketing platform with dynamic tracking link generation, real-time analytics dashboards, and commission calculation engines',
      'Performance Optimization: Implemented advanced database query strategies and intelligent product sorting algorithms, directly contributing to improved system reliability and increased revenue generation',
      'Technical Innovation: Developed expandable widget system with multiple positioning options, enabling seamless product link integration across various platforms'
    ],
    technologies: ['Python Flask', 'React/TypeScript', 'Apollo GraphQL', 'PostgreSQL', 'AWS Lambda', 'AWS RDS', 'AWS CDK', 'Serverless Framework']
  },
  {
    company: 'Gorilla Logic',
    position: 'Senior Software Engineering Consultant',
    period: 'Sep 2021 - Apr 2022 (8 months)',
    location: 'Costa Rica',
    description: 'Contributed to transformation of legacy .NET system into modern serverless architecture for Submittable\'s Grant Management system, serving as both technical lead and mentor for development team.',
    achievements: [
      'Legacy System Migration: Successfully migrated existing .NET Core system to React with AWS Lambda serverless functions',
      'Technical Leadership: Provided strategic planning and execution guidance, mentoring junior developers on project expectations and scalable architecture best practices',
      'Modern Frontend Development: Implemented React application using Hooks, Context API, and Redux for effective state management',
      'Payment Integration: Implemented Payoneer integration for fund withdrawals and payment processing',
      'Quality Assurance: Established comprehensive unit testing framework using Jest and React Testing Library'
    ],
    technologies: ['ReactJS', 'AWS Lambda', '.NET Core', 'Redux', 'Jest', 'React Testing Library']
  },
  {
    company: 'OMNiLabs',
    position: 'Technical Lead',
    period: 'Nov 2018 - Sep 2021 (2 years 11 months)',
    location: 'Costa Rica - Remote',
    description: 'Led team of six full-stack developers in developing comprehensive payment gateway project with QR code-based retail payment solutions.',
    achievements: [
      'Team Leadership: Managed and mentored team of six developers through complex technical challenges',
      'Payment Gateway Architecture: Designed and implemented complete payment system with external payment integrations and mobile application support',
      'QR Code Innovation: Successfully implemented QR code-based payment solution specifically tailored for retail-level payment reception',
      'AWS Infrastructure: Optimized performance using AWS Lambda functions and Serverless.com infrastructure management',
      'Strategic Decision Making: Led architectural decisions and feature design while fostering collaborative learning environment'
    ],
    technologies: ['TypeScript', 'Node.js', 'React Native', 'AWS Lambda', 'Serverless Framework']
  },
  {
    company: 'Critical Mass',
    position: 'Senior Full Stack Developer',
    period: 'Nov 2016 - Nov 2018 (2 years 1 month)',
    location: 'Costa Rica - On-site',
    description: 'Led development of international Marriott Hotels website, focusing on accessibility, performance, and user experience for Fortune 500 client.',
    achievements: [
      'Enterprise WordPress Development: Led development of international Marriott site with custom plugin for business locations showcase',
      'Advanced Filtering Systems: Designed comprehensive plugin with region and brand filters for managing substantial information volumes',
      'Accessibility Excellence: Implemented advanced accessibility techniques and screen reader integration for inclusive user experience',
      'Technical Mentorship: Mentored team members and contributed to solving complex challenges with innovative solutions'
    ],
    technologies: ['WordPress', 'PHP', 'jQuery', 'MySQL', 'Custom Plugin Development']
  }
]

export default function ExperienceSection() {

  return (
    <Container maxW={'7xl'} py={16} id="experience">
      <VStack gap={8} align="stretch">
        <Heading size="xl" textAlign="center" mb={8}>
          Professional Experience
        </Heading>
        
        {experiences.map((exp, index) => (
          <Box
            key={index}
            bg="bg.subtle"
            p={8}
            rounded="lg"
            shadow="lg"
            border="1px"
            borderColor="border.muted"
          >
            <VStack align="stretch" gap={4}>
              <HStack justify="space-between" flexWrap="wrap">
                <VStack align="start" gap={1}>
                  <Heading size="lg" color="blue.500">
                    {exp.position}
                  </Heading>
                  <Heading size="md" fontWeight="normal">
                    {exp.company}
                  </Heading>
                </VStack>
                <VStack align="end" gap={1}>
                  <Text fontWeight="bold" color="white">
                    {exp.period}
                  </Text>
                  <Text fontSize="sm" color="fg.muted">
                    {exp.location}
                  </Text>
                </VStack>
              </HStack>

              <Text color="fg.muted" fontSize="lg">
                {exp.description}
              </Text>

              <Box>
                <Text fontWeight="bold" mb={3}>
                  Key Achievements:
                </Text>
                <VStack align="stretch" gap={2}>
                  {exp.achievements.map((achievement, i) => (
                    <Box key={i} fontSize="sm" pl={4} position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        top="0.5em"
                        w={2}
                        h={2}
                        bg="blue.400"
                        rounded="full"
                      />
                      {achievement}
                    </Box>
                  ))}
                </VStack>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={3}>
                  Technologies:
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      colorScheme="blue"
                      variant="subtle"
                      fontSize="xs"
                      px={2}
                      py={1}
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  )
}