'use client';

import { motion } from 'framer-motion';
import type { Technology } from './types';

interface HexagonProps {
  tech: Technology;
  x: number;
  y: number;
  size: number;
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHoverChange: (hovered: boolean) => void;
}

const proficiencySizes = {
  expert: 1.0,
  advanced: 0.85,
  intermediate: 0.7,
  beginner: 0.6,
};

export function Hexagon({ tech, x, y, size, index, isHovered, isDimmed, onHoverChange }: HexagonProps) {

  const sizeMultiplier = proficiencySizes[tech.proficiency];
  const actualSize = size * sizeMultiplier;

  // Create hexagon path
  const createHexagonPath = (size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const px = size * Math.cos(angle);
      const py = size * Math.sin(angle);
      points.push(`${px},${py}`);
    }
    return `M ${points.join(' L ')} Z`;
  };

  const hexPath = createHexagonPath(actualSize);

  return (
    <g transform={`translate(${x}, ${y})`}>
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isDimmed ? 0.5 : 1,
          scale: isDimmed ? 0.98 : 1,
        }}
        transition={{
          duration: 0.3,
          delay: isDimmed ? 0 : index * 0.02,
          type: isDimmed ? 'tween' : 'spring',
          stiffness: 100,
        }}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        className="cursor-pointer"
      >
        {/* Glow effect on hover */}
        {isHovered && (
          <motion.path
            d={hexPath}
            className={`fill-none`}
            strokeWidth={3}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.6, 0], scale: [1, 1.2, 1.3] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              filter: 'blur(4px)',
              stroke: tech.category === 'backend' ? '#06b6d4' : '#a855f7',
            }}
          />
        )}

        {/* Main hexagon */}
        <motion.path
          d={hexPath}
          className={`transition-all duration-300`}
          strokeWidth={isHovered ? 3 : 2}
          initial={false}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          style={{
            fill: `hsl(var(--background))`,
            stroke: isHovered
              ? (tech.category === 'backend' ? '#06b6d4' : '#a855f7')
              : 'hsl(var(--muted))',
            opacity: isHovered ? 1 : 0.8,
          }}
        />

        {/* Gradient overlay */}
        <motion.path
          d={hexPath}
          className={`bg-gradient-to-br ${tech.gradient} fill-current`}
          initial={false}
          animate={{
            opacity: isHovered ? 0.15 : 0.05,
          }}
          style={{
            mixBlendMode: 'overlay',
          }}
        />

        {/* Technology name */}
        {(() => {
          const words = tech.name.split(' ');
          const shouldWrap = tech.name.length > 12 && words.length > 1;

          if (shouldWrap) {
            // Multi-line text for longer names
            return (
              <motion.g
                initial={false}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  opacity: isHovered ? 1 : 0.9,
                }}
              >
                <text
                  textAnchor="middle"
                  y="-4"
                  className="fill-current text-[9px] md:text-[10px] font-medium pointer-events-none select-none"
                  style={{
                    fill: isHovered
                      ? (tech.category === 'backend' ? '#06b6d4' : '#a855f7')
                      : 'hsl(var(--foreground))',
                  }}
                >
                  {words[0]}
                </text>
                <text
                  textAnchor="middle"
                  y="6"
                  className="fill-current text-[9px] md:text-[10px] font-medium pointer-events-none select-none"
                  style={{
                    fill: isHovered
                      ? (tech.category === 'backend' ? '#06b6d4' : '#a855f7')
                      : 'hsl(var(--foreground))',
                  }}
                >
                  {words.slice(1).join(' ')}
                </text>
              </motion.g>
            );
          }

          // Single line text
          return (
            <motion.text
              textAnchor="middle"
              dy="0.3em"
              className="fill-current text-[10px] md:text-xs font-medium pointer-events-none select-none"
              initial={false}
              animate={{
                scale: isHovered ? 1.05 : 1,
                opacity: isHovered ? 1 : 0.9,
              }}
              style={{
                fill: isHovered
                  ? (tech.category === 'backend' ? '#06b6d4' : '#a855f7')
                  : 'hsl(var(--foreground))',
              }}
            >
              {tech.name}
            </motion.text>
          );
        })()}

        {/* Proficiency indicator - small dot */}
        <motion.circle
          cx={0}
          cy={actualSize * -0.6}
          r={3}
          className="fill-current"
          initial={false}
          animate={{
            scale: isHovered ? 1.3 : 1,
            opacity: isHovered ? 1 : 0.7,
          }}
          style={{
            fill:
              tech.proficiency === 'expert'
                ? '#10b981' // green
                : tech.proficiency === 'advanced'
                ? '#3b82f6' // blue
                : tech.proficiency === 'intermediate'
                ? '#f59e0b' // amber
                : '#6b7280', // gray
          }}
        />

        {/* Tooltip on hover */}
        {isHovered && (
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <rect
              x={-actualSize * 1.2}
              y={-actualSize * 1.8}
              width={actualSize * 2.4}
              height={32}
              rx={8}
              className="fill-current"
              style={{
                fill: 'hsl(var(--popover))',
                stroke: 'hsl(var(--border))',
                strokeWidth: 1,
              }}
            />
            <text
              textAnchor="middle"
              y={-actualSize * 1.8 + 12}
              className="fill-current text-[9px] font-medium"
              style={{ fill: 'hsl(var(--popover-foreground))' }}
            >
              {tech.proficiency.charAt(0).toUpperCase() + tech.proficiency.slice(1)}
            </text>
            <text
              textAnchor="middle"
              y={-actualSize * 1.8 + 24}
              className="fill-current text-[8px]"
              style={{ fill: 'hsl(var(--muted-foreground))' }}
            >
              {tech.yearsOfExperience} year{tech.yearsOfExperience !== 1 ? 's' : ''}
            </text>
          </motion.g>
        )}
      </motion.g>
    </g>
  );
}
