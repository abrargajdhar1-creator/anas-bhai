import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * StaggerContainer coordinates staggered reveals among child StaggerItem components.
 */
export default function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.1,
  className = '',
  style = {},
  threshold = 0.15,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
