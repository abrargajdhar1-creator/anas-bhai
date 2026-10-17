import React, { useState } from 'react';
import ScrollProgress from './components/animations/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Schedule from './components/Schedule';
import Faculty from './components/Faculty';
import WhyChooseUs from './components/WhyChooseUs';
import Admissions from './components/Admissions';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [selectedCourse, setSelectedCourse] = useState('Noorani Qaida Course');

  const handleSelectCourse = (courseName) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="app-root">
      {/* Scroll Progress Bar at the top of the viewport */}
      <ScrollProgress />

      {/* Sticky Scroll-Responsive Navbar */}
      <Navbar onSelectCourse={handleSelectCourse} />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* Cinematic Animated Hero */}
        <Hero />

        {/* Heritage, Mission & Scholarly Pillars */}
        <About />

        {/* Staggered Course Cards */}
        <Courses onSelectCourse={handleSelectCourse} />

        {/* Responsive Weekly Learning Timeline */}
        <Schedule />

        {/* Staggered Faculty Scholars */}
        <Faculty />

        {/* Why Choose Us Pillars */}
        <WhyChooseUs />

        {/* Online Admissions & Verified Contact Helplines */}
        <Admissions
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />

        {/* Accordion FAQ */}
        <FAQ />
      </main>

      {/* Midnight-Green Luxury Footer */}
      <Footer />
    </div>
  );
}

export default App;
