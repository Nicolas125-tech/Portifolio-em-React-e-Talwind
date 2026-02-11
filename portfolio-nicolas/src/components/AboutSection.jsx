import React from 'react';
import { Code, Music, Terminal } from 'lucide-react';
import { personalData } from '../data/personalData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-white mb-6">Sobre o <span className="text-purple-500">Desenvolvedor</span></h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            {personalData.about}
          </p>
          <div className="flex gap-4">
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 flex-1">
              <Code className="text-cyan-400 mb-2" />
              <div className="font-bold text-white">Full Stack</div>
              <div className="text-sm text-slate-500">Web & Mobile</div>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 flex-1">
              <Music className="text-purple-400 mb-2" />
              <div className="font-bold text-white">Soft Skills</div>
              <div className="text-sm text-slate-500">Didática & Liderança</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
           <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                 {/* Placeholder for Photo - Using code icon as placeholder */}
                 <Terminal size={80} className="text-slate-600" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
