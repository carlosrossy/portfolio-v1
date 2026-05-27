'use client';

import { motion, type Variants } from 'framer-motion';
import { Mail } from 'lucide-react';

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

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[60vh] items-center px-6 py-32 md:px-10 lg:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="mx-auto flex w-full max-w-2xl flex-col items-center text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-mono text-sm text-accent-500"
        >
          04. What&apos;s Next?
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold tracking-tight md:text-5xl"
        >
          Get in touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Currently available for new projects and opportunities. If you want
          to chat, collaborate on something, or just say hi — drop me an
          email. I&apos;ll get back to you as soon as I can.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="mailto:carlosrossy@bemol.com.br"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-600/20 transition-all hover:shadow-xl hover:shadow-accent-600/30 hover:brightness-110"
          >
            <Mail className="size-4" />
            Say hello
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
