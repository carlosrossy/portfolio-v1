export function HeroSection() {
  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center">
      <p className="text-muted-foreground text-sm mb-4">Olá, eu sou</p>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Carlos Eduardo
      </h1>

      <h2 className="text-xl md:text-2xl text-muted-foreground mt-3">
        Full Stack Developer
      </h2>

      <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
        Eu construo aplicações web modernas, performáticas e focadas em
        experiência do usuário.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90 transition"
        >
          Ver projetos
        </a>

        <a
          href="#contact"
          className="px-5 py-2 rounded-lg border border-border text-sm hover:bg-muted transition"
        >
          Contato
        </a>
      </div>
    </section>
  );
}
