import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Trajetória', href: '#timeline' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 border-b border-cyan-500/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tighter cursor-pointer">
          NICOLAS<span className="text-cyan-400">.DEV</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-cyan-500/20 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
