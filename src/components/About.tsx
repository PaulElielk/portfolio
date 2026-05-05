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
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 tracking-tight"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text Content - 3 columns */}
          <div className="md:col-span-3 space-y-6">
            {[t.about.p1, t.about.p2, t.about.p3].map((paragraph, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={index + 2}
                className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Stats - 2 columns */}
          <div className="md:col-span-2 space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={index + 3}
                className="glass-card rounded-xl p-5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                  <stat.icon size={20} className="text-[var(--accent-emerald)]" />
                </div>
                <div>
                  <div className="text-xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
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
