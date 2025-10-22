'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';
import StatsCounter from './StatsCounter';
import ScrollIndicator from './ScrollIndicator';

export default function HeroSection() {
  const t = useTranslations('hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-accent-purple/10 to-transparent"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content - 60% on desktop */}
          <div className="lg:col-span-3 space-y-8">
            {/* Location Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-foreground">{t('location')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 backdrop-blur-sm rounded-full border border-accent-cyan/30">
                <motion.div
                  className="w-2 h-2 bg-accent-cyan rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-foreground">{t('availability')}</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {t('name')}
              </span>
            </motion.h1>

            {/* Typewriter Tagline */}
            <motion.div variants={itemVariants}>
              <TypewriterText
                text={t('tagline')}
                className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
                speed={50}
              />
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 py-8"
            >
              <StatsCounter value={9} suffix="+" label={t('stats.experience')} delay={0.5} />
              <StatsCounter value={1110} suffix="+" label={t('stats.followers')} delay={0.7} />
              <StatsCounter value={54} label={t('stats.certifications')} delay={0.9} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={handleViewProjects}
                className="bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90 transition-opacity text-white font-medium px-8"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {t('cta.projects')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleGetInTouch}
                className="border-accent-cyan/50 hover:border-accent-cyan hover:bg-accent-cyan/10 font-medium px-8"
              >
                {t('cta.consultation')}
              </Button>
            </motion.div>
          </div>

          {/* Profile Image - 40% on desktop */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan blur-xl opacity-50"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  padding: '4px',
                }}
              />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20" />
                <Image
                  src="/placeholder-profile.jpg"
                  alt={t('name')}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-cyan opacity-20" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur-2xl opacity-40"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full blur-2xl opacity-30"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
