"use client";

import { motion } from "framer-motion";
import {
  Send,
  MessageCircle,
  FileDown,
} from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_NUMBER = "2250101905020";
const CV_LINK =
  "https://docs.google.com/document/d/1Rd0VrJc-zbxfjY566QIfBI9KeelDeq_N0tPgpQ_RRfM/edit?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/pauleliel-dev";
const GITHUB_URL = "https://github.com/PaulElielk";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Contact() {
  const { t } = useLanguage();

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour Paul-Eliel, je suis intéressé par vos services."
  )}`;

  return (
    <section id="contact" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent-emerald)]">
            {t.contact.sectionLabel}
          </span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={1}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center"
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={2}
          className="text-[var(--text-secondary)] max-w-[500px] mx-auto mb-12 text-sm sm:text-base text-center"
        >
          {t.contact.subtitle}
        </motion.p>

        <div className="max-w-[700px] mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form - 3 columns */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              custom={3}
              className="md:col-span-3 glass-card rounded-2xl p-6 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const whatsappMsg = `Bonjour Paul-Eliel,\n\nNom: ${name}\nEmail: ${email}\n\n${message}`;
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`,
                  "_blank"
                );
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-[var(--text-secondary)] mb-2"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] focus:ring-1 focus:ring-[var(--accent-emerald)]/30 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-[var(--text-secondary)] mb-2"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] focus:ring-1 focus:ring-[var(--accent-emerald)]/30 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-[var(--text-secondary)] mb-2"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] focus:ring-1 focus:ring-[var(--accent-emerald)]/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white cursor-pointer transition-all duration-300 glow-emerald-hover"
                style={{ background: "var(--gradient-emerald)" }}
              >
                <Send size={16} />
                {t.contact.send}
              </button>
            </motion.form>

            {/* Sidebar - 2 columns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              custom={4}
              className="md:col-span-2 space-y-4"
            >
              {/* WhatsApp Direct */}
              <div className="glass-card rounded-2xl p-5 text-center">
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  {t.contact.orWhatsapp}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  {t.contact.whatsapp}
                </a>
              </div>

              {/* Quick Links */}
              <div className="glass-card rounded-2xl p-5 space-y-3">
                <a
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.03] transition-all"
                >
                  <FileDown size={18} className="text-[var(--accent-emerald)]" />
                  {t.contact.cv}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.03] transition-all"
                >
                  <span className="text-[var(--accent-blue)]"><LinkedinIcon size={18} /></span>
                  {t.contact.linkedin}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.03] transition-all"
                >
                  <span className="text-[var(--text-primary)]"><GithubIcon size={18} /></span>
                  {t.contact.github}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
