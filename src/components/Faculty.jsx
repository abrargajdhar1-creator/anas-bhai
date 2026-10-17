import React from 'react';
import { Award, BookOpen, GraduationCap, HeartHandshake, Mail, MessageCircle } from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import StaggerContainer from './animations/StaggerContainer';
import StaggerItem from './animations/StaggerItem';

export default function Faculty() {
  const facultyMembers = [
    {
      name: 'Shaikh Faizan',
      title: 'Senior Faculty — Qur’anic Sciences',
      specialty: 'Tajweed Mastery & Articulation',
      initials: 'SF',
      arabicName: 'الشيخ فيضان',
      bio: 'Dedicated to teaching the correct phonetic articulation (Makharij) and foundational Tajweed rules with patience and scholarly precision.',
    },
    {
      name: 'Shaikh Imran',
      title: 'Faculty — Tilawat & Hadith',
      specialty: 'Fluent Recitation & Prophetic Sunnah',
      initials: 'SI',
      arabicName: 'الشيخ عمران',
      bio: 'Guiding students through Nazirah fluency, memorization of daily Surahs, and practical life lessons from the blessed Ahadith.',
    },
    {
      name: 'Shaikh Aamir',
      title: 'Faculty — Islamic Taleemaat & Fiqh',
      specialty: 'Practical Worship & Character Building',
      initials: 'SA',
      arabicName: 'الشيخ عامر',
      bio: 'Specializing in essential Fiqh of daily worship (Salah & Taharah), moral etiquette (Akhlaaq), and memorization of Masnoon Duas.',
    },
    {
      name: 'Shaikh Anas Ismail',
      title: 'Lead Educator & Academic Coordinator',
      specialty: 'Personalized Studies & Student Mentorship',
      initials: 'AI',
      arabicName: 'الشيخ أنس إسماعيل',
      bio: 'Overseeing curriculum progression, personalized student learning plans, and guiding seekers of knowledge toward spiritual excellence.',
    },
  ];

  return (
    <section
      id="faculty"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-soft-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(214, 181, 109, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSectionHeading
          badge="Esteemed Mentors"
          title="Guided by Qualified Asatizah"
          highlightWord="Qualified"
          subtitle="Learn under the personal care of teachers committed to classical authenticity, patient pedagogy, and character refinement."
          theme="light"
        />

        <StaggerContainer staggerDelay={0.12} threshold={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {facultyMembers.map((member, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="luxury-card"
                  style={{
                    height: '100%',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  {/* Dignified Avatar Emblem with Gold Ring & Emerald Center */}
                  <div
                    style={{
                      position: 'relative',
                      width: '94px',
                      height: '94px',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {/* Outer Gold Rotating/Glow Ring */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg, #D6B56D 0%, #B99A50 50%, #FFF2D6 100%)',
                        boxShadow: '0 4px 18px rgba(214, 181, 109, 0.35)',
                      }}
                    />

                    {/* Inner Emerald Core with Initials & Islamic Emblem */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg, #064E3B 0%, #022C22 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-champagne-gold)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {member.initials}
                      </span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          color: '#FFF2D6',
                          opacity: 0.8,
                        }}
                      >
                        ✦
                      </span>
                    </div>
                  </div>

                  {/* Arabic Name */}
                  <div
                    style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '1.15rem',
                      color: 'var(--color-royal-emerald)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {member.arabicName}
                  </div>

                  {/* English Faculty Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--color-midnight-green)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {member.name}
                  </h3>

                  {/* Academic Role Badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(6, 78, 59, 0.08)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--color-royal-emerald)',
                      fontSize: '0.785rem',
                      fontWeight: 600,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {member.title}
                  </div>

                  {/* Focus Specialty */}
                  <div
                    style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-muted-gold)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {member.specialty}
                  </div>

                  {/* Bio Description */}
                  <p
                    style={{
                      fontSize: '0.885rem',
                      color: 'var(--color-slate-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* Direct Contact / Inquiry Action */}
                  <div style={{ marginTop: 'auto', width: '100%' }}>
                    <a
                      href={`https://wa.me/918103726342?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20classes%20with%20${encodeURIComponent(
                        member.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                        width: '100%',
                        padding: '0.65rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-soft-ivory)',
                        border: '1px solid var(--border-gold)',
                        color: 'var(--color-midnight-green)',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        transition: 'all var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-royal-emerald)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-soft-ivory)';
                        e.currentTarget.style.color = 'var(--color-midnight-green)';
                      }}
                    >
                      <MessageCircle size={15} color="#D6B56D" />
                      <span>Inquire for Classes</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
