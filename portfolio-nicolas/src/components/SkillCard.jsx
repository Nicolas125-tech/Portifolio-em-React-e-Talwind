import React from 'react';

export const SkillCard = ({ name, icon, color }) => (
  <div className="group relative p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
    <div className={`mb-4 ${color} transform group-hover:scale-110 transition-transform duration-300`}>
      {React.cloneElement(icon, { size: 40 })}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-full animate-[progress_2s_ease-in-out]"></div>
    </div>
  </div>
);
