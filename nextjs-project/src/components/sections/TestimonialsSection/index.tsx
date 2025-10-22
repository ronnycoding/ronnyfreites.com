'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { testimonials, type Testimonial } from './testimonialsData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set initial load to false after mount
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isInitialLoad) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex, isInitialLoad]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-accent-purple/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial={isInitialLoad ? "center" : "enter"}
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrevious();
                  }
                }}
                className="w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full hover:border-accent-cyan hover:text-accent-cyan transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent-cyan w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:border-accent-cyan hover:text-accent-cyan transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-accent-cyan/20 bg-background/50 backdrop-blur-sm">
      <CardContent className="p-8 md:p-12">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <Quote className="h-12 w-12 text-accent-cyan/30" />
        </div>

        {/* Content */}
        <blockquote className="text-lg md:text-xl text-center text-foreground/90 mb-8 leading-relaxed">
          &quot;{testimonial.content}&quot;
        </blockquote>

        {/* Rating */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent-cyan text-accent-cyan" />
          ))}
        </div>

        {/* Author Info */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold text-xl">
              {testimonial.name.charAt(0)}
            </div>

            <div>
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-muted-foreground">{testimonial.role}</p>
              <p className="text-sm text-accent-cyan">{testimonial.company}</p>
              <p className="text-xs text-muted-foreground mt-1">{testimonial.relationship}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
