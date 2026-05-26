export const GlassCard = ({ children, className = '', hover = true, glow = false }) => {
  return (
    <div
      className={`
        glass rounded-2xl p-6
        ${hover ? 'hover-lift cursor-default' : ''}
        ${glow ? 'animate-glow' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
