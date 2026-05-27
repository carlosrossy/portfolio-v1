'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-6 md:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 size-[500px] rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--hero-glow)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--hero-dots) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 30% 40%, black 0%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 30% 40%, black 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-bold tracking-tight md:text-7xl"
        >
          Carlos Eduardo
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mt-4 bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-2xl font-semibold tracking-wide text-transparent md:text-3xl"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I build modern, performant web applications focused on user
          experience.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-0 right-0 hidden justify-center md:flex"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="size-4 animate-float" />
        </div>
      </motion.div>
    </section>
  );
}
