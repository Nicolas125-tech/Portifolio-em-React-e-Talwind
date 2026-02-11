import React from 'react';
import { Github } from 'lucide-react';
import { personalData } from '../data/personalData';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono tracking-widest animate-pulse">
          SYSTEM ONLINE // WELCOME
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Olá, eu sou <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {personalData.name}
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalData.role}. Transformando café e linhas de código em soluções inovadoras.
          Especialista em Java, React e ecossistemas modernos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            Entre em Contato
          </a>
          <a href={personalData.github} target="_blank" rel="noreferrer" className="px-8 py-4 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white rounded-lg transition-all flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm">
            <Github size={20} /> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};
