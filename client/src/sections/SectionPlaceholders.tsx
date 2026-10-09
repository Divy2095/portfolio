import React from 'react';
import { WashiTape } from '../components/SketchDoodles';
import { FolderGit2, BookOpen, Mail } from 'lucide-react';

export const WorkPlaceholder: React.FC = () => (
  <section
    id="work"
    aria-label="Projects Section Preview"
    className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
  >
    <div className="relative bg-paper/60 border-2 border-dashed border-ink/40 rounded-sketch-md p-8 text-center flex flex-col items-center justify-center gap-3">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <WashiTape color="mint" className="w-24 h-4 -rotate-1" />
      </div>
      <div className="w-10 h-10 rounded-full bg-mint-green/60 border border-ink flex items-center justify-center">
        <FolderGit2 className="w-5 h-5 text-ink" />
      </div>
      <h2 className="font-hand text-3xl font-bold text-ink">
        Work & Projects (Phase 6 Preview)
      </h2>
      <p className="font-body text-sm text-muted max-w-md">
        Illustrated sketchbook cards for ResumeIQ, RouteRush, StudyNotion, and Real-Time Sign Language Recognition will be crafted next.
      </p>
    </div>
  </section>
);

export const AboutPlaceholder: React.FC = () => (
  <section
    id="about"
    aria-label="About Section Preview"
    className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
  >
    <div className="relative bg-paper/60 border-2 border-dashed border-ink/40 rounded-sketch-md p-8 text-center flex flex-col items-center justify-center gap-3">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <WashiTape color="pink" className="w-24 h-4 rotate-2" />
      </div>
      <div className="w-10 h-10 rounded-full bg-soft-pink/60 border border-ink flex items-center justify-center">
        <BookOpen className="w-5 h-5 text-ink" />
      </div>
      <h2 className="font-hand text-3xl font-bold text-ink">
        Why I Build (Phase 7 Preview)
      </h2>
      <p className="font-body text-sm text-muted max-w-md">
        Storytelling layout exploring the spark of curiosity from games, lower-level computing, and software craftsmanship.
      </p>
    </div>
  </section>
);

export const ContactPlaceholder: React.FC = () => (
  <section
    id="contact"
    aria-label="Contact Section Preview"
    className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
  >
    <div className="relative bg-paper/60 border-2 border-dashed border-ink/40 rounded-sketch-md p-8 text-center flex flex-col items-center justify-center gap-3">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <WashiTape color="yellow" className="w-24 h-4 -rotate-2" />
      </div>
      <div className="w-10 h-10 rounded-full bg-butter-yellow/60 border border-ink flex items-center justify-center">
        <Mail className="w-5 h-5 text-ink" />
      </div>
      <h2 className="font-hand text-3xl font-bold text-ink">
        Get In Touch (Phase 7 Preview)
      </h2>
      <p className="font-body text-sm text-muted max-w-md">
        Hand-drawn contact memo card with verified links and direct message capabilities.
      </p>
    </div>
  </section>
);
