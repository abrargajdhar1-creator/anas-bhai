import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar({ onSelectCourse }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Passive scroll listener for performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Weekly Schedule', href: '#schedule' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    // Smooth scroll handles natively or via element
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled
          ? 'rgba(2, 44, 34, 0.96)'
          : 'rgba(2, 44, 34, 0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid rgba(214, 181, 109, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
        paddingTop: isScrolled ? '0.75rem' : '1.25rem',
        paddingBottom: isScrolled ? '0.75rem' : '1.25rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
            }}
          >
            {/* Gold Crescent & Minaret Icon */}
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
                flexShrink: 0,
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
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: '#F0F6F3',
                  fontSize: '0.925rem',
                  fontWeight: 500,
                  position: 'relative',
                  padding: '0.35rem 0',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#D6B56D')}
                onMouseLeave={(e) => (e.target.style.color = '#F0F6F3')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Admission CTA & Contact */}
          <div
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <a
              href="tel:8103726342"
              title="Call Admissions Office"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--color-champagne-gold)',
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '0.4rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(214, 181, 109, 0.1)',
                border: '1px solid rgba(214, 181, 109, 0.25)',
              }}
            >
              <Phone size={14} />
              <span>8103726342</span>
            </a>

            <a
              href="#admissions"
              onClick={(e) => handleLinkClick(e, '#admissions')}
              className="btn-gold-primary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.875rem',
              }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(214, 181, 109, 0.12)',
              border: '1px solid rgba(214, 181, 109, 0.3)',
              color: 'var(--color-champagne-gold)',
            }}
            className="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            top: '100%',
            left: 0,
            right: 0,
            height: 'calc(100vh - 100%)',
            minHeight: '100vh',
            backgroundColor: '#022C22',
            backgroundImage:
              'radial-gradient(circle at 50% 20%, rgba(6, 78, 59, 0.6) 0%, #022C22 80%)',
            padding: '2rem 1.5rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-gold)',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-champagne-gold)',
                fontWeight: 600,
                marginBottom: '0.25rem',
              }}
            >
              Navigation
            </span>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--color-champagne-gold)', fontSize: '0.9rem' }}>
                  →
                </span>
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-gold)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.85rem' }}>
              Admissions Helpline:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href="tel:8103726342"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(214, 181, 109, 0.15)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--color-champagne-gold)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                <Phone size={15} /> 8103726342
              </a>
              <a
                href="tel:9165329351"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(214, 181, 109, 0.15)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--color-champagne-gold)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                <Phone size={15} /> 91653 29351
              </a>
            </div>

            <a
              href="#admissions"
              onClick={(e) => handleLinkClick(e, '#admissions')}
              className="btn-gold-primary"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Enroll Now — Online Admission
            </a>
          </div>
        </div>
      )}

      {/* Responsive Media Query Styles for Desktop/Mobile Navbar */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
