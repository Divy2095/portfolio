import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Menu, X, Pencil, Sparkles } from 'lucide-react';
import { WashiTape } from './SketchDoodles';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-3 backdrop-blur-[2px]">
      {/* Decorative top tape sticker */}
      <div className="max-w-5xl mx-auto relative flex justify-center -mb-2 z-10">
        <WashiTape color="lavender" className="w-28 h-4 -rotate-1 opacity-90" />
      </div>

      <nav
        aria-label="Main Navigation"
        className="max-w-5xl mx-auto bg-paper/95 border-2 border-ink rounded-sketch-md shadow-sketch px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all"
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 rounded-lg py-1"
          aria-label="Divy Portfolio Home"
        >
          <div className="w-9 h-9 rounded-sketch-sm bg-butter-yellow border-2 border-ink flex items-center justify-center shadow-sketch-sm group-hover:rotate-6 transition-transform">
            <Pencil className="w-4 h-4 text-ink transform -rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-hand text-2xl font-bold tracking-tight text-ink leading-tight flex items-center gap-1.5">
              {SITE_CONFIG.name}
              <span className="text-xs font-mono font-normal px-1.5 py-0.5 rounded bg-mint-green/80 border border-ink/40 text-ink">
                sketchbook
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {SITE_CONFIG.navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1.5 font-hand text-xl font-bold text-ink rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-1 bg-lavender-dark rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Status Pill & External Quick Action */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-mint-green/40 border border-ink/40 rounded-full text-xs font-medium text-ink">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs">building & learning</span>
          </div>

          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-3 py-1 bg-butter-yellow border-2 border-ink rounded-sketch-sm shadow-sketch-sm text-xs font-bold font-body hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-transform"
          >
            <Sparkles className="w-3 h-3 text-amber-700" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sketch-sm border-2 border-ink bg-butter-yellow shadow-sketch-sm focus:outline-none focus:ring-2 focus:ring-ink"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="md:hidden max-w-5xl mx-auto mt-2 bg-paper border-2 border-ink rounded-sketch-md shadow-sketch-lg p-4"
          >
            <div className="flex flex-col gap-2">
              {SITE_CONFIG.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-sketch-sm font-hand text-2xl font-bold text-ink hover:bg-butter-yellow/60 border border-transparent hover:border-ink transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-muted">→</span>
                </a>
              ))}
              <div className="pt-2 border-t border-dashed border-ink/30 flex items-center justify-between px-2">
                <span className="font-mono text-xs text-muted">GitHub:</span>
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-ink underline"
                >
                  @Divy2095
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
