'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectDetailModal } from './ProjectDetailModal';
import { projects } from './projectsData';
import type { Project } from './types';

const categories = ['All', 'AI/ML', 'Open Source', 'E-commerce', 'Enterprise'] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI/ML' | 'Open Source' | 'E-commerce' | 'Enterprise'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
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
                    <div className="flex flex-col gap-3 pt-4">
                      {project.caseStudy && (
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90"
                          onClick={() => openProjectModal(project)}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          View Case Study
                        </Button>
                      )}
                      <div className="flex gap-3">
                        {project.url && (
                          <Button
                            variant={project.caseStudy ? "outline" : "default"}
                            size="sm"
                            className={`flex-1 ${!project.caseStudy ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90' : ''}`}
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </section>
  );
}
