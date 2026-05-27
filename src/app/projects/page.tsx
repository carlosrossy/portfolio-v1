import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectsList } from './projects-list';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Complete list of personal projects, freelance work and experiments.',
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/#projects"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back
        </Link>

        <header className="mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Archive
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Complete list of personal projects, freelance work and experiments
            — {projects.length} total.
          </p>
        </header>

        <ProjectsList projects={sorted} />
      </div>
    </div>
  );
}
