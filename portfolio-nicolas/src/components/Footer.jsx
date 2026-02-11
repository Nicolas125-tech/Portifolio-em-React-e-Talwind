import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personalData';

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <p className="text-slate-500 flex items-center justify-center gap-2">
        Desenvolvido com <Code size={14} /> e Café por {personalData.name} © 2026
      </p>
      <a href={personalData.oldPortfolio} target="_blank" rel="noreferrer" className="text-xs text-cyan-600 hover:text-cyan-400 mt-2 inline-flex items-center gap-1 transition-colors">
        Acessar Versão Anterior <ExternalLink size={10} />
      </a>
    </footer>
  );
};
