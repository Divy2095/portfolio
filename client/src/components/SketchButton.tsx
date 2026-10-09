import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SketchButtonProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'lavender' | 'pink' | 'mint' | 'paper' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const SketchButton: React.FC<SketchButtonProps> = ({
  children,
  variant = 'yellow',
  href,
  onClick,
  className = '',
  icon,
  external = false,
  type = 'button',
  ariaLabel,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variantStyles = {
    yellow: 'bg-butter-yellow hover:bg-butter-yellow-light text-ink border-ink',
    lavender: 'bg-lavender hover:bg-lavender-light text-ink border-ink',
    pink: 'bg-soft-pink hover:bg-soft-pink-light text-ink border-ink',
    mint: 'bg-mint-green hover:bg-mint-green-light text-ink border-ink',
    paper: 'bg-paper hover:bg-paper-dark text-ink border-ink',
    outline: 'bg-transparent hover:bg-paper-dark/60 text-ink border-ink',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-5 py-2.5
    font-body font-bold text-sm md:text-base text-ink
    border-2 border-ink rounded-sketch-sm shadow-sketch
    transition-all duration-150 cursor-pointer select-none
    focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper
    ${variantStyles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileHover={shouldReduceMotion ? {} : { x: -2, y: -2, boxShadow: '5px 5px 0px #29252B' }}
        whileTap={shouldReduceMotion ? {} : { x: 2, y: 2, boxShadow: '1px 1px 0px #29252B' }}
        aria-label={ariaLabel}
      >
        {children}
        {icon && <span className="inline-flex items-center">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      whileHover={shouldReduceMotion ? {} : { x: -2, y: -2, boxShadow: '5px 5px 0px #29252B' }}
      whileTap={shouldReduceMotion ? {} : { x: 2, y: 2, boxShadow: '1px 1px 0px #29252B' }}
      aria-label={ariaLabel}
    >
      {children}
      {icon && <span className="inline-flex items-center">{icon}</span>}
    </motion.button>
  );
};
