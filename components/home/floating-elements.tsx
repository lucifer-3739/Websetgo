"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function FloatingElements() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 20);
      y.set((e.clientY / window.innerHeight - 0.5) * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* ───────────── Floating Card 1 ───────────── */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-[10%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-40 p-4 rounded-2xl flex flex-col justify-between bg-neutral-100/50 dark:bg-white/12 backdrop-blur-md dark:backdrop-blur-xl border border-neutral-300/60 dark:border-white/20 shadow-xl shadow-orange-500/15 dark:shadow-orange-400/30"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center
            bg-orange-500/20"
          >
            <div className="w-4 h-4 rounded bg-orange-500" />
          </div>

          <div className="space-y-2">
            <div className="h-2 rounded bg-neutral-400/50 dark:bg-white/30" />
            <div className="h-2 w-3/4 rounded bg-neutral-400/40 dark:bg-white/20" />
          </div>
        </motion.div>
      </motion.div>

      {/* ───────────── Floating Chart ───────────── */}
      <motion.div
        style={{
          x: useTransform(springX, (val) => val * -0.3),
          y: useTransform(springY, (val) => val * -0.3)
        }}
        className="absolute top-1/3 right-[8%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 15, 0], rotateY: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-36 h-28 p-4 rounded-2xl bg-neutral-100/50 dark:bg-white/12 backdrop-blur-md dark:backdrop-blur-xl border border-neutral-300/60 dark:border-white/20 shadow-lg shadow-orange-500/10 dark:shadow-orange-400/25
          "
        >
          <div className="flex items-end gap-1 h-full">
            {[40, 60, 45, 80, 65, 90].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="
                  flex-1 rounded-t
                  bg-orange-500
                "
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ───────────── Growth Arrow ───────────── */}
      <motion.div
        style={{
          x: useTransform(springX, (val) => val * 0.4),
          y: useTransform(springY, (val) => val * 0.4)
        }}
        className="absolute bottom-1/3 left-[15%] hidden lg:block"
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M10 60 L40 30 L70 20"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="70,20 60,25 65,35" fill="#f97316" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* ───────────── Glowing Orbs ───────────── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="
          absolute top-1/2 left-[5%]
          w-4 h-4 rounded-full
          bg-orange-500
          blur-sm shadow-lg shadow-orange-500/40
        "
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="
          absolute top-1/3 right-[20%]
          w-3 h-3 rounded-full
          bg-orange-500
          blur-sm shadow-md shadow-orange-500/30
        "
      />
    </div>
  );
}
