"use client";

import { motion } from "framer-motion";

const certs = [
  {
    icon: "☁️",
    name: "AWS Cloud Quest: Cloud Practitioner",
    subtitle: "Training Badge",
    level: "Foundational",
    color: "#f97316",
    badgeBg: "#f97316",
    verifyUrl: "https://www.credly.com/badges/7dae0887-62b8-4da4-8c73-dccceb4336da/linked_in_profile",
  },
  {
    icon: "🏗️",
    name: "AWS Knowledge: Architecting",
    subtitle: "Solutions Architect Path",
    level: "Associate",
    color: "#3b82f6",
    badgeBg: "#3b82f6",
    verifyUrl: "https://www.credly.com/badges/b35b15f1-1955-4812-9fc6-9982cdfa1ed3/linked_in_profile",
  },
  {
    icon: "✅",
    name: "Well-Architected Proficient",
    subtitle: "Framework Proficiency",
    level: "Proficient",
    color: "#22c55e",
    badgeBg: "#22c55e",
    verifyUrl: "https://www.credly.com/badges/62e2946a-82f4-49be-b5b4-574f1c527d89/linked_in_profile",
  },
  {
    icon: "🌐",
    name: "AWS Knowledge: Cloud Essentials",
    subtitle: "Training Badge",
    level: "Foundational",
    color: "#8b5cf6",
    badgeBg: "#8b5cf6",
    verifyUrl: "https://www.credly.com/badges/cddb544f-b0ef-473e-90bf-2c3031d2e363/linked_in_profile",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-[1100px] text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">Certifications</p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">AWS Certifications</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">Validated cloud skills and expertise.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-2"
      >
        {certs.map((c) => (
          <motion.div
            key={c.name}
            variants={card}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex items-center gap-5 overflow-hidden rounded-xl border border-[#21262d] bg-[#0d1117] p-5 transition-all duration-300 hover:border-[#30363d] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            style={{ borderLeftWidth: 3, borderLeftColor: c.color }}
          >
            {/* Hex badge */}
            <div className="relative flex-shrink-0">
              <div
                className="badge-hex flex h-[68px] w-[60px] items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${c.badgeBg}18` }}
              >
                {c.icon}
              </div>
              {/* Badge glow */}
              <div
                className="absolute inset-0 badge-hex opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `${c.badgeBg}15` }}
              />
            </div>

            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">{c.name}</h3>
              </div>
              <p className="mb-2 text-[11px] text-slate-500">{c.subtitle}</p>
              <div className="flex items-center gap-3">
                <span
                  className="rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ borderColor: `${c.color}30`, color: c.color, background: `${c.color}08` }}
                >
                  {c.level}
                </span>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-slate-500 transition-colors hover:text-white"
                >
                  Verify →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
