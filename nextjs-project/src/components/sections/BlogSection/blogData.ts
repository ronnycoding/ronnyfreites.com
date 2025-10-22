export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable E-Commerce Platforms with Serverless Architecture',
    excerpt: 'Learn how to architect high-performance e-commerce platforms using serverless technologies, handling millions of transactions with optimal cost efficiency.',
    category: 'Architecture',
    date: '2024-10-15',
    readTime: '8 min read',
    image: '/images/blog/serverless-ecommerce.jpg',
    url: '#',
    tags: ['Serverless', 'E-Commerce', 'AWS', 'Scalability']
  },
  {
    id: '2',
    title: 'GraphQL Performance Optimization: From Slow to Lightning Fast',
    excerpt: 'Deep dive into GraphQL optimization techniques, fragment architecture, and caching strategies that improved our API response times by 85%.',
    category: 'Performance',
    date: '2024-10-08',
    readTime: '12 min read',
    image: '/images/blog/graphql-optimization.jpg',
    url: '#',
    tags: ['GraphQL', 'Performance', 'Optimization', 'API']
  },
  {
    id: '3',
    title: 'Integrating AI into Full-Stack Applications: A Practical Guide',
    excerpt: 'Practical approaches to integrating LangChain, OpenAI, and RAG systems into production applications with real-world examples.',
    category: 'AI/ML',
    date: '2024-09-28',
    readTime: '15 min read',
    image: '/images/blog/ai-integration.jpg',
    url: '#',
    tags: ['AI', 'LangChain', 'OpenAI', 'RAG']
  },
  {
    id: '4',
    title: 'Modern Next.js 15 Patterns: Server Components & React 19',
    excerpt: 'Exploring the latest Next.js 15 features including Server Components, streaming SSR, and React 19 integration patterns.',
    category: 'Frontend',
    date: '2024-09-20',
    readTime: '10 min read',
    image: '/images/blog/nextjs-patterns.jpg',
    url: '#',
    tags: ['Next.js', 'React', 'Server Components', 'SSR']
  },
  {
    id: '5',
    title: 'Building Resilient Microservices with Event-Driven Architecture',
    excerpt: 'Design patterns and best practices for building robust microservices using event-driven architecture and message queues.',
    category: 'Backend',
    date: '2024-09-12',
    readTime: '14 min read',
    image: '/images/blog/event-driven.jpg',
    url: '#',
    tags: ['Microservices', 'Event-Driven', 'Architecture', 'Backend']
  },
  {
    id: '6',
    title: 'TypeScript Advanced Patterns for Enterprise Applications',
    excerpt: 'Advanced TypeScript patterns, type inference optimization, and enterprise-grade type safety strategies for large-scale applications.',
    category: 'TypeScript',
    date: '2024-09-05',
    readTime: '11 min read',
    image: '/images/blog/typescript-patterns.jpg',
    url: '#',
    tags: ['TypeScript', 'Patterns', 'Enterprise', 'Type Safety']
  }
];

export const blogCategories = [
  'All',
  'Architecture',
  'Performance',
  'AI/ML',
  'Frontend',
  'Backend',
  'TypeScript'
];
