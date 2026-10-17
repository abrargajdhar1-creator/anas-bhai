import React, { useState } from 'react';
import {
  Award,
  Users,
  Clock,
  Sparkles,
  Heart,
  BarChart3,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import StaggerContainer from './animations/StaggerContainer';
import StaggerItem from './animations/StaggerItem';

export default function WhyChooseUs() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const features = [
    {
      icon: Award,
      title: 'Qualified Asatizah',
      desc: 'Taught by certified scholars dedicated to preserving the pristine transmission of Qur’anic and prophetic knowledge.',
    },
    {
      icon: Users,
      title: '1-on-1 Individual Attention',
      desc: 'Every session provides focused guidance where Asatizah address personal pronunciation hurdles and learning speeds.',
    },
    {
      icon: Clock,
      title: 'Flexible Class Schedules',
      desc: 'Convenient time slots designed to harmonize with school schedules, university studies, and working professional routines.',
    },
    {
      icon: Heart,
      title: 'Dedicated Female Faculty',
      desc: 'Comfortable, private, and encouraging learning spaces with qualified female teachers for sisters and young children.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Moral Ethics (Akhlaaq)',
      desc: 'Integrating daily prophetic manners, gratitude, respect, and sunnah Duas so knowledge translates directly into noble character.',
    },
    {
      icon: BarChart3,
      title: 'Parent Reports & Progress Checkpoints',
      desc: 'Transparent reviews and milestone celebrations so parents are continually informed about their child’s Quranic growth.',
    },
  ];

  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-pale-sage)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSectionHeading
          badge="The Fursan Difference"
          title="Why Families Trust Fursan Academy"
          highlightWord="Trust"
          subtitle="A nurturing sanctuary for authentic Islamic education blending timeless scholarly traditions with warm, compassionate teaching."
          theme="light"
        />

        <StaggerContainer staggerDelay={0.1} threshold={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <StaggerItem key={idx}>
                  <div
                    className="luxury-card"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      height: '100%',
                      padding: '2rem 1.75rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.25rem',
                      backgroundColor: 'var(--color-warm-white)',
                      borderColor: isHovered
                        ? 'var(--color-champagne-gold)'
                        : 'var(--border-light)',
                    }}
                  >
                    {/* Icon container with micro-motion */}
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: isHovered
                          ? 'var(--color-royal-emerald)'
                          : 'var(--color-pale-sage-light)',
                        border: '1px solid rgba(6, 78, 59, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHovered
                          ? 'var(--color-champagne-gold)'
                          : 'var(--color-royal-emerald)',
                        flexShrink: 0,
                        transform: isHovered ? 'scale(1.08) rotate(3deg)' : 'scale(1)',
                        transition: 'all var(--transition-normal)',
                        boxShadow: isHovered
                          ? '0 6px 15px rgba(6, 78, 59, 0.2)'
                          : 'none',
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: 'var(--color-midnight-green)',
                          marginBottom: '0.45rem',
                        }}
                      >
                        {feat.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--color-slate-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
