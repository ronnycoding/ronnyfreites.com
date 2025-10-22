'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Achievement {
  title: string;
  description: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: Achievement[];
  techStack: string[];
}

const experiences: Experience[] = [
  {
    id: 'ai-consultant',
    role: 'AI Software Engineer Consultant',
    company: 'Self Employed (Freelance)',
    period: 'Aug 2025 - Present',
    location: 'San José, Costa Rica - Remote',
    description: 'Delivering AI-powered software solutions and consulting services, specializing in artificial intelligence integration, software design, and innovative product development.',
    achievements: [
      {
        title: 'AI Integration Leadership',
        description: 'Leading development of intelligent systems leveraging cutting-edge AI technologies including LangChain, Google AI SDK, and Model Context Protocol'
      },
      {
        title: 'Product Innovation',
        description: 'Building AI-powered solutions that solve complex business problems with focus on scalability and user experience'
      }
    ],
    techStack: ['Artificial Intelligence', 'LangChain', 'Model Context Protocol', 'Software Design', 'Product Development']
  },
  {
    id: 'loudcrowd',
    role: 'Senior Software Engineer',
    company: 'LoudCrowd',
    period: 'Apr 2022 - Jul 2025 (3 years 4 months)',
    location: 'Remote',
    description: 'Architected and maintained a mission-critical enterprise serverless platform processing millions of e-commerce events and transactions daily.',
    achievements: [
      {
        title: 'Impact Affiliate Network Integration',
        description: 'Spearheaded development of robust web event processing pipelines handling 45+ days of historical data with sophisticated error handling and automated retry mechanisms'
      },
      {
        title: 'Creator/Ambassador Platform',
        description: 'Architected comprehensive influencer marketing platform with dynamic tracking link generation, real-time analytics dashboards, and commission calculation engines'
      },
      {
        title: 'Performance Optimization',
        description: 'Implemented advanced database query strategies and intelligent product sorting algorithms, directly contributing to improved system reliability and increased revenue generation'
      },
      {
        title: 'Technical Innovation',
        description: 'Developed expandable widget system with multiple positioning options, enabling seamless product link integration across various platforms'
      }
    ],
    techStack: ['Python Flask', 'AWS Lambda', 'React', 'TypeScript', 'Apollo GraphQL', 'PostgreSQL', 'AWS RDS', 'AWS CDK', 'Serverless Framework']
  },
  {
    id: 'gorilla-logic',
    role: 'Senior Software Engineering Consultant',
    company: 'Gorilla Logic',
    period: 'Sep 2021 - Apr 2022 (8 months)',
    location: 'Costa Rica',
    description: 'Led transformation of legacy .NET system into modern serverless architecture for Submittable\'s Grant Management system.',
    achievements: [
      {
        title: 'Legacy System Migration',
        description: 'Successfully migrated existing .NET Core system to React with AWS Lambda serverless functions'
      },
      {
        title: 'Technical Leadership',
        description: 'Provided strategic planning and execution guidance, mentoring junior developers on project expectations and scalable architecture best practices'
      },
      {
        title: 'Modern Frontend Development',
        description: 'Implemented React application using Hooks, Context API, and Redux for effective state management'
      },
      {
        title: 'Payment Integration',
        description: 'Implemented Payoneer integration for fund withdrawals and payment processing'
      }
    ],
    techStack: ['ReactJS', 'AWS Lambda', '.NET Core', 'Redux', 'Jest', 'React Testing Library']
  },
  {
    id: 'omnilabs',
    role: 'Technical Lead',
    company: 'OMNiLabs',
    period: 'Nov 2018 - Sep 2021 (2 years 11 months)',
    location: 'Costa Rica - Remote',
    description: 'Led team of six full-stack developers in developing comprehensive payment gateway project with QR code-based retail payment solutions.',
    achievements: [
      {
        title: 'Team Leadership',
        description: 'Managed and mentored team of six developers through complex technical challenges'
      },
      {
        title: 'Payment Gateway Architecture',
        description: 'Designed and implemented complete payment system with external payment integrations and mobile application support'
      },
      {
        title: 'QR Code Innovation',
        description: 'Successfully implemented QR code-based payment solution specifically tailored for retail-level payment reception'
      },
      {
        title: 'AWS Infrastructure',
        description: 'Optimized performance using AWS Lambda functions and Serverless.com infrastructure management'
      }
    ],
    techStack: ['TypeScript', 'Node.js', 'React Native', 'AWS Lambda', 'Serverless Framework']
  },
  {
    id: 'critical-mass',
    role: 'Senior Full Stack Developer',
    company: 'Critical Mass',
    period: 'Nov 2016 - Nov 2018 (2 years 1 month)',
    location: 'Costa Rica - On-site',
    description: 'Led development of international Marriott Hotels website, focusing on accessibility, performance, and user experience for Fortune 500 client.',
    achievements: [
      {
        title: 'Enterprise WordPress Development',
        description: 'Led development of international Marriott site with custom plugin for business locations showcase'
      },
      {
        title: 'Advanced Filtering Systems',
        description: 'Designed comprehensive plugin with region and brand filters for managing substantial information volumes'
      },
      {
        title: 'Accessibility Excellence',
        description: 'Implemented advanced accessibility techniques and screen reader integration for inclusive user experience'
      },
      {
        title: 'Technical Mentorship',
        description: 'Mentored team members and contributed to solving complex challenges with innovative solutions'
      }
    ],
    techStack: ['WordPress', 'PHP', 'jQuery', 'MySQL', 'Custom Plugin Development']
  }
];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            9+ years of experience building enterprise-scale solutions, leading teams, and driving innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-[7px] rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 ring-4 ring-background z-10" />

                {/* Experience card */}
                <Card className="group hover:shadow-2xl transition-all duration-300 border-muted/50 backdrop-blur-sm bg-background/80">
                  <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(exp.id)}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="space-y-2">
                          <div className="flex items-center gap-2 text-base">
                            <Building2 className="w-4 h-4 text-cyan-500" />
                            <span className="font-semibold text-foreground">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-500" />
                            <span>{exp.location}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(exp.id);
                        }}
                      >
                        {expandedId === exp.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                    <p className="text-foreground/80 mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardHeader>

                  {/* Expandable content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === exp.id ? 'auto' : 0,
                      opacity: expandedId === exp.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0 space-y-6">
                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-cyan-400">Key Achievements</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement.title} className="flex gap-3">
                              <span className="text-purple-500 mt-1.5 shrink-0">▸</span>
                              <div>
                                <span className="font-medium text-foreground">{achievement.title}:</span>
                                <span className="text-muted-foreground"> {achievement.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-purple-400">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-muted/50 hover:bg-cyan-500/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
