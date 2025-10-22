'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Hexagon } from './Hexagon';
import { technologies, categoryMetadata } from './techStackData';
import type { Technology, HexPosition } from './types';
import { Badge } from '@/components/ui/badge';

export function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  // Calculate hexagonal grid positions with center-out arrangement in hexagonal shape
  const hexagonPositions = useMemo(() => {
    const filteredTechs = selectedCategory
      ? technologies.filter((t) => t.category === selectedCategory)
      : technologies;

    // Sort by proficiency level (expert > advanced > intermediate > beginner)
    const proficiencyOrder = { expert: 0, advanced: 1, intermediate: 2, beginner: 3 };
    const sortedTechs = [...filteredTechs].sort((a, b) =>
      proficiencyOrder[a.proficiency] - proficiencyOrder[b.proficiency]
    );

    const positions: Array<HexPosition & { tech: Technology }> = [];
    const hexSize = 60;
    const hexWidth = hexSize * 2;
    const hexHeight = hexSize * Math.sqrt(3);
    const horizontalSpacing = hexWidth * 1.0; // Increased from 0.85 to 1.0 for more gap
    const verticalSpacing = hexHeight * 1.3; // Increased from 1.15 to 1.3 for more vertical gap

    // Generate hexagonal coordinates in a hexagonal boundary
    const hexCoords: Array<{ q: number; r: number; s: number; distance: number }> = [];

    // Determine radius needed to fit all technologies
    const radius = Math.ceil(Math.sqrt(sortedTechs.length / 3));

    // Axial coordinates (q, r) for hexagonal grid
    for (let q = -radius; q <= radius; q++) {
      for (let r = -radius; r <= radius; r++) {
        const s = -q - r;
        // Check if within hexagonal boundary
        if (Math.abs(q) <= radius && Math.abs(r) <= radius && Math.abs(s) <= radius) {
          const distance = Math.max(Math.abs(q), Math.abs(r), Math.abs(s));
          hexCoords.push({ q, r, s, distance });
        }
      }
    }

    // Sort by distance from center (center first, then outward)
    hexCoords.sort((a, b) => a.distance - b.distance);

    // Map sorted technologies to hexagonal positions
    sortedTechs.forEach((tech, index) => {
      if (index >= hexCoords.length) return;

      const { q, r } = hexCoords[index];

      // Convert axial coordinates to pixel coordinates
      const x = horizontalSpacing * (q + r / 2);
      const y = verticalSpacing * r * (3 / 4);

      positions.push({ x, y, row: r, col: q, tech });
    });

    return positions;
  }, [selectedCategory]);

  // Calculate SVG viewBox
  const viewBox = useMemo(() => {
    if (hexagonPositions.length === 0) return '0 0 800 600';

    const padding = 120;
    const xs = hexagonPositions.map((p) => p.x);
    const ys = hexagonPositions.map((p) => p.y);

    const minX = Math.min(...xs) - padding;
    const maxX = Math.max(...xs) + padding;
    const minY = Math.min(...ys) - padding;
    const maxY = Math.max(...ys) + padding;

    const width = maxX - minX;
    const height = maxY - minY;

    const result = `${minX} ${minY} ${width} ${height}`;
    console.log('ViewBox:', result);
    console.log('Min/Max X:', minX, maxX, 'Min/Max Y:', minY, maxY);

    return result;
  }, [hexagonPositions]);

  const categories = Object.keys(categoryMetadata);

  return (
    <section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Technology Honeycomb
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Explore my technical expertise through an interactive hexagonal visualization.
            Hexagon size represents proficiency level.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge
              variant={selectedCategory === null ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
              onClick={() => setSelectedCategory(null)}
            >
              All Technologies
            </Badge>
            {categories.map((category) => {
              const metadata = categoryMetadata[category as keyof typeof categoryMetadata];
              return (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
                  onClick={() =>
                    setSelectedCategory(selectedCategory === category ? null : category)
                  }
                >
                  {metadata.title}
                </Badge>
              );
            })}
          </div>
        </motion.div>

        {/* Hexagonal Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto overflow-visible"
        >
          <svg
            viewBox={viewBox}
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible', minHeight: '400px' }}
          >
            {hexagonPositions.map((pos, index) => (
              <Hexagon
                key={pos.tech.id}
                tech={pos.tech}
                x={pos.x}
                y={pos.y}
                size={60}
                index={index}
                isHovered={hoveredTechId === pos.tech.id}
                isDimmed={hoveredTechId !== null && hoveredTechId !== pos.tech.id}
                onHoverChange={(hovered) => setHoveredTechId(hovered ? pos.tech.id : null)}
              />
            ))}
          </svg>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-muted-foreground">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-muted-foreground">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-muted-foreground">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <span className="text-muted-foreground">Beginner</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: 'Technologies', value: technologies.length },
            {
              label: 'Expert Level',
              value: technologies.filter((t) => t.proficiency === 'expert').length,
            },
            {
              label: 'Categories',
              value: categories.length,
            },
            {
              label: 'Years Experience',
              value: '9+',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-muted/50"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
