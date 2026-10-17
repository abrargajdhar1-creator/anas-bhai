import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import Reveal from './animations/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'What is the recommended age to start Noorani Qaida?',
      answer:
        'Children can comfortably begin from age 4 or 5. Our Asatizah utilize engaging visual aids and gentle repetition. However, Noorani Qaida is equally suitable for reverts, teenagers, and adult brothers and sisters who wish to rebuild their pronunciation from foundational basics.',
    },
    {
      question: 'Are classes conducted online or in-person?',
      answer:
        'Fursan Islamic Academy provides high-definition, interactive 1-on-1 and small group live online sessions via modern platforms (Zoom/Google Meet). Students can learn from the safety and convenience of their homes across India, the Gulf, the UK, the US, and Canada.',
    },
    {
      question: 'Are female teachers available for sisters and young girls?',
      answer:
        'Yes, alhamdulillah. We have dedicated, qualified female Islamic teachers for female students and young children, ensuring complete privacy, comfort, and an encouraging educational environment.',
    },
    {
      question: 'Can I schedule a free trial or assessment session before enrolling?',
      answer:
        'Yes. We offer an initial evaluation consultation where an Ustad assesses the student’s current recitation level, discusses goals, and suggests the ideal course and class timing.',
    },
    {
      question: 'What happens if a student misses a scheduled class?',
      answer:
        'We understand that family emergencies, exams, and travel happen. With prior notice to your assigned teacher or academy coordinator, makeup sessions can be scheduled during flexible slots or the optional Sunday review window.',
    },
    {
      question: 'How do I complete enrollment and start classes?',
      answer:
        'Simply fill out the Admission form above or send a message directly to our official WhatsApp helplines (8103726342 / 91653 29351). Our team will confirm your preferred timing and schedule your first session.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-soft-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '860px' }}>
        <AnimatedSectionHeading
          badge="Frequently Asked Questions"
          title="Clarifying Your Inquiries"
          highlightWord="Inquiries"
          subtitle="Everything you need to know about our courses, scheduling, Asatizah, and online admissions."
          theme="light"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={idx} direction="up" delay={idx * 0.06} duration={0.5}>
                <div
                  className="luxury-card"
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    borderColor: isOpen
                      ? 'var(--color-champagne-gold)'
                      : 'var(--border-light)',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    overflow: 'hidden',
                    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    style={{
                      width: '100%',
                      padding: '1.4rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: isOpen
                          ? 'var(--color-royal-emerald)'
                          : 'var(--color-midnight-green)',
                        transition: 'color var(--transition-fast)',
                      }}
                    >
                      {faq.question}
                    </span>

                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen
                          ? 'var(--color-royal-emerald)'
                          : 'var(--color-pale-sage)',
                        color: isOpen ? 'var(--color-champagne-gold)' : 'var(--color-royal-emerald)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-question-${idx}`}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1, height: 'auto' }
                            : { opacity: 0, height: 0 }
                        }
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1, height: 'auto' }
                            : { opacity: 1, height: 'auto' }
                        }
                        exit={
                          shouldReduceMotion
                            ? { opacity: 1, height: 'auto' }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          style={{
                            padding: '0 1.75rem 1.5rem',
                            color: 'var(--color-slate-muted)',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            borderTop: '1px solid rgba(6, 78, 59, 0.06)',
                            paddingTop: '1rem',
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
