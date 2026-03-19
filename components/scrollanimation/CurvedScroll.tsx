"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Model from "./Model";
import NextImage from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "E-commerce Hub",
        description: "A comprehensive solution for online retail",
        image: "/assets/1.svg",
    },
    {
        title: "Social Connect",
        description: "Bringing people together seamlessly",
        image: "/assets/2.svg",
    },
    {
        title: "Portfolio Pro",
        description: "Showcasing creative work beautifully",
        image: "/assets/3.svg",
    },
    {
        title: "Tech Dashboard",
        description: "Real-time analytics and monitoring",
        image: "/assets/4.svg",
    },
];

const CurvedScroll = () => {
    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const boxes = gsap.utils.toArray(".curved-scroll-box");
            boxes.forEach((box, index) => {
                const isLeft = index % 2 === 0;
                const radius = window.innerWidth * 0.2;

                ScrollTrigger.create({
                    trigger: box as Element,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveProject(index),
                    onEnterBack: () => setActiveProject(index),
                    onUpdate: (self: ScrollTrigger) => {
                        const progress = self.progress;
                        const theta = progress * Math.PI;
                        const xOffset = Math.sin(theta) * radius;
                        const finalX = isLeft ? -xOffset : xOffset;
                        gsap.set(box as Element, { x: finalX });
                    },
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full relative">
            <div className="sticky top-0 h-screen w-full z-10 overflow-hidden pointer-events-none flex items-center justify-center">
                <Model />

                {/* Project Details Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-center p-8 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl max-w-md mx-4"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                {projects[activeProject].title}
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200">
                                {projects[activeProject].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="h-screen w-full"></div>

            <div className="relative flex flex-col gap-[10vh] items-center z-20">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`curved-scroll-box size-[17vw] rounded-[2vw] overflow-clip relative transform-gpu backface-hidden ${index % 2 === 0 ? "mr-[25vw]" : "ml-[25vw]"
                            }`}
                    >
                        <NextImage
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="h-screen w-full"></div>
        </section >
    );
};

export default CurvedScroll;
