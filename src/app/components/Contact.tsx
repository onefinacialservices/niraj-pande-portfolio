"use client";

import { motion } from "framer-motion";

const contactInfo = [
  { icon: "📧", label: "Email", value: "pandeniraj883@gmail.com", href: "mailto:pandeniraj883@gmail.com" },
  { icon: "📍", label: "Location", value: "India", href: "" },
];

const socials = [
  { icon: "🐙", label: "GitHub", href: "https://github.com/nirajpande" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/niraj-pande-033042259" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-[1100px] text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">Contact</p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Let&apos;s Work Together</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">Available for DevOps roles, freelance projects, and collaboration.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-[1100px] gap-0 overflow-hidden rounded-xl border border-[#21262d] bg-[#0d1117] md:grid-cols-2"
      >
        {/* Left side - Contact info */}
        <div className="flex flex-col justify-between border-b border-[#21262d] p-8 md:border-b-0 md:border-r md:p-10">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white">Contact Us.</h3>
            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              Have a project in mind or need DevOps expertise? Let&apos;s connect and build something great.
            </p>

            {/* Contact details */}
            <div className="mb-8 space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">{info.icon}</span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-slate-300 transition-colors hover:text-emerald-400">{info.value}</a>
                    ) : (
                      <p className="text-sm text-slate-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#21262d] bg-[#161b22] text-lg transition-all hover:border-emerald-500/30 hover:shadow-[0_0_12px_rgba(34,197,94,0.15)]"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Contact form with green corner accents */}
        <div className="relative p-8 md:p-10">
          {/* Green corner accents */}
          <div className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-emerald-500/60 md:left-8 md:top-8" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-emerald-500/60 md:bottom-8 md:right-8" />

          <h3 className="mb-6 text-lg font-bold text-emerald-400">Contact form</h3>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="form-input resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
