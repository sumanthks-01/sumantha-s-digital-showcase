import { ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';

const CTASection = () => (
  <section className="py-24">
    <GlassCard className="relative p-12 md:p-24 text-center overflow-hidden">
      <div className="absolute inset-0 gradient-cta" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter" style={{ color: 'hsl(0 0% 100%)' }}>
          Let's work together!
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
          I'm currently looking for new opportunities and collaborations in AI/ML and Full Stack Development.
        </p>
        <a
          href="mailto:sumanthaskaraba@gmail.com"
          className="btn-primary-solid inline-flex items-center gap-3 text-lg hover:scale-105"
        >
          Get In Touch <ChevronRight size={20} />
        </a>
      </div>
    </GlassCard>
  </section>
);

export default CTASection;
