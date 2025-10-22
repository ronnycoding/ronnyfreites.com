'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Rocket, Users, Award, Zap, Globe } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');

  const highlights = [
    {
      icon: Code,
      title: t('highlights.experience.title'),
      description: t('highlights.experience.description'),
      color: 'text-accent-cyan',
    },
    {
      icon: Rocket,
      title: t('highlights.innovation.title'),
      description: t('highlights.innovation.description'),
      color: 'text-accent-purple',
    },
    {
      icon: Users,
      title: t('highlights.leadership.title'),
      description: t('highlights.leadership.description'),
      color: 'text-accent-cyan',
    },
    {
      icon: Award,
      title: t('highlights.certifications.title'),
      description: t('highlights.certifications.description'),
      color: 'text-accent-purple',
    },
    {
      icon: Zap,
      title: t('highlights.performance.title'),
      description: t('highlights.performance.description'),
      color: 'text-accent-cyan',
    },
    {
      icon: Globe,
      title: t('highlights.community.title'),
      description: t('highlights.community.description'),
      color: 'text-accent-purple',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mb-6" />
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('summary')}
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 flex items-center justify-center mb-4`}>
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
