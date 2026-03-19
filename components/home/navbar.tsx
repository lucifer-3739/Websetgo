"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeSwitcher } from "@/components/modeSwitch";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            backdropFilter: `blur(12px)`,
          }}
          className="
            relative overflow-hidden
            rounded-2xl px-6 py-3
            flex items-center justify-between
            bg-white/70 dark:bg-zinc-900/60
            border border-white/20 dark:border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.1)]
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
              width={160}
              height={50}
              className="h-10 w-auto object-contain dark:hidden"
            />
            <Image
              src="/logo-dark.svg"
              alt="Websetgo Logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain hidden dark:block"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative z-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-foreground/80
                  dark:text-neutral-200
                  hover:text-orange-500 dark:hover:text-orange-400
                  transition-colors text-sm font-medium
                "
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center gap-4 border-l border-foreground/10 pl-8 ml-2">
              <ModeSwitcher />
              <Button
                className="
                  bg-orange-500 hover:bg-orange-600
                  text-white font-semibold px-6
                  shadow-[0_4px_12px_rgba(249,115,22,0.3)]
                "
              >
                Get Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden relative z-10">
            <ModeSwitcher />
            <button
              className="text-neutral-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="
                md:hidden overflow-hidden rounded-2xl
                bg-white/80 dark:bg-zinc-900/90
                backdrop-blur-xl border border-white/20 dark:border-white/10
                shadow-2xl z-50 relative
              "
            >
              <div className="p-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="
                      block py-3 px-4 rounded-xl
                      text-zinc-700 dark:text-zinc-200
                      hover:bg-zinc-100 dark:hover:bg-zinc-800
                      hover:text-orange-500 dark:hover:text-orange-400
                      transition-all text-lg font-medium
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                <Button
                  className="
                    w-full mt-4 py-6 text-lg
                    bg-orange-500 hover:bg-orange-600
                    text-white font-bold
                    shadow-[0_10px_30px_rgba(249,115,22,0.3)]
                    rounded-xl
                  "
                >
                  Get Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
