"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="
      relative py-16 px-4
      bg-linear-to-b from-white/10 via-white/5 to-white/0 
      dark:from-neutral-900/20 dark:via-neutral-900/10 dark:to-neutral-900/0
      backdrop-blur-xl
      border-t border-white/20 dark:border-neutral-800/40
      shadow-2xl shadow-orange-500/5 dark:shadow-orange-400/10
      before:absolute before:inset-0 before:bg-linear-to-r before:from-orange-500/3 before:to-orange-400/3 dark:before:from-orange-400/5 dark:before:to-orange-500/5 before:blur-xl before:rounded-t-3xl
    "
    >
      {/* Subtle floating orbs */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-24 h-24 bg-orange-400/15 dark:bg-orange-500/25 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-orange-500/10 dark:bg-orange-400/20 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Image
              src="/company-logo.png"
              alt="Websetgo Logo"
              width={160}
              height={50}
              className="h-12 w-auto drop-shadow-lg object-contain"
            />
            <p className="text-muted-foreground dark:text-neutral-300 max-w-md leading-relaxed text-lg">
              Premium web development and SEO solutions that help businesses
              build, rank, and grow their digital presence.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
                  }}
                  className="
                    w-12 h-12
                    bg-white/20 dark:bg-neutral-900/40
                    backdrop-blur-md
                    border border-white/30 dark:border-neutral-800/50
                    rounded-xl flex items-center justify-center
                    text-muted-foreground hover:text-orange-400
                    hover:border-orange-400/50
                    transition-all duration-300
                    shadow-md hover:shadow-lg hover:shadow-orange-500/25 dark:hover:shadow-orange-400/30
                  "
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm shadow-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Process", "About Us", "Contact"].map((link, i) => (
                <motion.li key={link}>
                  <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    whileHover={{ x: 8 }}
                    className="
                      block py-2 px-3 rounded-xl
                      text-muted-foreground dark:text-neutral-300
                      hover:text-orange-400 hover:bg-white/10 dark:hover:bg-neutral-900/30
                      backdrop-blur-sm
                      transition-all duration-300
                    "
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="
                  flex items-center gap-3 p-3 rounded-xl
                  bg-white/10 dark:bg-neutral-900/30
                  backdrop-blur-md
                  border border-white/20 dark:border-neutral-800/40
                  hover:bg-white/20 dark:hover:bg-neutral-900/40
                  shadow-sm hover:shadow-md hover:shadow-orange-500/20
                  transition-all duration-300
                "
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <Mail className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0" />
                <a
                  href="mailto:webstegocompany@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  webstegocompany@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="
                  flex items-center gap-3 p-3 rounded-xl
                  bg-white/10 dark:bg-neutral-900/30
                  backdrop-blur-md
                  border border-white/20 dark:border-neutral-800/40
                  hover:bg-white/20 dark:hover:bg-neutral-900/40
                  shadow-sm hover:shadow-md hover:shadow-orange-500/20
                  transition-all duration-300
                "
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <Phone className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0" />
                <a
                  href="tel:+919769489715"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 9769489715
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="
                  flex items-start gap-3 p-3 rounded-xl
                  bg-white/10 dark:bg-neutral-900/30
                  backdrop-blur-md
                  border border-white/20 dark:border-neutral-800/40
                  hover:bg-white/20 dark:hover:bg-neutral-900/40
                  shadow-sm hover:shadow-md hover:shadow-orange-500/20
                  transition-all duration-300
                "
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <MapPin className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0 mt-1" />
                <span className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                  123 Digital Avenue
                  <br />
                  San Francisco, CA 94102
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-12 border-t border-white/15 dark:border-neutral-800/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground dark:text-neutral-400 text-sm bg-white/10 dark:bg-neutral-900/20 backdrop-blur-sm px-4 py-2 rounded-xl"
          >
            © 2026 Websetgo. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 text-sm"
          >
            {["Privacy Policy", "Terms of Service"].map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ x: 4 }}
                className="
                  py-2 px-4 rounded-xl
                  text-muted-foreground dark:text-neutral-400
                  hover:text-orange-400 hover:bg-white/15 dark:hover:bg-neutral-900/30
                  backdrop-blur-sm
                  transition-all duration-300
                "
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
