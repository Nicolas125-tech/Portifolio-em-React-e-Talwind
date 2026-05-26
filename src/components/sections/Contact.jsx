import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { personalData } from '../../data/personalData';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: personalData.phone,
    href: `https://wa.me/5543984445767`,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: personalData.location,
    href: null,
    color: 'from-blue-500 to-cyan-500',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: personalData.github,
    username: 'Nicolas125-tech',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: personalData.linkedin,
    username: 'Nicolas Mandarino',
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            title="Entre em Contato"
            subtitle="Estou disponível para novas oportunidades e projetos"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <AnimatedSection delay={200}>
            <div className="space-y-4">
              {contactLinks.map((contact) => {
                const IconComp = contact.icon;
                const Wrapper = contact.href ? 'a' : 'div';
                const wrapperProps = contact.href
                  ? { href: contact.href, target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                return (
                  <Wrapper key={contact.label} {...wrapperProps}>
                    <GlassCard className="flex items-center gap-4 !p-4 group">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} flex-shrink-0`}>
                        <IconComp size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-dark-500 text-xs uppercase tracking-wider font-medium">{contact.label}</p>
                        <p className="text-dark-100 font-medium group-hover:text-primary-400 transition-colors">{contact.value}</p>
                      </div>
                      {contact.href && (
                        <ExternalLink size={16} className="text-dark-600 ml-auto group-hover:text-primary-400 transition-colors" />
                      )}
                    </GlassCard>
                  </Wrapper>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Social + CTA */}
          <AnimatedSection delay={400}>
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-dark-100 mb-2">
                  Vamos construir algo incrível juntos?
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-8">
                  Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de um time incrível.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-dark-950/40 border border-dark-800/30 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 group"
                      >
                        <SocialIcon size={20} className="text-dark-400 group-hover:text-primary-400 transition-colors" />
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-dark-200 group-hover:text-primary-300 transition-colors">{social.label}</p>
                          <p className="text-xs text-dark-500">{social.username}</p>
                        </div>
                        <ExternalLink size={14} className="text-dark-600 group-hover:text-primary-400 transition-colors" />
                      </a>
                    );
                  })}
                </div>

                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-400 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Enviar Email
                </a>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
