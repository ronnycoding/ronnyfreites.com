"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

export default function CertificationsSection() {
  const t = useTranslations("certifications");

  const certifications = [
    {
      name: "Foundation: Introduction to LangGraph",
      issuer: "LangChain",
      date: "Sep 2025",
      logo: "🦜",
      url: "https://academy.langchain.com/certificates/q3u1a3g7qa",
      featured: true,
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      date: "Aug 2025",
      logo: "🤖",
      url: "https://verify.skilljar.com/c/gvuf39mhry56",
      featured: true,
    },
    {
      name: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      date: "Aug 2025",
      logo: "🤖",
      featured: true,
    },
    {
      name: "Fullstack TypeScript (feat. GraphQL & Node.js)",
      issuer: "Frontend Masters",
      date: "Oct 2024",
      logo: "⚡",
      featured: true,
    },
    {
      name: "AWS Machine Learning Certifications",
      issuer: "AWS",
      date: "Jan 2025",
      logo: "☁️",
      count: 9,
      featured: true,
    },
    {
      name: "TypeScript Advanced Courses",
      issuer: "Frontend Masters",
      date: "2024",
      logo: "📘",
      count: 4,
      featured: true,
    },
  ];

  return (
    <section id="certifications" className="py-32 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("total")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{cert.logo}</div>
                    <div className="flex-1">
                      {cert.featured && (
                        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan to-purple text-white mb-2">
                          {t("featured")}
                        </span>
                      )}
                      <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                      {cert.count && (
                        <p className="text-sm text-muted-foreground">
                          {cert.count} courses
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>

                  {cert.url && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        {t("verify")}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/ronnyfreites/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Award className="h-5 w-5 mr-2" />
              {t("viewAll")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
