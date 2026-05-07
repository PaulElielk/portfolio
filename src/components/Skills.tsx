"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Bot,
  MessageSquare,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

export function Skills() {
  const { t } = useLanguage();

  const categories: SkillCategory[] = [
    {
      title: t.skills.frontend,
      gradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "Next.js", icon: Globe },
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: Layout },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Framer Motion", icon: Smartphone },
      ],
    },
    {
      title: t.skills.backend,
      gradient: "from-emerald-500/20 to-teal-500/20",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Supabase", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "REST APIs", icon: Globe },
      ],
    },
    {
      title: t.skills.automation,
      gradient: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "WhatsApp Bots", icon: MessageSquare },
        { name: "Python", icon: Bot },
        { name: "Web Scraping", icon: Code2 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
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
            {t.skills.sectionLabel}
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
          {t.skills.title}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={2}
          className="mb-10 max-w-[600px] text-sm text-[var(--text-secondary)] sm:text-base"
        >
          {t.skills.subtitle}
        </motion.p>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              custom={catIndex + 3}
              className="glass-card group relative h-full overflow-hidden rounded-[1.75rem] p-6 sm:p-8 box-border"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-3.5 rounded-2xl bg-white/[0.02] px-4 py-3 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] box-border"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] transition-colors group-hover/skill:bg-white/[0.08]">
                        <skill.icon
                          size={18}
                          className="text-[var(--accent-emerald)] opacity-70 group-hover/skill:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-sm font-medium sm:text-[0.95rem]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
