'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FolderGit } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { projects } from '@/data/projects';

const FEATURED_COUNT = 4;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function ProjectsSection() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const hasMore = projects.length > FEATURED_COUNT;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-[480px] rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--chart-1)', opacity: 0.1 }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="relative max-w-7xl"
      >
        <motion.div variants={fadeUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent-500">03.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Projects
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </motion.div>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {featured.map((project) => (
            <motion.li key={project.title} variants={fadeUp} className="flex">
              <article className="group flex w-full flex-col rounded-xl border border-border bg-card/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-card/60">
                <div className="mb-6 flex items-start justify-between">
                  <FolderGit
                    aria-hidden
                    className="size-9 text-accent-500"
                    strokeWidth={1.5}
                  />
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} repository`}
                        className="transition-colors hover:text-foreground"
                      >
                        <GithubIcon className="size-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} demo`}
                        className="transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-500">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </motion.li>
          ))}
        </ul>

        {hasMore && (
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-500/40 hover:bg-muted"
            >
              Show More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
