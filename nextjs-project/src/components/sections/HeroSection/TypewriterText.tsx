'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypewriterText({ text, className = '', speed = 50 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed]);

  return (
    <div className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-accent-cyan ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}
