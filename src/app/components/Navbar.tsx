"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Pipeline", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060a13]/80 backdrop-blur-xl border-b border-[#21262d]/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/30">
            <span className="text-sm font-bold text-emerald-400">N</span>
          </div>
          <span className="text-sm font-bold tracking-wide text-white">
            NIRAJ <span className="text-emerald-400">PANDE</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 transition-all hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] md:block"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
