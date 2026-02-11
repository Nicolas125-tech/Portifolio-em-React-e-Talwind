import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { allCertifications } from '../data/personalData';

export const CertificationsSection = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Certificações" subtitle="Aprendizado contínuo é parte do meu DNA." />
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
           <div className="grid gap-4">
              {allCertifications.slice(0, showAllCerts ? allCertifications.length : 5).map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-3 hover:bg-slate-800 rounded-lg transition-colors border-b border-slate-800/50 last:border-0">
                  <Award className="text-yellow-500 shrink-0" size={20} />
                  <span className="text-slate-300">{cert}</span>
                </div>
              ))}
           </div>
           <button 
            onClick={() => setShowAllCerts(!showAllCerts)}
            className="w-full mt-6 py-3 flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors border-t border-slate-800"
           >
             {showAllCerts ? (
               <>Mostrar Menos <ChevronUp size={18} /></>
             ) : (
               <>Ver Todas as Certificações (+{allCertifications.length - 5}) <ChevronDown size={18} /></>
             )}
           </button>
        </div>
      </div>
    </section>
  );
};
