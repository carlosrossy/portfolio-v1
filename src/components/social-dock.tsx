import { socials } from '@/data/socials';
import { cn } from '@/lib/utils';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md';

export function SocialDock() {
  return (
    <aside
      aria-label="Social links"
      className="pointer-events-none fixed bottom-0 left-8 z-30 hidden xl:block"
    >
      <ul className="pointer-events-auto flex flex-col items-center gap-6 after:mt-7 after:block after:h-24 after:w-px after:bg-border">
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
                  'inline-flex text-muted-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:text-accent-500',
                  focusRing
                )}
              >
                <Icon className="size-[1.15rem]" />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
