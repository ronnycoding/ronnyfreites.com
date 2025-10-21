"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, ChevronDown } from "lucide-react";

export default function ExperienceTimeline() {
  const t = useTranslations("experience");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Self Employed (Freelance)",
      role: "AI Software Engineer Consultant",
      duration: "Aug 2025 - Present",
      location: "San José, Costa Rica - Remote",
      isCurrent: true,
      achievements: [
        "Delivering AI-powered software solutions and consulting services",
        "Specializing in artificial intelligence integration and software design",
        "Building intelligent systems leveraging cutting-edge AI technologies",
      ],
      techStack: ["AI", "LangChain", "Model Context Protocol", "Product Development"],
    },
    {
      company: "LoudCrowd",
      role: "Senior Software Engineer",
      duration: "Apr 2022 - Jul 2025",
      location: "Remote",
      achievements: [
        "Architected enterprise serverless platform processing millions of e-commerce events daily",
        "Spearheaded Impact Affiliate Network Integration with sophisticated error handling",
        "Developed Creator/Ambassador Platform with real-time analytics",
        "Implemented advanced GraphQL optimization strategies",
      ],
      techStack: ["Python Flask", "React", "TypeScript", "Apollo GraphQL", "PostgreSQL", "AWS Lambda"],
    },
    {
      company: "Gorilla Logic",
      role: "Senior Software Engineering Consultant",
      duration: "Sep 2021 - Apr 2022",
      location: "Costa Rica",
      achievements: [
        "Led transformation of legacy .NET system to modern serverless architecture",
        "Implemented React application with Hooks, Context API, and Redux",
        "Integrated Payoneer for fund withdrawals and payment processing",
        "Established comprehensive unit testing framework",
      ],
      techStack: ["ReactJS", "AWS Lambda", ".NET Core", "Redux", "Jest"],
    },
    {
      company: "OMNiLabs",
      role: "Technical Lead",
      duration: "Nov 2018 - Sep 2021",
      location: "Costa Rica - Remote",
      achievements: [
        "Led team of six full-stack developers",
        "Designed and implemented complete payment gateway system",
        "Successfully implemented QR code-based payment solution for retail",
        "Optimized performance using AWS Lambda and Serverless infrastructure",
      ],
      techStack: ["TypeScript", "Node.js", "React Native", "AWS Lambda", "Serverless"],
    },
    {
      company: "Critical Mass",
      role: "Senior Full Stack Developer",
      duration: "Nov 2016 - Nov 2018",
      location: "Costa Rica - On-site",
      achievements: [
        "Led development of international Marriott Hotels website",
        "Designed advanced filtering systems for business locations",
        "Implemented accessibility techniques and screen reader integration",
        "Mentored team members on complex technical challenges",
      ],
      techStack: ["WordPress", "PHP", "jQuery", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-32 relative bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t("title")}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan via-purple to-cyan opacity-30" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan to-purple"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="relative"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan to-purple shadow-lg" />
                      {exp.isCurrent && (
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-purple opacity-30"
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="glass hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          {exp.isCurrent && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan to-purple text-white mb-2">
                              {t("current")}
                            </span>
                          )}
                          <h3 className="text-xl font-bold gradient-text mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-medium text-foreground/80">
                            {exp.company}
                          </p>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Achievements - Collapsible */}
                        <div className="mb-4">
                          <button
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                            {isExpanded ? "Hide" : "Show"} Details
                          </button>

                          {isExpanded && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-2 text-sm text-foreground/80"
                            >
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
