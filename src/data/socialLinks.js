import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from './personalData';

export const socialLinks = [
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
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${personalData.email}`,
    username: personalData.email,
  }
];
