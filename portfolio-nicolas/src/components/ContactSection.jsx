import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { personalData } from '../data/personalData';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionTitle title="Vamos Conversar?" subtitle="Estou disponível para oportunidades de Estágio e Trainee." />
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
           <a href={`mailto:${personalData.email}`} className="flex items-center justify-center gap-3 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-cyan-500 group">
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-slate-400">Email</div>
                <div className="text-white font-medium">{personalData.email}</div>
              </div>
           </a>
           <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-purple-500 group">
              <Linkedin className="text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-slate-400">LinkedIn</div>
                <div className="text-white font-medium">Conectar</div>
              </div>
           </a>
        </div>

        <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
           <h3 className="text-white font-bold mb-6">Envie uma mensagem direta</h3>
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
             <div className="grid md:grid-cols-2 gap-4">
               <input type="text" placeholder="Nome" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-cyan-500 outline-none transition-colors" />
               <input type="email" placeholder="Email" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-cyan-500 outline-none transition-colors" />
             </div>
             <textarea rows="4" placeholder="Sua mensagem..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-cyan-500 outline-none transition-colors"></textarea>
             <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
               <Send size={18} /> Enviar Mensagem
             </button>
           </form>
        </div>
      </div>
    </section>
  );
};
