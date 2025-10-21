"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const t = useTranslations("projects");

  const projects = [
    {
      title: "AI Powered Real Estate App",
      description:
        "AI-powered real estate platform for Costa Rica properties with advanced semantic search and multi-language support (13 languages).",
      image: "🏠",
      tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Google AI SDK", "pgvector"],
      url: "https://guanacastelotsforsale.com",
      featured: true,
    },
    {
      title: "Astro WordPress Starter",
      description:
        "Modern headless WordPress starter demonstrating best practices for performance-optimized content sites with TypeScript integration.",
      image: "🚀",
      tech: ["Astro 4.x", "TypeScript", "WordPress", "WPGraphQL", "Docker"],
      github: "https://github.com/ronnycoding/astro-wp",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full glass group hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image/Icon */}
                  <div className="relative h-64 bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center text-8xl overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.url && (
                        <Button variant="gradient" size="sm" asChild>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Site
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
