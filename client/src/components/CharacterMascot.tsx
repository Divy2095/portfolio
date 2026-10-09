import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface CharacterMascotProps {
  className?: string;
}

const QUOTES = [
  "sketching code! ✏️",
  "building from scratch 🚀",
  "exploring Linux & C++ 🐧",
  "one doodle at a time 🎨",
  "hello world! 👋",
];

export const CharacterMascot: React.FC<CharacterMascotProps> = ({ className = "" }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Hand-drawn Speech Bubble */}
      <motion.div
        className="relative mb-2 px-3 py-1.5 bg-butter-yellow border-2 border-ink rounded-sketch-sm shadow-sketch-sm cursor-pointer"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: -2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        onClick={handleNextQuote}
        title="Click me for a note!"
      >
        <span className="font-hand text-base md:text-lg text-ink font-bold tracking-wide">
          "{QUOTES[quoteIndex]}"
        </span>
        {/* Little bubble beak pointer */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-butter-yellow border-r-2 border-b-2 border-ink transform rotate-45"
          aria-hidden="true"
        />
      </motion.div>

      {/* Main Mascot Illustration */}
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNextQuote}
        animate={
          shouldReduceMotion
            ? {}
            : isHovered
            ? { y: [0, -6, 0], rotate: [0, -2, 2, 0] }
            : { y: [0, -4, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: isHovered ? 1.2 : 3,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 180 180"
          className="w-36 h-36 md:w-44 md:h-44 overflow-visible filter drop-shadow-[3px_4px_0px_#29252B]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow underneath */}
          <ellipse cx="90" cy="165" rx="55" ry="8" fill="#29252B" opacity="0.12" />

          {/* Little desk/easel line */}
          <path
            d="M25 158C60 156 120 156 155 158"
            stroke="#29252B"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Coffee Mug on desk */}
          <g transform="translate(130, 134)">
            <rect
              x="0"
              y="4"
              width="18"
              height="20"
              rx="3"
              fill="#D6C5FF"
              stroke="#29252B"
              strokeWidth="2"
            />
            <path
              d="M18 9C22 9 24 13 22 17C20 19 18 19 18 19"
              stroke="#29252B"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Steam doodle */}
            <path
              d="M5 0C4 -3 8 -4 6 -7"
              stroke="#625C62"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11 1C10 -2 14 -3 12 -6"
              stroke="#625C62"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>

          {/* Character Body (Notebook / Soft character form) */}
          <rect
            x="45"
            y="48"
            width="90"
            height="100"
            rx="18"
            fill="#F8F4EB"
            stroke="#29252B"
            strokeWidth="3.2"
          />

          {/* Belly / Screen pastel patch */}
          <rect
            x="56"
            y="62"
            width="68"
            height="56"
            rx="10"
            fill="#B9F2C3"
            stroke="#29252B"
            strokeWidth="2.2"
          />

          {/* Terminal / Doodle face inside screen */}
          {/* Eyes */}
          <circle cx="75" cy="85" r={isHovered ? "5.5" : "4.5"} fill="#29252B" />
          <circle cx="105" cy="85" r={isHovered ? "5.5" : "4.5"} fill="#29252B" />
          {/* Eye shine */}
          <circle cx="77" cy="83" r="1.5" fill="#FFFFFF" />
          <circle cx="107" cy="83" r="1.5" fill="#FFFFFF" />

          {/* Blush marks */}
          <ellipse cx="67" cy="94" rx="4" ry="2.5" fill="#FFC9C7" />
          <ellipse cx="113" cy="94" rx="4" ry="2.5" fill="#FFC9C7" />

          {/* Smile */}
          <path
            d={isHovered ? "M82 92C86 98 94 98 98 92" : "M84 92C87 95 93 95 96 92"}
            stroke="#29252B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Antennas / Bookmark ribbon */}
          <path
            d="M90 48V32"
            stroke="#29252B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="90"
            cy="28"
            r="7"
            fill="#FFC9C7"
            stroke="#29252B"
            strokeWidth="2.5"
          />

          {/* Left Hand holding big yellow pencil */}
          <g>
            {/* Giant Pencil */}
            <g transform="translate(18, 55) rotate(-35)">
              {/* Pencil Body */}
              <rect
                x="0"
                y="0"
                width="14"
                height="65"
                rx="2"
                fill="#FFE99A"
                stroke="#29252B"
                strokeWidth="2.2"
              />
              {/* Eraser */}
              <rect
                x="0"
                y="65"
                width="14"
                height="12"
                rx="3"
                fill="#FFC9C7"
                stroke="#29252B"
                strokeWidth="2.2"
              />
              <line x1="0" y1="65" x2="14" y2="65" stroke="#29252B" strokeWidth="1.5" />
              {/* Pencil Tip */}
              <polygon
                points="0,0 14,0 7,-16"
                fill="#F8F4EB"
                stroke="#29252B"
                strokeWidth="2.2"
              />
              {/* Lead Tip */}
              <polygon points="4,-9 10,-9 7,-16" fill="#29252B" />
            </g>

            {/* Hand wrapping pencil */}
            <circle
              cx="45"
              cy="105"
              r="8"
              fill="#F8F4EB"
              stroke="#29252B"
              strokeWidth="2.5"
            />
          </g>

          {/* Right Hand waving or resting */}
          <circle
            cx="135"
            cy="110"
            r="8"
            fill="#F8F4EB"
            stroke="#29252B"
            strokeWidth="2.5"
          />

          {/* Feet */}
          <path
            d="M62 148C62 154 75 154 75 148"
            stroke="#29252B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M105 148C105 154 118 154 118 148"
            stroke="#29252B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Small floating sparkles */}
        <motion.div
          className="absolute -top-1 -right-2 text-butter-yellow pointer-events-none"
          animate={shouldReduceMotion ? {} : { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <Sparkles className="w-5 h-5 text-amber-500 fill-butter-yellow" />
        </motion.div>
      </motion.div>

      {/* Tiny hint */}
      <span className="font-hand text-xs text-muted mt-1">
        (tap mascot for doodles)
      </span>
    </div>
  );
};
