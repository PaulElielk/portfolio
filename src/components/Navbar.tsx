"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { LanguageToggle } from "./LanguageToggle";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="relative group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 text-sm font-bold text-white">
            PK
          </div>
          <span className="text-[var(--text-primary)] font-semibold text-lg hidden sm:block">
            Paul-Eliel<span className="text-[var(--accent-emerald)]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="rounded-xl px-3.5 py-2.5 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:bg-white/[0.03] hover:text-[var(--accent-emerald-light)]"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass border-t border-[var(--border-subtle)] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent-emerald-light)] hover:bg-white/[0.03] rounded-lg transition-all text-sm"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
