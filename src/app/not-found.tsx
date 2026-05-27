import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '404',
  description: 'Page not found.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center md:px-10 lg:px-16">
      <p className="mb-4 font-mono text-sm text-accent-500">404</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-500/40 hover:bg-muted"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back to home
      </Link>
    </div>
  );
}
