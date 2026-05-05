"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Database, MessageCircle, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const serviceIcons = [ShoppingCart, Database, MessageCircle];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[120px]" />

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
            {t.services.sectionLabel}
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
          {t.services.title}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={2}
          className="text-[var(--text-secondary)] max-w-[600px] mb-12 text-sm sm:text-base"
        >
          {t.services.subtitle}
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={index + 3}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                  <Icon
                    size={22}
                    className="text-[var(--accent-emerald)]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                    >
                      <Check
                        size={14}
                        className="text-[var(--accent-emerald)] shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
