import { useState, useMemo } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useGithubRepos, type GithubRepo } from '../hooks/useGithubRepos';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  status: string;
}

const REPO_LIST = [
  'sumanthks-01/Network-Intrusion-Detection-NIDS-',
  'sumanthks-01/Story-Weaver',
  'sumanthks-01/SpendWise-A_Contolled_Spending_Analyzer',
  'sumanthks-01/Eat_nd_Greet',
  'sumanthks-01/CodePulse-AI',
  'sumanthks-01/endee',
  'sumanthks-01/Kaarmic-Canteen',
  'sumanthks-01/Text-Summarizer',
  'sumanthks-01/Diabities-Prediction-Using-ML',
];

function prettifyName(name: string): string {
  return name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function repoToProject(repo: GithubRepo): Project {
  const tech = Array.from(
    new Set([repo.language, ...repo.topics].filter((t): t is string => Boolean(t)))
  ).slice(0, 8);
  return {
    title: prettifyName(repo.name),
    category: repo.language || 'Other',
    description: repo.description || 'No description available.',
    tech,
    github: repo.html_url,
    live: repo.homepage && repo.homepage.trim() ? repo.homepage : null,
    status: 'Completed',
  };
}

const ProjectsSection = () => {
  const { repos, isLoading, error } = useGithubRepos(REPO_LIST);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = useMemo(() => repos.map(repoToProject), [repos]);

  const filters = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    const order = ['All', 'Web App', 'AI/ML', 'Other'];
    return order.filter((f) => f === 'All' || cats.has(f));
  }, [projects]);

  const filtered = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter, projects]
  );

  return (
    <section id="projects" className="py-24 section-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeading>Selected Works</SectionHeading>
        <div
          className="flex p-1 rounded-xl"
          style={{ background: 'hsl(0 0% 100% / 0.05)', border: '1px solid hsl(0 0% 100% / 0.1)' }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={filter === activeFilter ? 'filter-btn-active' : 'filter-btn'}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="mb-8 text-sm text-muted-foreground">
          Couldn't load some GitHub data ({error.message}). Showing what loaded.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {isLoading && projects.length === 0 ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="glass-card h-96 animate-pulse" style={{ opacity: 0.4 }} />
          ))
        ) : (
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card glass-card-hover group h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden" style={{ background: 'hsl(0 0% 6%)' }}>
                    <div className="absolute inset-0 gradient-cta opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <Code2 size={64} className="text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-300" />
                    </div>
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
                      style={{ background: 'hsl(0 0% 0% / 0.5)', border: '1px solid hsl(0 0% 100% / 0.1)' }}
                    >
                      {project.status}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-primary text-xs font-bold mb-2 uppercase tracking-widest">
                      {project.category}
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-200"
                      style={{ color: 'hsl(0 0% 100%)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-6 section-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                        style={{ color: 'hsl(0 0% 100%)' }}
                      >
                        <Github size={18} /> Source
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                          style={{ color: 'hsl(0 0% 100%)' }}
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
