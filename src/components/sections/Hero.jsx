import { Github, Linkedin, Mail, ChevronDown, MapPin, Code2, Sparkles } from 'lucide-react';
import { personalData } from '../../data/personalData';
import { useEffect, useState } from 'react';

const roles = [
  'Desenvolvedor Full Stack',
  'React Developer',
  'Node.js Developer',
  'Java Developer',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-300 mb-8 animate-fade-in">
          <Sparkles size={16} className="text-primary-400" />
          <span>Disponível para oportunidades</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
          <span className="text-dark-100">Olá, sou </span>
          <span className="gradient-text">{personalData.name}</span>
        </h1>

        {/* Typed Role */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Code2 size={24} className="text-primary-400 mr-3" />
          <span className="text-xl md:text-2xl lg:text-3xl text-dark-200 font-light">
            {displayedText}
          </span>
          <span className="w-0.5 h-8 bg-primary-400 ml-1 animate-pulse" />
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-dark-400 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <MapPin size={16} />
          <span>{personalData.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#projetos"
            className="group px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-400 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3.5 glass rounded-xl text-primary-300 font-semibold hover:bg-primary-500/10 transition-all duration-300 hover:scale-105"
          >
            Fale Comigo
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-dark-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-dark-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="p-3 rounded-xl glass text-dark-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500 hover:text-primary-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};
