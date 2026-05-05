"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer
        border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-emerald-light)] hover:border-[var(--border-accent)] bg-white/[0.03] hover:bg-white/[0.06]"
      aria-label="Toggle language"
    >
      <Languages size={14} />
      <span className="uppercase tracking-wider">{lang === "fr" ? "EN" : "FR"}</span>
    </motion.button>
  );
}
