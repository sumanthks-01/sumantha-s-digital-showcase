import { Terminal, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';

const AboutSection = () => (
  <section id="about" className="py-24 section-border">
    <SectionHeading subtitle="A curious mind and a B.E. AIML student who loves bringing ideas to life with code and creativity.">
      About Me
    </SectionHeading>

    <div className="grid md:grid-cols-2 gap-12">
      <GlassCard className="p-8 space-y-6">
        <div className="p-3 rounded-xl w-fit text-primary" style={{ background: 'hsl(187 94% 43% / 0.1)' }}>
          <Terminal size={24} />
        </div>
        <p className="leading-relaxed">
          I enjoy exploring the world of AI, ML, and everything in between — from training models to predict diabetes, to building apps that summarize long texts, to crafting tools that weave stories out of thin air.
        </p>
        <p className="text-muted-foreground">
          I also dive into the serious side of tech with projects like Network Intrusion Detection Systems, because keeping systems safe is just as exciting as making them smart. When I'm not coding, you'll find me jamming to music, sketching out ideas, or binge-watching sci-fi shows.
        </p>
      </GlassCard>

      <div className="grid grid-cols-2 gap-6">
        <GlassCard className="p-6 flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold mb-2" style={{ color: 'hsl(0 0% 100%)' }}>0</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Years Exp</span>
        </GlassCard>
        <GlassCard className="p-6 flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold mb-2" style={{ color: 'hsl(0 0% 100%)' }}>5+</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects</span>
        </GlassCard>
        <GlassCard className="p-6 flex flex-col justify-center items-center text-center col-span-2">
          <div className="flex items-center gap-2 text-primary mb-2">
            <MapPin size={18} />
            <span className="font-medium">Hosanagara, Karnataka</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Current Location</span>
        </GlassCard>
      </div>
    </div>
  </section>
);

export default AboutSection;
