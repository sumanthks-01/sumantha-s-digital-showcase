import { Layers, Code2, Database, Cpu, Terminal } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';

const SKILLS: Record<string, { items: string[]; icon: typeof Layers; color: string }> = {
  Frontend: { items: ["HTML", "CSS", "React.js", "Tailwind CSS"], icon: Layers, color: 'hsl(187 94% 43%)' },
  Backend: { items: ["Java", "Python", "Fast API"], icon: Code2, color: 'hsl(234 89% 74%)' },
  Databases: { items: ["MySQL", "MongoDB"], icon: Database, color: 'hsl(152 69% 53%)' },
  Tools: { items: ["Git", "GitHub", "Docker", "Vercel"], icon: Cpu, color: 'hsl(25 95% 53%)' },
  "AI Tools": { items: ["ChatGPT", "Gemini", "Claude", "Lovable", "Bolt", "WindSurf"], icon: Terminal, color: 'hsl(330 81% 60%)' },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 section-border">
    <SectionHeading subtitle="My technical arsenal for building modern digital experiences.">
      Technical Skills
    </SectionHeading>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(SKILLS).map(([category, { items, icon: Icon, color }]) => (
        <GlassCard key={category} hover className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: 'hsl(0 0% 100%)' }}>
            <Icon size={20} style={{ color }} />
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default SkillsSection;
