export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  relationship: string;
  linkedin?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Engineering Manager',
    company: 'LoudCrowd',
    content: 'Ronny is an exceptional full-stack engineer who consistently delivers high-quality solutions. His expertise in GraphQL optimization and serverless architecture was instrumental in scaling our platform to handle millions of events daily. His ability to tackle complex technical challenges while mentoring junior developers makes him invaluable to any team.',
    rating: 5,
    relationship: 'Managed Ronny directly',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'OMNiLabs',
    content: 'Working with Ronny was a game-changer for our payment gateway project. He led a team of six developers and successfully architected a QR code-based payment solution that transformed our retail payment reception. His technical leadership and strategic decision-making were outstanding.',
    rating: 5,
    relationship: 'Ronny reported directly to Michael',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Product Manager',
    company: 'Gorilla Logic',
    content: 'Ronny\'s work on migrating our legacy .NET system to modern serverless architecture exceeded all expectations. His ability to mentor junior developers while delivering complex technical solutions on tight deadlines was remarkable. He brings both technical excellence and collaborative spirit to every project.',
    rating: 5,
    relationship: 'Worked with Ronny on the same team',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Senior Software Engineer',
    company: 'Critical Mass',
    content: 'Ronny is a brilliant developer with deep expertise in WordPress and PHP. His work on the Marriott Hotels international website demonstrated exceptional attention to accessibility and performance. He\'s not just a great coder – he\'s a problem solver who thinks strategically about user experience.',
    rating: 5,
    relationship: 'Worked with Ronny on the same team',
    linkedin: '#'
  },
  {
    id: '5',
    name: 'Laura Rodríguez',
    role: 'Senior Frontend Developer',
    company: 'LoudCrowd',
    content: 'Ronny\'s knowledge of modern React patterns and TypeScript is outstanding. He implemented fragment architecture in our GraphQL implementation that significantly improved our application performance. He\'s always willing to share knowledge and help teammates grow.',
    rating: 5,
    relationship: 'Worked with Ronny on the same team',
    linkedin: '#'
  },
  {
    id: '6',
    name: 'Carlos Jiménez',
    role: 'CEO',
    company: 'Costa Rica Tech Startup',
    content: 'Ronny built our AI-powered real estate platform from concept to production. His expertise in integrating Google AI SDK, implementing semantic search, and creating a 13-language platform was exceptional. He delivers production-ready solutions that scale.',
    rating: 5,
    relationship: 'Ronny consulted for Carlos',
    linkedin: '#'
  }
];
