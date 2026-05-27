'use client';

import { cn } from '@/lib/utils';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-border bg-background px-8 py-10 hidden md:flex flex-col justify-between">
      {/* TOP */}
      <div>
        <h1 className="text-xl font-bold tracking-tight">Carlos Eduardo</h1>

        <p className="text-sm text-muted-foreground mt-2">
          Full Stack Developer
        </p>

        <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
          Construindo experiências web modernas e performáticas.
        </p>
      </div>

      <nav className="flex flex-col gap-4 mt-10">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              'text-sm text-muted-foreground hover:text-foreground transition-all'
            )}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Carlos
      </div>
    </aside>
  );
}
