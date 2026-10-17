import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, MessageCircle, ShieldCheck, Sparkles, BookOpen, Clock } from 'lucide-react';
import FloatingCrescent from './animations/FloatingCrescent';
import AnimatedButton from './animations/AnimatedButton';
import Reveal from './animations/Reveal';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Staggered lines for the cinematic hero heading
  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: shouldReduceMotion ? 0 : custom * 0.16,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        backgroundColor: '#022C22',
      }}
    >
      {/* Background Islamic Architecture Image with Rich Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.35,
          zIndex: 1,
        }}
      />

      {/* Luxury Midnight Green & Royal Emerald Dual Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 20%, rgba(6, 78, 59, 0.75) 0%, rgba(2, 44, 34, 0.94) 75%, #022C22 100%)',
          zIndex: 2,
        }}
      />

      {/* Subtle Islamic Geometric Star Grid Overlay */}
      <div
        className="islamic-star-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Restrained Twinkling Stars Accents */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '22%',
            left: '12%',
            color: '#D6B56D',
            fontSize: '12px',
            opacity: 0.6,
          }}
        >
          ✦
        </span>
        <span
          style={{
            position: 'absolute',
            top: '30%',
            right: '15%',
            color: '#D6B56D',
            fontSize: '16px',
            opacity: 0.7,
          }}
        >
          ✦
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '8%',
            color: '#FFF2D6',
            fontSize: '10px',
            opacity: 0.5,
          }}
        >
          ✦
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '35%',
            right: '10%',
            color: '#D6B56D',
            fontSize: '14px',
            opacity: 0.6,
          }}
        >
          ✦
        </span>
      </div>

      {/* Floating Crescent Positioned Elegantly on Right Side (Desktop) */}
      <div
        style={{
          position: 'absolute',
          top: '16%',
          right: '5%',
          zIndex: 4,
          opacity: 0.9,
        }}
        className="hero-crescent-desktop"
      >
        <FloatingCrescent size={155} glowColor="rgba(214, 181, 109, 0.45)" />
      </div>

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
          maxWidth: '920px',
        }}
      >
        {/* Academy Kicker Badge */}
        <Reveal direction="down" duration={0.6}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              backgroundColor: 'rgba(214, 181, 109, 0.12)',
              border: '1px solid rgba(214, 181, 109, 0.35)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-champagne-gold)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Sparkles size={15} />
            <span>Excellence in Qur'anic & Islamic Education</span>
          </div>
        </Reveal>

        {/* Cinematic Staggered Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 5.2vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            color: '#FFFFFF',
            letterSpacing: '0.015em',
            marginBottom: '1.5rem',
          }}
        >
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            style={{ display: 'block' }}
          >
            Learn the{' '}
            <span style={{ color: 'var(--color-champagne-gold)' }}>Qur'an</span>.
          </motion.span>
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            style={{ display: 'block' }}
          >
            Strengthen Your{' '}
            <span style={{ color: 'var(--color-champagne-gold)' }}>Imaan</span>.
          </motion.span>
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            style={{ display: 'block' }}
          >
            Build Your{' '}
            <span style={{ color: 'var(--color-champagne-gold)' }}>Future</span>.
          </motion.span>
        </h1>

        {/* Ornamental Gold Divider */}
        <div
          className="ornamental-divider"
          style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}
        >
          <span className="line" style={{ width: '80px' }} />
          <span
            className="symbol"
            style={{ color: 'var(--color-champagne-gold)', fontSize: '1.25rem' }}
          >
            ۞
          </span>
          <span className="line reverse" style={{ width: '80px' }} />
        </div>

        {/* Supporting Paragraph */}
        <Reveal direction="up" delay={0.45} duration={0.65}>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: 1.75,
              color: 'var(--color-text-on-dark-muted)',
              maxWidth: '750px',
              margin: '0 auto 2.5rem',
              fontWeight: 400,
            }}
          >
            Empowering seekers of all ages with authentic Tajweed recitation,
            foundational Arabic literacy, and character-building Islamic teachings
            guided by qualified, caring Asatizah.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal direction="up" delay={0.6} duration={0.65}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.15rem',
              marginBottom: '3.5rem',
            }}
          >
            <AnimatedButton
              href="#admissions"
              variant="gold"
              ariaLabel="Apply for Online Admission"
            >
              Apply for Admission
            </AnimatedButton>

            <AnimatedButton
              href="#courses"
              variant="secondary"
              ariaLabel="Explore Courses Offered"
            >
              Explore Courses
            </AnimatedButton>

            <a
              href="https://wa.me/918103726342?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20Fursan%20Islamic%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              title="Chat with Admissions Counselor on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </Reveal>

        {/* Trust Badges */}
        <Reveal direction="up" delay={0.75} duration={0.65}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(214, 181, 109, 0.2)',
              maxWidth: '840px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                color: '#FFFFFF',
                fontSize: '0.88rem',
              }}
            >
              <ShieldCheck size={18} color="#D6B56D" />
              <span>Dedicated & Certified Scholars</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                color: '#FFFFFF',
                fontSize: '0.88rem',
              }}
            >
              <BookOpen size={18} color="#D6B56D" />
              <span>One-on-One Personalized Focus</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                color: '#FFFFFF',
                fontSize: '0.88rem',
              }}
            >
              <Clock size={18} color="#D6B56D" />
              <span>Flexible Scheduling for Students</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          color: 'var(--color-champagne-gold)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          opacity: 0.8,
          transition: 'opacity var(--transition-fast)',
        }}
      >
        <span>Discover</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </a>

      <style>{`
        @media (max-width: 1024px) {
          .hero-crescent-desktop {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
