"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, Server, Brain, Github } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const highlights = [
    {
      icon: Clock,
      label: t("highlights.experience"),
      color: "from-cyan to-cyan/50",
    },
    {
      icon: Server,
      label: t("highlights.enterprise"),
      color: "from-purple to-purple/50",
    },
    {
      icon: Brain,
      label: t("highlights.ai"),
      color: "from-cyan to-purple",
    },
    {
      icon: Github,
      label: t("highlights.openSource"),
      color: "from-purple to-cyan",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Main Content - 2/3 width */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              {t("description")}
            </p>
          </motion.div>

          {/* Highlight Cards - 1/3 width */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-1 gap-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="glass p-6 border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${highlight.color}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-medium">
                        {highlight.label}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
