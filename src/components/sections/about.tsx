'use client';

import { motion, type Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const techs = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Git',
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="max-w-4xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-12 flex items-center gap-4"
        >
          <span className="font-mono text-sm text-accent-500">01.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            About Me
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <motion.div
            variants={fadeUp}
            className="space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m a{' '}
              <span className="font-medium text-foreground">Full Stack</span>{' '}
              developer focused on building modern, scalable applications with
              great{' '}
              <span className="font-medium text-foreground">
                user experience
              </span>
              .
            </p>
            <p>
              I work with React, Next.js and Node, and I enjoy building{' '}
              <span className="font-medium text-foreground">
                clean, performant interfaces
              </span>
              .
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Current stack
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1">
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <ChevronRight className="size-3 shrink-0 text-accent-500" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
