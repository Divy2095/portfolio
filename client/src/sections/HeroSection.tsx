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
import { ArrowDown, Terminal, Sparkles, Code2, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : custom * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Hero"
      className="relative pt-6 pb-16 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* Sketchbook Page Container */}
      <div className="relative bg-paper border-2 border-ink rounded-sketch-lg shadow-sketch-lg p-6 sm:p-8 md:p-12 overflow-hidden">
        {/* Washi tape accents on corners */}
        <div className="absolute -top-2 left-10 z-20">
          <WashiTape color="yellow" className="w-24 h-4 -rotate-3" />
        </div>
        <div className="absolute -top-2 right-12 z-20">
          <WashiTape color="pink" className="w-20 h-4 rotate-2" />
        </div>

        {/* Notebook Spiral Binding Holes (Left Margin on desktop) */}
        <div className="hidden lg:block absolute left-2 top-8 bottom-8">
          <NotebookSpiral count={8} />
        </div>

        {/* Top Notebook Metadata Bar */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="lg:pl-6 pb-6 mb-8 border-b-2 border-dashed border-ink/20 flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink bg-butter-yellow px-2 py-0.5 rounded border border-ink/50">
              PAGE 01
            </span>
            <span className="font-hand text-lg text-muted font-bold">
              • Notebook Vol. 1 // Entry 01
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-hand text-base text-muted font-semibold">
              Updated: Oct 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
            <span className="font-mono text-xs font-semibold text-emerald-800 bg-mint-green/80 px-2 py-0.5 rounded border border-ink/40 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              BUILDING & EXPLORING
            </span>
          </div>
        </motion.div>

        {/* Main Grid: Content + Mascot */}
        <div className="lg:pl-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (7 cols): Greeting, Bio, Statement, Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Friendly Greeting Annotation */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-lavender/60 border border-ink/40 rounded-full">
                <HandStar className="w-3.5 h-3.5 text-purple-900" />
                <span className="font-hand text-lg text-ink font-bold tracking-wide">
                  welcome to my digital sketchbook!
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink font-body leading-none">
                {SITE_CONFIG.hero.greeting}
              </h1>
              <div className="w-48 sm:w-64 mt-2">
                <ScribbleUnderline color="#FFC9C7" className="w-full h-3" />
              </div>
            </motion.div>

            {/* Core Supporting Statement */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative p-4 sm:p-5 bg-butter-yellow/30 border-2 border-ink rounded-sketch-sm shadow-sketch-sm"
            >
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-butter-yellow border border-ink rounded text-xs font-hand font-bold text-ink flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span>core philosophy</span>
              </div>
              <p className="font-hand text-xl sm:text-2xl text-ink font-bold leading-snug">
                "{SITE_CONFIG.hero.headline}"
              </p>
            </motion.div>

            {/* Descriptive Introduction mentioning systems, Linux, graphics, experimentation */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col gap-3 text-muted text-base sm:text-lg leading-relaxed font-body"
            >
              <p>
                {SITE_CONFIG.hero.intro}
              </p>
              <p className="text-ink/80 font-medium">
                {SITE_CONFIG.hero.details}
              </p>
            </motion.div>

            {/* Hand-drawn Interest Badges */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-2 pt-1"
            >
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-mint-green/70 border border-ink/40 rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand">
                <Cpu className="w-3.5 h-3.5 text-ink" /> Systems & C++
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-lavender/70 border border-ink/40 rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand">
                <Terminal className="w-3.5 h-3.5 text-ink" /> Linux & CLI
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-soft-pink/70 border border-ink/40 rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand">
                <Sparkles className="w-3.5 h-3.5 text-ink" /> Graphics & Shaders
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-butter-yellow/70 border border-ink/40 rounded-sketch-sm text-xs sm:text-sm font-bold text-ink font-hand">
                <Code2 className="w-3.5 h-3.5 text-ink" /> Full-Stack Experiments
              </span>
            </motion.div>

            {/* CTAs and Hand-drawn Arrow Pointer */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {/* Primary: See my work */}
              <SketchButton
                variant="yellow"
                href="#work"
                icon={<ArrowDown className="w-4 h-4" />}
                className="text-base"
              >
                See my work
              </SketchButton>

              {/* Secondary: GitHub */}
              <SketchButton
                variant="paper"
                href={SITE_CONFIG.links.github}
                external
                icon={<GithubIcon className="w-4 h-4" />}
                className="text-base"
                ariaLabel="View Divy's GitHub profile"
              >
                GitHub Profile
              </SketchButton>

              {/* Hand-drawn arrow annotation pointing to See my work */}
              <div className="hidden sm:flex items-center gap-1 ml-2 text-ink">
                <HandDrawnArrow
                  className="w-12 h-10 text-ink -rotate-12 transform"
                  direction="curved-left"
                />
                <span className="font-hand text-lg text-ink font-bold -mt-2">
                  flip to projects! ✏️
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Mascot & Notebook Sketch Panel */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Sketch Card Container */}
            <div className="relative w-full max-w-sm bg-paper-dark/60 border-2 border-ink rounded-sketch-md shadow-sketch p-6 flex flex-col items-center">
              {/* Top tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <WashiTape color="lavender" className="w-20 h-4 rotate-1" />
              </div>

              {/* Character Mascot */}
              <CharacterMascot className="my-2" />

              {/* Little sticky note under mascot */}
              <div className="w-full mt-4 p-3 bg-mint-green/40 border border-dashed border-ink/40 rounded-sketch-sm">
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-ink/70 mb-1">
                  <span>LOG: #CURRENT_FOCUS</span>
                  <span>status: 200 OK</span>
                </div>
                <p className="font-hand text-base text-ink font-bold leading-tight">
                  Digging into systems architecture, graphics rendering pipelines & building real software tools.
                </p>
              </div>

              {/* Handwritten signature at bottom */}
              <div className="w-full flex justify-end mt-3 pr-1">
                <span className="font-hand text-base text-muted/80 italic">
                  — sketched by Divy
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
