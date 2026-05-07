"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-emerald-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[980px] px-5 text-center sm:px-8 lg:px-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-7 inline-flex min-h-12 items-center gap-2.5 rounded-full border border-[var(--border-accent)] bg-emerald-500/[0.08] pl-6 pr-5 py-2.5 text-xs font-medium leading-normal text-[var(--accent-emerald-light)] shadow-[0_10px_30px_rgba(16,185,129,0.12)] sm:mb-8 sm:pl-7 sm:pr-6 sm:py-3 sm:text-sm"
        >
          <Sparkles size={14} className="shrink-0" />
          <span>Solution Provider • Abidjan, Côte d&apos;Ivoire</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 text-4xl font-bold leading-[0.95] tracking-tight m sm:mb-7 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">{t.hero.headline}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-8 max-w-[760px] text-base leading-relaxed text-[var(--text-secondary)] sm:mb-10 sm:text-lg md:text-xl"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-4 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-5"
        >
          <a
            href="#projects"
            className="group relative inline-flex min-h-14 items-center justify-center gap-2.5 overflow-hidden rounded-full pl-7 pr-6 py-3.5 text-base font-semibold leading-normal text-white transition-all duration-300 glow-emerald-hover sm:min-h-16 sm:pl-9 sm:pr-8 sm:py-4 sm:text-lg"
            style={{ background: "var(--gradient-emerald)" }}
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <ArrowDown
              size={20}
              className="relative z-10 transition-transform group-hover:translate-y-1"
            />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-white/[0.02] pl-7 pr-6 py-3.5 text-base font-semibold leading-normal text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-accent)] hover:bg-white/[0.05] hover:text-[var(--accent-emerald-light)] sm:min-h-16 sm:pl-9 sm:pr-8 sm:py-4 sm:text-lg"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--text-muted)] flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[var(--accent-emerald)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
