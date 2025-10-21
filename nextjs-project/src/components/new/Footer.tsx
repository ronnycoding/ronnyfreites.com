"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { key: "about", href: "#about" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "certifications", href: "#certifications" },
    { key: "contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/ronnyfreites/" },
    { icon: Github, url: "https://github.com/ronnycoding" },
    { icon: Twitter, url: "https://x.com/ronnyfreites" },
    { icon: Mail, url: "mailto:ronnyangelo.freites@gmail.com" },
  ];

  return (
    <footer className="relative border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold gradient-text mb-4">RF</div>
            <p className="text-sm text-muted-foreground mb-4">
              Senior Software Engineer specializing in AI-powered solutions and
              enterprise full-stack development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {navT(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t("resources")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/ronnyfreites/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ronnycoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Placeholder */}
          <div>
            <h3 className="font-semibold mb-4">{t("newsletter.title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("newsletter.description")}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 px-3 py-2 text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <Button size="sm" disabled>
                {t("newsletter.subscribe")}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Coming soon</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t("builtWith")}
            <span className="text-primary">Next.js</span>+
            <span className="text-primary">TypeScript</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            variant="gradient"
            size="icon"
            className="rounded-full shadow-lg"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </footer>
  );
}
