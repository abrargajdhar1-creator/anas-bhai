import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable Reveal component that safely fades and slides in on scroll.
 * Respects prefers-reduced-motion to prevent disorientation and ensures
 * content is never permanently hidden.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 28,
  className = '',
  style = {},
  threshold = 0.15,
}) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render without movement/delays
  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  const variants = {
    hidden: {
      opacity: 0,
      x: initialOffset.x,
      y: initialOffset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier easing
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
