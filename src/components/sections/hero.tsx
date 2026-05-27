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
        className="relative mx-auto w-full max-w-3xl"
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
          className="text-6xl font-bold tracking-tight md:text-8xl"
        >
          Carlos Rossy
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mt-6 bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-3xl font-semibold tracking-wide text-transparent md:text-5xl"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{' '}
          <span className="font-medium text-accent-500">bemol digital</span>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-lg border border-accent-500/50 bg-accent-500/5 px-7 py-3.5 text-base font-medium text-accent-500 transition-all hover:border-accent-500 hover:bg-accent-500/10"
          >
            View projects
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-lg border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent-500/40 hover:bg-muted/40"
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
