import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground antialiased animated-bg">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full ambient-glow-cyan blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full ambient-glow-indigo blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative max-w-7xl mx-auto px-6 pt-32">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
