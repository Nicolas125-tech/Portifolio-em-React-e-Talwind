import { User, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { personalData, education } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';

export const About = () => {
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
              <p className="text-dark-300 leading-relaxed text-base">
                {personalData.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-dark-400">
                  <Calendar size={14} className="text-primary-400" />
                  <span>Engenharia de Software</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-400">
                  <Briefcase size={14} className="text-primary-400" />
                  <span>Full Stack Developer</span>
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
