"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "DevOps Engineer",
    company: "Kyra Solutions",
    period: "Sep 2023 – Present",
    location: "Ahmedabad, Gujarat, India · On-site",
    color: "#22c55e",
    tags: ["AWS", "Terraform", "Docker", "Jenkins", "CloudWatch"],
    bullets: [
      "Monitored and optimized AWS services including EC2, VPC, S3, IAM, CloudWatch, and SNS, reducing infrastructure costs while maintaining high availability.",
      "Configured and managed Load Balancers and Auto-Scaling to ensure seamless application performance and zero downtime.",
      "Implemented S3 bucket replication and lifecycle policies for efficient data management.",
      "Managed user access using IAM, created and maintained groups, and assigned granular access using AWS policies.",
      "Established VPC peering connections to enable private communication between multiple VPCs.",
      "Designed and maintained custom dashboards in CloudWatch to enhance visibility and monitoring.",
      "Deployed applications in Docker containers and set up Jenkins CI/CD pipelines including freestyle and declarative jobs.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Virtuebyte",
    period: "Apr 2021 – Aug 2023",
    location: "Pune, Maharashtra, India · Remote",
    color: "#3b82f6",
    tags: ["AWS", "EC2", "VPC", "IAM", "S3", "Docker"],
    bullets: [
      "Monitored and optimized AWS services including EC2, VPC, S3, IAM, CloudWatch, and SNS.",
      "Configured Load Balancers and Auto-Scaling for seamless application performance.",
      "Managed IAM roles, groups, and granular access policies for secure project handling.",
      "Conducted daily monitoring of application logs and EC2 health using CloudWatch.",
      "Deployed applications in Docker containers and managed Jenkins CI/CD pipelines.",
    ],
  },
  {
    role: "Intern",
    company: "Cyber Impulse Software",
    period: "Internship",
    location: "India",
    color: "#8b5cf6",
    tags: ["Linux", "Bash", "Python", "Networking"],
    bullets: [
      "Gained hands-on experience with Linux system administration and networking fundamentals.",
      "Assisted in scripting automation tasks using Bash and Python.",
      "Supported the team with infrastructure setup and basic cloud operations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-[1100px] text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">Experience</p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Work Experience</h2>
      </motion.div>

      <div className="mx-auto max-w-[1100px]">
        <div className="relative ml-4 pl-10 md:ml-8 md:pl-14">
          {/* Timeline line */}
          <div className="absolute -left-0 top-0 bottom-0 w-px bg-[#21262d]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="relative mb-10 last:mb-0"
            >
              {/* Node */}
              <div
                className="absolute -left-[calc(2.5rem+5px)] md:-left-[calc(3.5rem+5px)] top-5 flex h-[10px] w-[10px] items-center justify-center rounded-full"
                style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}60` }}
              />

              <div
                className="overflow-hidden rounded-xl border border-[#21262d] bg-[#0d1117] transition-all duration-300 hover:border-[#30363d] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{ borderLeftWidth: 3, borderLeftColor: exp.color }}
              >
                {/* Card header */}
                <div className="flex flex-col gap-2 border-b border-[#21262d] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <p className="text-[13px] font-medium" style={{ color: exp.color }}>{exp.company}</p>
                    {exp.location && <p className="text-[11px] text-slate-500">{exp.location}</p>}
                  </div>
                  <span className="rounded-md border border-[#21262d] bg-[#161b22] px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                    {exp.period}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  {/* Tech tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-[#21262d] bg-[#161b22] px-2 py-0.5 text-[10px] font-medium text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-400">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
