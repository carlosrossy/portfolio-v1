'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md';

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={cn(
        'text-muted-foreground transition-colors hover:text-foreground',
        focusRing
      )}
    >
      <Sun className="hidden size-5 dark:block" aria-hidden />
      <Moon className="size-5 dark:hidden" aria-hidden />
    </button>
  );
}

const links = [
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Experience', href: '/#experience', id: 'experience' },
  { name: 'Projects', href: '/#projects', id: 'projects' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:carlosrossy@bemol.com.br', icon: Mail },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio);
          } else {
            ratios.delete(entry.target.id);
          }
        }

        let best = '';
        let bestRatio = -1;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        setActive(best);
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function SidebarBody({ onLinkClick }: { onLinkClick?: () => void }) {
  const active = useActiveSection(links.map((l) => l.id));

  return (
    <div className="flex h-full flex-col justify-between px-8 py-10">
      <div>
        <Link
          href="/"
          onClick={onLinkClick}
          aria-label="Back to home"
          className={cn('group inline-block', focusRing)}
        >
          <div
            aria-hidden
            className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-base font-semibold text-white shadow-lg shadow-accent-600/20 ring-2 ring-accent-600/20 ring-offset-2 ring-offset-background transition-transform group-hover:scale-105"
          >
            CE
          </div>

          <h1 className="mt-6 text-xl font-bold tracking-tight transition-colors group-hover:text-accent-500">
            Carlos Eduardo
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Full Stack Developer
          </p>
        </Link>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Building modern, performant web experiences.
        </p>

        <nav aria-label="Sections" className="mt-12 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onLinkClick}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group flex items-center gap-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                  focusRing
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'h-px bg-current transition-all duration-300',
                    isActive ? 'w-12' : 'w-5 group-hover:w-9'
                  )}
                />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-5">
          {socials.map((social) => {
            const Icon = social.icon;
            const external = social.href.startsWith('http');
            return (
              <a
                key={social.name}
                href={social.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={social.name}
                className={cn(
                  'text-muted-foreground transition-colors hover:text-foreground',
                  focusRing
                )}
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-full w-[280px] border-r border-border bg-background md:block">
        <SidebarBody />
      </aside>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={cn(
          'fixed right-4 top-4 z-40 inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-muted md:hidden',
          focusRing
        )}
      >
        <Menu className="size-5" />
      </button>

      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
        />

        <aside
          className={cn(
            'absolute left-0 top-0 h-full w-[280px] border-r border-border bg-background transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : '-translate-x-full'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className={cn(
              'absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              focusRing
            )}
          >
            <X className="size-4" />
          </button>
          <SidebarBody onLinkClick={() => setOpen(false)} />
        </aside>
      </div>
    </>
  );
}
