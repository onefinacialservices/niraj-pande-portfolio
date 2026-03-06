"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 192;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.041s.png`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImages([...loadedImages]);
        }
      };
      loadedImages[i] = img;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  // Draw frame on canvas
  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = () => {
      const index = Math.min(
        Math.round(frameIndex.get()),
        FRAME_COUNT - 1
      );
      const img = images[index];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Cover logic
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const unsubscribe = frameIndex.on("change", drawFrame);

    // Initial draw
    drawFrame();

    // Handle resize
    const handleResize = () => drawFrame();
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Loading overlay */}
      {images.length === 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]">
          <div className="mb-4 text-lg text-white/60 tracking-widest uppercase text-sm">
            Loading
          </div>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mt-2 text-white/40 text-sm">{loadProgress}%</div>
        </div>
      )}

      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
