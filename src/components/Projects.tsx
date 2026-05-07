"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

// ─── Map each project name to its public screenshot ─────────────────────────
// Keys must exactly match the `name` field in translations (FR and EN both).
const PROJECT_THUMBNAILS: Record<string, string> = {
  // FR
  "Plateforme E-commerce Mode": "/clothing-store.png",
  "Marketplace Généraliste": "/general-store.png",
  "Hub de Communication en Temps Réel": "/chat-app.png",
  // EN
  "Fashion E-commerce Platform": "/clothing-store.png",
  "General Marketplace": "/general-store.png",
  "Real-time Communication Hub": "/chat-app.png",
};

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
    <section id="projects" className="relative overflow-hidden">
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
          {t.projects.items.map((project, index) => {
            const thumb = PROJECT_THUMBNAILS[project.name];
            return (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={index + 3}
                className="glass-card group flex flex-col overflow-hidden rounded-[1.75rem] box-border"
              >
                {/* ── Thumbnail (16:9 — 60 % card height approximated) ──── */}
                <div className="relative w-full aspect-video overflow-hidden rounded-t-[1.75rem] shrink-0">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* Fallback gradient placeholder */
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)]">
                      <svg
                        className="w-14 h-14 opacity-30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    </div>
                  )}

                  {/* Subtle darkening gradient at the bottom of the image */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg-card)] to-transparent pointer-events-none" />
                </div>

                {/* ── Project Title ─────────────────────────────────────── */}
                <div className="px-6 pt-5 sm:px-8 sm:pt-6 box-border">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald-light)] transition-colors leading-tight">
                    {project.name}
                  </h3>
                </div>

                {/* ── Problem Solved ────────────────────────────────────── */}
                <div className="flex-grow px-6 pt-4 pb-3 sm:px-8 sm:pt-5 box-border">
                  <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-emerald)] opacity-70">
                    {t.projects.problemSolved}
                  </span>

                  {/* Bullet-point list — 3-second scannable */}
                  <ul className="mt-3 space-y-2">
                    {project.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
                      >
                        <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Tech Stack ────────────────────────────────────────── */}
                <div className="border-t border-[var(--border-subtle)] px-6 py-4 sm:px-8 box-border">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Full-Width CTA ────────────────────────────────────── */}
                <a
                  href={(project as { demo?: string; github: string }).demo ?? project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-cta-btn rounded-b-[1.75rem]"
                  aria-label={`Voir le site en direct — ${project.name}`}
                >
                  {(project as { demo?: string }).demo
                    ? "VOIR LE SITE EN DIRECT →"
                    : "VOIR LE CODE SOURCE →"}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
