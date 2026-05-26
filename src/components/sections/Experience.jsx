import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Experience = () => {
  return (
    <section id="experiencia" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            title="Experiência Profissional"
            subtitle="Minha trajetória profissional e crescimento na área de tecnologia"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <AnimatedSection key={exp.id} delay={index * 200}>
                <div className="relative flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${
                      index === 0
                        ? 'bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/30'
                        : 'glass border border-dark-700'
                    }`}>
                      <Briefcase size={index === 0 ? 24 : 20} className={index === 0 ? 'text-white' : 'text-dark-400'} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow glass rounded-2xl p-6 hover-lift">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-dark-100">{exp.role}</h3>
                        <p className="text-primary-400 font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-dark-500 text-sm bg-dark-900/50 px-3 py-1.5 rounded-lg">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-dark-400 text-sm leading-relaxed">{exp.description}</p>
                    {index === 0 && (
                      <div className="mt-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Cargo Atual
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
