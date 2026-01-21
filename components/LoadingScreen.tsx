"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
    onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 60);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
            }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background"
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                    className="relative w-40 h-40 md:w-56 md:h-56 mb-12"
                >
                    <Image
                        src="/company-logo.png"
                        alt="Company Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                        priority
                    />

                    {/* Animated decorative rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-15px] border-t-2 border-orange-500/20 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-30px] border-b-2 border-orange-500/10 rounded-full"
                    />
                </motion.div>

                {/* Elegant Progress Container */}
                <div className="relative w-80">
                    <div className="h-[2px] w-full bg-muted/30 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-linear-to-r from-orange-400 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="flex justify-between mt-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">System Loading</span>
                        <motion.span
                            className="text-orange-500 font-mono text-xs tracking-widest font-bold"
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-muted-foreground/60 text-[9px] uppercase tracking-[0.3em] font-light"
                >
                    Partnering for long-term growth
                </motion.div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>
        </motion.div>
    );
}
