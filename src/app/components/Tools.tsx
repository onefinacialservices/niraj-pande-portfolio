"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Cloud",
    color: "#3b82f6",
    tools: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🌐" },
    ],
  },
  {
    label: "Containers",
    color: "#22c55e",
    tools: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⎈" },
      { name: "ECS", icon: "📦" },
    ],
  },
  {
    label: "IaC",
    color: "#8b5cf6",
    tools: [
      { name: "Terraform", icon: "🏗️" },
      { name: "CloudFormation", icon: "📐" },
      { name: "Ansible", icon: "⚙️" },
    ],
  },
  {
    label: "CI / CD",
    color: "#f97316",
    tools: [
      { name: "Jenkins", icon: "🔧" },
      { name: "GitHub Actions", icon: "⚡" },
    ],
  },
  {
    label: "Monitoring",
    color: "#eab308",
    tools: [
      { name: "Prometheus", icon: "🔥" },
      { name: "Grafana", icon: "📊" },
      { name: "CloudWatch", icon: "👁️" },
    ],
  },
  {
    label: "Core",
    color: "#22c55e",
    tools: [
      { name: "Git", icon: "📝" },
      { name: "Linux", icon: "🐧" },
      { name: "Bash", icon: "💻" },
      { name: "Python", icon: "🐍" },
      { name: "IAM", icon: "🔐" },
    ],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function Tools() {
  return (
    <section id="tools" className="relative px-6 py-28 md:px-10">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto mb-16 max-w-[1100px] text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">Tech Stack</p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">My Tech Toolbox</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">Technologies I use daily to build and manage cloud infrastructure.</p>
      </motion.div>

      <div className="relative mx-auto max-w-[1100px] space-y-10">
        {categories.map((cat) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}60` }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: cat.color }}>{cat.label}</span>
              <div className="h-px flex-1 bg-[#21262d]" />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {cat.tools.map((t) => (
                <motion.div
                  key={t.name}
                  variants={item}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-[#21262d] bg-[#0d1117] p-5 transition-all duration-300 hover:border-[#30363d]"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${cat.color}12, 0 4px 16px rgba(0,0,0,0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg border bg-[#161b22] text-2xl transition-transform duration-200 group-hover:scale-110"
                    style={{ borderColor: `${cat.color}20` }}
                  >
                    {t.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-300">{t.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
