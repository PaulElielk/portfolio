"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
              PK
            </div>
            <span className="text-sm text-[var(--text-secondary)]">
              Paul-Eliel Kouamé
            </span>
          </div>

          {/* Made with love */}
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            © {year} · {t.footer.madeWith}{" "}
            <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            {t.footer.inAbidjan}
          </p>

          {/* Rights */}
          <p className="text-xs text-[var(--text-muted)]">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
