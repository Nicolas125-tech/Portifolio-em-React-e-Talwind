import React from 'react';

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      <span className="text-cyan-400">#</span> {title}
    </h2>
    <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>
  </div>
);
