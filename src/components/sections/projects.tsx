'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FolderGit } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { projects } from '@/data/projects';

const FEATURED_COUNT = 3;

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
        style={{ backgroundColor: 'var(--accent-500)', opacity: 0.07 }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.div variants={fadeUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent-500">03.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Projects
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </motion.div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <motion.li key={project.title} variants={fadeUp} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card/30 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/5">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative mb-6 flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500 transition-colors duration-300 group-hover:bg-accent-500/20">
                    <FolderGit
                      aria-hidden
                      className="size-6"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} repository`}
                        className="transition-colors hover:text-accent-500"
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
                        className="transition-colors hover:text-accent-500"
                      >
                        <ArrowUpRight className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative flex items-baseline gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-500">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-accent-500/30"
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
              className="group inline-flex items-center gap-2.5 rounded-lg border border-accent-500/50 bg-accent-500/5 px-7 py-3.5 text-base font-medium text-accent-500 transition-all hover:border-accent-500 hover:bg-accent-500/10"
            >
              Show More
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
