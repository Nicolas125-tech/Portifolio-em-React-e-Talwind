import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../../data/personalData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-bold text-white text-sm">
              N
            </div>
            <span className="text-sm text-dark-400">
              © {currentYear} Nicolas Bissoqui
            </span>
          </div>

          <p className="text-sm text-dark-500 flex items-center gap-1">
            Feito com <Heart size={14} className="text-red-400 fill-red-400" /> e muito café
          </p>

          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-dark-500 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
