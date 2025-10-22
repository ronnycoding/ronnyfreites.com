'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Globe, Search, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
  url: string;
  githubUrl?: string;
  category: 'AI/ML' | 'Open Source' | 'E-commerce' | 'Enterprise';
  featured: boolean;
  icon: React.ElementType;
}

const projects: Project[] = [
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
    icon: Sparkles
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
    icon: Globe
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
    icon: Search
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

const categories = ['All', 'AI/ML', 'Open Source', 'E-commerce', 'Enterprise'] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI/ML' | 'Open Source' | 'E-commerce' | 'Enterprise'>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions across AI/ML, e-commerce, and enterprise platforms
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-muted/50 backdrop-blur-sm bg-background/80 relative overflow-hidden">
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {project.role}
                        </CardDescription>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Category badge */}
                    <Badge variant="outline" className="mb-4 bg-background/50">
                      {project.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-cyan-400">Technical Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-purple-500 mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-purple-400">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-muted/50 hover:bg-cyan-500/20 transition-colors text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.url && (
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90"
                          asChild
                        >
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Project
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
