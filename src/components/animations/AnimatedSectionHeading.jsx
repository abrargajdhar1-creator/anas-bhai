import React from 'react';
import Reveal from './Reveal';

/**
 * Luxury section heading with gold kicker badge, serif heading,
 * optional highlighted words, and ornamental Islamic divider.
 */
export default function AnimatedSectionHeading({
  badge,
  title,
  highlightWord,
  subtitle,
  align = 'center',
  theme = 'light', // 'light' (on ivory/white) or 'dark' (on emerald/midnight)
  className = '',
}) {
  const isDark = theme === 'dark';

  // Highlight specific word if provided
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} style={{ color: 'var(--color-champagne-gold)' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const textAlignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div
      className={`animated-heading-container ${textAlignClass} ${className}`}
      style={{
        marginBottom: '3.5rem',
        maxWidth: align === 'center' ? '740px' : '100%',
        marginInline: align === 'center' ? 'auto' : '0',
      }}
    >
      {badge && (
        <Reveal direction="down" duration={0.5}>
          <div style={{ display: 'inline-block', marginBottom: '0.85rem' }}>
            <span
              className="gold-badge"
              style={{
                backgroundColor: isDark
                  ? 'rgba(214, 181, 109, 0.12)'
                  : 'rgba(6, 78, 59, 0.06)',
                borderColor: 'var(--border-gold)',
              }}
            >
              ✦ {badge}
            </span>
          </div>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.1} duration={0.65}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: isDark ? 'var(--color-text-on-dark)' : 'var(--color-midnight-green)',
            marginBottom: '0.75rem',
            letterSpacing: '0.02em',
          }}
        >
          {renderTitle()}
        </h2>
      </Reveal>

      {/* Ornamental Islamic Divider */}
      <Reveal direction="none" delay={0.2} duration={0.5}>
        <div
          className="ornamental-divider"
          style={{
            justifyContent:
              align === 'left'
                ? 'flex-start'
                : align === 'right'
                ? 'flex-end'
                : 'center',
          }}
        >
          <span className="line" />
          <span className="symbol" aria-hidden="true">
            ☪
          </span>
          <span className="line reverse" />
        </div>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.25} duration={0.6}>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: isDark
                ? 'var(--color-text-on-dark-muted)'
                : 'var(--color-slate-muted)',
              marginTop: '0.25rem',
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
