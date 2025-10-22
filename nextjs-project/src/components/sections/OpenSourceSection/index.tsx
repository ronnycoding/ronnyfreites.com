'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { githubStats, featuredProjects, communityInvolvement } from './openSourceData';
import { Github, Star, GitFork, Code2, Users, Presentation, GraduationCap, ExternalLink } from 'lucide-react';

export function OpenSourceSection() {
  const t = useTranslations('opensource');

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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'community':
        return <Users className="h-8 w-8" />;
      case 'code':
        return <Code2 className="h-8 w-8" />;
      case 'presentation':
        return <Presentation className="h-8 w-8" />;
      case 'teaching':
        return <GraduationCap className="h-8 w-8" />;
      default:
        return <Code2 className="h-8 w-8" />;
    }
  };

  return (
    <section id="opensource" className="py-20 bg-gradient-to-b from-background to-accent-cyan/5">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <StatCard
            icon={<Github className="h-6 w-6" />}
            value={githubStats.totalRepos.toString()}
            label="Repositories"
          />
          <StatCard
            icon={<Star className="h-6 w-6" />}
            value={githubStats.totalStars.toString()}
            label="Stars"
          />
          <StatCard
            icon={<GitFork className="h-6 w-6" />}
            value={githubStats.totalForks.toString()}
            label="Forks"
          />
          <StatCard
            icon={<Code2 className="h-6 w-6" />}
            value={`${githubStats.totalContributions}+`}
            label="Contributions"
          />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl hover:shadow-accent-cyan/20 transition-all duration-300 border-accent-cyan/20 hover:border-accent-cyan/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Github className="h-5 w-5 text-accent-cyan" />
                        {project.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-accent-cyan" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4 text-accent-cyan" />
                        <span>{project.forks}</span>
                      </div>
                      <Badge variant="secondary">{project.language}</Badge>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs border-accent-cyan/30">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* View Button */}
                    <Button
                      variant="ghost"
                      className="w-full group/btn hover:text-accent-cyan"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Involvement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Community Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityInvolvement.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="h-full border-accent-purple/20 hover:border-accent-purple/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-accent-purple">
                      {getIcon(item.icon)}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <Badge className="bg-accent-purple/20 text-accent-purple hover:bg-accent-purple/30">
                      {item.impact}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-accent-cyan to-accent-purple hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
            asChild
          >
            <a href="https://github.com/ronnycoding" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {t('viewGitHub')}
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="border-accent-cyan/20 hover:border-accent-cyan/50 transition-all">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-2 text-accent-cyan">
          {icon}
        </div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}
