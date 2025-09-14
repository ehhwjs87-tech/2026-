
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const admissionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToAdmissions = () => {
    admissionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header onContactClick={scrollToContact} />
      <main>
        <Hero onCTAClick={scrollToAdmissions} />
        <About />
        <div ref={admissionsRef}>
          <Admissions />
        </div>
        <Gallery />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
