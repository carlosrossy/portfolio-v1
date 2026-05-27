'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const techs = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'C# / .NET',
  'Azure',
  'Azure Functions',
  'React Native',
  'PostgreSQL',
  'Git',
  'Testing',
  'Automation',
  'n8n',
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-[420px] rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--accent-500)', opacity: 0.07 }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.div variants={fadeUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent-500">01.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            About Me
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <motion.div variants={fadeUp} className="flex flex-col">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                My journey in technology started in{' '}
                <span className="font-medium text-foreground">2018</span>, when
                I began studying{' '}
                <span className="font-medium text-foreground">
                  Software Engineering at UFAM
                </span>
                . That’s where I discovered my passion for building software
                and solving real-world problems through code.
              </p>

              <p>
                During the pandemic, I deepened my studies in modern web
                development and landed my first{' '}
                <span className="font-medium text-foreground">
                  remote role for a company in Rio de Janeiro
                </span>
                , where I experienced real production environments and
                industry-level engineering practices.
              </p>

              <p>
                Today, I work at{' '}
                <span className="font-medium text-accent-500">
                  Bemol Digital
                </span>{' '}
                as a Software Engineer, building scalable systems and
                contributing to production-grade applications in a fast-paced
                environment.
              </p>

              <p>
                I’m passionate about building clean, scalable and
                high-performance systems while continuously improving
                engineering practices and product quality. Here are a few
                technologies I’ve been working with recently:
              </p>
            </div>

            <ul
              aria-label="Current stack"
              className="mt-8 flex flex-wrap gap-2"
            >
              {techs.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent-500/50 hover:bg-accent-500/5 hover:text-foreground">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[18rem] lg:max-w-none lg:justify-self-end"
          >
            <div className="group relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 translate-x-2 translate-y-2 rounded-lg border-2 border-accent-500/70 transition-all duration-300 ease-out group-hover:translate-x-5 group-hover:translate-y-5 group-hover:border-accent-500/40"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border-2 border-transparent bg-gradient-to-br from-accent-500/30 via-accent-600/10 to-transparent transition-colors duration-300 ease-out group-hover:border-accent-500">
                <Image
                  src="/me.jpg"
                  alt="Carlos Rossy"
                  fill
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                <div
                  aria-hidden
                  className="absolute inset-0 bg-accent-500/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0 dark:mix-blend-normal"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
