'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { LanguageSwitcher } from './shared/LanguageSwitcher';
import { ThemeToggle } from './shared/ThemeToggle';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#certifications', key: 'certifications' },
  { href: '#contact', key: 'contact' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, children, isActive, onClick, className }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClick?.();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-all duration-200',
        'hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md',
        isActive
          ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
          : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </a>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrollPosition();
  const activeSection = useActiveSection();
  const t = useTranslations('navigation');

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm'
          : 'bg-background/80 backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Ronny Freites
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.key}
              href={item.href}
              isActive={activeSection === item.key}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.key}
                    href={item.href}
                    isActive={activeSection === item.key}
                    onClick={closeMobileMenu}
                    className="w-full px-4 py-3 text-base"
                  >
                    {t(item.key)}
                  </NavLink>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 px-4">
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Gradient border animation on scroll */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
      )}
    </header>
  );
}
