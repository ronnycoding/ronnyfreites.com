'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { services, type Service } from './servicesData';
import { Code2, Brain, ShoppingCart, MessageSquare, RefreshCw, Plug, Check } from 'lucide-react';

export function ServicesSection() {
  const t = useTranslations('services');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="h-8 w-8" />;
      case 'ai':
        return <Brain className="h-8 w-8" />;
      case 'shopping':
        return <ShoppingCart className="h-8 w-8" />;
      case 'consulting':
        return <MessageSquare className="h-8 w-8" />;
      case 'migration':
        return <RefreshCw className="h-8 w-8" />;
      case 'api':
        return <Plug className="h-8 w-8" />;
      default:
        return <Code2 className="h-8 w-8" />;
    }
  };

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

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent-cyan/5">
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} getIcon={getIcon} variants={itemVariants} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-6 text-muted-foreground">
            Ready to start your project?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent-cyan to-accent-purple hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
            asChild
          >
            <a href="#contact">
              {t('cta')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  getIcon: (iconName: string) => React.ReactElement;
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

function ServiceCard({ service, getIcon, variants }: ServiceCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full hover:shadow-xl hover:shadow-accent-cyan/20 transition-all duration-300 border-accent-cyan/20 hover:border-accent-cyan/50 flex flex-col">
        <CardHeader>
          {/* Icon */}
          <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 text-accent-cyan w-fit">
            {getIcon(service.icon)}
          </div>

          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col">
          {/* Features */}
          <div className="mb-6 flex-grow">
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Timeline */}
          <div className="pt-4 border-t space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Starting at</span>
              <Badge className="bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30">
                {service.price}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Delivery</span>
              <span className="text-sm font-medium">{service.deliveryTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
