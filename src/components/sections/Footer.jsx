import { Heart } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-bold text-white text-sm">
              N
            </div>
            <span className="text-sm text-dark-400">
              © {currentYear} Nicolas Bissoqui
            </span>
          </div>

          <p className="text-sm text-dark-500 flex items-center gap-1">
            Feito com <Heart size={14} className="text-red-400 fill-red-400" /> e muito café
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? undefined : "_blank"}
                  rel={social.label === 'Email' ? undefined : "noopener noreferrer"}
                  className="text-dark-500 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <SocialIcon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
