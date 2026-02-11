import React from 'react';
import { Cpu, Code, Terminal, Database, Smartphone, BookOpen } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { SkillCard } from './SkillCard';

const skills = [
  { name: "Java", icon: <Cpu />, level: 85, color: "text-red-500" },
  { name: "React.js", icon: <Code />, level: 90, color: "text-cyan-400" },
  { name: "Node.js", icon: <Terminal />, level: 80, color: "text-green-500" },
  { name: "SQL / MySQL", icon: <Database />, level: 75, color: "text-blue-400" },
  { name: "Mobile (Kotlin)", icon: <Smartphone />, level: 60, color: "text-purple-400" },
  { name: "Engenharia de Software", icon: <BookOpen />, level: 85, color: "text-yellow-400" },
];

export const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionTitle title="Habilidades Técnicas" subtitle="Stack tecnológica focada em performance e escalabilidade." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </section>
);
