"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const benefits = [
  "Free consultation & strategy call",
  "Custom solutions tailored to your business",
  "Transparent pricing, no hidden fees",
  "Ongoing support & maintenance",
];

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20
            bg-linear-to-br from-white/20 via-white/10 to-white/5 
            dark:from-neutral-900/30 dark:via-neutral-900/20 dark:to-neutral-900/10
            backdrop-blur-2xl
            shadow-2xl shadow-orange-500/15 dark:shadow-orange-400/20
            border border-white/20 dark:border-neutral-800/40
          "
        >
          {/* Dynamic glow orbs */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [-10, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-20 w-32 h-32 bg-orange-400/20 dark:bg-orange-500/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [10, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-10 left-20 w-40 h-40 bg-orange-500/15 dark:bg-orange-400/25 rounded-full blur-2xl"
          />

          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-linear-to-r from-orange-500/5 via-transparent to-orange-400/5 dark:from-orange-400/10 dark:to-orange-500/10" />

          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                inline-block text-orange-500 dark:text-orange-400
                text-sm font-semibold tracking-wider uppercase mb-4
                bg-linear-to-r from-orange-400/20 dark:from-orange-500/30
                backdrop-blur-sm px-4 py-1 rounded-full
              "
            >
              Ready to Grow?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-balance bg-linear-to-r from-foreground/95 to-muted-foreground/90 bg-clip-text text-transparent"
            >
              Start Your Journey to{" "}
              <span className="bg-linear-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent font-bold">
                Online Success
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground dark:text-neutral-300 leading-relaxed"
            >
              Get a website that actually works for your business. Join other
              small businesses that trust Websetgo for their digital growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="
                    flex items-center gap-3 p-3 rounded-xl
                    bg-white/15 dark:bg-neutral-900/30
                    backdrop-blur-md
                    border border-white/20 dark:border-neutral-800/40
                    hover:bg-white/25 dark:hover:bg-neutral-900/45
                    transition-all duration-300
                    shadow-sm hover:shadow-md hover:shadow-orange-500/20 dark:hover:shadow-orange-400/25
                  "
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0" />
                  <span className="text-sm font-medium text-foreground/90">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="
                  bg-linear-to-r from-orange-500 to-orange-600 
                  dark:from-orange-400 dark:to-orange-500
                  hover:from-orange-600 hover:to-orange-700
                  dark:hover:from-orange-500 dark:hover:to-orange-600
                  text-white font-semibold px-8 py-6 text-lg group
                  shadow-lg shadow-orange-500/25 dark:shadow-orange-400/30
                  hover:shadow-xl hover:shadow-orange-500/40 dark:hover:shadow-orange-400/45
                  backdrop-blur-sm border border-orange-500/30 dark:border-orange-400/40
                "
              >
                Get Free Website Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="
                  border-green-500/50 dark:border-green-400/60
                  hover:bg-green-500/10 dark:hover:bg-green-400/20
                  text-green-600 dark:text-green-400
                  hover:text-green-700 dark:hover:text-green-500
                  px-8 py-6 text-lg backdrop-blur-sm
                  hover:shadow-md hover:shadow-green-500/20 dark:hover:shadow-green-400/25
                  bg-white/10 dark:bg-neutral-900/20
                "
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
              >
                <MessageCircle size={20} />
                WhatsApp Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
