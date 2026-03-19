"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/home/navbar";
import dynamic from "next/dynamic";
import { CheckCircle2, Code, Megaphone, Users, Award, TrendingUp } from "lucide-react";

const Footer = dynamic(() => import("@/components/home/footer").then((mod) => mod.Footer), { ssr: true });

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-4 py-2 rounded-full bg-orange-500/10 dark:bg-orange-400/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-medium tracking-wide mb-6"
          >
            Our Story
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 mb-8"
          >
            We Build Digital <br/>
            <span className="text-orange-500 dark:text-orange-400">Masterpieces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed"
          >
            Websetgo helps ambitious small businesses dominate the online market with 
            cutting-edge web development, sleek design, and aggressive SEO strategies.
          </motion.p>
        </div>
      </section>

      {/* Interactive Values Grid */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-orange-50/50 dark:via-orange-950/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Values</h2>
            <p className="text-zinc-500 dark:text-zinc-400">The principles that drive our engineering and marketing excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Engineering Precision",
                desc: "We write clean, semantic code that scales. Performance isn't just a feature; it's a foundation."
              },
              {
                icon: Megaphone,
                title: "SEO First",
                desc: "Your majestic website deserves to be seen. We bake top-tier SEO directly into the architecture."
              },
              {
                icon: Users,
                title: "Client Partnership",
                desc: "We don't just build and vanish. We partner with you for sustained digital dominance."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all"
              >
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center rounded-2xl mb-6 text-orange-500 dark:text-orange-400">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story / Split content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-orange-300">
              Transforming Visions
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              We started Websetgo because we saw too many small businesses getting 
              burned by outdated website builders, slow templates, and agencies that 
              charge top dollar for subpar work.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Our mission is to arm ambitious brands with enterprise-grade web applications 
              that look stunning, load instantly, and fundamentally transform website visitors 
              into high-paying leads.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "100% custom-coded solutions",
                "Conversion-optimized user interfaces",
                "Advanced tracking & analytics",
                "Relentless post-launch support"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Abstract graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-transparent opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent opacity-70" />
            
            {/* 3D-like floating cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[10%] w-[60%] h-[40%] bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-2xl border border-white/40 dark:border-white/10 shadow-2xl flex items-center justify-center p-8 text-center"
            >
              <Award className="w-16 h-16 text-orange-500 mb-4" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] right-[10%] w-[55%] h-[45%] bg-orange-500/90 backdrop-blur-xl rounded-2xl shadow-xl flex flex-col items-center justify-center text-white"
            >
              <TrendingUp className="w-12 h-12 mb-2" />
              <span className="font-bold text-xl uppercase tracking-wider">Growth</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Mini */}
      <section className="py-32 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-linear-to-br from-zinc-950 to-zinc-900 dark:from-zinc-900 dark:to-black" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-orange-500/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 p-12 md:p-24 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to dominate?</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
              Don't settle for a mediocre website. Partner with Websetgo to build an authoritative web presence that captures leads 24/7.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(249,115,22,0.4)]">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
