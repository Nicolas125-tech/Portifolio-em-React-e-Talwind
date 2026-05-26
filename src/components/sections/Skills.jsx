import { Code, Layout, Server, Wrench } from 'lucide-react';
import { skills } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { SkillBadge } from '../ui/SkillBadge';
import { AnimatedSection } from '../ui/AnimatedSection';

const skillCategories = [
  {
    title: 'Linguagens de Programação',
    icon: Code,
    items: skills.languages,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Desenvolvimento Front-end',
    icon: Layout,
    items: skills.frontend,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Desenvolvimento Back-end',
    icon: Server,
    items: skills.backend,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Ferramentas & Tecnologias',
    icon: Wrench,
    items: skills.toolsAndTech,
    gradient: 'from-amber-500 to-orange-500',
  },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            title="Habilidades Técnicas"
            subtitle="Tecnologias e ferramentas que domino no dia a dia"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <AnimatedSection key={category.title} delay={index * 150}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10`}>
                      <IconComponent size={22} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
