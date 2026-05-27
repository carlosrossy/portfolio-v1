'use client';

import { motion, type Variants } from 'framer-motion';

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

const dotColors = [
  'bg-accent-500',
  'bg-chart-2',
  'bg-chart-3',
  'bg-chart-4',
  'bg-chart-5',
];

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
        style={{ backgroundColor: 'var(--chart-3)', opacity: 0.1 }}
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
          {experiences.map((exp, i) => (
            <motion.li
              key={`${exp.role}-${exp.period}`}
              variants={fadeUp}
              className="relative"
            >
              <span
                aria-hidden
                className={`absolute -left-[37px] top-1.5 size-2 rounded-full ring-4 ring-background ${dotColors[i % dotColors.length]}`}
              />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500">
                {exp.period}
              </p>

              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
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
                      className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
