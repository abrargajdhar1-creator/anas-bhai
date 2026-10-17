import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * AnimatedButton provides consistent premium hover elevation,
 * gold glow, subtle directional arrow animation, and accessible keyboard focus.
 */
export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'gold', // 'gold', 'secondary', 'whatsapp'
  showArrow = true,
  className = '',
  style = {},
  type = 'button',
  icon: CustomIcon,
  ariaLabel,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const getVariantClass = () => {
    switch (variant) {
      case 'gold':
        return 'btn-gold-primary';
      case 'secondary':
        return 'btn-secondary-ghost';
      case 'whatsapp':
        return 'btn-whatsapp';
      default:
        return 'btn-gold-primary';
    }
  };

  const arrowAnimation = shouldReduceMotion
    ? {}
    : {
        x: isHovered ? 4 : 0,
        transition: { duration: 0.2, ease: 'easeOut' },
      };

  const content = (
    <>
      {CustomIcon && <CustomIcon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {showArrow && (
        <motion.span
          animate={arrowAnimation}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <ArrowRight size={17} aria-hidden="true" />
        </motion.span>
      )}
    </>
  );

  const sharedProps = {
    className: `${getVariantClass()} ${className}`,
    style,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    'aria-label': ariaLabel,
  };

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...sharedProps}>
      {content}
    </button>
  );
}
