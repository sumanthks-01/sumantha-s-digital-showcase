import { Layers, Code2, Database, Cpu, Terminal } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const SKILLS: { category: string; items: string[]; icon: typeof Layers; color: string }[] = [
  { category: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS"], icon: Layers, color: 'hsl(187 94% 43%)' },
  { category: "Backend", items: ["Java", "Python", "REST API"], icon: Code2, color: 'hsl(234 89% 74%)' },
  { category: "Databases", items: ["MySQL", "MongoDB"], icon: Database, color: 'hsl(152 69% 53%)' },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "Vercel"], icon: Cpu, color: 'hsl(25 95% 53%)' },
  { category: "AI Tools", items: ["ChatGPT", "Gemini", "Claude", "Lovable", "Bolt", "WindSurf"], icon: Terminal, color: 'hsl(330 81% 60%)' },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 section-border">
    <SectionHeading subtitle="My technical arsenal for building modern digital experiences.">
      Technical Skills
    </SectionHeading>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="skills-expand-card"
    >
      {SKILLS.map(({ category, items, icon: Icon, color }) => (
        <div key={category} className="skills-expand-panel" style={{ '--skill-color': color } as React.CSSProperties}>
          <Icon size={20} style={{ color }} className="shrink-0 skills-expand-icon" />
          <span className="skills-expand-label">{category}</span>
          <div className="skills-expand-items">
            {items.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
