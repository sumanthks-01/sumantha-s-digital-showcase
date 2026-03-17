import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Galaxy from '../components/Galaxy';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Galaxy Background */}
      <div className="fixed inset-0 pointer-events-none">
        <Galaxy
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={1}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion={false}
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          transparent
        />
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
