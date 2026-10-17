import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Lightweight scroll progress bar at top of viewport.
 * Uses hardware-accelerated transform scaleX.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, #B99A50 0%, #D6B56D 50%, #FFF2D6 100%)',
        zIndex: 1001,
        pointerEvents: 'none',
        boxShadow: '0 0 10px rgba(214, 181, 109, 0.5)',
      }}
    />
  );
}
