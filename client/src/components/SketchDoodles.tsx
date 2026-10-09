import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Hand-drawn wavy underline SVG with pathLength scroll-draw animation
 */
export const ScribbleUnderline: React.FC<{
  className?: string;
  color?: string;
  delay?: number;
}> = ({
  className = "w-full h-3.5",
  color = "#29252B",
  delay = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Background soft pink highlighter */}
      <div className="absolute inset-0 top-1.5 h-2.5 bg-soft-pink/70 rounded-full" />
      {/* Ink wavy pen stroke */}
      <motion.svg
        viewBox="0 0 240 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible relative z-10"
        preserveAspectRatio="none"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : delay }}
      >
        <motion.path
          d="M2 11.5C32.5 4.5 75.5 14 114 9C152.5 4 195 13 238 6.5"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.35, 0.1, 0.25, 1],
          }}
        />
      </motion.svg>
    </div>
  );
};

/**
 * Curved hand-drawn arrow pointing towards CTA or mascot
 * Draws path using pathLength with strong ink contrast
 */
export const HandDrawnArrow: React.FC<{
  className?: string;
  color?: string;
  direction?: 'pointing-down-to-mascot' | 'pointing-up-to-work' | 'curved-right';
  delay?: number;
}> = ({
  className = "w-12 h-8",
  color = "#29252B",
  direction = 'pointing-down-to-mascot',
  delay = 0.15,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Direction: pointing down-right into the mascot card
  if (direction === 'pointing-down-to-mascot') {
    return (
      <svg
        viewBox="0 0 50 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible inline-block ${className}`}
        aria-hidden="true"
      >
        {/* Shaft curving down-right */}
        <motion.path
          d="M6 8C16 8 28 14 36 24"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            delay: shouldReduceMotion ? 0 : delay,
            ease: "easeOut",
          }}
        />
        {/* Head pointing down-right */}
        <motion.path
          d="M26 22L37 26L38 15"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.25,
            delay: shouldReduceMotion ? 0 : delay + 0.35,
            ease: "easeOut",
          }}
        />
      </svg>
    );
  }

  // Direction: pointing up-left towards CTA "See my work"
  return (
    <svg
      viewBox="0 0 50 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Shaft curving up-left */}
      <motion.path
        d="M38 28C28 20 20 16 12 8"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          delay: shouldReduceMotion ? 0 : delay,
          ease: "easeOut",
        }}
      />
      {/* Head pointing up */}
      <motion.path
        d="M6 16L12 6L22 14"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.25,
          delay: shouldReduceMotion ? 0 : delay + 0.35,
          ease: "easeOut",
        }}
      />
    </svg>
  );
};

/**
 * Hand-drawn section divider stroke that draws across on scroll
 */
export const SketchDivider: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "my-8 max-w-4xl mx-auto px-4", color = "#29252B" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-6 overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Left sketchy stroke */}
        <motion.path
          d="M0 12C70 11 150 14 270 12"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="4 3"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        />
        {/* Center decorative loop/star */}
        <motion.path
          d="M290 12C296 6 304 6 310 12C304 18 296 18 290 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.8 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: 0.3 }}
        />
        {/* Right sketchy stroke */}
        <motion.path
          d="M330 12C450 10 530 13 600 12"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="4 3"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

/**
 * Hand-drawn sparkle/star doodle with subtle entrance
 */
export const HandStar: React.FC<{
  className?: string;
  color?: string;
  delay?: number;
}> = ({
  className = "w-5 h-5",
  color = "#29252B",
  delay = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0, rotate: -15 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay, ease: "easeOut" }}
      aria-hidden="true"
    >
      <path
        d="M12 2L13.2 8.8L19.5 7.5L14.8 12.2L20.5 16.5L13.8 16.2L12 22.5L10.2 16.2L3.5 16.5L9.2 12.2L4.5 7.5L10.8 8.8L12 2Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  );
};

/**
 * Washi tape banner piece with varied torn-edge styles
 */
export const WashiTape: React.FC<{
  color?: 'yellow' | 'pink' | 'lavender' | 'mint';
  className?: string;
  rotation?: string;
  variant?: 1 | 2 | 3;
}> = ({ color = 'yellow', className = '', rotation = '-rotate-2', variant = 1 }) => {
  const bgColors = {
    yellow: 'bg-butter-yellow/85 border-butter-yellow-dark/50',
    pink: 'bg-soft-pink/85 border-soft-pink-dark/50',
    lavender: 'bg-lavender/85 border-lavender-dark/50',
    mint: 'bg-mint-green/85 border-mint-green-dark/50',
  };

  const clipPaths = {
    1: 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)',
    2: 'polygon(0% 0%, 98% 0%, 95% 100%, 2% 100%)',
    3: 'polygon(3% 0%, 97% 0%, 99% 100%, 1% 100%)',
  };

  return (
    <div
      className={`h-4.5 sm:h-5 w-20 sm:w-24 ${bgColors[color]} ${rotation} border-y border-dashed shadow-sm ${className}`}
      style={{
        clipPath: clipPaths[variant],
      }}
      aria-hidden="true"
    />
  );
};

/**
 * Notebook spiral binding loops
 */
export const NotebookSpiral: React.FC<{ count?: number; className?: string }> = ({
  count = 6,
  className = "",
}) => (
  <div className={`flex flex-col gap-4 py-2 select-none pointer-events-none ${className}`} aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-1">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-ink bg-paper shadow-inner" />
        <div className="w-4 h-1.5 bg-ink/70 rounded-sm -ml-2" />
      </div>
    ))}
  </div>
);

/**
 * Clean GitHub vector icon
 */
export const GithubIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "w-4 h-4",
  color = "currentColor",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
