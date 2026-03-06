"use client";

import { motion } from "framer-motion";

const stages = [
  { icon: "📋", label: "Plan", color: "#8b5cf6", tool: "Jira" },
  { icon: "💻", label: "Code", color: "#3b82f6", tool: "GitHub" },
  { icon: "🔨", label: "Build", color: "#22c55e", tool: "Jenkins" },
  { icon: "🧪", label: "Test", color: "#eab308", tool: "Pytest" },
  { icon: "📦", label: "Release", color: "#f97316", tool: "Docker" },
  { icon: "🚀", label: "Deploy", color: "#3b82f6", tool: "ECS" },
  { icon: "📡", label: "Monitor", color: "#8b5cf6", tool: "Grafana" },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-[1100px] text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">Workflow</p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">DevOps Pipeline</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">End-to-end continuous integration and delivery workflow.</p>
      </motion.div>

      <div className="mx-auto max-w-[1100px]">
        {/* Dashboard-style pipeline container */}
        <div className="overflow-hidden rounded-xl border border-[#21262d] bg-[#0d1117]">
          {/* Pipeline header bar */}
          <div className="flex items-center justify-between border-b border-[#21262d] px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" style={{ boxShadow: "0 0 6px #22c55e" }} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">CI/CD Pipeline</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-medium text-emerald-400">All stages passing</span>
              <span className="rounded-md border border-[#21262d] bg-[#161b22] px-2 py-0.5 text-[10px] font-semibold text-slate-500">7 stages</span>
            </div>
          </div>

          {/* Pipeline stages */}
          <div className="p-6 md:p-8">
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-0">
              {/* Connecting line (desktop) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-[7%] right-[7%] top-[36px] z-0 hidden h-[2px] origin-left md:block"
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #22c55e, #eab308, #f97316, #3b82f6, #8b5cf6)",
                }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-[7%] right-[7%] top-[34px] z-0 hidden h-[6px] origin-left blur-sm md:block"
                style={{
                  background: "linear-gradient(90deg, #8b5cf640, #3b82f640, #22c55e40, #eab30840, #f9731640, #3b82f640, #8b5cf640)",
                }}
              />

              {/* Connecting line (mobile) */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-[36px] top-0 bottom-0 z-0 w-[2px] origin-top md:hidden"
                style={{
                  background: "linear-gradient(180deg, #8b5cf6, #3b82f6, #22c55e, #eab308, #f97316, #3b82f6, #8b5cf6)",
                }}
              />

              {stages.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="z-10 flex items-center gap-4 md:flex-col md:items-center md:gap-2.5"
                >
                  <div
                    className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-2xl border bg-[#0d1117] text-2xl transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: `${s.color}40`,
                      boxShadow: `0 0 20px ${s.color}15, inset 0 0 12px ${s.color}08`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex flex-col items-start md:items-center">
                    <span className="text-xs font-bold text-white">{s.label}</span>
                    <span className="text-[10px] text-slate-500">{s.tool}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
