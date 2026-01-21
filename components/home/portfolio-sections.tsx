"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Solution",
    category: "Small Business",
    image: "/logo.svg",
  },
  {
    title: "Local Service Platform",
    category: "Lead Generation",
    image: "/logo.svg",
  },
  {
    title: "Corporate Landing Page",
    category: "Brand Awareness",
    image: "/logo.svg",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Demo Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg max-w-2xl mx-auto">
            A glimpse into the high-converting websites I've built for
            businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border/50"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} - ${project.category} Website Demo by Websetgo`}
                width={800}
                height={600}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-accent-orange text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold flex items-center justify-between">
                  {project.title}
                  <ExternalLink size={20} />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
