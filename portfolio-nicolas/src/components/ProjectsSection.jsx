import React from 'react';
import { Github, Code } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { projects } from '../data/personalData';

export const ProjectsSection = () => (
  <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionTitle title="Projetos em Destaque" subtitle="Um pouco do meu código em ação." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <Code className="text-cyan-400" size={32} />
              <div className="flex gap-3">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
