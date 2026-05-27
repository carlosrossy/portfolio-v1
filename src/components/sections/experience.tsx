'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    period: 'May 2024 — Present',
    role: 'Software Engineer (Trainee)',
    company: 'Bemol Digital',
    description:
      'Working as a software engineer building scalable systems and contributing to production-grade applications in a fast-paced environment. Focused on full stack development and modern engineering practices.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'C#', '.NET', 'Azure'],
  },
  {
    period: 'Sep 2024 — Dec 2024',
    role: 'Computer Science Instructor',
    company: 'CETAM - Centro de Educação Tecnológica do Amazonas',
    description:
      'Taught modules in databases, web development, entrepreneurship and programming. Responsible for preparing course materials, delivering theoretical and practical classes, and mentoring students.',
    tech: ['Databases', 'Web Development', 'Teaching'],
  },
  {
    period: 'Mar 2023 — Dec 2023',
    role: 'Intern Software Developer',
    company: 'Bemol Digital',
    description:
      'Worked as a software development intern contributing to internal systems. Gained experience with backend and frontend development in a professional environment.',
    tech: ['C#', 'Flutter', 'Angular'],
  },
  {
    period: 'May 2022 — May 2024',
    role: 'Software Developer (Intern → Junior)',
    company: 'Clicksoft',
    description:
      'Worked on mobile and web applications using React Native. Progressed from intern to junior developer, contributing to production apps and feature development in a remote environment.',
    tech: ['React Native', 'Mobile Development', 'TypeScript'],
  },
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

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 size-[420px] rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--accent-500)', opacity: 0.07 }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="relative mx-auto w-full max-w-4xl"
      >
        <motion.div variants={fadeUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent-500">02.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Experience
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </motion.div>

        <ol className="relative ml-3 list-none space-y-12 border-l border-border pl-8">
          {experiences.map((exp) => {
            const isCurrent = exp.period.includes('Present');

            return (
              <motion.li
                key={`${exp.role}-${exp.period}`}
                variants={fadeUp}
                className="group relative"
              >
                {isCurrent && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-[38px] top-1.5 size-3 animate-ping rounded-full bg-accent-500/40"
                  />
                )}

                <span
                  aria-hidden
                  className={cn(
                    'absolute -left-[38px] top-1.5 size-3 rounded-full ring-4 ring-background transition-colors duration-300',
                    isCurrent
                      ? 'bg-accent-500'
                      : 'border-2 border-muted-foreground/50 bg-background group-hover:border-accent-500 group-hover:bg-accent-500'
                  )}
                />

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500">
                  {exp.period}
                </p>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-500">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {exp.tech.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-accent-500/30"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}
