import React from 'react';
import { Award } from 'lucide-react';

export const TimelineItem = ({ data, type }) => (
  <div className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 box-content"></div>
    <div className="text-sm text-cyan-400 mb-1 font-mono">{data.year || data.period}</div>
    <h3 className="text-xl font-bold text-white mb-1">
      {type === 'edu' ? data.course : data.role}
    </h3>
    <p className="text-slate-400 mb-2">
      {type === 'edu' ? data.school : data.company}
    </p>
    {data.status && (
      <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20 mb-2">
        {data.status}
      </span>
    )}
    {data.description && (
      <p className="text-slate-500 text-sm italic border-l-2 border-slate-800 pl-4">
        "{data.description}"
      </p>
    )}
  </div>
);
