"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% - 25%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.28], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-30%"]);

  // Section 2: 25% - 55%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], ["0%", "-20%"]);

  // Section 3: 55% - 85%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], ["0%", "-20%"]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-10 h-[500vh]"
    >
      {/* Section 1 — Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          NIRAJ PANDE
        </h1>
        <p className="mt-4 text-lg font-light tracking-[0.3em] uppercase text-white/60 md:text-xl">
          DevOps Engineer
        </p>
      </motion.div>

      {/* Section 2 — Left aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="sticky top-0 flex h-screen w-full flex-col justify-center px-8 md:px-20"
      >
        <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          I automate
          <br />
          <span className="text-orange-400">cloud infrastructure.</span>
        </h2>
        <p className="mt-4 max-w-md text-base text-white/50 md:text-lg">
          3+ years designing, automating &amp; managing scalable cloud systems with AWS, Terraform &amp; Docker.
        </p>
      </motion.div>

      {/* Section 3 — Right aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="sticky top-0 flex h-screen w-full flex-col items-end justify-center px-8 md:px-20 text-right"
      >
        <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          CI/CD pipelines
          <br />
          <span className="text-blue-400">&amp; zero downtime.</span>
        </h2>
        <p className="mt-4 max-w-md text-base text-white/50 md:text-lg">
          Building reliable deployment pipelines &amp; ensuring high availability of production systems.
        </p>
      </motion.div>
    </div>
  );
}
