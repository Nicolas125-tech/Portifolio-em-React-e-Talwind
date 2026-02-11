import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { CertificationsSection } from './components/CertificationsSection';
import { DemosSection } from './components/DemosSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { personalData } from './data/personalData';

function App() {
  const whatsappNumber = personalData.whatsappNumber;

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <CertificationsSection />
      <DemosSection />
      <ContactSection />
      <Footer />

      {/* WHATSAPP FLOAT BUTTON */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all transform hover:scale-110 hover:rotate-6 flex items-center justify-center group"
        title="Fale comigo no WhatsApp"
        aria-label="Fale comigo no WhatsApp"
      >
        <MessageCircle size={32} className="fill-white text-green-600 group-hover:text-green-700" />
        <span className="absolute right-full mr-4 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 pointer-events-none">
          Mande um Zap!
        </span>
      </a>
    </div>
  );
}

export default App;
