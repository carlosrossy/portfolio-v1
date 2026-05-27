'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Printer,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

type Lang = 'en' | 'pt';

interface Job {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

interface Content {
  title: string;
  location: string;
  labels: {
    back: string;
    print: string;
    summary: string;
    experience: string;
    education: string;
    skills: string;
    courses: string;
    stack: string;
    updated: string;
  };
  summary: string;
  jobs: Job[];
  education: EducationEntry[];
  skills: { label: string; items: string[] }[];
  courses: string;
}

const SHARED_TECH = {
  job1: ['React', 'Next.js', 'Node.js', 'TypeScript', 'C#', '.NET', 'Azure'],
  job3: ['C#', 'Flutter', 'Angular'],
  job4: ['React Native', 'TypeScript', 'Mobile Development'],
};

const content: Record<Lang, Content> = {
  en: {
    title: 'Full Stack Developer',
    location: 'Parintins, AM — Brazil',
    labels: {
      back: 'Back to portfolio',
      print: 'Print / Save as PDF',
      summary: 'Summary',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      courses: 'Courses & Certifications',
      stack: 'Stack',
      updated: 'Updated',
    },
    summary:
      'Software engineer focused on building scalable, accessible and high-performance web applications. Comfortable across the full stack — from React/Next.js frontends and React Native apps to Node.js and C# / .NET services running on Azure. Currently shipping production features at Bemol Digital, with previous experience as a mobile developer and computer science instructor.',
    jobs: [
      {
        role: 'Software Engineer (Trainee)',
        company: 'Bemol Digital',
        period: 'May 2024 — Present',
        bullets: [
          'Build and maintain production features across the retail platform, working end-to-end on both frontend and backend services.',
          'Collaborate with senior engineers on architecture decisions, code review and engineering practices in a fast-paced environment.',
          'Contribute to scalable systems used by thousands of users daily, focusing on performance and code quality.',
        ],
        tech: SHARED_TECH.job1,
      },
      {
        role: 'Computer Science Instructor',
        company: 'CETAM — Centro de Educação Tecnológica do Amazonas',
        period: 'Sep 2024 — Dec 2024',
        bullets: [
          'Taught modules in databases, web development, entrepreneurship and programming.',
          'Prepared course materials, delivered theoretical and practical classes, and mentored students through hands-on projects.',
        ],
        tech: ['Databases', 'Web Development', 'Teaching'],
      },
      {
        role: 'Intern Software Developer',
        company: 'Bemol Digital',
        period: 'Mar 2023 — Dec 2023',
        bullets: [
          'Contributed to internal systems alongside the engineering team.',
          'Gained hands-on experience with backend and frontend development in a professional environment.',
        ],
        tech: SHARED_TECH.job3,
      },
      {
        role: 'Software Developer (Intern → Junior)',
        company: 'Clicksoft',
        period: 'May 2022 — May 2024',
        bullets: [
          'Built and shipped mobile and web applications using React Native in a remote-first team.',
          'Progressed from intern to junior, taking ownership of features end-to-end and contributing to production releases.',
        ],
        tech: SHARED_TECH.job4,
      },
    ],
    education: [
      {
        degree: 'Post-graduation in Agile Management & Software Development',
        school: 'Unopar',
        period: '2025 — 2026',
        detail:
          'Certificate — Post-graduation focused on agile methodologies and modern software development practices.',
      },
      {
        degree: 'Software Engineering',
        school: 'UFAM',
        period: '2018 — 2024',
        detail:
          "Federal University of Amazonas — Bachelor's in Software Engineering.",
      },
    ],
    skills: [
      {
        label: 'Frontend',
        items: [
          'React',
          'Next.js',
          'React Native',
          'TypeScript',
          'Tailwind CSS',
        ],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'C#', '.NET', 'Azure Functions', 'PostgreSQL'],
      },
      {
        label: 'Cloud & Tools',
        items: ['Azure', 'Git', 'Testing', 'Automation', 'n8n'],
      },
    ],
    courses:
      'Continuous learner with multiple courses and certifications in web development, mobile, cloud and software engineering practices. Full and always up-to-date list available on my LinkedIn profile.',
  },
  pt: {
    title: 'Desenvolvedor Full Stack',
    location: 'Parintins, AM — Brasil',
    labels: {
      back: 'Voltar ao portfólio',
      print: 'Imprimir / Salvar como PDF',
      summary: 'Resumo',
      experience: 'Experiência',
      education: 'Formação',
      skills: 'Habilidades',
      courses: 'Cursos & Certificações',
      stack: 'Stack',
      updated: 'Atualizado em',
    },
    summary:
      'Engenheiro de software focado em construir aplicações web escaláveis, acessíveis e de alta performance. Atuo no full stack — de frontends em React/Next.js e apps em React Native a serviços em Node.js e C# / .NET rodando no Azure. Atualmente entregando funcionalidades em produção na Bemol Digital, com experiência prévia como desenvolvedor mobile e instrutor de computação.',
    jobs: [
      {
        role: 'Engenheiro de Software (Trainee)',
        company: 'Bemol Digital',
        period: 'Mai 2024 — Atual',
        bullets: [
          'Desenvolvo e mantenho funcionalidades em produção na plataforma de varejo, atuando end-to-end em serviços frontend e backend.',
          'Colaboro com engenheiros sêniores em decisões de arquitetura, code review e práticas de engenharia em um ambiente de ritmo acelerado.',
          'Contribuo com sistemas escaláveis usados por milhares de usuários diariamente, com foco em performance e qualidade de código.',
        ],
        tech: SHARED_TECH.job1,
      },
      {
        role: 'Instrutor de Computação',
        company: 'CETAM — Centro de Educação Tecnológica do Amazonas',
        period: 'Set 2024 — Dez 2024',
        bullets: [
          'Ministrei módulos de banco de dados, desenvolvimento web, empreendedorismo e programação.',
          'Preparei materiais didáticos, conduzi aulas teóricas e práticas, e orientei alunos em projetos hands-on.',
        ],
        tech: ['Banco de Dados', 'Desenvolvimento Web', 'Ensino'],
      },
      {
        role: 'Desenvolvedor de Software (Estágio)',
        company: 'Bemol Digital',
        period: 'Mar 2023 — Dez 2023',
        bullets: [
          'Contribuí com sistemas internos junto ao time de engenharia.',
          'Adquiri experiência prática com desenvolvimento backend e frontend em ambiente profissional.',
        ],
        tech: SHARED_TECH.job3,
      },
      {
        role: 'Desenvolvedor de Software (Estágio → Júnior)',
        company: 'Clicksoft',
        period: 'Mai 2022 — Mai 2024',
        bullets: [
          'Desenvolvi e entreguei aplicações mobile e web usando React Native em um time remote-first.',
          'Progredi de estagiário a júnior, assumindo a responsabilidade de funcionalidades end-to-end e contribuindo com releases em produção.',
        ],
        tech: SHARED_TECH.job4,
      },
    ],
    education: [
      {
        degree: 'Pós-Graduação em Gestão Ágil e Desenvolvimento de Software',
        school: 'Unopar',
        period: '2025 — 2026',
        detail:
          'Certificado — Pós-graduação focada em metodologias ágeis e práticas modernas de desenvolvimento de software.',
      },
      {
        degree: 'Engenharia de Software',
        school: 'UFAM',
        period: '2018 — 2024',
        detail:
          'Universidade Federal do Amazonas — Bacharelado em Engenharia de Software.',
      },
    ],
    skills: [
      {
        label: 'Frontend',
        items: [
          'React',
          'Next.js',
          'React Native',
          'TypeScript',
          'Tailwind CSS',
        ],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'C#', '.NET', 'Azure Functions', 'PostgreSQL'],
      },
      {
        label: 'Cloud & Ferramentas',
        items: ['Azure', 'Git', 'Testes', 'Automação', 'n8n'],
      },
    ],
    courses:
      'Aprendizado contínuo, com diversos cursos e certificações em desenvolvimento web, mobile, cloud e práticas de engenharia de software. Lista completa e sempre atualizada no meu perfil do LinkedIn.',
  },
};

export function ResumeContent() {
  const [lang, setLang] = useState<Lang>('pt');
  const t = content[lang];

  const updatedLabel = new Date().toLocaleDateString(
    lang === 'pt' ? 'pt-BR' : 'en-GB',
    { month: 'long', year: 'numeric' }
  );

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-10 print:max-w-none print:px-0 print:py-0">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          {t.labels.back}
        </Link>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language"
            className="inline-flex overflow-hidden rounded-md border border-border"
          >
            {(['pt', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  'px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors',
                  lang === l
                    ? 'bg-accent-500/10 text-accent-500'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg border border-accent-500/50 bg-accent-500/5 px-5 py-2.5 text-sm font-medium text-accent-500 transition-all hover:border-accent-500 hover:bg-accent-500/10"
          >
            <Printer className="size-4" aria-hidden />
            {t.labels.print}
          </button>
        </div>
      </div>

      <article
        lang={lang}
        className="resume-paper rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none"
      >
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Carlos Eduardo Pinto Rossy
          </h1>
          <p className="mt-1 text-base font-medium text-accent-500">
            {t.title}
          </p>

          <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-accent-500" aria-hidden />
              {t.location}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent-500" aria-hidden />
              <a
                href="mailto:carlospintorossy07@gmail.com.br"
                className="hover:text-foreground"
              >
                carlospintorossy07@gmail.com.br
              </a>
            </li>
            <li className="flex items-center gap-2">
              <GithubIcon className="size-4 shrink-0 text-accent-500" />
              <a
                href="https://github.com/carlosrossy/carlosrossy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                github.com/carlosrossy
              </a>
            </li>
            <li className="flex items-center gap-2">
              <LinkedinIcon className="size-4 shrink-0 text-accent-500" />
              <a
                href="https://www.linkedin.com/in/carlos-eduardo-996672222/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                linkedin.com/in/carlos-eduardo
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon className="size-4 shrink-0 text-accent-500" />
              <a
                href="https://www.instagram.com/eng.carlosrossy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                instagram.com/eng.carlosrossy
              </a>
            </li>
          </ul>
        </header>

        <section className="mt-8 break-inside-avoid">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            <Sparkles className="size-4" aria-hidden />
            {t.labels.summary}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t.summary}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            <Briefcase className="size-4" aria-hidden />
            {t.labels.experience}
          </h2>

          <ol className="mt-4 space-y-6">
            {t.jobs.map((job) => (
              <li
                key={`${job.role}-${job.period}`}
                className="break-inside-avoid"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {job.role} ·{' '}
                    <span className="text-accent-500">{job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-2 space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground [list-style:disc] marker:text-accent-500/70">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {job.tech && job.tech.length > 0 && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {t.labels.stack}:
                    </span>{' '}
                    {job.tech.join(' · ')}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            <GraduationCap className="size-4" aria-hidden />
            {t.labels.education}
          </h2>
          <ol className="mt-3 space-y-4">
            {t.education.map((edu) => (
              <li
                key={`${edu.school}-${edu.period}`}
                className="break-inside-avoid"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {edu.degree} ·{' '}
                    <span className="text-accent-500">{edu.school}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            <Sparkles className="size-4" aria-hidden />
            {t.labels.skills}
          </h2>
          <dl className="mt-3 grid gap-3 sm:grid-cols-3">
            {t.skills.map((group) => (
              <div key={group.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {group.label}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {group.items.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            <Award className="size-4" aria-hidden />
            {t.labels.courses}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t.courses}{' '}
            <a
              href="https://www.linkedin.com/in/carlos-eduardo-996672222/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-500 underline-offset-2 hover:underline"
            >
              linkedin.com/in/carlos-eduardo/certifications
            </a>
          </p>
        </section>

        <footer className="mt-10 border-t border-border pt-4 text-center text-[11px] text-muted-foreground print:mt-8">
          {t.labels.updated} {updatedLabel} · carlosrossy.dev
        </footer>
      </article>
    </div>
  );
}
