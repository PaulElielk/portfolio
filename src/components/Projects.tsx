"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { useLanguage } from "@/lib/language-context";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
          className="mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent-emerald)]">
            {t.projects.sectionLabel}
          </span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={1}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight"
        >
          {t.projects.title}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={2}
          className="mb-10 max-w-[600px] text-sm text-[var(--text-secondary)] sm:text-base"
        >
          {t.projects.subtitle}
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-7">
          {t.projects.items.map((project, index) => (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              custom={index + 3}
              className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] box-border"
            >
              {/* Project Header */}
              <div className="p-6 pb-0 sm:p-8 sm:pb-0 box-border">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald-light)] transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="ml-2 flex shrink-0 items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-emerald)] hover:bg-white/[0.05] transition-all"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-emerald)] hover:bg-white/[0.05] transition-all"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Problem Solved */}
              <div className="flex-grow p-6 pb-5 sm:p-8 sm:pt-6 box-border">
                <div className="mb-3.5">
                  <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-emerald)] opacity-70">
                    {t.projects.problemSolved}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.problem}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 pb-5 pt-0 sm:p-8 sm:pt-0 sm:pb-6 box-border">
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-auto border-t border-[var(--border-subtle)] p-6 sm:p-8 box-border">
                <div className="mt-0 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
