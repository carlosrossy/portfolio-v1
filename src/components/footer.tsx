import { socials } from '@/data/socials';
import { cn } from '@/lib/utils';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 px-6 py-10 md:px-10 lg:px-16 print:hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <ul
          aria-label="Social links"
          className="flex items-center gap-6 xl:hidden"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            const external = social.href.startsWith('http');
            return (
              <li key={social.name}>
                <a
                  href={social.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  className={cn(
                    'inline-flex text-muted-foreground transition-colors hover:text-accent-500',
                    focusRing
                  )}
                >
                  <Icon className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-center gap-1 text-center text-xs text-muted-foreground">
          <p>
            Designed and built by{' '}
            <span className="font-medium text-foreground">Carlos Eduardo</span>
          </p>
          <p className="text-[11px]">
            © {year} · Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
