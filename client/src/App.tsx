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
      {/* Top-Left Desk Edge: Mechanical keyboard resting in upper-left corner */}
      <div className="absolute top-2 sm:top-3 lg:top-4 left-3 sm:left-5 xl:left-6 2xl:left-10 pointer-events-none z-10 hidden xl:block opacity-85 select-none">
        <DeskKeyboard className="w-[210px] sm:w-[225px] xl:w-[235px] 2xl:w-[260px]" />
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
