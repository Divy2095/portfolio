import React from 'react';

/**
 * Hand-drawn wavy underline SVG
 */
export const ScribbleUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full h-3",
  color = "#29252B",
}) => (
  <svg
    viewBox="0 0 240 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible pointer-events-none ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M2 11.5C32.5 4.5 75.5 14 114 9C152.5 4 195 13 238 6.5"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hand-drawn marker stroke highlight
 */
export const MarkerHighlight: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full h-4",
  color = "#FFE99A",
}) => (
  <svg
    viewBox="0 0 200 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible pointer-events-none ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M2 13C45 8 98 14 148 10C170 8 185 12 198 9.5"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

/**
 * Curved hand-drawn arrow pointing towards CTA or annotation
 */
export const HandDrawnArrow: React.FC<{
  className?: string;
  color?: string;
  direction?: 'down-right' | 'up-right' | 'curved-left';
}> = ({ className = "w-16 h-16", color = "#29252B", direction = 'down-right' }) => {
  if (direction === 'curved-left') {
    return (
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M72 10C55 12 28 22 20 45"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 36L20 46L29 41"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 70 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 14C22 8 44 14 54 36"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M44 37L55 37L55 26"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * Hand-drawn sparkle/star doodle
 */
export const HandStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#29252B",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L13.2 8.8L19.5 7.5L14.8 12.2L20.5 16.5L13.8 16.2L12 22.5L10.2 16.2L3.5 16.5L9.2 12.2L4.5 7.5L10.8 8.8L12 2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/**
 * Washi tape banner piece
 */
export const WashiTape: React.FC<{
  color?: 'yellow' | 'pink' | 'lavender' | 'mint';
  className?: string;
  rotation?: string;
}> = ({ color = 'yellow', className = '', rotation = '-rotate-2' }) => {
  const bgColors = {
    yellow: 'bg-butter-yellow/80 border-butter-yellow-dark/60',
    pink: 'bg-soft-pink/80 border-soft-pink-dark/60',
    lavender: 'bg-lavender/80 border-lavender-dark/60',
    mint: 'bg-mint-green/80 border-mint-green-dark/60',
  };

  return (
    <div
      className={`h-5 w-24 ${bgColors[color]} ${rotation} border-y border-dashed shadow-sm ${className}`}
      style={{
        clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
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
 * Hand-drawn circle highlighting key phrases
 */
export const HandDrawnCircle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full h-full",
  color = "#FFC9C7",
}) => (
  <svg
    viewBox="0 0 140 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute inset-0 overflow-visible pointer-events-none ${className}`}
  >
    <path
      d="M10 24C12 10 50 4 88 5C122 6 138 18 135 32C131 46 92 48 45 47C20 46 4 36 6 22"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="2 1"
    />
  </svg>
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

