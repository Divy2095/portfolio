import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import {
  WorkPlaceholder,
  AboutPlaceholder,
  ContactPlaceholder,
} from './sections/SectionPlaceholders';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink relative flex flex-col selection:bg-butter-yellow selection:text-ink">
      {/* Hand-drawn Header & Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Phase 3 Hero Section */}
        <HeroSection />

        {/* Section Previews / Placeholders awaiting Phases 6 & 7 */}
        <WorkPlaceholder />
        <AboutPlaceholder />
        <ContactPlaceholder />
      </main>

      {/* Hand-drawn Footer */}
      <Footer />
    </div>
  );
}

export default App;
