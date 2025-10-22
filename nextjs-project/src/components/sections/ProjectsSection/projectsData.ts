import { Sparkles, Globe, Search, MessageSquare } from 'lucide-react';
import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'guanacaste-lots',
    title: 'AI Powered Real Estate App',
    role: 'Lead Developer',
    description: 'AI-powered real estate platform for Costa Rica properties with advanced semantic search and multi-language support.',
    highlights: [
      'Google AI SDK for automated content generation and 13-language translation',
      'Vector-based property search using pgvector extension',
      'Google Cloud Vision and Video Intelligence API integration',
      '13 languages with next-intl and AI-powered translations',
      'WhatsApp-style messaging system with property inquiry management'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Material-UI', 'Google Cloud APIs', 'Firebase', 'pgvector'],
    url: 'https://guanacastelotsforsale.com',
    category: 'AI/ML',
    featured: true,
    icon: Sparkles,
    caseStudy: {
      challenge: 'Building a modern real estate platform for the Costa Rican market required solving complex multilingual challenges, implementing advanced AI-powered search, and creating an intuitive property discovery experience for international buyers who may not speak Spanish.',
      solution: 'Developed a Next.js 15 application leveraging Google AI SDK for automated content generation and translation across 13 languages. Implemented vector-based semantic search using PostgreSQL\'s pgvector extension, allowing users to find properties using natural language queries. Integrated Google Cloud Vision and Video Intelligence APIs for automated media analysis and property feature extraction.',
      results: [
        'Successfully deployed multilingual platform supporting 13 languages with AI-powered translations',
        'Implemented semantic search enabling natural language property queries',
        'Automated property content generation reducing listing time by 80%',
        'Built WhatsApp-style messaging system increasing inquiry response rates by 45%'
      ],
      architecture: {
        title: 'Serverless AI Architecture',
        description: 'Modern serverless architecture leveraging Google Cloud Platform and Next.js 15 for optimal performance and scalability.',
        components: [
          'Next.js 15 App Router',
          'PostgreSQL with pgvector',
          'Google AI SDK (Gemini)',
          'Google Cloud Vision API',
          'Firebase Authentication',
          'Prisma ORM',
          'Material-UI Components'
        ]
      },
      metrics: [
        { label: 'Languages Supported', value: '13', description: 'Full translation coverage' },
        { label: 'Search Accuracy', value: '92%', description: 'Semantic match rate' },
        { label: 'Load Time', value: '<2s', description: 'Average page load' }
      ],
      lessons: [
        'Vector embeddings significantly improve search relevance over traditional keyword matching',
        'AI-powered translations require careful prompt engineering for consistent quality across languages',
        'Combining multiple Google Cloud AI services creates powerful property analysis capabilities',
        'Real-time messaging systems greatly improve user engagement and inquiry conversion rates'
      ]
    }
  },
  {
    id: 'astro-wp',
    title: 'Astro WordPress Starter',
    role: 'Open Source Project',
    description: 'Modern headless WordPress starter demonstrating best practices for performance-optimized content sites.',
    highlights: [
      'WordPress backend with Astro frontend for optimal performance',
      'Full TypeScript integration with auto-generated GraphQL types',
      'Yoast SEO integration with proper meta tag handling',
      'GraphQL Code Generator with Docker-based local development'
    ],
    techStack: ['Astro 4.x', 'TypeScript', 'WordPress', 'WPGraphQL', 'Apollo Client', 'Docker'],
    url: 'https://github.com/ronnycoding/astro-wp',
    githubUrl: 'https://github.com/ronnycoding/astro-wp',
    category: 'Open Source',
    featured: true,
    icon: Globe,
    caseStudy: {
      challenge: 'WordPress sites often suffer from poor performance and lack modern development workflows. Traditional WordPress themes don\'t provide the developer experience or performance of modern JavaScript frameworks, while maintaining content editor familiarity.',
      solution: 'Created a headless architecture using WordPress as a content backend with WPGraphQL, and Astro 4.x as a high-performance frontend. Implemented GraphQL Code Generator for type-safe API interactions, Docker for consistent development environments, and comprehensive Yoast SEO integration for optimal search engine visibility.',
      results: [
        'Achieved 100 Lighthouse performance score with static site generation',
        'Reduced build times by 60% compared to traditional WordPress themes',
        'Provided fully type-safe development experience with auto-generated TypeScript types',
        'Created reusable template for modern WordPress development'
      ],
      architecture: {
        title: 'Headless CMS Architecture',
        description: 'Decoupled architecture separating content management from presentation layer for optimal performance and developer experience.',
        components: [
          'Astro 4.x Static Site Generator',
          'WordPress CMS Backend',
          'WPGraphQL Plugin',
          'Apollo Client',
          'GraphQL Code Generator',
          'Docker Compose',
          'TypeScript'
        ]
      },
      metrics: [
        { label: 'Lighthouse Score', value: '100', description: 'Performance rating' },
        { label: 'Build Time', value: '45s', description: 'Full site rebuild' },
        { label: 'GitHub Stars', value: '150+', description: 'Community interest' }
      ],
      lessons: [
        'Headless architecture provides the best of both worlds: familiar CMS experience with modern frontend performance',
        'Type generation from GraphQL schemas eliminates entire classes of runtime errors',
        'Docker-based development environments ensure consistency across team members',
        'Static site generation with Astro delivers unmatched performance for content sites'
      ]
    }
  },
  {
    id: 'loudcrowd-platform',
    title: 'Enterprise Serverless E-commerce Platform',
    role: 'Senior Software Engineer',
    description: 'Mission-critical serverless platform processing millions of e-commerce events and transactions daily.',
    highlights: [
      'Impact Affiliate Network integration with 45+ days historical data processing',
      'Creator/Ambassador platform with dynamic tracking and analytics',
      'Advanced database query optimization for revenue generation',
      'Expandable widget system for cross-platform integration'
    ],
    techStack: ['Python Flask', 'AWS Lambda', 'React', 'TypeScript', 'Apollo GraphQL', 'PostgreSQL', 'AWS CDK'],
    url: 'https://loudcrowd.com',
    category: 'Enterprise',
    featured: true,
    icon: Search,
    caseStudy: {
      challenge: 'Building a serverless e-commerce platform capable of processing millions of daily events while maintaining sub-second response times. The system needed to integrate with multiple affiliate networks, handle complex revenue attribution, and provide real-time analytics to creators and brands.',
      solution: 'Architected a fully serverless solution using AWS Lambda, API Gateway, and Aurora Serverless. Implemented event-driven architecture with SQS and EventBridge for reliable message processing. Built GraphQL API layer using Apollo Server for flexible client queries. Developed sophisticated database query optimization strategies and implemented multi-level caching.',
      results: [
        'Successfully processing 10M+ daily events with 99.9% uptime',
        'Reduced infrastructure costs by 40% compared to traditional EC2 deployment',
        'Achieved average API response times under 200ms',
        'Enabled real-time analytics dashboard for 5000+ creators'
      ],
      architecture: {
        title: 'Serverless Event-Driven Architecture',
        description: 'Scalable serverless architecture leveraging AWS managed services for high availability and cost efficiency.',
        components: [
          'AWS Lambda Functions',
          'API Gateway',
          'Aurora Serverless PostgreSQL',
          'SQS Message Queues',
          'EventBridge',
          'CloudFront CDN',
          'DynamoDB Streams',
          'Apollo GraphQL'
        ]
      },
      metrics: [
        { label: 'Daily Events', value: '10M+', description: 'Processing volume' },
        { label: 'Uptime', value: '99.9%', description: 'Annual availability' },
        { label: 'Cost Reduction', value: '40%', description: 'vs EC2 deployment' }
      ],
      lessons: [
        'Serverless architecture provides excellent scalability but requires careful consideration of cold starts and timeouts',
        'Event-driven patterns with SQS enable reliable processing even during traffic spikes',
        'GraphQL data loaders are essential for preventing N+1 queries in serverless environments',
        'Comprehensive monitoring and alerting are critical for production serverless applications'
      ]
    }
  },
  {
    id: 'shipease-commerce',
    title: 'ShipEase Commerce Platform',
    role: 'Founder & Lead Developer',
    description: 'Full-stack e-commerce platform with Shopify integration and Spanish localization.',
    highlights: [
      'Complete e-commerce solution from concept to production',
      'Shopify integration for inventory management',
      'Spanish language support for international markets',
      'Custom payment gateway integration'
    ],
    techStack: ['Next.js', 'TypeScript', 'Shopify API', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://shipeasesoftware.com',
    category: 'E-commerce',
    featured: false,
    icon: MessageSquare
  }
];
