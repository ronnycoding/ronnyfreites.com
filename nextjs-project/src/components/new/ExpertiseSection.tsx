"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Cloud,
  ShoppingCart,
  Workflow,
  Database,
} from "lucide-react";

export default function ExpertiseSection() {
  const t = useTranslations("expertise");

  const categories = [
    {
      key: "fullStack",
      icon: Code2,
      tags: ["React", "TypeScript", "Node.js", "Python"],
      gridClass: "md:col-span-2",
    },
    {
      key: "ai",
      icon: Brain,
      tags: ["LangChain", "Claude", "AWS AI"],
      gridClass: "md:col-span-1",
    },
    {
      key: "cloud",
      icon: Cloud,
      tags: ["AWS Lambda", "Serverless", "CDK"],
      gridClass: "md:col-span-1",
    },
    {
      key: "ecommerce",
      icon: ShoppingCart,
      tags: ["Payment Gateways", "Shopify", "High Volume"],
      gridClass: "md:col-span-2",
    },
    {
      key: "devops",
      icon: Workflow,
      tags: ["Docker", "CI/CD", "AWS"],
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      key: "graphql",
      icon: Database,
      tags: ["Apollo", "Performance", "Optimization"],
      gridClass: "md:col-span-2",
    },
  ];

  return (
    <section className="py-32 relative">
      {/* Dot Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t("title")}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={category.gridClass}
              >
                <Card
                  className="h-full glass group hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Icon with 3D Effect on Hover */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="mb-6"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-purple p-3 shadow-lg">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 gradient-text">
                      {t(`categories.${category.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {t(`categories.${category.key}.description`)}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
