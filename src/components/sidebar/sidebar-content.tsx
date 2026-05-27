'use client';

import { useEffect, useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
        <div
          aria-hidden
          className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-base font-semibold text-white shadow-lg shadow-accent-600/20"
        >
          CE
        </div>

        <h1 className="mt-6 text-xl font-bold tracking-tight">
          Carlos Eduardo
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Full Stack Developer
        </p>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Construindo experiências web modernas e performáticas.
        </p>

        <nav aria-label="Seções" className="mt-12 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onLinkClick}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group flex items-center gap-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
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
              </a>
            );
          })}
        </nav>
      </div>

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
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-5" />
            </a>
          );
        })}
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
        aria-label="Abrir menu"
        aria-expanded={open}
        className="fixed right-4 top-4 z-40 inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-muted md:hidden"
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
          aria-label="Menu de navegação"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
          <SidebarBody onLinkClick={() => setOpen(false)} />
        </aside>
      </div>
    </>
  );
}
