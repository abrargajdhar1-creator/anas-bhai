import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedSectionHeading from './animations/AnimatedSectionHeading';
import StaggerContainer from './animations/StaggerContainer';
import StaggerItem from './animations/StaggerItem';

export default function Courses({ onSelectCourse }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const courses = [
    {
      id: 'noorani-qaida',
      name: 'Noorani Qaida Course',
      arabicTitle: 'القاعدة النورانية',
      image: '/courses/noorani_qaida.jpg',
      badge: 'Foundational Arabic',
      description:
        'A comprehensive foundation in Arabic phonetics, correct articulation points (Makharij), letter recognition, vowels (Harakaat), and connecting rules designed for beginners of all age groups.',
      syllabus: [
        'Arabic alphabet pronunciation & Makharij',
        'Harakaat (Fatha, Kasra, Damma) mastery',
        'Tanween, Sukoon, and Tashdeed rules',
        'Word formation and introductory reading',
        'One-on-one correction with certified Asatizah',
      ],
      idealFor: 'Children starting Arabic literacy, reverts, and adults seeking correct foundational reading.',
    },
    {
      id: 'quran-tilawat',
      name: "Qur'an Tilawat aur Islami Taleemaat",
      arabicTitle: 'تلاوة القرآن والتعليمات الإسلامية',
      image: '/courses/quran_tilawat.jpg',
      badge: 'Tajweed & Character',
      description:
        "Fluent Qur'anic recitation with precise Tajweed rules, memorization of essential daily Surahs, coupled with foundational Islamic values, prophetic manners (Adab), and spiritual character building.",
      syllabus: [
        "Fluent Nazirah recitation of the Holy Qur'an",
        'Tajweed rules (Madd, Ghunnah, Ikhfa, Idgham, Qalqalah)',
        'Hifz of selected Juz Amma Surahs',
        'Daily Masnoon Duas and Morning/Evening Adhkar',
        'Islamic character, manners, and moral ethics',
      ],
      idealFor: 'Students who can read Arabic letters and wish to recite the Qur’an with beauty and understanding.',
    },
    {
      id: 'personalized-islamic-studies',
      name: 'Personalized Islamic Studies Program',
      arabicTitle: 'برنامج الدراسات الإسلامية المخصص',
      image: '/courses/islamic_studies.jpg',
      badge: 'Comprehensive Mentorship',
      description:
        'A customized curriculum tailored to the student’s individual goals and pace, covering the blessed Seerah of Prophet Muhammad ﷺ, practical Fiqh essentials, Tafseer themes, and personal spiritual guidance.',
      syllabus: [
        'Detailed Seerah of the Holy Prophet ﷺ',
        'Practical Fiqh of Taharah (cleanliness) and Salah (prayer)',
        'Core Creed (Aqeedah) and Pillars of Imaan',
        'Foundational Hadith studies and moral lessons',
        'Personal mentorship and student Q&A discussions',
      ],
      idealFor: 'Seekers wanting a holistic, structured understanding of Islamic teachings adapted to their schedule.',
    },
  ];

  const handleEnrollClick = (courseName) => {
    if (onSelectCourse) {
      onSelectCourse(courseName);
    }
    const admissionsSection = document.getElementById('admissions');
    if (admissionsSection) {
      admissionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="courses"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-pale-sage-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(214, 181, 109, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSectionHeading
          badge="Sacred Curriculum"
          title="Structured Courses for Lifelong Learning"
          highlightWord="Courses"
          subtitle="Carefully calibrated modules preserving authentic Islamic sciences while accommodating modern learners with personal attention."
          theme="light"
        />

        <StaggerContainer staggerDelay={0.14} threshold={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
            }}
          >
            {courses.map((course, idx) => (
              <StaggerItem key={course.id}>
                <div
                  className="luxury-card"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--color-warm-white)',
                    borderColor:
                      hoveredIndex === idx
                        ? 'var(--color-champagne-gold)'
                        : 'var(--border-light)',
                    boxShadow:
                      hoveredIndex === idx
                        ? 'var(--shadow-card-hover)'
                        : 'var(--shadow-md)',
                    transition:
                      'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)',
                  }}
                >
                  {/* Course Thumbnail Image with Smooth Hover Zoom */}
                  <div
                    style={{
                      position: 'relative',
                      height: '210px',
                      overflow: 'hidden',
                      backgroundColor: 'var(--color-midnight-green)',
                    }}
                  >
                    <img
                      src={course.image}
                      alt={course.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />

                    {/* Gradient Overlay on Image */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(2, 44, 34, 0.1) 0%, rgba(2, 44, 34, 0.75) 100%)',
                      }}
                    />

                    {/* Badge on Image */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                      }}
                    >
                      <span
                        className="gold-badge"
                        style={{
                          backgroundColor: 'rgba(2, 44, 34, 0.85)',
                          backdropFilter: 'blur(6px)',
                          borderColor: 'var(--border-gold)',
                          color: 'var(--color-champagne-gold)',
                          fontSize: '0.78rem',
                          padding: '0.35rem 0.85rem',
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>

                    {/* Arabic Calligraphy Title in corner */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.85rem',
                        right: '1rem',
                        fontFamily: 'var(--font-arabic)',
                        fontSize: '1.25rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        direction: 'rtl',
                      }}
                    >
                      {course.arabicTitle}
                    </div>
                  </div>

                  {/* Course Card Body */}
                  <div
                    style={{
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.35rem',
                        color: 'var(--color-midnight-green)',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {course.name}
                    </h3>

                    <p
                      style={{
                        color: 'var(--color-slate-text)',
                        fontSize: '0.925rem',
                        lineHeight: 1.65,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {course.description}
                    </p>

                    {/* Syllabus Highlights */}
                    <div
                      style={{
                        marginBottom: '1.5rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(6, 78, 59, 0.08)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.825rem',
                          fontWeight: 700,
                          color: 'var(--color-royal-emerald)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: '0.65rem',
                        }}
                      >
                        Key Curriculum Focus:
                      </div>

                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem',
                        }}
                      >
                        {course.syllabus.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '0.865rem',
                              color: 'var(--color-slate-muted)',
                              lineHeight: 1.45,
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              color="#064E3B"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Spacer to push footer to bottom */}
                    <div style={{ marginTop: 'auto' }}>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--color-slate-muted)',
                          fontStyle: 'italic',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <strong style={{ fontStyle: 'normal', color: 'var(--color-slate-text)' }}>
                          Audience:
                        </strong>{' '}
                        {course.idealFor}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleEnrollClick(course.name)}
                        className="btn-gold-primary"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1.25rem',
                          fontSize: '0.9rem',
                        }}
                      >
                        <span>Enroll in This Course</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
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
