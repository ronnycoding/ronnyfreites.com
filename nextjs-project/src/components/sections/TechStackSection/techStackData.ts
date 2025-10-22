import type { Technology } from './types';

export const technologies: Technology[] = [
  // Backend - Expert Level
  { id: 'typescript', name: 'TypeScript', category: 'backend', proficiency: 'expert', yearsOfExperience: 7, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'python', name: 'Python', category: 'backend', proficiency: 'expert', yearsOfExperience: 6, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', proficiency: 'expert', yearsOfExperience: 7, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'flask', name: 'Flask', category: 'backend', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-cyan-500 to-blue-600' },

  // Backend - Advanced Level
  { id: 'javascript', name: 'JavaScript', category: 'backend', proficiency: 'advanced', yearsOfExperience: 8, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'express', name: 'Express.js', category: 'backend', proficiency: 'advanced', yearsOfExperience: 6, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'dotnet', name: '.NET Core', category: 'backend', proficiency: 'advanced', yearsOfExperience: 3, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'django', name: 'Django', category: 'backend', proficiency: 'advanced', yearsOfExperience: 4, gradient: 'from-cyan-500 to-blue-600' },

  // Backend - Intermediate Level
  { id: 'php', name: 'PHP', category: 'backend', proficiency: 'intermediate', yearsOfExperience: 3, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'csharp', name: 'C#', category: 'backend', proficiency: 'intermediate', yearsOfExperience: 3, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'go', name: 'Go', category: 'backend', proficiency: 'intermediate', yearsOfExperience: 2, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'java', name: 'Java', category: 'backend', proficiency: 'intermediate', yearsOfExperience: 2, gradient: 'from-cyan-500 to-blue-600' },

  // Frontend - Expert Level
  { id: 'react', name: 'React', category: 'frontend', proficiency: 'expert', yearsOfExperience: 7, gradient: 'from-purple-500 to-pink-600' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-purple-500 to-pink-600' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert', yearsOfExperience: 4, gradient: 'from-purple-500 to-pink-600' },
  { id: 'apollo', name: 'Apollo Client', category: 'frontend', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-purple-500 to-pink-600' },

  // Frontend - Advanced Level
  { id: 'astro', name: 'Astro', category: 'frontend', proficiency: 'advanced', yearsOfExperience: 2, gradient: 'from-purple-500 to-pink-600' },
  { id: 'angular', name: 'Angular', category: 'frontend', proficiency: 'advanced', yearsOfExperience: 4, gradient: 'from-purple-500 to-pink-600' },
  { id: 'react-native', name: 'React Native', category: 'frontend', proficiency: 'advanced', yearsOfExperience: 3, gradient: 'from-purple-500 to-pink-600' },
  { id: 'mui', name: 'Material-UI', category: 'frontend', proficiency: 'advanced', yearsOfExperience: 5, gradient: 'from-purple-500 to-pink-600' },
  { id: 'redux', name: 'Redux', category: 'frontend', proficiency: 'advanced', yearsOfExperience: 5, gradient: 'from-purple-500 to-pink-600' },

  // Frontend - Intermediate Level
  { id: 'remix', name: 'Remix', category: 'frontend', proficiency: 'intermediate', yearsOfExperience: 1, gradient: 'from-purple-500 to-pink-600' },
  { id: 'webpack', name: 'Webpack', category: 'frontend', proficiency: 'intermediate', yearsOfExperience: 5, gradient: 'from-purple-500 to-pink-600' },
  { id: 'vite', name: 'Vite', category: 'frontend', proficiency: 'intermediate', yearsOfExperience: 2, gradient: 'from-purple-500 to-pink-600' },

  // Database - Expert Level
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', proficiency: 'expert', yearsOfExperience: 7, gradient: 'from-green-500 to-emerald-600' },
  { id: 'prisma', name: 'Prisma', category: 'database', proficiency: 'expert', yearsOfExperience: 4, gradient: 'from-green-500 to-emerald-600' },
  { id: 'mysql', name: 'MySQL', category: 'database', proficiency: 'expert', yearsOfExperience: 6, gradient: 'from-green-500 to-emerald-600' },

  // Database - Advanced Level
  { id: 'mongodb', name: 'MongoDB', category: 'database', proficiency: 'advanced', yearsOfExperience: 5, gradient: 'from-green-500 to-emerald-600' },
  { id: 'redis', name: 'Redis', category: 'database', proficiency: 'advanced', yearsOfExperience: 4, gradient: 'from-green-500 to-emerald-600' },
  { id: 'sqlalchemy', name: 'SQLAlchemy', category: 'database', proficiency: 'advanced', yearsOfExperience: 5, gradient: 'from-green-500 to-emerald-600' },

  // Database - Intermediate Level
  { id: 'sqlite', name: 'SQLite', category: 'database', proficiency: 'intermediate', yearsOfExperience: 4, gradient: 'from-green-500 to-emerald-600' },
  { id: 'alembic', name: 'Alembic', category: 'database', proficiency: 'intermediate', yearsOfExperience: 4, gradient: 'from-green-500 to-emerald-600' },
  { id: 'dynamodb', name: 'DynamoDB', category: 'database', proficiency: 'intermediate', yearsOfExperience: 3, gradient: 'from-green-500 to-emerald-600' },

  // Cloud - Expert Level
  { id: 'aws-lambda', name: 'AWS Lambda', category: 'cloud', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-orange-500 to-red-600' },
  { id: 'aws-rds', name: 'AWS RDS', category: 'cloud', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-orange-500 to-red-600' },
  { id: 'aws-s3', name: 'AWS S3', category: 'cloud', proficiency: 'expert', yearsOfExperience: 6, gradient: 'from-orange-500 to-red-600' },
  { id: 'docker', name: 'Docker', category: 'cloud', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-orange-500 to-red-600' },

  // Cloud - Advanced Level
  { id: 'cloudformation', name: 'CloudFormation', category: 'cloud', proficiency: 'advanced', yearsOfExperience: 4, gradient: 'from-orange-500 to-red-600' },
  { id: 'gcloud', name: 'Google Cloud', category: 'cloud', proficiency: 'advanced', yearsOfExperience: 3, gradient: 'from-orange-500 to-red-600' },
  { id: 'vercel', name: 'Vercel', category: 'cloud', proficiency: 'advanced', yearsOfExperience: 4, gradient: 'from-orange-500 to-red-600' },
  { id: 'serverless', name: 'Serverless', category: 'cloud', proficiency: 'advanced', yearsOfExperience: 5, gradient: 'from-orange-500 to-red-600' },
  { id: 'git', name: 'Git', category: 'cloud', proficiency: 'advanced', yearsOfExperience: 9, gradient: 'from-orange-500 to-red-600' },

  // Cloud - Intermediate Level
  { id: 'flyio', name: 'Fly.io', category: 'cloud', proficiency: 'intermediate', yearsOfExperience: 2, gradient: 'from-orange-500 to-red-600' },
  { id: 'github-actions', name: 'GitHub Actions', category: 'cloud', proficiency: 'intermediate', yearsOfExperience: 3, gradient: 'from-orange-500 to-red-600' },

  // AI - Expert Level
  { id: 'google-ai', name: 'Google AI SDK', category: 'ai', proficiency: 'expert', yearsOfExperience: 2, gradient: 'from-indigo-500 to-purple-600' },
  { id: 'openai', name: 'OpenAI APIs', category: 'ai', proficiency: 'expert', yearsOfExperience: 2, gradient: 'from-indigo-500 to-purple-600' },
  { id: 'prompt-eng', name: 'Prompt Engineering', category: 'ai', proficiency: 'expert', yearsOfExperience: 2, gradient: 'from-indigo-500 to-purple-600' },

  // AI - Advanced Level
  { id: 'langchain', name: 'LangChain', category: 'ai', proficiency: 'advanced', yearsOfExperience: 1, gradient: 'from-indigo-500 to-purple-600' },
  { id: 'pgvector', name: 'pgvector', category: 'ai', proficiency: 'advanced', yearsOfExperience: 2, gradient: 'from-indigo-500 to-purple-600' },
  { id: 'semantic-search', name: 'Semantic Search', category: 'ai', proficiency: 'advanced', yearsOfExperience: 2, gradient: 'from-indigo-500 to-purple-600' },

  // AI - Intermediate Level
  { id: 'langgraph', name: 'LangGraph', category: 'ai', proficiency: 'intermediate', yearsOfExperience: 1, gradient: 'from-indigo-500 to-purple-600' },
  { id: 'mcp', name: 'Model Context Protocol', category: 'ai', proficiency: 'intermediate', yearsOfExperience: 1, gradient: 'from-indigo-500 to-purple-600' },

  // Integrations - Expert Level
  { id: 'graphql', name: 'GraphQL', category: 'integrations', proficiency: 'expert', yearsOfExperience: 5, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'rest', name: 'REST APIs', category: 'integrations', proficiency: 'expert', yearsOfExperience: 9, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'shopify', name: 'Shopify', category: 'integrations', proficiency: 'expert', yearsOfExperience: 4, gradient: 'from-yellow-500 to-orange-600' },

  // Integrations - Advanced Level
  { id: 'stripe', name: 'Stripe', category: 'integrations', proficiency: 'advanced', yearsOfExperience: 4, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'integrations', proficiency: 'advanced', yearsOfExperience: 3, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'microservices', name: 'Microservices', category: 'integrations', proficiency: 'advanced', yearsOfExperience: 5, gradient: 'from-yellow-500 to-orange-600' },

  // Integrations - Intermediate Level
  { id: 'instagram', name: 'Instagram API', category: 'integrations', proficiency: 'intermediate', yearsOfExperience: 2, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'tiktok', name: 'TikTok API', category: 'integrations', proficiency: 'intermediate', yearsOfExperience: 2, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'klaviyo', name: 'Klaviyo', category: 'integrations', proficiency: 'intermediate', yearsOfExperience: 3, gradient: 'from-yellow-500 to-orange-600' },
  { id: 'impact', name: 'Impact Radius', category: 'integrations', proficiency: 'intermediate', yearsOfExperience: 3, gradient: 'from-yellow-500 to-orange-600' },
];

export const categoryMetadata = {
  backend: { title: 'Backend', color: 'cyan' },
  frontend: { title: 'Frontend', color: 'purple' },
  database: { title: 'Database', color: 'green' },
  cloud: { title: 'Cloud & DevOps', color: 'orange' },
  ai: { title: 'AI & ML', color: 'indigo' },
  integrations: { title: 'Integrations', color: 'yellow' },
};
