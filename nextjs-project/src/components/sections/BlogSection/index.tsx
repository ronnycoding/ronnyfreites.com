'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts, blogCategories, type BlogPost } from './blogData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogSection() {
  const t = useTranslations('blog');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-accent-purple/5">
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

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white'
                  : 'hover:border-accent-cyan'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} variants={itemVariants} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="group hover:border-accent-cyan hover:text-accent-cyan transition-all"
          >
            {t('viewAll')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: BlogPost;
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

function BlogCard({ post, variants }: BlogCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full group hover:shadow-xl hover:shadow-accent-cyan/20 transition-all duration-300 border-accent-cyan/20 hover:border-accent-cyan/50 overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 group-hover:scale-110 transition-transform duration-500" />
          <Badge className="absolute top-4 left-4 bg-accent-cyan/90 text-white">
            {post.category}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-accent-cyan transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Read More Link */}
          <Button
            variant="ghost"
            className="w-full group/btn hover:text-accent-cyan"
            asChild
          >
            <a href={post.url}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
