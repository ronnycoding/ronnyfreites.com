export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  price: string;
  deliveryTime: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern technologies like Next.js, React, Node.js, and TypeScript.',
    features: [
      'Custom web application development',
      'RESTful & GraphQL API design',
      'Database architecture & optimization',
      'Cloud deployment (AWS, Vercel)',
      'Performance optimization',
      'Code review & refactoring'
    ],
    icon: 'code',
    price: 'Custom quote',
    deliveryTime: '4-12 weeks'
  },
  {
    id: '2',
    title: 'AI Integration & Development',
    description: 'Integrate cutting-edge AI capabilities into your applications using LangChain, OpenAI, and custom AI solutions.',
    features: [
      'LangChain integration',
      'OpenAI API implementation',
      'RAG system development',
      'Custom AI chatbots',
      'Semantic search solutions',
      'AI workflow automation'
    ],
    icon: 'ai',
    price: 'Custom quote',
    deliveryTime: '2-8 weeks'
  },
  {
    id: '3',
    title: 'E-Commerce Solutions',
    description: 'Build scalable e-commerce platforms with payment integration, inventory management, and multi-language support.',
    features: [
      'Shopify/WooCommerce integration',
      'Payment gateway setup (Stripe)',
      'Multi-language support',
      'Product management systems',
      'Order processing automation',
      'Analytics & reporting'
    ],
    icon: 'shopping',
    price: 'Custom quote',
    deliveryTime: '6-16 weeks'
  },
  {
    id: '4',
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture decisions, technology stack selection, and best practices implementation.',
    features: [
      'Architecture review & design',
      'Technology stack consultation',
      'Code quality assessment',
      'Performance audits',
      'Security best practices',
      'Team mentorship'
    ],
    icon: 'consulting',
    price: 'Hourly/Project-based',
    deliveryTime: 'Flexible'
  },
  {
    id: '5',
    title: 'Legacy System Migration',
    description: 'Modernize your legacy applications with migration to modern frameworks and cloud infrastructure.',
    features: [
      'Legacy code assessment',
      'Migration strategy planning',
      'Framework modernization',
      'Database migration',
      'Cloud migration (AWS)',
      'Zero-downtime deployment'
    ],
    icon: 'migration',
    price: 'Custom quote',
    deliveryTime: '8-20 weeks'
  },
  {
    id: '6',
    title: 'API Development & Integration',
    description: 'Design and implement robust APIs or integrate third-party services seamlessly into your applications.',
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'Third-party API integration',
      'API documentation',
      'Webhook development',
      'API security & authentication'
    ],
    icon: 'api',
    price: 'Custom quote',
    deliveryTime: '2-6 weeks'
  }
];
