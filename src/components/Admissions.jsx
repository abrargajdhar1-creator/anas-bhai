import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Clock,
  UserCheck,
} from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import Reveal from './animations/Reveal';

export default function Admissions({ selectedCourse, setSelectedCourse }) {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    phone: '',
    course: selectedCourse || 'Noorani Qaida Course',
    ageGroup: 'Child (5-12 years)',
    preferredTime: 'Evening',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync selectedCourse if updated externally (e.g. from Course Card "Enroll" button)
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName.trim()) {
      setErrorMsg('Please enter the student name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please provide a valid phone/WhatsApp contact number.');
      return;
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  const generateWhatsAppUrl = (phoneTarget = '918103726342') => {
    const text = encodeURIComponent(
      `*New Admission Inquiry — Fursan Islamic Academy*\n\n` +
        `• *Student Name:* ${formData.studentName || 'Not specified'}\n` +
        `• *Parent/Guardian:* ${formData.guardianName || 'Self'}\n` +
        `• *Contact Phone:* ${formData.phone}\n` +
        `• *Course of Interest:* ${formData.course}\n` +
        `• *Age Category:* ${formData.ageGroup}\n` +
        `• *Preferred Timing:* ${formData.preferredTime}\n` +
        `• *Notes:* ${formData.message || 'None'}\n\n` +
        `_Assalamu Alaikum! I would like to schedule an introductory consultation._`
    );
    return `https://wa.me/${phoneTarget}?text=${text}`;
  };

  return (
    <section
      id="admissions"
      className="section-padding"
      style={{
        backgroundColor: '#064E3B',
        backgroundImage:
          'radial-gradient(circle at 50% 10%, rgba(214, 181, 109, 0.12) 0%, rgba(2, 44, 34, 0.95) 80%)',
        color: 'var(--color-text-on-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Star Grid */}
      <div
        className="islamic-star-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSectionHeading
          badge="Admissions Open"
          title="Begin Your Sacred Learning Journey"
          highlightWord="Journey"
          subtitle="Enroll today to receive personal guidance from our respected Asatizah. Dedicated slots available for brothers, sisters, and children."
          theme="dark"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Helpline & Academy Verification */}
          <Reveal direction="left" duration={0.65}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                className="luxury-card-dark"
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(2, 44, 34, 0.75)',
                  border: '1px solid var(--border-gold)',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-champagne-gold)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  <Sparkles size={16} />
                  <span>Direct Admissions Office</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  Speak Directly With Our Asatizah
                </h3>

                <p
                  style={{
                    color: 'var(--color-text-on-dark-muted)',
                    fontSize: '0.925rem',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem',
                  }}
                >
                  We are here to answer questions regarding syllabus levels, female faculty
                  sessions, individual pace adjustments, and convenient class timings.
                </p>

                {/* Verified Helpline Numbers */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Number 1 */}
                  <div
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(6, 78, 59, 0.6)',
                      border: '1px solid rgba(214, 181, 109, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.785rem',
                          color: 'var(--color-champagne-gold)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        Helpline & WhatsApp (Primary)
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          letterSpacing: '0.03em',
                        }}
                      >
                        8103726342
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a
                        href="tel:8103726342"
                        className="btn-gold-primary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                        title="Call 8103726342"
                      >
                        <Phone size={14} />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://wa.me/918103726342?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20Fursan%20Islamic%20Academy."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Number 2 */}
                  <div
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(6, 78, 59, 0.6)',
                      border: '1px solid rgba(214, 181, 109, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.785rem',
                          color: 'var(--color-champagne-gold)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        Admissions Support Line
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          letterSpacing: '0.03em',
                        }}
                      >
                        91653 29351
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a
                        href="tel:9165329351"
                        className="btn-gold-primary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                        title="Call 9165329351"
                      >
                        <Phone size={14} />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://wa.me/919165329351?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20Fursan%20Islamic%20Academy."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Admission Highlights */}
                <div
                  style={{
                    marginTop: '1.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-on-dark-muted)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#D6B56D" />
                    <span>Free Introductory Assessment Consultation</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#D6B56D" />
                    <span>Male & Female Scholars Available</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#D6B56D" />
                    <span>Flexible Global Time Zones (IST, Gulf, UK, US/Canada)</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Admission Form */}
          <Reveal direction="right" duration={0.65} delay={0.15}>
            <div
              className="luxury-card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--color-warm-white)',
                color: 'var(--color-slate-text)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  className="gold-badge"
                  style={{
                    backgroundColor: 'rgba(6, 78, 59, 0.08)',
                    borderColor: 'var(--border-gold)',
                    color: 'var(--color-royal-emerald)',
                  }}
                >
                  Online Application
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    color: 'var(--color-midnight-green)',
                    fontWeight: 700,
                    marginTop: '0.5rem',
                  }}
                >
                  Student Enrollment Form
                </h3>
                <p style={{ color: 'var(--color-slate-muted)', fontSize: '0.9rem' }}>
                  Fill in your details below. Our academic counseling team will reach out promptly.
                </p>
              </div>

              {submitted ? (
                /* Success State */
                <div
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-pale-sage-light)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-gold)',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-royal-emerald)',
                      color: 'var(--color-champagne-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: 'var(--color-midnight-green)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    JazakAllah Khair! Application Received
                  </h4>

                  <p
                    style={{
                      color: 'var(--color-slate-text)',
                      fontSize: '0.925rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    We have recorded your interest for <strong>{formData.studentName}</strong> in the{' '}
                    <strong>{formData.course}</strong>. Our counselors will call/WhatsApp you shortly at{' '}
                    <strong>{formData.phone}</strong>.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a
                      href={generateWhatsAppUrl('918103726342')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ width: '100%' }}
                    >
                      <MessageCircle size={18} />
                      <span>Send Direct Copy on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      style={{
                        color: 'var(--color-royal-emerald)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        marginTop: '0.5rem',
                      }}
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  {errorMsg && (
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FEF2F2',
                        border: '1px solid #F87171',
                        borderRadius: 'var(--radius-sm)',
                        color: '#991B1B',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-midnight-green)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Student Full Name *
                    </label>
                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      required
                      placeholder="e.g. Zayd Rahman"
                      value={formData.studentName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #D0D5DD',
                        fontSize: '0.95rem',
                        color: 'var(--color-slate-text)',
                        backgroundColor: '#FFFFFF',
                      }}
                    />
                  </div>

                  {/* Parent / Guardian Name & Contact Phone (2 Columns) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label
                        htmlFor="guardianName"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--color-midnight-green)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        Parent / Guardian (Optional)
                      </label>
                      <input
                        id="guardianName"
                        name="guardianName"
                        type="text"
                        placeholder="Parent Name"
                        value={formData.guardianName}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid #D0D5DD',
                          fontSize: '0.95rem',
                          color: 'var(--color-slate-text)',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--color-midnight-green)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 8103726342"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid #D0D5DD',
                          fontSize: '0.95rem',
                          color: 'var(--color-slate-text)',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label
                      htmlFor="course"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-midnight-green)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Desired Course of Study *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #D0D5DD',
                        fontSize: '0.95rem',
                        color: 'var(--color-slate-text)',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="Noorani Qaida Course">Noorani Qaida Course</option>
                      <option value="Qur'an Tilawat aur Islami Taleemaat">
                        Qur'an Tilawat aur Islami Taleemaat
                      </option>
                      <option value="Personalized Islamic Studies Program">
                        Personalized Islamic Studies Program
                      </option>
                    </select>
                  </div>

                  {/* Age Category & Preferred Timing */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label
                        htmlFor="ageGroup"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--color-midnight-green)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        Student Age Level
                      </label>
                      <select
                        id="ageGroup"
                        name="ageGroup"
                        value={formData.ageGroup}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid #D0D5DD',
                          fontSize: '0.9rem',
                          color: 'var(--color-slate-text)',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <option value="Child (5-12 years)">Child (5-12 years)</option>
                        <option value="Teen / Youth (13-18 years)">Teen / Youth (13-18 years)</option>
                        <option value="Adult (Brothers / Sisters)">Adult (Brothers / Sisters)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTime"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--color-midnight-green)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid #D0D5DD',
                          fontSize: '0.9rem',
                          color: 'var(--color-slate-text)',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <option value="Morning">Morning Slots</option>
                        <option value="Afternoon">Afternoon Slots</option>
                        <option value="Evening">Evening Slots</option>
                        <option value="Flexible / Weekend">Flexible / Weekend</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message / Background */}
                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-midnight-green)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Additional Notes or Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      placeholder="Mention any prior Arabic/Quran background, sister tutor request, etc."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #D0D5DD',
                        fontSize: '0.95rem',
                        color: 'var(--color-slate-text)',
                        backgroundColor: '#FFFFFF',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-gold-primary"
                    style={{
                      width: '100%',
                      marginTop: '0.5rem',
                      padding: '0.85rem',
                    }}
                  >
                    <span>Submit Admission Inquiry</span>
                    <Send size={16} />
                  </button>

                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '0.785rem',
                      color: 'var(--color-slate-muted)',
                    }}
                  >
                    Prefer immediate WhatsApp chat? You can also message us at{' '}
                    <a
                      href="https://wa.me/918103726342"
                      style={{ color: 'var(--color-royal-emerald)', fontWeight: 700 }}
                    >
                      +91 8103726342
                    </a>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
