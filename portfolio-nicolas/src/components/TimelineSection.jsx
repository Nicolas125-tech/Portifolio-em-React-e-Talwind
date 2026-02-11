import React from 'react';
import { Award, Terminal } from 'lucide-react';
import { TimelineItem } from './TimelineItem';
import { education, experience } from '../data/personalData';

export const TimelineSection = () => (
  <section id="timeline" className="py-24 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-cyan-400" /> Educação
          </h3>
          {education.map(item => <TimelineItem key={item.id} data={item} type="edu" />)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Terminal className="text-purple-400" /> Experiência
          </h3>
          {experience.map(item => <TimelineItem key={item.id} data={item} type="exp" />)}
        </div>
      </div>
    </div>
  </section>
);
