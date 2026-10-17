import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#022C22',
        color: 'var(--color-text-on-dark)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
      }}
    >
      {/* Subtle Islamic Star Background */}
      <div
        className="islamic-star-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Grid of Footer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #064E3B 0%, #022C22 100%)',
                  border: '1.5px solid var(--color-champagne-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(214, 181, 109, 0.3)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 3 C9 5 6 10 7.5 15.5 C9 20 14 22 18 20 C13.5 22.5 8 19.5 6.5 14 C5 8.5 9 4 14 3 Z"
                    fill="#D6B56D"
                  />
                  <circle cx="16" cy="7" r="1.5" fill="#FFF2D6" />
                </svg>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '0.04em',
                    display: 'block',
                    lineHeight: 1.15,
                  }}
                >
                  FURSAN
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    color: 'var(--color-champagne-gold)',
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  Islamic Academy
                </span>
              </div>
            </div>

            <p
              style={{
                color: 'var(--color-text-on-dark-muted)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}
            >
              Dedicated to delivering authentic Qur'anic sciences, Tajweed fluency,
              and foundational Islamic character building under the compassionate
              instruction of certified scholars.
            </p>

            {/* Helpline Numbers Box */}
            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(6, 78, 59, 0.5)',
                border: '1px solid rgba(214, 181, 109, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-champagne-gold)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Official Admission Helplines:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="tel:8103726342"
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Phone size={14} color="#D6B56D" /> 8103726342
                </a>
                <span style={{ color: 'rgba(214, 181, 109, 0.4)' }}>•</span>
                <a
                  href="tel:9165329351"
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Phone size={14} color="#D6B56D" /> 91653 29351
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Courses Offered */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--color-champagne-gold)',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Course Programs
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <li>
                <a
                  href="#courses"
                  style={{
                    color: 'var(--color-text-on-dark-muted)',
                    fontSize: '0.9rem',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#D6B56D')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-on-dark-muted)')}
                >
                  Noorani Qaida Course
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  style={{
                    color: 'var(--color-text-on-dark-muted)',
                    fontSize: '0.9rem',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#D6B56D')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-on-dark-muted)')}
                >
                  Qur'an Tilawat aur Islami Taleemaat
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  style={{
                    color: 'var(--color-text-on-dark-muted)',
                    fontSize: '0.9rem',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#D6B56D')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-on-dark-muted)')}
                >
                  Personalized Islamic Studies Program
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  style={{
                    color: 'var(--color-text-on-dark-muted)',
                    fontSize: '0.9rem',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#D6B56D')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-on-dark-muted)')}
                >
                  Weekly Schedule & Curriculum
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Asatizah Faculty */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--color-champagne-gold)',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Academy Faculty
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <li style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.9rem' }}>
                Shaikh Faizan — <span style={{ color: '#FFFFFF' }}>Qur'anic Sciences</span>
              </li>
              <li style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.9rem' }}>
                Shaikh Imran — <span style={{ color: '#FFFFFF' }}>Tilawat & Hadith</span>
              </li>
              <li style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.9rem' }}>
                Shaikh Aamir — <span style={{ color: '#FFFFFF' }}>Islamic Taleemaat</span>
              </li>
              <li style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.9rem' }}>
                Shaikh Anas Ismail — <span style={{ color: '#FFFFFF' }}>Lead Educator</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Inquiries & WhatsApp */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--color-champagne-gold)',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Get in Touch
            </h4>
            <p
              style={{
                color: 'var(--color-text-on-dark-muted)',
                fontSize: '0.885rem',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              Reach out to begin your introductory class or discuss curriculum requirements.
            </p>

            <a
              href="https://wa.me/918103726342?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20Fursan%20Islamic%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp Us: 8103726342</span>
            </a>

            <a
              href="#admissions"
              className="btn-gold-primary"
              style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
            >
              <span>Apply for Admission</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(214, 181, 109, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-on-dark-muted)' }}>
            © {new Date().getFullYear()} <strong>Fursan Islamic Academy</strong>. All rights reserved.
            Preserving sacred knowledge with dignity and excellence.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-champagne-gold)',
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(214, 181, 109, 0.12)',
              border: '1px solid var(--border-gold)',
              transition: 'background var(--transition-fast)',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
