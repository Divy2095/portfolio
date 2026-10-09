import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { WashiTape, SketchDivider, HandStar } from '../components/SketchDoodles';
import {
  DeskBookStack,
  DeskEarphones,
  DeskMouse,
  DeskPaperclip,
} from '../components/DeskEnvironment';
import { FolderGit2, BookOpen, Mail, Sparkles, Pencil } from 'lucide-react';

export const WorkPlaceholder: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SketchDivider color="#29252B" />
      <section
        id="work"
        aria-label="Projects Section Preview"
        className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Desk Artifact: Stack of technical books (C++, Linux, Systems) on right margin */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-8 lg:-right-16 xl:-right-28 2xl:-right-36 pointer-events-auto hidden xl:block z-10">
          <DeskBookStack />
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-paper border-2 border-dashed border-ink/40 rounded-sketch-md p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-2.5 shadow-sm"
        >
          {/* Varied tape on top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="mint" variant={1} className="w-22 sm:w-26 h-4 -rotate-1" />
          </div>

          {/* Notebook tab label */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-sketch-sm bg-mint-green border-2 border-ink flex items-center justify-center shadow-sketch-sm">
              <FolderGit2 className="w-4 h-4 text-ink" />
            </div>
            <span className="font-mono text-xs font-bold text-ink bg-mint-green/50 px-2 py-0.5 rounded border border-ink/30">
              SECTION // 02
            </span>
          </div>

          <h2 className="font-hand text-2xl sm:text-3xl font-bold text-ink flex items-center gap-2">
            <span>Work & Projects</span>
            <HandStar className="w-4 h-4 text-emerald-800" delay={0.2} />
          </h2>

          <p className="font-body text-xs sm:text-sm text-muted max-w-md leading-relaxed">
            Illustrated sketchbook cards for ResumeIQ, RouteRush, StudyNotion, and Real-Time Sign Language Recognition will be crafted next.
          </p>

          <span className="font-hand text-xs text-muted/80 mt-1 italic">
            ✎ preparing project sketches
          </span>
        </motion.div>
      </section>
    </>
  );
};

export const AboutPlaceholder: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SketchDivider color="#29252B" />
      <section
        id="about"
        aria-label="About Section Preview"
        className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Desk Artifact: Draped wired earphones on left margin */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-8 lg:-left-12 xl:-left-24 2xl:-left-32 pointer-events-none hidden xl:block z-10">
          <DeskEarphones />
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-paper border-2 border-dashed border-ink/40 rounded-sketch-md p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-2.5 shadow-sm"
        >
          {/* Varied tape on top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="pink" variant={2} className="w-20 sm:w-24 h-4 rotate-2" />
          </div>

          {/* Notebook tab label */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-sketch-sm bg-soft-pink border-2 border-ink flex items-center justify-center shadow-sketch-sm">
              <BookOpen className="w-4 h-4 text-ink" />
            </div>
            <span className="font-mono text-xs font-bold text-ink bg-soft-pink/50 px-2 py-0.5 rounded border border-ink/30">
              SECTION // 03
            </span>
          </div>

          <h2 className="font-hand text-2xl sm:text-3xl font-bold text-ink flex items-center gap-2">
            <span>Why I Build</span>
            <Sparkles className="w-4 h-4 text-rose-500" />
          </h2>

          <p className="font-body text-xs sm:text-sm text-muted max-w-md leading-relaxed">
            Storytelling layout exploring the spark of curiosity from games, lower-level computing, and software craftsmanship.
          </p>

          <span className="font-hand text-xs text-muted/80 mt-1 italic">
            ✎ writing the origin notes
          </span>
        </motion.div>
      </section>
    </>
  );
};

export const ContactPlaceholder: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SketchDivider color="#29252B" />
      <section
        id="contact"
        aria-label="Contact Section Preview"
        className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Desk Artifact: Left margin paperclips */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-10 xl:-left-16 pointer-events-none hidden xl:flex flex-col gap-3 z-10">
          <DeskPaperclip color="lavender" rotation="rotate-45" />
          <DeskPaperclip color="mint" rotation="-rotate-12" />
        </div>

        {/* Desk Artifact: Optical computer mouse on right margin */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-8 lg:-right-14 xl:-right-24 2xl:-right-32 pointer-events-auto hidden xl:block z-10">
          <DeskMouse />
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-paper border-2 border-dashed border-ink/40 rounded-sketch-md p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-2.5 shadow-sm"
        >
          {/* Varied tape on top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="yellow" variant={3} className="w-22 sm:w-26 h-4 -rotate-2" />
          </div>

          {/* Notebook tab label */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-sketch-sm bg-butter-yellow border-2 border-ink flex items-center justify-center shadow-sketch-sm">
              <Mail className="w-4 h-4 text-ink" />
            </div>
            <span className="font-mono text-xs font-bold text-ink bg-butter-yellow/50 px-2 py-0.5 rounded border border-ink/30">
              SECTION // 04
            </span>
          </div>

          <h2 className="font-hand text-2xl sm:text-3xl font-bold text-ink flex items-center gap-2">
            <span>Get In Touch</span>
            <Pencil className="w-3.5 h-3.5 text-amber-700" />
          </h2>

          <p className="font-body text-xs sm:text-sm text-muted max-w-md leading-relaxed">
            Hand-drawn contact memo card with verified links and direct message capabilities.
          </p>

          <span className="font-hand text-xs text-muted/80 mt-1 italic">
            ✎ open for conversations & ideas
          </span>
        </motion.div>
      </section>
    </>
  );
};
