export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 px-6 py-8 md:px-10 lg:px-16">
      <div className="flex flex-col items-center gap-1 text-center text-xs text-muted-foreground">
        <p>
          Designed and built by{' '}
          <span className="font-medium text-foreground">Carlos Eduardo</span>
        </p>
        <p className="text-[11px]">
          © {year} · Next.js · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
