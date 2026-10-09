import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CharacterMascot } from '../components/CharacterMascot';
import { SketchButton } from '../components/SketchButton';
import {
  ScribbleUnderline,
  HandDrawnArrow,
  HandStar,
  WashiTape,
  NotebookSpiral,
  GithubIcon,
} from '../components/SketchDoodles';
import { DeskPencil, DeskCoffeeMug, DeskPaperclip } from '../components/DeskEnvironment';
import { ArrowDown, Terminal, Sparkles, Code2, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Container variants with restrained, lightweight stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Hero"
      className="relative pt-3 pb-8 sm:pt-5 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* Desk Artifact: Classic drafting pencil in upper-right outer margin below navbar */}
      <div className="absolute top-6 sm:top-8 lg:top-10 xl:top-12 -right-20 lg:-right-32 xl:-right-48 2xl:-right-56 pointer-events-auto hidden lg:block z-10">
        <DeskPencil />
      </div>

      {/* Desk Artifact: Ceramic Coffee mug with foam heart on left margin */}
      <div className="absolute top-[260px] -left-10 lg:-left-16 xl:-left-28 2xl:-left-36 pointer-events-auto hidden xl:block z-10">
        <DeskCoffeeMug />
      </div>

      {/* Desk Artifact: Small pink paperclip */}
      <div className="absolute bottom-10 -left-6 lg:-left-10 xl:-left-16 pointer-events-none hidden xl:block z-10">
        <DeskPaperclip color="pink" rotation="-rotate-12" />
      </div>

      {/* Sketchbook Page Container with irregular border */}
      <div className="relative bg-paper border-2 border-ink rounded-sketch-lg shadow-sketch-lg p-4 sm:p-7 md:p-9 overflow-hidden">
        {/* Washi tape accents on corners with varied styles */}
        <div className="absolute -top-2 left-6 sm:left-10 z-20 pointer-events-none">
          <WashiTape color="yellow" variant={1} className="w-20 sm:w-24 h-4 -rotate-3" />
        </div>
        <div className="absolute -top-2 right-6 sm:right-12 z-20 pointer-events-none">
          <WashiTape color="pink" variant={2} className="w-18 sm:w-22 h-4 rotate-2" />
        </div>

        {/* Notebook Spiral Binding Holes (Left Margin on desktop) */}
        <div className="hidden lg:block absolute left-2 top-8 bottom-8 select-none">
          <NotebookSpiral count={7} />
        </div>

        {/* Top Notebook Metadata Bar */}
        <div className="lg:pl-6 pb-3 sm:pb-4 mb-5 sm:mb-7 border-b-2 border-dashed border-ink/20 flex flex-wrap items-center justify-between gap-2.5">
          {/* Page volume tag & margin note */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink bg-butter-yellow px-2 py-0.5 rounded border border-ink/50 shadow-sketch-sm">
              PAGE 01
            </span>
            <span className="font-hand text-base sm:text-lg text-muted font-bold">
              • Notebook Vol. 1 // Entry 01
            </span>
            {/* Handwritten margin note */}
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-paper-dark border border-ink/30 rounded-sketch-sm font-hand text-xs sm:text-sm text-ink font-bold -rotate-1 shadow-sm">
              <span>made with curiosity ✎</span>
            </div>
          </div>

          {/* Date & live status pill */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="font-hand text-muted font-semibold">
              Oct 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-ink/30" />
            <span className="font-mono text-xs font-semibold text-emerald-800 bg-mint-green/80 px-2 py-0.5 rounded border border-ink/40 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              BUILDING & EXPLORING
            </span>
          </div>
        </div>

        {/* Main Grid: Content + Mascot */}
        <div className="lg:pl-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (7 cols): Greeting, Bio, Statement, Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4.5"
          >
            {/* Friendly Greeting Annotation */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-lavender/70 border-2 border-ink/70 rounded-full shadow-sketch-sm">
                <HandStar className="w-3.5 h-3.5 text-purple-900" delay={0.1} />
                <span className="font-hand text-base sm:text-lg text-ink font-bold tracking-wide">
                  welcome to my digital journal!
                </span>
              </div>
            </motion.div>

            {/* Main Heading with pathLength scroll-drawn underline */}
            <motion.div variants={itemVariants} className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-ink font-body leading-none">
                {SITE_CONFIG.hero.greeting}
              </h1>
              <div className="w-44 sm:w-56 md:w-64 mt-1">
                <ScribbleUnderline color="#29252B" className="w-full h-3.5" delay={0.2} />
              </div>
            </motion.div>

            {/* Core Supporting Philosophy Card */}
            <motion.div
              variants={itemVariants}
              className="relative p-3.5 sm:p-4 bg-butter-yellow/35 border-2 border-ink rounded-sketch-sm shadow-sketch-sm"
            >
              <div className="absolute -top-2.5 left-3 px-2 py-0.2 bg-butter-yellow border border-ink rounded text-[11px] sm:text-xs font-hand font-bold text-ink flex items-center gap-1 shadow-sm">
                <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                <span>core philosophy</span>
              </div>
              <p className="font-hand text-lg sm:text-xl md:text-2xl text-ink font-bold leading-snug pt-0.5">
                "{SITE_CONFIG.hero.headline}"
              </p>
            </motion.div>

            {/* Descriptive Introduction: Systems, Linux, graphics, experimentation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 text-ink/85 text-sm sm:text-base leading-relaxed font-body"
            >
              <p>
                {SITE_CONFIG.hero.intro}
              </p>
              <p className="text-ink font-semibold">
                {SITE_CONFIG.hero.details}
              </p>
            </motion.div>

            {/* Hand-drawn Topic Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-mint-green border-2 border-ink rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand shadow-sketch-sm">
                <Cpu className="w-3.5 h-3.5 text-ink" /> Systems & C++
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-lavender border-2 border-ink rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand shadow-sketch-sm">
                <Terminal className="w-3.5 h-3.5 text-ink" /> Linux & CLI
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-soft-pink border-2 border-ink rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand shadow-sketch-sm">
                <Sparkles className="w-3.5 h-3.5 text-ink" /> Graphics & Shaders
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-butter-yellow border-2 border-ink rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand shadow-sketch-sm">
                <Code2 className="w-3.5 h-3.5 text-ink" /> Full-Stack Experiments
              </span>
            </motion.div>

            {/* CTAs and Hand-drawn Arrow Pointer */}
            <motion.div
              variants={itemVariants}
              className="relative pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary: See my work */}
              <SketchButton
                variant="yellow"
                href="#work"
                icon={<ArrowDown className="w-4 h-4" />}
                className="text-sm sm:text-base py-2 sm:py-2.5"
              >
                See my work
              </SketchButton>

              {/* Secondary: GitHub */}
              <SketchButton
                variant="paper"
                href={SITE_CONFIG.links.github}
                external
                icon={<GithubIcon className="w-4 h-4" />}
                className="text-sm sm:text-base py-2 sm:py-2.5"
                ariaLabel="View Divy's GitHub profile"
              >
                GitHub Profile
              </SketchButton>

              {/* Hand-drawn arrow annotation pointing to See my work */}
              <div className="hidden sm:inline-flex items-center gap-1.5 text-ink">
                <HandDrawnArrow
                  className="w-10 sm:w-11 h-7 sm:h-8 text-ink"
                  direction="pointing-up-to-work"
                  delay={0.2}
                />
                <span className="font-hand text-base sm:text-lg text-ink font-bold -mt-1">
                  flip to projects! ✏️
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (5 cols): Mascot & Notebook Sketch Panel */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full pt-1 lg:pt-0">
            {/* Hand-drawn curved arrow annotation pointing toward mascot */}
            <div className="hidden lg:flex items-center gap-1.5 self-start mb-1 ml-4 text-ink">
              <span className="font-hand text-base text-ink font-bold">
                meet Sketchy Divy ✎
              </span>
              <HandDrawnArrow
                direction="pointing-down-to-mascot"
                className="w-10 h-7 text-ink"
                delay={0.25}
              />
            </div>

            {/* Sketch Card Container */}
            <div className="relative w-full max-w-xs sm:max-w-sm bg-paper-dark/60 border-2 border-ink rounded-sketch-md shadow-sketch p-4 sm:p-5 flex flex-col items-center">
              {/* Top tape */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none">
                <WashiTape color="lavender" variant={3} className="w-18 sm:w-20 h-4 rotate-1" />
              </div>

              {/* Character Mascot with restrained idle & click reaction */}
              <CharacterMascot className="my-1 sm:my-2" />

              {/* Little sticky note under mascot */}
              <div className="w-full mt-3 p-2.5 sm:p-3 bg-mint-green/45 border-2 border-dashed border-ink/50 rounded-sketch-sm">
                <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-ink/75 mb-1">
                  <span>LOG: #CURRENT_FOCUS</span>
                  <span className="text-emerald-800 font-bold">200 OK</span>
                </div>
                <p className="font-hand text-sm sm:text-base text-ink font-bold leading-tight">
                  Digging into systems architecture, graphics rendering pipelines & building real software tools.
                </p>
              </div>

              {/* Handwritten signature at bottom */}
              <div className="w-full flex justify-end mt-2 pr-1">
                <span className="font-hand text-xs sm:text-sm text-muted/80 italic">
                  — sketched by Divy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
