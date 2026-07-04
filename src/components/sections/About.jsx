import { User, GraduationCap, Briefcase, Calendar, Globe, IdCard, Plane, Languages } from 'lucide-react';
import { personalData, education } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';

const calculateAge = (birthDateStr) => {
  if (!birthDateStr) return '';
  const [day, month, year] = birthDateStr.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const About = () => {
  const age = calculateAge(personalData.birthDate);

  return (
    <section id="sobre" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            title="Sobre Mim"
            subtitle="Conheça um pouco mais sobre minha trajetória e objetivos"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Text */}
          <AnimatedSection delay={200}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary-500/10">
                  <User size={22} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark-100">Quem sou eu</h3>
              </div>
              <p className="text-dark-300 leading-relaxed text-base mb-6">
                {personalData.about}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-dark-400 bg-dark-900/50 px-3 py-1.5 rounded-lg border border-dark-850">
                  <Calendar size={14} className="text-primary-400" />
                  <span>Engenharia de Software</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-400 bg-dark-900/50 px-3 py-1.5 rounded-lg border border-dark-850">
                  <Briefcase size={14} className="text-primary-400" />
                  <span>Full Stack Developer</span>
                </div>
              </div>

              {/* Recruiter Details Panel */}
              <div className="pt-6 border-t border-dark-800/50">
                <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  Detalhes Rápidos p/ Recrutamento
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm text-dark-300">
                    <div className="p-2 rounded-lg bg-primary-500/5 border border-primary-500/10 text-primary-400">
                      <Globe size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">Nacionalidade</p>
                      <p className="font-semibold text-dark-200">{personalData.nationality}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-dark-300">
                    <div className="p-2 rounded-lg bg-primary-500/5 border border-primary-500/10 text-primary-400">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">Idade</p>
                      <p className="font-semibold text-dark-200">{age} anos ({personalData.birthDate})</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-dark-300">
                    <div className="p-2 rounded-lg bg-primary-500/5 border border-primary-500/10 text-primary-400">
                      <IdCard size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">CNH</p>
                      <p className="font-semibold text-dark-200">{personalData.cnh}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-dark-300">
                    <div className="p-2 rounded-lg bg-primary-500/5 border border-primary-500/10 text-primary-400">
                      <Plane size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">Viagens</p>
                      <p className="font-semibold text-dark-200">Disponível</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-dark-300 col-span-1 sm:col-span-2">
                    <div className="p-2 rounded-lg bg-primary-500/5 border border-primary-500/10 text-primary-400">
                      <Languages size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">Idiomas</p>
                      <p className="font-semibold text-dark-200">
                        {personalData.languages.map(l => `${l.name} (${l.level})`).join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={400}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary-500/10">
                  <GraduationCap size={22} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark-100">Formação Acadêmica</h3>
              </div>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4 last:mb-0">
                  <div className="p-4 rounded-xl bg-dark-950/50 border border-dark-800/50">
                    <h4 className="font-semibold text-dark-100 mb-1">{edu.course}</h4>
                    <p className="text-primary-400 text-sm font-medium mb-1">{edu.school}</p>
                    <p className="text-dark-400 text-sm">{edu.period}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20">
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
