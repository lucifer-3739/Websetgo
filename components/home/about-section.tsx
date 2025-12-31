"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              My Story & Skills
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed text-muted-foreground dark:text-neutral-300"
          >
            I'm a dedicated web developer passionate about helping small
            businesses thrive in the digital landscape. With years of experience
            in modern development practices, I focus on creating tools that
            solve real business problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed text-muted-foreground dark:text-neutral-300"
          >
            Every line of code I write is aimed at one goal: helping you get
            more leads and grow your business online through premium,
            high-performance web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code, text: "Modern React/Next.js" },
              { icon: Server, text: "Scalable Backends" },
              { icon: Smartphone, text: "Mobile-First Design" },
              { icon: Globe, text: "SEO & Performance" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="
                  flex items-center gap-3 p-4 rounded-2xl
                  bg-linear-to-r from-white/20 to-white/10 dark:from-neutral-900/30 dark:to-neutral-900/20
                  backdrop-blur-xl
                  border border-white/20 dark:border-neutral-800/40
                  shadow-lg shadow-orange-500/10 dark:shadow-orange-400/20
                  hover:shadow-xl hover:shadow-orange-500/20 dark:hover:shadow-orange-400/25
                  transition-all duration-300
                "
              >
                <skill.icon className="text-orange-500 dark:text-orange-400 w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold text-foreground/90">
                  {skill.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="
            relative aspect-square rounded-3xl overflow-hidden
            bg-linear-to-br from-white/20 via-white/10 to-white/5 dark:from-neutral-900/25 via-neutral-900/15 to-neutral-900/10
            backdrop-blur-2xl
            shadow-2xl shadow-orange-500/15 dark:shadow-orange-400/20
            border border-white/15 dark:border-neutral-800/30
          "
        >
          {/* Inner glow overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 via-transparent to-orange-400/10 dark:from-orange-400/20 dark:to-orange-500/20" />

          {/* Glass overlay for depth */}
          <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-sm" />

          <img
            src="/developer-portrait-professional.jpg"
            alt="Websetgo Developer"
            className="w-full h-full object-cover relative z-10"
          />

          {/* Decorative shine */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 dark:bg-neutral-200/20 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}
