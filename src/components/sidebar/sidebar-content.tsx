'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { socials } from '@/data/socials';
import { cn } from '@/lib/utils';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md';

const links = [
  { name: 'About', number: '01', href: '/#about', id: 'about' },
  { name: 'Experience', number: '02', href: '/#experience', id: 'experience' },
  { name: 'Projects', number: '03', href: '/#projects', id: 'projects' },
  { name: 'Contact', number: '04', href: '/#contact', id: 'contact' },
];

function TypewriterLogo({ className }: { className?: string }) {
  const text = 'CR';
  const [displayed, setDisplayed] = useState(text);
  const [phase, setPhase] = useState<
    'idle' | 'typing' | 'pause' | 'deleting'
  >('idle');

  useEffect(() => {
    const start = setTimeout(() => setPhase('pause'), 2200);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (phase === 'idle') return;

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timeout = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length + 1)),
          180
        );
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2200);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 1400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length - 1)),
          110
        );
      } else {
        timeout = setTimeout(() => setPhase('typing'), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase]);

  const blinking = phase === 'idle' || phase === 'pause';

  return (
    <span
      className={cn(
        'inline-flex items-baseline font-mono text-2xl font-semibold tracking-tight tabular-nums',
        className
      )}
    >
      <span className="text-foreground transition-colors group-hover:text-accent-500">
        {displayed}
      </span>
      <span
        aria-hidden
        className={cn(
          'inline-block text-accent-500',
          blinking && 'animate-pulse'
        )}
      >
        _
      </span>
    </span>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={cn(
        'inline-flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground',
        focusRing
      )}
    >
      <Sun className="hidden size-[1.15rem] dark:block" aria-hidden />
      <Moon className="size-[1.15rem] dark:hidden" aria-hidden />
    </button>
  );
}

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

function useHideOnScroll(threshold = 80) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;

      if (y < threshold) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return hidden;
}

function ResumeButton({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href="/resume"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-md border border-accent-500/40 px-4 py-2 text-sm font-medium text-accent-500 transition-colors hover:bg-accent-500/10',
        focusRing,
        className
      )}
    >
      <FileText className="size-4" aria-hidden />
      Resume
    </Link>
  );
}

function DesktopNavLinks({ active }: { active: string }) {
  return (
    <nav
      aria-label="Sections"
      className="hidden items-center gap-1 md:flex"
    >
      {links.map((link) => {
        const isActive = active === link.id;
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? 'true' : undefined}
            className={cn(
              'inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground',
              focusRing
            )}
          >
            <span className="font-mono text-xs text-accent-500">
              {link.number}.
            </span>
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function MobileMenu({
  open,
  onClose,
  active,
}: {
  open: boolean;
  onClose: () => void;
  active: string;
}) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 md:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none'
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
      />

      <aside
        className={cn(
          'absolute right-0 top-0 h-full w-[280px] border-l border-border bg-background transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={cn(
            'absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            focusRing
          )}
        >
          <X className="size-4" />
        </button>

        <div className="flex h-full flex-col justify-between px-8 py-10">
          <div>
            <Link
              href="/"
              onClick={onClose}
              aria-label="Back to home"
              className={cn('group inline-block', focusRing)}
            >
              <TypewriterLogo className="text-3xl" />
            </Link>

            <nav
              aria-label="Sections"
              className="mt-10 flex flex-col gap-1"
            >
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'flex items-baseline gap-2 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                      focusRing
                    )}
                  >
                    <span className="font-mono text-[11px] text-accent-500">
                      {link.number}.
                    </span>
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8">
              <ResumeButton onClick={onClose} />
            </div>
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
      </aside>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));
  const hidden = useHideOnScroll();

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
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md transition-transform duration-300 ease-out print:hidden',
          hidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10 lg:px-16">
          <Link
            href="/"
            aria-label="Back to home"
            className={cn('group inline-flex items-center', focusRing)}
          >
            <TypewriterLogo />
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <DesktopNavLinks active={active} />
            <div className="ml-3 flex items-center gap-3 border-l border-border/60 pl-5">
              <ResumeButton />
              <ThemeToggle />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              'inline-flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden',
              focusRing
            )}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} active={active} />
    </>
  );
}
