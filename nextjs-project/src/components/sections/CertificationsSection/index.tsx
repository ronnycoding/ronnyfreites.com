'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Sparkles, Code2, Cloud, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI/ML' | 'Development' | 'Cloud' | 'Database' | 'Other';
  certificateUrl?: string;
  icon: React.ElementType;
}

const certifications: Certification[] = [
  // AI & Machine Learning (2025)
  {
    id: 'langgraph-foundation',
    title: 'Foundation: Introduction to LangGraph',
    issuer: 'LangChain',
    date: 'Sep 2025',
    category: 'AI/ML',
    certificateUrl: 'https://academy.langchain.com/certificates/q3u1a3g7qa',
    icon: Sparkles
  },
  {
    id: 'claude-code',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Aug 2025',
    category: 'AI/ML',
    certificateUrl: 'https://verify.skilljar.com/c/gvuf39mhry56',
    icon: Sparkles
  },
  {
    id: 'mcp-intro',
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: 'Aug 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'ml-org',
    title: 'Building a Machine Learning Ready Organization',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'gen-ai-dev',
    title: 'Developing Generative Artificial Intelligence Solution',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'ml-solutions',
    title: 'Developing Machine Learning Solutions',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'prompt-eng',
    title: 'Essentials of Prompt Engineering',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'ai-use-cases',
    title: 'Exploring Artificial Intelligence Use Cases and Applications',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'ml-fundamentals',
    title: 'Fundamentals of Machine Learning and Artificial Intelligence',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'foundation-models',
    title: 'Optimizing Foundation Models',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'responsible-ai',
    title: 'Responsible Artificial Intelligence Practices',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },
  {
    id: 'ai-security',
    title: 'Security, Compliance, and Governance for AI Solutions',
    issuer: 'AWS',
    date: 'Jan 2025',
    category: 'AI/ML',
    icon: Sparkles
  },

  // Advanced Development (2024)
  {
    id: 'fullstack-ts-graphql',
    title: 'Fullstack TypeScript (feat. GraphQL & Node.js)',
    issuer: 'Frontend Masters',
    date: 'Oct 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'backend-arch',
    title: 'Introduction to Backend Architectures',
    issuer: 'Frontend Masters',
    date: 'Oct 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'practical-python',
    title: 'Practical Python',
    issuer: 'Frontend Masters',
    date: 'Oct 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'astro-dev',
    title: 'Astro for Fast Website Development',
    issuer: 'Frontend Masters',
    date: 'Sep 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'enterprise-ts',
    title: 'Enterprise TypeScript',
    issuer: 'Frontend Masters',
    date: 'Sep 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'ts-stick',
    title: 'Making TypeScript Stick',
    issuer: 'Frontend Masters',
    date: 'Sep 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'intermediate-ts',
    title: 'Intermediate TypeScript, v2',
    issuer: 'Frontend Masters',
    date: 'Jul 2024',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'ts-fundamentals',
    title: 'TypeScript 5+ Fundamentals, v4',
    issuer: 'Frontend Masters',
    date: 'Jul 2024',
    category: 'Development',
    icon: Code2
  },

  // Cloud & Infrastructure
  {
    id: 'aws-cloud-practitioner',
    title: 'Ultimate AWS Certified Cloud Practitioner',
    issuer: 'Udemy',
    date: 'Dec 2020',
    category: 'Cloud',
    icon: Cloud
  },
  {
    id: 'cloudformation',
    title: 'AWS CloudFormation - Infrastructure as Code',
    issuer: 'Udemy',
    date: 'Oct 2019',
    category: 'Cloud',
    icon: Cloud
  },
  {
    id: 'aws-lambda-intro',
    title: 'Introduction to AWS Lambda',
    issuer: 'AWS',
    date: 'Dec 2018',
    category: 'Cloud',
    icon: Cloud
  },
  {
    id: 'docker-containers',
    title: 'Developer - Beginner Linux Containers',
    issuer: 'Docker',
    date: 'May 2017',
    category: 'Cloud',
    icon: Cloud
  },

  // Additional Certifications
  {
    id: 'csharp-masterclass',
    title: 'C# Masterclass',
    issuer: 'Udemy',
    date: 'Dec 2020',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'pmp-master',
    title: 'Project Management: Master Project Management - PMP/PMI',
    issuer: 'Udemy',
    date: 'Dec 2020',
    category: 'Other',
    icon: GraduationCap
  },
  {
    id: 'django-learning',
    title: 'Learning Django',
    issuer: 'LinkedIn',
    date: 'Feb 2020',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'python-automation',
    title: 'Using Python for Automation',
    issuer: 'LinkedIn',
    date: 'Feb 2020',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'aspnet-core',
    title: 'ASP.NET Core Development',
    issuer: 'Microsoft',
    date: 'Apr 2017',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'magento-theming',
    title: 'Magento 2 Theming',
    issuer: 'Adobe Commerce',
    date: 'Jan 2017',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'angular2-dev',
    title: 'Angular 2 Developer with TypeScript',
    issuer: 'Udemy',
    date: 'Oct 2016',
    category: 'Development',
    icon: Code2
  },
  {
    id: 'wordpress-professional',
    title: 'WordPress Professional Course',
    issuer: 'Platzi',
    date: 'May 2016',
    category: 'Development',
    icon: Code2
  }
];

const categories = ['All', 'AI/ML', 'Development', 'Cloud', 'Database', 'Other'] as const;

export function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  const filteredCertifications = selectedCategory === 'All'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-purple-500 to-pink-600';
      case 'Development':
        return 'from-cyan-500 to-blue-600';
      case 'Cloud':
        return 'from-orange-500 to-red-600';
      case 'Database':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  const getCategoryStats = () => {
    const stats: Record<string, number> = {};
    certifications.forEach(cert => {
      stats[cert.category] = (stats[cert.category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <section id="certifications" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
            Learning Showcase
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            Continuous learning journey with {certifications.length}+ professional certifications
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Spanning AI/ML, modern development, cloud infrastructure, and enterprise technologies
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-gradient-to-r from-purple-500 to-cyan-600' : ''}
              >
                {category}
                {category !== 'All' && categoryStats[category] && (
                  <Badge variant="secondary" className="ml-2 bg-background/50">
                    {categoryStats[category]}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Total count */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 backdrop-blur-sm border border-muted/50">
            <Award className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium">
              Showing {filteredCertifications.length} {selectedCategory === 'All' ? 'certifications' : `${selectedCategory} certifications`}
            </span>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          {filteredCertifications.map((cert) => {
            const Icon = cert.icon;
            const gradient = getCategoryColor(cert.category);

            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="break-inside-avoid group"
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-muted/50 backdrop-blur-sm bg-background/80 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <CardHeader className="relative z-10 pb-3">
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base mb-1 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-600 transition-all duration-300">
                          {cert.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                      <Badge variant="outline" className="bg-background/50 text-xs">
                        {cert.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  {cert.certificateUrl && (
                    <CardContent className="relative z-10 pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs hover:bg-purple-500/10 hover:text-purple-400"
                        asChild
                      >
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1.5" />
                          View Certificate
                        </a>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No certifications found in this category.</p>
          </motion.div>
        )}

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            View complete certification list on LinkedIn
          </p>
          <Button
            variant="outline"
            className="hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-400"
            asChild
          >
            <a href="https://www.linkedin.com/in/ronnyfreites/details/certifications/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Certifications on LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
