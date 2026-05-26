import { Award, Shield, Code, Server, Database, ChevronDown } from 'lucide-react';
import { allCertifications } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useState } from 'react';

const categoryIcons = {
  'Segurança da Informação & Defesa Cibernética': Shield,
  'Ecossistema JavaScript & Front-end': Code,
  'Back-end, Arquitetura & Java': Server,
  'Dados, Inteligência Artificial & Qualidade': Database,
};

const categoryColors = {
  'Segurança da Informação & Defesa Cibernética': 'from-red-500 to-orange-500',
  'Ecossistema JavaScript & Front-end': 'from-yellow-500 to-amber-500',
  'Back-end, Arquitetura & Java': 'from-emerald-500 to-teal-500',
  'Dados, Inteligência Artificial & Qualidade': 'from-purple-500 to-violet-500',
};

export const Certifications = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="certificacoes" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            title="Cursos & Certificações"
            subtitle="Investimento contínuo em aprendizado e atualização profissional"
          />
        </AnimatedSection>

        <div className="space-y-4">
          {allCertifications.map((cat, index) => {
            const IconComponent = categoryIcons[cat.category] || Award;
            const gradient = categoryColors[cat.category] || 'from-primary-500 to-primary-700';
            const isOpen = openIndex === index;

            return (
              <AnimatedSection key={cat.category} delay={index * 100}>
                <GlassCard hover={false} className="!p-0 overflow-hidden">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-dark-800/30 transition-colors duration-300"
                    aria-expanded={isOpen}
                  >
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} flex-shrink-0`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold text-dark-100">{cat.category}</h3>
                      <p className="text-xs text-dark-500 mt-0.5">{cat.items.length} certificações</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-dark-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 space-y-2">
                      {cat.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-dark-950/40 border border-dark-800/30 hover:border-primary-500/20 transition-colors duration-300"
                        >
                          <Award size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-dark-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Total count */}
        <AnimatedSection delay={500}>
          <div className="text-center mt-8">
            <p className="text-dark-500 text-sm">
              Total de{' '}
              <span className="text-primary-400 font-semibold">
                {allCertifications.reduce((acc, cat) => acc + cat.items.length, 0)}
              </span>{' '}
              certificações
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
