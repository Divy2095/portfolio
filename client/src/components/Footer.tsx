import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { WashiTape, GithubIcon } from './SketchDoodles';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="relative bg-paper border-2 border-ink rounded-sketch-md shadow-sketch p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Decorative Tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <WashiTape color="lavender" className="w-20 h-4 rotate-1" />
        </div>

        {/* Left: Identity & Note */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="font-hand text-xl font-bold text-ink flex items-center gap-1.5">
            Crafted with <Heart className="w-4 h-4 text-rose-500 fill-rose-400 inline" /> by Divy
          </p>
          <p className="font-body text-xs text-muted">
            Warm paper & sketch-drawn code • {new Date().getFullYear()}
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-sketch-sm border-2 border-ink bg-butter-yellow shadow-sketch-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform text-ink"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.links.email}`}
            className="p-2 rounded-sketch-sm border-2 border-ink bg-soft-pink shadow-sketch-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform text-ink"
            aria-label="Email Divy"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3 py-1.5 rounded-sketch-sm border-2 border-ink bg-mint-green shadow-sketch-sm text-xs font-bold font-body text-ink hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-transform cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
