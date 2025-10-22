'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: t('links.about') },
    { href: '#experience', label: t('links.experience') },
    { href: '#projects', label: t('links.projects') },
    { href: '#contact', label: t('links.contact') },
  ];

  const socialLinks = [
    { href: 'https://github.com/ronnycoding', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/ronnyfreites', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/ronnyfreites', icon: Twitter, label: 'Twitter/X' },
    { href: 'mailto:ronnyangelo.freites@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      {/* Gradient Separator */}
      <div className="h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4">
              Ronny Freites
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.social')}</h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors flex items-center gap-2"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.contact')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>San José, Costa Rica</p>
              <p>
                <a
                  href="mailto:ronnyangelo.freites@gmail.com"
                  className="hover:text-accent-cyan transition-colors"
                >
                  ronnyangelo.freites@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
