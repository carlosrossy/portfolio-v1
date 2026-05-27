'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

const MOBILE_INITIAL = 5;
const DESKTOP_INITIAL = 8;
const STEP = 5;

export function ProjectsList({ projects }: { projects: Project[] }) {
  const [extra, setExtra] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const total = projects.length;
  const mobileVisible = showAll
    ? total
    : Math.min(MOBILE_INITIAL + extra, total);
  const desktopVisible = showAll
    ? total
    : Math.min(DESKTOP_INITIAL + extra, total);

  const hasMore = !showAll && desktopVisible < total;
  const canShowAll = !showAll && total > DESKTOP_INITIAL;

  return (
    <>
      <div className="mb-3 flex items-end justify-between">
        <span className="text-xs text-muted-foreground">
          {showAll ? `${total} projects` : `Showing latest`}
        </span>
        {canShowAll && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See all
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        )}
      </div>

      <ul className="overflow-hidden rounded-xl border border-border">
        <li className="hidden border-b border-border bg-muted/30 px-4 py-2 lg:grid lg:grid-cols-[40px_minmax(0,1fr)_70px_minmax(0,260px)_60px] lg:items-center lg:gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            #
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Project
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Year
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Stack
          </span>
          <span className="sr-only">Links</span>
        </li>

        {projects.map((project, i) => {
          const showOnMobile = i < mobileVisible;
          const showOnDesktop = i < desktopVisible;

          return (
            <li
              key={project.title}
              className={cn(
                'group/row border-b border-border/50 transition-colors last:border-b-0 hover:bg-muted/40',
                !showOnDesktop && 'hidden',
                showOnDesktop && !showOnMobile && 'hidden lg:block'
              )}
            >
              <div className="block px-4 py-4 lg:hidden">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} repository`}
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
                        aria-label={`${project.title} demo`}
                        className="transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-mono">{project.year}</span>
                  <span aria-hidden>·</span>
                  <span className="truncate">
                    {project.tech.join(' · ')}
                  </span>
                </div>
              </div>

              <div className="hidden px-4 py-3 lg:grid lg:grid-cols-[40px_minmax(0,1fr)_70px_minmax(0,260px)_60px] lg:items-center lg:gap-4">
                <span className="relative flex size-5 items-center font-mono text-xs text-muted-foreground transition-colors group-hover/row:text-accent-500">
                  <span className="group-hover/row:opacity-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="absolute size-4 opacity-0 transition-opacity group-hover/row:opacity-100"
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold tracking-tight text-foreground transition-colors group-hover/row:text-accent-500">
                    {project.title}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>

                <span className="truncate text-xs text-muted-foreground">
                  {project.tech.join(' · ')}
                </span>

                <div className="flex items-center justify-end gap-3 text-muted-foreground">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} repository`}
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
                      aria-label={`${project.title} demo`}
                      className="transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExtra((e) => e + STEP)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-500/40 hover:bg-muted"
          >
            Load more
            <span className="text-muted-foreground lg:hidden">
              ({total - mobileVisible})
            </span>
            <span className="hidden text-muted-foreground lg:inline">
              ({total - desktopVisible})
            </span>
          </button>
        </div>
      )}
    </>
  );
}
