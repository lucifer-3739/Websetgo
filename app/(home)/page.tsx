"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { LoadingScreen } from "@/components/LoadingScreen";

// Dynamically import components that are below the fold
const ServicesSection = dynamic(() => import("@/components/home/services-section").then((mod) => mod.ServicesSection), { ssr: true });
const CurvedScroll = dynamic(() => import("@/components/scrollanimation/CurvedScroll"), { ssr: true });
const AboutSection = dynamic(() => import("@/components/home/about-section").then((mod) => mod.AboutSection), { ssr: true });
const ProcessSection = dynamic(() => import("@/components/home/process-section").then((mod) => mod.ProcessSection), { ssr: true });
const CTASection = dynamic(() => import("@/components/home/cta-section").then((mod) => mod.CTASection), { ssr: true });
const Footer = dynamic(() => import("@/components/home/footer").then((mod) => mod.Footer), { ssr: true });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />

        {/* Hero Reveal Wrapper */}
        <div className="relative">
          <AnimatePresence>
            {!isLoading && (
              <>
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                >
                  <HeroSection />
                </motion.div>

                {/* Creative Wipe Element */}
                <motion.div
                  initial={{ left: "0%", width: "0%" }}
                  animate={{ left: ["0%", "0%", "100%"], width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                  className="absolute top-0 bottom-0 z-20 bg-linear-to-r from-transparent via-orange-500/50 to-transparent pointer-events-none"
                  style={{ backdropFilter: "blur(4px)" }}
                />
              </>
            )}
          </AnimatePresence>
        </div>

        <ServicesSection />
        <CurvedScroll />
        <AboutSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </motion.div>
    </main>
  );
}
