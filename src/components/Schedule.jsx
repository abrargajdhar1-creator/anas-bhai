import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Sparkles, Check, Star } from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import Reveal from './animations/Reveal';

export default function Schedule() {
  const shouldReduceMotion = useReducedMotion();

  const scheduleDays = [
    {
      period: 'Days 1 – 4',
      badge: 'Core Daily Routine',
      title: "Qur'an Nazirah & Urdu Practice",
      arabicTag: 'ناظرہ قرآن و اردو مشق',
      isOptional: false,
      description:
        "Daily immersive Qur'anic recitation focusing on fluent Nazirah, articulation precision (Makharij), and foundational Urdu literacy to strengthen comprehension of classical Islamic texts.",
      points: [
        'Word-by-word pronunciation correction',
        'Fluent reading tempo and breath management',
        'Basic Urdu vocabulary & alphabet literacy',
      ],
    },
    {
      period: 'Day 5',
      badge: 'Weekly Prophetic Science',
      title: 'Foundational Hadith Studies',
      arabicTag: 'علم الحدیث',
      isOptional: false,
      description:
        'Engaging lessons exploring authentic sayings, noble guidance, and compassionate actions of the Prophet Muhammad ﷺ (selected from foundational Hadith collections).',
      points: [
        'Short memorization of select practical Ahadith',
        'Life lessons, truthfulness, and humility',
        'Etiquettes of dealing with parents and elders',
      ],
    },
    {
      period: 'Day 6',
      badge: 'Practical Islamic Living',
      title: 'Islamic Teachings, Fiqh & Masnoon Duas',
      arabicTag: 'فقه وادعية مسنونة',
      isOptional: false,
      description:
        'Practical guidance on essential rulings of worship (Taharah, Wudhu, Salah) paired with the memorization of beautiful daily Masnoon Duas from the Sunnah.',
      points: [
        'Step-by-step practical prayer (Salah) correction',
        'Daily morning, evening, and situational Duas',
        'Halal/Haram fundamentals and upright morals',
      ],
    },
    {
      period: 'Day 7 (Sunday)',
      badge: 'Optional Specialized Session',
      title: 'Optional Sunday Session',
      arabicTag: 'جلسة الأحد الاختيارية',
      isOptional: true,
      description:
        'Dedicated supplementary session tailored for student revision, makeup lessons, individual Q&A with Asatizah, and personalized spiritual discussions for interested families.',
      points: [
        'Review and consolidation of weekly syllabus',
        'Interactive open Q&A session with Shaikh',
        'One-on-one catch-up for busy learners',
      ],
    },
  ];

  return (
    <section
      id="schedule"
      className="section-padding"
      style={{
        backgroundColor: '#022C22',
        backgroundImage:
          'radial-gradient(circle at 50% 10%, rgba(6, 78, 59, 0.5) 0%, #022C22 75%)',
        color: 'var(--color-text-on-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Gold Star Grid */}
      <div
        className="islamic-star-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSectionHeading
          badge="Structured Routine"
          title="Responsive Weekly Learning Timeline"
          highlightWord="Timeline"
          subtitle="A systematic seven-day cycle balancing Qur'an Nazirah fluency, Prophetic Hadith, practical Fiqh, and dedicated revision."
          theme="dark"
        />

        {/* ==========================================================
            DESKTOP HORIZONTAL TIMELINE (Visible on width >= 992px)
            ========================================================== */}
        <div className="desktop-timeline-wrapper">
          {/* Animated Horizontal Connecting Line */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              marginBottom: '3rem',
              paddingTop: '1rem',
            }}
          >
            {/* Background line */}
            <div
              style={{
                position: 'absolute',
                top: '28px',
                left: '8%',
                right: '8%',
                height: '3px',
                backgroundColor: 'rgba(214, 181, 109, 0.2)',
                zIndex: 1,
              }}
            />

            {/* Animated gold glowing line */}
            <motion.div
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '28px',
                left: '8%',
                right: '8%',
                height: '3px',
                background:
                  'linear-gradient(90deg, #064E3B 0%, #D6B56D 60%, #B99A50 100%)',
                transformOrigin: 'left',
                boxShadow: '0 0 10px rgba(214, 181, 109, 0.5)',
                zIndex: 2,
              }}
            />

            {/* Circular Markers on Line */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                position: 'relative',
                zIndex: 3,
              }}
            >
              {scheduleDays.map((day, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <motion.div
                    initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.3 + idx * 0.18,
                      type: 'spring',
                      stiffness: 220,
                      damping: 18,
                    }}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: day.isOptional ? '#101B3D' : '#064E3B',
                      border: day.isOptional
                        ? '2px dashed var(--color-champagne-gold)'
                        : '2px solid var(--color-champagne-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-champagne-gold)',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      boxShadow: '0 0 16px rgba(214, 181, 109, 0.35)',
                    }}
                  >
                    {idx + 1}
                  </motion.div>

                  <div
                    style={{
                      marginTop: '0.75rem',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: day.isOptional
                        ? 'var(--color-champagne-gold)'
                        : '#FFFFFF',
                      textAlign: 'center',
                    }}
                  >
                    {day.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Cards Grid Below Line */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
              alignItems: 'stretch',
            }}
          >
            {scheduleDays.map((day, idx) => (
              <Reveal
                key={idx}
                direction="up"
                delay={0.4 + idx * 0.12}
                duration={0.6}
              >
                <div
                  className="luxury-card-dark"
                  style={{
                    height: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    border: day.isOptional
                      ? '1px dashed var(--border-gold-strong)'
                      : '1px solid var(--border-dark)',
                    backgroundColor: day.isOptional
                      ? 'rgba(16, 27, 61, 0.85)'
                      : 'rgba(6, 78, 59, 0.45)',
                  }}
                >
                  <div style={{ marginBottom: '0.85rem' }}>
                    <span
                      className="gold-badge"
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.25rem 0.65rem',
                        backgroundColor: day.isOptional
                          ? 'rgba(214, 181, 109, 0.2)'
                          : 'rgba(2, 44, 34, 0.6)',
                      }}
                    >
                      {day.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: day.isOptional
                        ? 'var(--color-champagne-gold)'
                        : '#FFFFFF',
                      marginBottom: '0.5rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {day.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '1rem',
                      color: 'var(--color-champagne-gold)',
                      direction: 'rtl',
                      marginBottom: '0.75rem',
                      opacity: 0.85,
                    }}
                  >
                    {day.arabicTag}
                  </div>

                  <p
                    style={{
                      color: 'var(--color-text-on-dark-muted)',
                      fontSize: '0.865rem',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {day.description}
                  </p>

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      {day.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.4rem',
                            fontSize: '0.785rem',
                            color: 'var(--color-text-on-dark)',
                          }}
                        >
                          <Check
                            size={13}
                            color="#D6B56D"
                            style={{ flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ==========================================================
            MOBILE VERTICAL TIMELINE (Visible on width < 992px)
            ========================================================== */}
        <div className="mobile-timeline-wrapper">
          <div
            style={{
              position: 'relative',
              paddingLeft: '2.5rem',
            }}
          >
            {/* Continuous Vertical Connecting Line */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                bottom: '15px',
                left: '17px',
                width: '3px',
                background:
                  'linear-gradient(180deg, #064E3B 0%, #D6B56D 60%, #B99A50 100%)',
                boxShadow: '0 0 8px rgba(214, 181, 109, 0.4)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {scheduleDays.map((day, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1} duration={0.5}>
                  <div style={{ position: 'relative' }}>
                    {/* Circular Day Marker Pin */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2.5rem',
                        top: '1.25rem',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: day.isOptional ? '#101B3D' : '#064E3B',
                        border: day.isOptional
                          ? '2px dashed var(--color-champagne-gold)'
                          : '2px solid var(--color-champagne-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-champagne-gold)',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        boxShadow: '0 0 12px rgba(214, 181, 109, 0.3)',
                        zIndex: 2,
                      }}
                    >
                      {idx + 1}
                    </div>

                    {/* Content Card */}
                    <div
                      className="luxury-card-dark"
                      style={{
                        padding: '1.5rem',
                        border: day.isOptional
                          ? '1px dashed var(--border-gold-strong)'
                          : '1px solid var(--border-dark)',
                        backgroundColor: day.isOptional
                          ? 'rgba(16, 27, 61, 0.9)'
                          : 'rgba(6, 78, 59, 0.55)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          flexWrap: 'wrap',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            color: day.isOptional
                              ? 'var(--color-champagne-gold)'
                              : '#FFFFFF',
                          }}
                        >
                          {day.period}
                        </span>

                        <span
                          className="gold-badge"
                          style={{
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.6rem',
                          }}
                        >
                          {day.badge}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.25rem',
                          color: '#FFFFFF',
                          marginBottom: '0.35rem',
                        }}
                      >
                        {day.title}
                      </h3>

                      <div
                        style={{
                          fontFamily: 'var(--font-arabic)',
                          fontSize: '1.1rem',
                          color: 'var(--color-champagne-gold)',
                          direction: 'rtl',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {day.arabicTag}
                      </div>

                      <p
                        style={{
                          color: 'var(--color-text-on-dark-muted)',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                          marginBottom: '1rem',
                        }}
                      >
                        {day.description}
                      </p>

                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.4rem',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          paddingTop: '0.85rem',
                        }}
                      >
                        {day.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.4rem',
                              fontSize: '0.825rem',
                              color: 'var(--color-text-on-dark)',
                            }}
                          >
                            <Check
                              size={14}
                              color="#D6B56D"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Note on Individual Learning Plans */}
        <Reveal direction="up" delay={0.3} duration={0.6}>
          <div
            style={{
              marginTop: '3.5rem',
              padding: '1.25rem 2rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(6, 78, 59, 0.4)',
              border: '1px solid rgba(214, 181, 109, 0.25)',
              textAlign: 'center',
              maxWidth: '820px',
              marginInline: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: 'var(--color-champagne-gold)',
                fontWeight: 600,
                fontSize: '0.925rem',
                marginBottom: '0.35rem',
              }}
            >
              <Clock size={16} />
              <span>Individual Learning Plans & Flexible Timing Slots</span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-on-dark-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Class schedules and slot timings are customized based on the student’s time zone,
              academic school hours, and personal capacity. Connect with our admissions counselors
              to arrange your personalized schedule.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Media query styling toggle between desktop and mobile timeline */}
      <style>{`
        .desktop-timeline-wrapper {
          display: block;
        }
        .mobile-timeline-wrapper {
          display: none;
        }

        @media (max-width: 991px) {
          .desktop-timeline-wrapper {
            display: none !important;
          }
          .mobile-timeline-wrapper {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
