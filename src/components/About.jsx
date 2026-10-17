import React from 'react';
import { Award, Compass, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import Reveal from './animations/Reveal';
import StaggerContainer from './animations/StaggerContainer';
import StaggerItem from './animations/StaggerItem';

export default function About() {
  const pillars = [
    {
      icon: Award,
      title: 'Authentic Tajweed',
      desc: 'Precision in Arabic phonetics (Makharij) and recitation rules handed down through authentic classical traditions.',
    },
    {
      icon: HeartHandshake,
      title: 'Character & Akhlaaq',
      desc: 'Nurturing modesty, honesty, kindness, and prophetic manners in every student beyond just academic memorization.',
    },
    {
      icon: Compass,
      title: 'Spiritual Growth',
      desc: 'Fostering deep love for Allah ﷻ and His Messenger ﷺ to build a strong, lifelong Islamic identity.',
    },
    {
      icon: Shield,
      title: 'Personalized Pace',
      desc: 'Individualized lesson plans tailored to each learner’s age, baseline proficiency, and personal retention capability.',
    },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-soft-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(230, 240, 233, 0.8) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSectionHeading
          badge="Our Heritage & Purpose"
          title="Nurturing Hearts With Divine Wisdom"
          highlightWord="Divine"
          subtitle="At Fursan Islamic Academy, we combine traditional scholarly rigor with modern, compassionate mentorship to make sacred knowledge accessible to all seekers."
          theme="light"
        />

        {/* Two Column Story / Vision Presentation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left Column: Mission Description */}
          <Reveal direction="left" duration={0.7}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-royal-emerald)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                <Sparkles size={16} color="#B99A50" />
                <span>Mission & Vision</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: 'var(--color-midnight-green)',
                  lineHeight: 1.3,
                  fontWeight: 700,
                }}
              >
                Illuminating Minds, Grounding Imaan, and Inspiring Noble Action
              </h3>

              <p style={{ color: 'var(--color-slate-text)', fontSize: '1.025rem', lineHeight: 1.8 }}>
                <strong>Fursan Islamic Academy</strong> was established with a singular devotion:
                to bridge hearts directly with the Book of Allah and the noble Sunnah of
                the Prophet Muhammad ﷺ. Whether a child is voicing their first Arabic letters
                in Noorani Qaida, or a mature learner is seeking fluency with Tajweed and
                foundational Fiqh, we walk alongside every student with patience, warmth,
                and scholarly integrity.
              </p>

              <p style={{ color: 'var(--color-slate-muted)', fontSize: '0.975rem', lineHeight: 1.75 }}>
                Our experienced Asatizah create an uplifting, judgment-free environment
                where questions are welcomed, pronunciation is gently polished, and daily
                Islamic ethics become a natural way of life.
              </p>

              {/* Calligraphy Quote Banner */}
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-pale-sage)',
                  borderLeft: '4px solid var(--color-champagne-gold)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: '1.35rem',
                    color: 'var(--color-royal-emerald)',
                    textAlign: 'right',
                    direction: 'rtl',
                    marginBottom: '0.35rem',
                  }}
                >
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-slate-text)',
                    fontStyle: 'italic',
                  }}
                >
                  “The best of you are those who learn the Qur'an and teach it.” — Sahih al-Bukhari
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Key Stats / Overview Highlight Card */}
          <Reveal direction="right" duration={0.7} delay={0.15}>
            <div
              className="luxury-card-dark"
              style={{
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle Corner Ornament */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--color-gold-glow) 0%, transparent 70%)',
                }}
              />

              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  color: 'var(--color-champagne-gold)',
                  marginBottom: '1rem',
                  fontWeight: 700,
                }}
              >
                The Fursan Standard
              </h4>

              <p
                style={{
                  color: 'var(--color-text-on-dark-muted)',
                  fontSize: '0.975rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                Structured milestones, regular parent check-ins, and individualized
                attention ensure every student achieves lasting proficiency.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(2, 44, 34, 0.6)',
                    border: '1px solid rgba(214, 181, 109, 0.25)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-champagne-gold)',
                      lineHeight: 1,
                    }}
                  >
                    1-on-1
                  </div>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-text-on-dark-muted)',
                      marginTop: '0.4rem',
                    }}
                  >
                    Personal Mentorship Option
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(2, 44, 34, 0.6)',
                    border: '1px solid rgba(214, 181, 109, 0.25)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-champagne-gold)',
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-text-on-dark-muted)',
                      marginTop: '0.4rem',
                    }}
                  >
                    Individualized Learning Plan
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(2, 44, 34, 0.6)',
                    border: '1px solid rgba(214, 181, 109, 0.25)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-champagne-gold)',
                      lineHeight: 1,
                    }}
                  >
                    6+1
                  </div>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-text-on-dark-muted)',
                      marginTop: '0.4rem',
                    }}
                  >
                    Weekly Curriculum Schedule
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(2, 44, 34, 0.6)',
                    border: '1px solid rgba(214, 181, 109, 0.25)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-champagne-gold)',
                      lineHeight: 1,
                    }}
                  >
                    Direct
                  </div>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-text-on-dark-muted)',
                      marginTop: '0.4rem',
                    }}
                  >
                    Asatizah Support via WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Pillars Grid */}
        <StaggerContainer staggerDelay={0.12} threshold={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={index}>
                  <div
                    className="luxury-card"
                    style={{
                      padding: '2rem 1.75rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-pale-sage)',
                        border: '1px solid rgba(6, 78, 59, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-royal-emerald)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: 'var(--color-midnight-green)',
                        fontWeight: 700,
                        marginBottom: '0.65rem',
                      }}
                    >
                      {pillar.title}
                    </h4>

                    <p
                      style={{
                        color: 'var(--color-slate-muted)',
                        fontSize: '0.925rem',
                        lineHeight: 1.65,
                      }}
                    >
                      {pillar.desc}
                    </p>
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
