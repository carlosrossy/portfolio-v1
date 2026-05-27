import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { projects, type Project } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projetos | Carlos Eduardo',
  description: 'Lista completa de projetos pessoais, freelas e experimentos.',
};

function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-muted-foreground ${className ?? ''}`}
    >
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Repositório do projeto ${project.title}`}
          className="transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Demo do projeto ${project.title}`}
          className="transition-colors hover:text-foreground"
        >
          <ArrowUpRight className="size-4" />
        </a>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="px-6 py-20 md:px-10 lg:px-16">
      <div className="max-w-5xl">
        <Link
          href="/#projects"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Voltar
        </Link>

        <header className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Arquivo
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Todos os Projetos
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Lista completa de projetos pessoais, freelas e experimentos —{' '}
            {projects.length} no total.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-border">
          <div className="hidden border-b border-border bg-muted/30 px-6 py-3 md:grid md:grid-cols-[80px_1fr_minmax(0,280px)_70px] md:items-center md:gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Ano
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Projeto
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Stack
            </span>
            <span className="sr-only">Links</span>
          </div>

          <ul>
            {sorted.map((project) => (
              <li
                key={project.title}
                className="border-b border-border/50 transition-colors last:border-b-0 hover:bg-muted/30"
              >
                <div className="px-6 py-5 md:hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-muted-foreground">
                      {project.year}
                    </span>
                    <ProjectLinks project={project} />
                  </div>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {project.tech.join(' · ')}
                  </p>
                </div>

                <div className="hidden px-6 py-5 md:grid md:grid-cols-[80px_1fr_minmax(0,280px)_70px] md:items-center md:gap-6">
                  <span className="font-mono text-sm text-muted-foreground">
                    {project.year}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {project.tech.join(' · ')}
                  </span>
                  <ProjectLinks project={project} className="justify-end" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
