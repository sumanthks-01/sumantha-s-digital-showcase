import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: string;
  subtitle?: string;
}

const SectionHeading = ({ children, subtitle }: SectionHeadingProps) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
      style={{ color: 'hsl(0 0% 100%)' }}
    >
      {children}<span className="text-primary">.</span>
    </motion.h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionHeading;
