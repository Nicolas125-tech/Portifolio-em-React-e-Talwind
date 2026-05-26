export const SkillBadge = ({ name }) => {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all duration-300 cursor-default">
      {name}
    </span>
  );
};
