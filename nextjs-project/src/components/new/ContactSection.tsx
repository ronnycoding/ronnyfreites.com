"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ronnyangelo.freites@gmail.com",
      handle: "ronnyangelo.freites@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ronnyfreites/",
      handle: "ronnyfreites",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ronnycoding",
      handle: "ronnycoding",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/ronnyfreites",
      handle: "@ronnyfreites",
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <Card className="glass border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-semibold">{t("info.availableFor")}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("info.responseTime")}
                </p>
              </CardContent>
            </Card>

            {/* Location & Timezone */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="h-5 w-5 text-primary" />
                <span>San José, Costa Rica</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Clock className="h-5 w-5 text-primary" />
                <span>GMT-6 (Central Standard Time)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg glass hover:border-primary/50 transition-all group"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{link.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {link.handle}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Schedule Call CTA */}
            <div className="p-6 rounded-lg glass border-primary/30">
              <p className="text-sm text-muted-foreground mb-4">
                {t("info.preferCall")}
              </p>
              <Button variant="gradient" size="lg" className="w-full">
                {t("info.scheduleCall")}
              </Button>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <p className="text-center text-muted-foreground py-12">
                  Contact form integration coming soon.
                  <br />
                  For now, please reach out via email or social media.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
