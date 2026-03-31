import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Typewriter from './Typewriter';

const SOCIALS = [
  { icon: Github, href: "https://github.com/sumanthks-01" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sumantha-k-s" },
  { icon: Mail, href: "mailto:sumanthaskaraba@gmail.com" },
];

const HeroSection = () => (
  <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
    <div className="flex-1 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-primary text-xs font-bold tracking-widest uppercase"
        style={{
          background: 'hsl(187 94% 43% / 0.1)',
          border: '1px solid hsl(187 94% 43% / 0.2)',
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        Available for Opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
        style={{ color: 'hsl(0 0% 100%)' }}
      >
        Sumantha <br /> <span className="text-muted-foreground">K S</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-medium"
      >
        I am a <Typewriter />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground max-w-lg text-lg leading-relaxed"
      >
        Building intelligent systems with AI, creativity, and code. Specializing in high-performance web applications and machine learning models.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-4"
      >
        <a href="#contact" className="btn-primary-solid">
          Let's Talk
        </a>
        <div className="flex items-center gap-4">
          {SOCIALS.map((social, i) => (
            <div key={i} className="iso-pro relative">
              <span className="absolute inset-0" />
              <span className="absolute inset-0" />
              <span className="absolute inset-0" />
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon relative z-10 block">
                <social.icon size={20} className="svg-icon" />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 20 }}
      className="relative"
    >
      <div className="absolute inset-0 ambient-glow-cyan blur-[80px] rounded-full" />
      <div className="tilt-container noselect">
        <div className="tilt-canvas">
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`tilt-tracker tr-${i + 1}`} />
          ))}
          <div id="tilt-card">
            <img
              src="https://image2url.com/r2/default/images/1773666299442-43186c24-f0ac-48bd-884e-c9e4886ff53a.jpg"
              alt="Sumantha K S"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
