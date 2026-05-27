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
    title: 'Projeto 1',
    description: 'Descrição do projeto e tecnologias usadas.',
    year: 2025,
    tech: ['React', 'Next.js', 'TypeScript'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto e tecnologias usadas.',
    year: 2025,
    tech: ['Node.js', 'PostgreSQL', 'Express'],
    github: '#',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto e tecnologias usadas.',
    year: 2024,
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do projeto e tecnologias usadas.',
    year: 2024,
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Projeto 5',
    description: 'Descrição do projeto e tecnologias usadas.',
    year: 2023,
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
];
