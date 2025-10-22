'use client';

import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Lightbulb, TrendingUp, Target } from 'lucide-react';
import type { Project } from './types';

interface ProjectDetailModalProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailModal({ project, open, onOpenChange }: ProjectDetailModalProps) {
  const Icon = project.icon;

  if (!project.caseStudy) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background backdrop-blur-sm">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base mt-1">
                {project.role} · {project.category}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-foreground/80 leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Challenge Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="border-cyan-500/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5 text-cyan-400" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{project.caseStudy.challenge}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="border-purple-500/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="w-5 h-5 text-purple-400" />
                  The Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{project.caseStudy.solution}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="border-green-500/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex gap-2 text-foreground/80">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Metrics Section */}
          {project.caseStudy.metrics && project.caseStudy.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.caseStudy.metrics.map((metric, idx) => (
                  <Card key={idx} className="text-center bg-card">
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium mt-1">{metric.label}</div>
                      {metric.description && (
                        <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Architecture Section */}
          {project.caseStudy.architecture && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">System Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{project.caseStudy.architecture.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Components:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.caseStudy.architecture.components.map((component, idx) => (
                        <Badge key={idx} variant="outline" className="justify-start">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}


          {/* Lessons Learned Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Lessons Learned</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.caseStudy.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex gap-2 text-foreground/80">
                      <span className="text-purple-500 mt-1">▸</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-muted/50 hover:bg-cyan-500/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="flex gap-3 pt-4"
          >
            {project.url && (
              <Button
                variant="default"
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
                className="flex-1"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
