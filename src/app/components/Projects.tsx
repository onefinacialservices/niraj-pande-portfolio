"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AWS Infrastructure Automation",
    desc: "Automated AWS VPC, subnets, and networking with reusable Terraform modules. Manages 50+ cloud resources with infrastructure as code.",
    tags: ["AWS", "Terraform", "Linux"],
  },
  {
    title: "CI/CD Pipeline Deployment",
    desc: "End-to-end automated build, test, and deploy pipelines with Jenkins and GitHub Actions. Handles 200+ builds per week.",
    tags: ["Jenkins", "GitHub", "Docker"],
  },
  {
    title: "Dockerized Microservices",
    desc: "Containerized applications deployed on ECS for scalable cloud services. Running 12 production microservices.",
    tags: ["Docker", "ECS", "ECR"],
  },
  {
    title: "Cloud Monitoring System",
    desc: "Full-stack monitoring with alerts, dashboards, and log analysis. Tracking 99.9% uptime across all services.",
    tags: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    title: "Zero Downtime Deployment",
    desc: "Blue-Green deployment strategy with automatic rollback and traffic routing. Zero seconds of downtime.",
    tags: ["ECS", "ALB", "CI/CD"],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-4 max-w-[1100px]"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Selected Work</p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Projects</h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-emerald-500" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto grid max-w-[1100px] gap-5 pt-10 md:grid-cols-2"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={card}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group flex flex-col justify-between rounded-xl border border-[#21262d] bg-[#0d1117] p-7 transition-all duration-300 hover:border-[#30363d] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            {/* Title row with arrow */}
            <div>
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-bold text-white pr-4">{p.title}</h3>
                <span className="mt-1 flex-shrink-0 text-slate-600 transition-colors group-hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">{p.desc}</p>
            </div>

            {/* Tags at bottom */}
            <div className="mt-8 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#30363d] px-3.5 py-1.5 text-xs font-medium text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
