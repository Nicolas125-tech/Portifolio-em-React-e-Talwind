export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-dark-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex ${align === 'center' ? 'justify-center' : 'justify-start'} gap-1`}>
        <div className="w-12 h-1 rounded-full bg-primary-500" />
        <div className="w-3 h-1 rounded-full bg-primary-700" />
        <div className="w-1.5 h-1 rounded-full bg-primary-900" />
      </div>
    </div>
  );
};
