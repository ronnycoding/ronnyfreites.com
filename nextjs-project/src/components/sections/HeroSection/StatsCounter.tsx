'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsCounter({ value, suffix = '', label, delay = 0 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const increment = value / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}
