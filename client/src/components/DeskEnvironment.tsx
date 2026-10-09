import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * 1. Partially visible mechanical keyboard peeking from top edge of desk
 */
export const DeskKeyboard: React.FC<{ className?: string }> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className={`pointer-events-auto select-none ${className || "w-[240px] xl:w-[280px]"}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 460 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible filter drop-shadow-[3px_4px_0px_#29252B]"
      >
        {/* Keyboard Chassis */}
        <rect
          x="10"
          y="10"
          width="440"
          height="125"
          rx="12"
          fill="#EFE9DC"
          stroke="#29252B"
          strokeWidth="3"
        />

        {/* Top Function / Esc Row */}
        {/* ESC Key (Soft Pink) */}
        <rect x="22" y="22" width="28" height="24" rx="4" fill="#FFC9C7" stroke="#29252B" strokeWidth="2" />
        <text x="36" y="38" textAnchor="middle" fill="#29252B" fontSize="9" fontFamily="monospace" fontWeight="bold">esc</text>

        {/* F1-F4 Keys */}
        {['F1', 'F2', 'F3', 'F4'].map((k, i) => (
          <g key={k} transform={`translate(${58 + i * 32}, 22)`}>
            <rect width="26" height="24" rx="4" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
            <text x="13" y="16" textAnchor="middle" fill="#625C62" fontSize="9" fontFamily="monospace">{k}</text>
          </g>
        ))}

        {/* F5-F8 Keys (Lavender accent) */}
        {['F5', 'F6', 'F7', 'F8'].map((k, i) => (
          <g key={k} transform={`translate(${196 + i * 32}, 22)`}>
            <rect width="26" height="24" rx="4" fill="#D6C5FF" stroke="#29252B" strokeWidth="1.8" />
            <text x="13" y="16" textAnchor="middle" fill="#29252B" fontSize="9" fontFamily="monospace">{k}</text>
          </g>
        ))}

        {/* F9-F12 Keys */}
        {['F9', 'F10', 'F11', 'F12'].map((k, i) => (
          <g key={k} transform={`translate(${334 + i * 28}, 22)`}>
            <rect width="24" height="24" rx="4" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
            <text x="12" y="16" textAnchor="middle" fill="#625C62" fontSize="8" fontFamily="monospace">{k}</text>
          </g>
        ))}

        {/* Number Row */}
        {/* Tilde ~ */}
        <rect x="22" y="52" width="24" height="24" rx="4" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
        <text x="34" y="68" textAnchor="middle" fill="#625C62" fontSize="10" fontFamily="monospace">~</text>

        {/* Numbers 1-0, -, = */}
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map((num, i) => (
          <g key={num} transform={`translate(${50 + i * 28}, 52)`}>
            <rect width="24" height="24" rx="4" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
            <text x="12" y="16" textAnchor="middle" fill="#29252B" fontSize="9" fontFamily="monospace" fontWeight="600">{num}</text>
          </g>
        ))}

        {/* Backspace Key (Butter Yellow) */}
        <rect x="386" y="52" width="54" height="24" rx="4" fill="#FFE99A" stroke="#29252B" strokeWidth="2" />
        <text x="413" y="68" textAnchor="middle" fill="#29252B" fontSize="9" fontFamily="monospace" fontWeight="bold">back</text>

        {/* QWERTY Row */}
        {/* Tab Key */}
        <rect x="22" y="82" width="34" height="24" rx="4" fill="#FFE99A" stroke="#29252B" strokeWidth="1.8" />
        <text x="39" y="98" textAnchor="middle" fill="#29252B" fontSize="9" fontFamily="monospace" fontWeight="bold">tab</text>

        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'].map((letter, i) => (
          <g key={letter} transform={`translate(${60 + i * 28}, 82)`}>
            <rect width="24" height="24" rx="4" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
            <text x="12" y="16" textAnchor="middle" fill="#29252B" fontSize="9" fontFamily="monospace" fontWeight="bold">{letter}</text>
          </g>
        ))}

        {/* Enter key (Mint Green) */}
        <rect x="396" y="82" width="44" height="48" rx="4" fill="#B9F2C3" stroke="#29252B" strokeWidth="2" />
        <text x="418" y="110" textAnchor="middle" fill="#29252B" fontSize="10" fontFamily="monospace" fontWeight="bold">return</text>

        {/* Bottom Modifier & Space Row */}
        <rect x="22" y="112" width="40" height="22" rx="4" fill="#D6C5FF" stroke="#29252B" strokeWidth="1.8" />
        <text x="42" y="127" textAnchor="middle" fill="#29252B" fontSize="8" fontFamily="monospace" fontWeight="bold">ctrl</text>

        <rect x="66" y="112" width="36" height="22" rx="4" fill="#D6C5FF" stroke="#29252B" strokeWidth="1.8" />
        <text x="84" y="127" textAnchor="middle" fill="#29252B" fontSize="8" fontFamily="monospace" fontWeight="bold">alt</text>

        <rect x="106" y="112" width="42" height="22" rx="4" fill="#FFC9C7" stroke="#29252B" strokeWidth="1.8" />
        <text x="127" y="127" textAnchor="middle" fill="#29252B" fontSize="8" fontFamily="monospace" fontWeight="bold">cmd</text>

        {/* Spacebar */}
        <rect x="152" y="112" width="168" height="22" rx="4" fill="#F8F4EB" stroke="#29252B" strokeWidth="2" />
        {/* Subtle spacebar dot / groove */}
        <line x1="220" y1="123" x2="252" y2="123" stroke="#625C62" strokeWidth="1.5" strokeLinecap="round" />

        <rect x="324" y="112" width="42" height="22" rx="4" fill="#FFC9C7" stroke="#29252B" strokeWidth="1.8" />
        <text x="345" y="127" textAnchor="middle" fill="#29252B" fontSize="8" fontFamily="monospace" fontWeight="bold">cmd</text>

        <rect x="370" y="112" width="22" height="22" rx="4" fill="#FFE99A" stroke="#29252B" strokeWidth="1.8" />
        <text x="381" y="127" textAnchor="middle" fill="#29252B" fontSize="8" fontFamily="monospace">←</text>
      </svg>
    </motion.div>
  );
};

/**
 * 2. Classic wooden drafting pencil resting at an angle on the desk
 */
export const DeskPencil: React.FC<{ className?: string }> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, rotate: 15 }}
      animate={{ opacity: 1, rotate: 22 }}
      whileHover={shouldReduceMotion ? {} : { rotate: 26, y: -2 }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      className={`pointer-events-auto cursor-pointer select-none ${className}`}
      title="Drawing pencil (HB)"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 sm:w-44 h-auto overflow-visible filter drop-shadow-[2px_3px_0px_#29252B]"
      >
        {/* Eraser */}
        <rect x="4" y="12" width="18" height="16" rx="3" fill="#FFC9C7" stroke="#29252B" strokeWidth="2" />
        {/* Metal Ferrule */}
        <rect x="22" y="11" width="14" height="18" fill="#D6C5FF" stroke="#29252B" strokeWidth="2" />
        <line x1="27" y1="11" x2="27" y2="29" stroke="#29252B" strokeWidth="1.2" />
        <line x1="31" y1="11" x2="31" y2="29" stroke="#29252B" strokeWidth="1.2" />

        {/* Yellow Hexagonal Body */}
        <polygon points="36,12 120,12 120,28 36,28" fill="#FFE99A" stroke="#29252B" strokeWidth="2" />
        <line x1="36" y1="17" x2="120" y2="17" stroke="#29252B" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="36" y1="23" x2="120" y2="23" stroke="#29252B" strokeWidth="1" strokeDasharray="4 2" />
        <text x="65" y="22" fill="#625C62" fontSize="7" fontFamily="monospace" fontWeight="bold">2B • SKETCH</text>

        {/* Sharpened Wood Cone */}
        <polygon points="120,12 148,20 120,28" fill="#F8F4EB" stroke="#29252B" strokeWidth="2" />
        {/* Graphite Tip */}
        <polygon points="138,17 148,20 138,23" fill="#29252B" />
      </svg>
    </motion.div>
  );
};

/**
 * 3. Ceramic Coffee Mug with foam heart and steam
 */
export const DeskCoffeeMug: React.FC<{ className?: string }> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.04, rotate: -2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`pointer-events-auto cursor-pointer select-none ${className}`}
      title="Hot coffee — Fuel for coding"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 sm:w-28 md:w-32 h-auto overflow-visible filter drop-shadow-[3px_4px_0px_#29252B]"
      >
        {/* Coaster Base */}
        <ellipse cx="60" cy="72" rx="46" ry="34" fill="#B9F2C3" stroke="#29252B" strokeWidth="2.5" />
        <ellipse cx="60" cy="72" rx="40" ry="28" fill="#D7F8DD" stroke="#29252B" strokeWidth="1" strokeDasharray="3 3" />

        {/* Mug Handle */}
        <path
          d="M92 52C108 52 112 70 94 76"
          stroke="#29252B"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M92 52C108 52 112 70 94 76"
          stroke="#D6C5FF"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Mug Outer Body */}
        <ellipse cx="58" cy="62" rx="34" ry="26" fill="#D6C5FF" stroke="#29252B" strokeWidth="2.5" />

        {/* Coffee Rim / Liquid Interior */}
        <ellipse cx="58" cy="60" rx="28" ry="20" fill="#4B3322" stroke="#29252B" strokeWidth="2" />
        <ellipse cx="58" cy="60" rx="24" ry="16" fill="#66462C" />

        {/* Latte Art / Foam Doodle Heart */}
        <path
          d="M58 58C56 54 50 54 50 58C50 63 58 68 58 68C58 68 66 63 66 58C66 54 60 54 58 58Z"
          fill="#F8F4EB"
          stroke="#29252B"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* Steam Doodles */}
        <path
          d="M50 36C47 28 53 24 50 16"
          stroke="#625C62"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 2"
          opacity="0.75"
        />
        <path
          d="M64 34C67 26 61 22 65 14"
          stroke="#625C62"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 2"
          opacity="0.75"
        />
      </svg>
    </motion.div>
  );
};

/**
 * 4. Stack of 3 Technical Books lying flat on the desk with horizontal spines
 */
export const DeskBookStack: React.FC<{ className?: string }> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={shouldReduceMotion ? {} : { x: -3, y: -2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`pointer-events-auto cursor-pointer select-none ${className}`}
      title="Engineering Reading: C++, Linux, Systems"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 sm:w-44 md:w-48 h-auto overflow-visible filter drop-shadow-[3px_4px_0px_#29252B]"
      >
        {/* Bottom Book: SYSTEMS (Lavender) */}
        <g id="book-bottom">
          {/* Pages block on right */}
          <polygon
            points="156,76 186,70 186,94 156,102"
            fill="#F8F4EB"
            stroke="#29252B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="158" y1="82" x2="184" y2="76" stroke="#E5DEC9" strokeWidth="1" />
          <line x1="158" y1="88" x2="184" y2="82" stroke="#E5DEC9" strokeWidth="1" />
          <line x1="158" y1="94" x2="184" y2="88" stroke="#E5DEC9" strokeWidth="1" />

          {/* Horizontal Spine */}
          <rect
            x="10"
            y="76"
            width="146"
            height="26"
            rx="3.5"
            fill="#D6C5FF"
            stroke="#29252B"
            strokeWidth="2.5"
          />
          {/* Decorative spine accent lines */}
          <line x1="20" y1="76" x2="20" y2="102" stroke="#29252B" strokeWidth="1.5" />
          <line x1="24" y1="76" x2="24" y2="102" stroke="#29252B" strokeWidth="1.2" />
          <line x1="144" y1="76" x2="144" y2="102" stroke="#29252B" strokeWidth="1.5" />
          <line x1="148" y1="76" x2="148" y2="102" stroke="#29252B" strokeWidth="1.2" />

          {/* Horizontal Title: SYSTEMS */}
          <text
            x="84"
            y="93"
            textAnchor="middle"
            fill="#29252B"
            fontSize="11"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.1em"
          >
            SYSTEMS
          </text>
        </g>

        {/* Middle Book: LINUX (Mint Green) */}
        <g id="book-middle">
          {/* Pages block on right */}
          <polygon
            points="150,50 178,45 178,69 150,76"
            fill="#F8F4EB"
            stroke="#29252B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="152" y1="56" x2="176" y2="51" stroke="#E5DEC9" strokeWidth="1" />
          <line x1="152" y1="62" x2="176" y2="57" stroke="#E5DEC9" strokeWidth="1" />
          <line x1="152" y1="68" x2="176" y2="63" stroke="#E5DEC9" strokeWidth="1" />

          {/* Horizontal Spine */}
          <rect
            x="16"
            y="50"
            width="134"
            height="26"
            rx="3.5"
            fill="#B9F2C3"
            stroke="#29252B"
            strokeWidth="2.5"
          />
          {/* Decorative spine accent lines */}
          <line x1="26" y1="50" x2="26" y2="76" stroke="#29252B" strokeWidth="1.5" />
          <line x1="30" y1="50" x2="30" y2="76" stroke="#29252B" strokeWidth="1.2" />
          <line x1="138" y1="50" x2="138" y2="76" stroke="#29252B" strokeWidth="1.5" />
          <line x1="142" y1="50" x2="142" y2="76" stroke="#29252B" strokeWidth="1.2" />

          {/* Horizontal Title: LINUX */}
          <text
            x="84"
            y="67"
            textAnchor="middle"
            fill="#29252B"
            fontSize="11"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.15em"
          >
            LINUX
          </text>
        </g>

        {/* Top Book: C++ (Soft Pink) */}
        <g id="book-top">
          {/* Top cover surface in gentle isometric perspective */}
          <polygon
            points="22,24 146,24 170,10 46,10"
            fill="#FFB7B4"
            stroke="#29252B"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Pages block on right */}
          <polygon
            points="146,24 170,10 170,33 146,48"
            fill="#F8F4EB"
            stroke="#29252B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="148" y1="30" x2="168" y2="16" stroke="#E5DEC9" strokeWidth="1" />
          <line x1="148" y1="36" x2="168" y2="22" stroke="#E5DEC9" strokeWidth="1" />

          {/* Horizontal Spine */}
          <rect
            x="22"
            y="24"
            width="124"
            height="26"
            rx="3.5"
            fill="#FFC9C7"
            stroke="#29252B"
            strokeWidth="2.5"
          />
          {/* Decorative spine accent lines */}
          <line x1="32" y1="24" x2="32" y2="50" stroke="#29252B" strokeWidth="1.5" />
          <line x1="36" y1="24" x2="36" y2="50" stroke="#29252B" strokeWidth="1.2" />
          <line x1="134" y1="24" x2="134" y2="50" stroke="#29252B" strokeWidth="1.5" />
          <line x1="138" y1="24" x2="138" y2="50" stroke="#29252B" strokeWidth="1.2" />

          {/* Horizontal Title: C++ */}
          <text
            x="85"
            y="41"
            textAnchor="middle"
            fill="#29252B"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.12em"
          >
            C++
          </text>

          {/* Yellow Bookmark Ribbon hanging down from top book */}
          <path
            d="M110 24 L110 58 L117 51 L124 58 L124 24 Z"
            fill="#FFE99A"
            stroke="#29252B"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </motion.div>
  );
};

/**
 * 6. Wired Earphones with natural organic cord draping down the margin
 */
export const DeskEarphones: React.FC<{ className?: string }> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 110 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 sm:w-28 md:w-32 h-auto overflow-visible filter drop-shadow-[2px_2px_0px_rgba(41,37,43,0.3)]"
      >
        {/* Left Earbud */}
        <g transform="translate(18, 14)">
          <circle cx="10" cy="10" r="9" fill="#F8F4EB" stroke="#29252B" strokeWidth="2" />
          <circle cx="10" cy="10" r="5" fill="#D6C5FF" stroke="#29252B" strokeWidth="1.5" />
          <rect x="7" y="18" width="6" height="12" rx="2" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
        </g>

        {/* Right Earbud */}
        <g transform="translate(56, 28) rotate(35)">
          <circle cx="10" cy="10" r="9" fill="#F8F4EB" stroke="#29252B" strokeWidth="2" />
          <circle cx="10" cy="10" r="5" fill="#FFC9C7" stroke="#29252B" strokeWidth="1.5" />
          <rect x="7" y="18" width="6" height="12" rx="2" fill="#F8F4EB" stroke="#29252B" strokeWidth="1.8" />
        </g>

        {/* Left & Right Wires meeting at splitter */}
        <path
          d="M28 42C24 64 36 78 44 90"
          stroke="#29252B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M62 52C60 68 50 78 44 90"
          stroke="#29252B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Wire Splitter cylinder */}
        <rect x="41" y="88" width="6" height="10" rx="1.5" fill="#FFE99A" stroke="#29252B" strokeWidth="1.8" />

        {/* Main Cord looping down margin */}
        <path
          d="M44 98C40 115 18 122 32 140C42 152 70 148 76 160"
          stroke="#29252B"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

/**
 * 7. Hand-drawn Computer Mouse with curved wire
 */
export const DeskMouse: React.FC<{ className?: string }> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={shouldReduceMotion ? {} : { y: -2, rotate: -2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`pointer-events-auto cursor-pointer select-none ${className}`}
      title="Optical mouse"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 sm:w-24 md:w-28 h-auto overflow-visible filter drop-shadow-[2.5px_3.5px_0px_#29252B]"
      >
        {/* Curled Wire going upwards */}
        <path
          d="M50 36C52 18 36 12 44 0"
          stroke="#29252B"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Mouse Body (Oval palm grip) */}
        <rect
          x="18"
          y="34"
          width="64"
          height="100"
          rx="32"
          fill="#F8F4EB"
          stroke="#29252B"
          strokeWidth="3"
        />

        {/* Center Split Line */}
        <line x1="50" y1="36" x2="50" y2="76" stroke="#29252B" strokeWidth="2.2" />
        {/* Horizontal Seam */}
        <path d="M22 76C34 78 66 78 78 76" stroke="#29252B" strokeWidth="2" />

        {/* Scroll Wheel */}
        <rect
          x="46"
          y="46"
          width="8"
          height="18"
          rx="3"
          fill="#D6C5FF"
          stroke="#29252B"
          strokeWidth="2"
        />

        {/* Side Thumb Grip (Mint accent) */}
        <path
          d="M18 64C16 74 16 88 18 96"
          stroke="#B9F2C3"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

/**
 * 8. Tiny Scattered Paperclips
 */
export const DeskPaperclip: React.FC<{
  color?: 'mint' | 'pink' | 'lavender';
  className?: string;
  rotation?: string;
}> = ({
  color = 'mint',
  className = "",
  rotation = "rotate-12",
}) => {
  const strokeColors = {
    mint: "#56C46A",
    pink: "#E86967",
    lavender: "#8A69E8",
  };

  return (
    <div className={`pointer-events-none select-none inline-block ${rotation} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 24 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 sm:w-6 h-auto overflow-visible filter drop-shadow-[1px_2px_0px_#29252B]"
      >
        <path
          d="M8 12V28C8 33 16 33 16 28V8C16 3 4 3 4 12V32C4 39 20 39 20 32V14"
          stroke={strokeColors[color]}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
