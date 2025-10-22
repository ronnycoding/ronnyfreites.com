'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Palette, Workflow, Puzzle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExpertiseCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  technologies: string[];
  gradient: string;
  size: 'small' | 'medium' | 'large';
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    id: 'backend',
    title: 'Backend Technologies',
    icon: Code2,
    description: 'Server-side development with modern languages and frameworks',
    technologies: ['TypeScript', 'Python', 'JavaScript', 'Node.js', 'Flask', '.NET Core', 'Express.js', 'Django', 'PHP', 'C#', 'Go', 'Java'],
    gradient: 'from-cyan-500 to-blue-600',
    size: 'large'
  },
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    icon: Palette,
    description: 'Modern UI/UX development with cutting-edge frameworks',
    technologies: ['React', 'Next.js', 'Astro', 'Angular', 'React Native', 'Apollo Client', 'Remix', 'Material-UI', 'Tailwind CSS', 'Redux', 'Webpack', 'Vite'],
    gradient: 'from-purple-500 to-pink-600',
    size: 'large'
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    icon: Database,
    description: 'Relational, NoSQL, and cloud database solutions',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Prisma', 'Alembic', 'SQLAlchemy', 'DynamoDB'],
    gradient: 'from-green-500 to-emerald-600',
    size: 'medium'
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud infrastructure and containerization',
    technologies: ['AWS Lambda', 'AWS RDS', 'AWS S3', 'CloudFormation', 'Google Cloud', 'Docker', 'Vercel', 'Fly.io', 'Serverless Framework', 'Git', 'GitHub Actions'],
    gradient: 'from-orange-500 to-red-600',
    size: 'medium'
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Workflow,
    description: 'Artificial intelligence and ML integration',
    technologies: ['Google AI SDK', 'OpenAI APIs', 'LangChain', 'LangGraph', 'pgvector', 'Semantic Search', 'Prompt Engineering', 'Model Context Protocol'],
    gradient: 'from-indigo-500 to-purple-600',
    size: 'medium'
  },
  {
    id: 'integrations',
    title: 'Integration & APIs',
    icon: Puzzle,
    description: 'E-commerce, payment, and third-party integrations',
    technologies: ['Shopify', 'Stripe', 'GraphQL', 'REST APIs', 'WooCommerce', 'Instagram API', 'TikTok API', 'Klaviyo', 'Impact Radius', 'Microservices'],
    gradient: 'from-yellow-500 to-orange-600',
    size: 'medium'
  }
];

export function ExpertiseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="expertise" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack expertise across modern technologies, cloud platforms, and AI integration
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {expertiseCategories.map((category) => {
            const Icon = category.icon;
            const gridSpan = category.size === 'large'
              ? 'lg:col-span-2'
              : category.size === 'medium'
              ? 'lg:col-span-2 md:col-span-1'
              : 'lg:col-span-1';

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className={`${gridSpan} group`}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-muted/50 backdrop-blur-sm bg-background/80 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-muted/50">
                        {category.technologies.length} techs
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-background/50 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 rounded-2xl bg-muted/30 backdrop-blur-sm border border-muted/50">
            <span className="text-sm font-medium text-muted-foreground">Architecture Patterns:</span>
            <div className="flex flex-wrap gap-2">
              {['Serverless', 'Microservices', 'GraphQL', 'REST APIs', 'Event-driven'].map((pattern) => (
                <Badge
                  key={pattern}
                  variant="secondary"
                  className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                >
                  {pattern}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
