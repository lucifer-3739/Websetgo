"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* 🔥 Scroll-based glass intensity */
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [12, 24]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.08, 0.18]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* 🧊 Single Glass Surface */}
        <motion.div
          style={{
            backdropFilter: `blur(${blur}px)`,
            backgroundColor: `rgba(255,255,255,${bgOpacity})`,
          }}
          className="
            relative overflow-hidden
            rounded-2xl px-6 py-3
            flex items-center justify-between
            dark:bg-neutral-900/40
            shadow-[0_10px_40px_rgba(15,23,42,0.35)]
            dark:shadow-[0_10px_60px_rgba(0,0,0,0.65)]
          "
        >
          {/* 🌊 Liquid edge highlight */}
          <span
            className="
              pointer-events-none absolute inset-0
              rounded-2xl
              before:absolute before:inset-0
              before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)]
              before:opacity-0 hover:before:opacity-100
              before:transition-opacity before:duration-700
              before:animate-[liquid_6s_linear_infinite]
            "
          />

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src="/logo.svg"
              alt="Websetgo Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative z-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-white dark:text-neutral-200
                  hover:text-neutral-950 dark:hover:text-white
                  transition-colors text-sm font-medium
                "
              >
                {item.name}
              </a>
            ))}

            <Button
              className="
                bg-orange-500/90 hover:bg-orange-500
                text-white font-semibold px-6
                shadow-[0_10px_30px_rgba(248,113,113,0.35)]
              "
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-900 dark:text-white relative z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden mt-3 rounded-2xl p-4
              bg-white/15 dark:bg-neutral-900/50
              backdrop-blur-xl
              shadow-xl
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  block py-3
                  text-neutral-700 dark:text-neutral-200
                  hover:text-neutral-950 dark:hover:text-white
                  transition-colors
                "
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <Button
              className="
                w-full mt-4
                bg-orange-500/90 hover:bg-orange-500
                text-white font-semibold
                shadow-[0_10px_30px_rgba(248,113,113,0.35)]
              "
            >
              Get Free Consultation
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
