import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * FloatingCrescent represents an exquisite decorative Islamic crescent with subtle star,
 * featuring smooth vertical floating and faint champagne-gold glow.
 * Non-intrusive (pointer-events: none, aria-hidden: true) and accessible.
 */
export default function FloatingCrescent({
  size = 140,
  color = 'var(--color-champagne-gold)',
  glowColor = 'rgba(214, 181, 109, 0.35)',
  className = '',
  style = {},
}) {
  const shouldReduceMotion = useReducedMotion();

  const floatTransition = shouldReduceMotion
    ? {}
    : {
        y: {
          duration: 5.5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
        rotate: {
          duration: 7,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      };

  return (
    <motion.div
      aria-hidden="true"
      className={`floating-crescent-wrapper ${className}`}
      style={{
        display: 'inline-block',
        pointerEvents: 'none',
        userSelect: 'none',
        filter: `drop-shadow(0 0 25px ${glowColor})`,
        ...style,
      }}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [-8, 8],
              rotate: [-2, 2],
            }
      }
      transition={floatTransition}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crescentGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="50%" stopColor="#D6B56D" />
            <stop offset="100%" stopColor="#9B7A32" />
          </linearGradient>
          <radialGradient id="starShine" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFBF0" />
            <stop offset="70%" stopColor="#D6B56D" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Crescent Moon */}
        <path
          d="M62 18 C41 24, 28 44, 34 66 C40 85, 60 92, 75 84 C56 94, 32 82, 26 59 C20 37, 36 17, 62 18 Z"
          fill="url(#crescentGoldGrad)"
        />

        {/* Slender Inner Accent Ring */}
        <path
          d="M58 24 C43 28, 33 44, 38 61 C42 74, 55 81, 68 76 C53 82, 36 73, 31 56 C26 39, 39 23, 58 24 Z"
          fill="rgba(255, 255, 255, 0.45)"
        />

        {/* Islamic 8-Pointed Star Accent */}
        <g transform="translate(68, 34) scale(0.65)">
          <path
            d="M0 -15 L4 -4 L15 0 L4 4 L0 15 L-4 4 L-15 0 L-4 -4 Z"
            fill="url(#starShine)"
          />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>
      </svg>
    </motion.div>
  );
}
