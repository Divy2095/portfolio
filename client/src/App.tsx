import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import {
  WorkPlaceholder,
  AboutPlaceholder,
  ContactPlaceholder,
} from './sections/SectionPlaceholders';
import { Footer } from './components/Footer';
import { DeskKeyboard } from './components/DeskEnvironment';

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
    <div className="min-h-screen bg-paper text-ink relative flex flex-col selection:bg-butter-yellow selection:text-ink overflow-x-clip">
      {/* Top Desk Edge: Partially visible mechanical keyboard */}
      <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-[62%] sm:-translate-x-[68%] pointer-events-none z-0 hidden md:block opacity-75 select-none">
        <DeskKeyboard />
      </div>

      {/* Hand-drawn Header & Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
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
