import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import CircularGallery from './CircularGallery';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  status: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: "Network Intrusion Detection System",
    category: "AI/ML",
    description: "A comprehensive security solution featuring a machine learning core, a FastAPI backend, and an interactive web dashboard. Utilizes XGBoost for multi-class classification on CIC-IDS2017 dataset.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "XGBoost"],
    github: "https://github.com/sumanthks-01/Network-Intrusion-Detection-NIDS-",
    live: null,
    status: "Completed",
    image: "https://picsum.photos/seed/nids/800/600"
  },
  {
    title: "Story Weaver",
    category: "Web App",
    description: "Real-time collaborative platform where stories are 'woven' blindly. Participants only see the previous sentence, encouraging creative plot twists and collective world-building.",
    tech: ["React.js", "Firebase Firestore", "CSS3"],
    github: "https://github.com/sumanthks-01/Story-Weaver",
    live: "https://weaver.sumanthaks.dev",
    status: "Completed",
    image: "https://picsum.photos/seed/weaver/800/600"
  }
];

const galleryItems = PROJECTS.map(p => ({
  image: p.image,
  text: p.title
}));

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 section-border">
      <SectionHeading>Selected Works</SectionHeading>

      {/* Circular Gallery */}
      <div style={{ height: '600px', position: 'relative' }} className="mb-16 rounded-2xl overflow-hidden">
        <CircularGallery
          items={galleryItems}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      {/* Project Details */}
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <div key={project.title} className="glass-card glass-card-hover group h-full flex flex-col p-8">
            <div className="text-primary text-xs font-bold mb-2 uppercase tracking-widest">{project.category}</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-200" style={{ color: 'hsl(0 0% 100%)' }}>
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-6 section-border">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 100%)' }}>
                <Github size={18} /> Source
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 100%)' }}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
