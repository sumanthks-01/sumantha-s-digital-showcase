import { GraduationCap, MapPin, Award, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';

const EducationSection = () => (
  <section id="education" className="py-24 section-border">
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-8">
          <div className="relative pl-8 timeline-line">
            <div className="timeline-dot" />
            <div className="text-primary font-mono-code text-sm mb-2">2022 — Expected 2026</div>
            <h3 className="text-xl font-bold mb-1" style={{ color: 'hsl(0 0% 100%)' }}>
              B.E in Artificial Intelligence and Machine Learning
            </h3>
            <div className="text-muted-foreground flex items-center gap-2 mb-4">
              <GraduationCap size={16} /> Sri Madhva Vadiraja Institute of Technology and Management
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin size={14} /> Udupi, India
            </p>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading>Certifications</SectionHeading>
        <GlassCard hover className="p-6 group">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl text-secondary" style={{ background: 'hsl(234 89% 74% / 0.1)' }}>
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors" style={{ color: 'hsl(0 0% 100%)' }}>
                The Complete HTML Course
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Udemy • May 2024</p>
              <a
                href="https://www.udemy.com/share/109LJW3@POuTi8W0IDwdsmwBQUFIgS3HQpawz8T7SbhIBWZfh4-b7iEHPwMN8L-Lz29k2KmbkA==/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
              >
                Verify Certificate <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
);

export default EducationSection;
