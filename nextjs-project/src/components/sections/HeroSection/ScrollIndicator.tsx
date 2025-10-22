'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const handleClick = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      aria-label="Scroll to content"
    >
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-accent-cyan" />
      </motion.div>
    </motion.button>
  );
}
