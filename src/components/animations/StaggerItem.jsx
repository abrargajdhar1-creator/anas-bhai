import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * StaggerItem works inside StaggerContainer to animate upward with subtle scale.
 */
export default function StaggerItem({
  children,
  className = '',
  style = {},
  duration = 0.6,
  yOffset = 24,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}
