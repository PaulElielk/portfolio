"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t.about.stat1Label, icon: Rocket },
    { value: "8+", label: t.about.stat2Label, icon: GraduationCap },
    { value: t.about.stat3Value, label: t.about.stat3Label, icon: MapPin },
  ];

  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
          className="mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent-emerald)]">
            {t.about.sectionLabel}
          </span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={1}
          className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid items-start gap-8 md:grid-cols-5 lg:gap-12">
          {/* Text Content - 3 columns */}
          <div className="space-y-5 md:col-span-3">
            {[t.about.p1, t.about.p2, t.about.p3].map((paragraph, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={index + 2}
                className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Stats - 2 columns */}
          <div className="space-y-3.5 md:col-span-2 md:-mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={index + 3}
                className="glass-card flex items-center gap-5 rounded-2xl pl-7 pr-6 py-6"
              >
                <div
                  className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(16, 185, 129, 0.1)" }}
                >
                  <stat.icon size={20} className="text-[var(--accent-emerald)]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
