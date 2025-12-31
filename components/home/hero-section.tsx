"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import { FloatingElements } from "./floating-elements";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 
          bg-linear-to-br from-orange-400/15 via-orange-500/10 to-orange-600/5
          dark:from-orange-500/25 dark:via-orange-400/20 dark:to-orange-500/10
          rounded-full blur-3xl animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-linear-to-br from-orange-500/10 via-orange-400/5 to-orange-500/3
          dark:from-orange-400/20 dark:via-orange-500/15 dark:to-orange-400/10
          rounded-full blur-3xl animate-pulse delay-1000"
        />

        {/* Central radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-125 h-125 
          bg-gradient-radial from-orange-400/8 via-orange-500/4 to-transparent
          dark:from-orange-500/15 dark:via-orange-400/10
          rounded-full blur-3xl"
        />

        {/* Subtle glass overlay */}
        <div
          className="absolute inset-0 
          bg-linear-to-b from-white/5 via-transparent to-white/2
          dark:from-neutral-900/10 dark:via-transparent dark:to-neutral-900/5
          backdrop-blur-sm"
        />
      </div>

      <FloatingElements />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-2xl
              bg-linear-to-r from-orange-500/15 to-orange-600/10
              dark:from-orange-400/25 dark:to-orange-500/20
              backdrop-blur-xl
              border border-orange-400/30 dark:border-orange-500/40
              shadow-lg shadow-orange-500/20 dark:shadow-orange-400/30
              text-orange-500 dark:text-orange-400
              text-sm font-semibold tracking-wide
            "
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
          >
            <Zap size={16} className="animate-pulse drop-shadow-sm" />
            Web Developer for Small Businesses
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="
    text-4xl md:text-6xl lg:text-7xl
    font-bold mb-6 leading-tight text-balance
    bg-linear-to-r
    from-white via-neutral-200 to-neutral-400
    dark:from-white dark:via-neutral-200 dark:to-neutral-400
    bg-clip-text text-transparent
  "
        >
          Professional Website Developer <br className="hidden md:block" />
          Helping Businesses Get{" "}
          <span className="relative bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            More Leads
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="
        absolute -bottom-4 left-0 right-0 h-2
        bg-linear-to-r from-orange-500/80 to-orange-600/60
        rounded-full origin-left shadow-lg
      "
            />
          </span>{" "}
          Online
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground dark:text-neutral-300 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
        >
          I craft high-performance websites and implement SEO strategies that
          drive real results for small businesses. Partner with me for long-term
          growth and digital excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <Button
            size="lg"
            className="
              bg-linear-to-r from-orange-500 to-orange-600 
              dark:from-orange-400 dark:to-orange-500
              hover:from-orange-600 hover:to-orange-700
              dark:hover:from-orange-500 dark:hover:to-orange-600
              text-white font-bold px-10 py-7 text-xl group
              shadow-2xl shadow-orange-500/30 dark:shadow-orange-400/40
              hover:shadow-3xl hover:shadow-orange-500/50 dark:hover:shadow-orange-400/60
              backdrop-blur-md border border-orange-500/40 dark:border-orange-400/50
              relative overflow-hidden
            "
          >
            <span className="relative z-10">Get Free Website Consultation</span>
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform shrink-0" />
            <div className="absolute inset-0 bg-white/20 blur-sm scale-110 group-hover:scale-100 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="
              px-10 py-7 text-xl
              bg-white/15 dark:bg-neutral-900/30
              backdrop-blur-xl
              border border-white/30 dark:border-neutral-800/50
              hover:bg-white/25 dark:hover:bg-neutral-900/50
              hover:border-orange-400/50
              text-foreground/90 hover:text-orange-400
              shadow-xl shadow-orange-500/15 dark:shadow-orange-400/20
              hover:shadow-2xl hover:shadow-orange-500/30 dark:hover:shadow-orange-400/40
            "
          >
            <TrendingUp className="mr-3 text-orange-500 dark:text-orange-400" />
            Boost My Google Rankings
          </Button>
        </motion.div>

        {/* Glass Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "SEO Rankings Improved" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -10,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
              }}
              className="
                p-6 rounded-2xl text-center
                bg-linear-to-b from-white/20 via-white/10 to-white/5
                dark:from-neutral-900/30 dark:via-neutral-900/20 dark:to-neutral-900/10
                backdrop-blur-xl
                border border-white/25 dark:border-neutral-800/40
                shadow-xl shadow-orange-500/20 dark:shadow-orange-400/30
                hover:shadow-2xl hover:shadow-orange-500/40 dark:hover:shadow-orange-400/50
                transition-all duration-500
              "
            >
              <div
                className="text-3xl md:text-4xl font-black mb-3
                bg-linear-to-r from-orange-500 to-orange-600
                dark:from-orange-400 dark:to-orange-500
                bg-clip-text text-transparent drop-shadow-lg
              "
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground dark:text-neutral-300 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
