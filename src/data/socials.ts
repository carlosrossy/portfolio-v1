import type { ComponentType } from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/icons';

export interface Social {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/carlosrossy/carlosrossy',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carlos-eduardo-996672222/',
    icon: LinkedinIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: InstagramIcon,
  },
  {
    name: 'Email',
    href: 'mailto:carlospintorossy07@gmail.com.br',
    icon: Mail,
  },
];
