import { Github, ExternalLink, Folder } from 'lucide-react';
import { projects } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Projects = () => {
  return (
    <section id="projetos" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            title="Projetos"
            subtitle="Aplicações que desenvolvi para demonstrar minhas habilidades"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 150}>
              <GlassCard className="h-full flex flex-col group">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary-500/10">
                    <Folder size={24} className="text-primary-400" />
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
                        aria-label={`Demo - ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-100 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-800/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary-300/70 bg-primary-500/5 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
