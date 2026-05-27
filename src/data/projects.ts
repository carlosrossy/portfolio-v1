export interface Project {
  title: string;
  description: string;
  year: number;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Project description and technologies used.',
    year: 2025,
    tech: ['React', 'Next.js', 'TypeScript'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project 2',
    description: 'Project description and technologies used.',
    year: 2025,
    tech: ['Node.js', 'PostgreSQL', 'Express'],
    github: '#',
  },
  {
    title: 'Project 3',
    description: 'Project description and technologies used.',
    year: 2024,
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project 4',
    description: 'Project description and technologies used.',
    year: 2024,
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project 5',
    description: 'Project description and technologies used.',
    year: 2023,
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
];
