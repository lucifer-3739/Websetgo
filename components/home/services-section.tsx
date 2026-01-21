"use client";

import { motion } from "framer-motion";
import { Code2, Search, Gauge, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Modern, professional designs tailored to your brand identity and focused on converting visitors into customers.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom, high-performance websites built with modern technologies for speed, scalability, and mobile responsiveness.",
  },
  {
    icon: Gauge,
    title: "Maintenance",
    description:
      "Ongoing support, security updates, and performance monitoring to keep your website running perfectly 24/7.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that boost your rankings, drive organic traffic, and maximize visibility.",
  },
  {
    icon: Rocket,
    title: "Business Growth Solutions",
    description:
      "Comprehensive digital strategies that align your online presence with your business goals.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-balance">
            Everything You Need to{" "}
            <span className="text-orange-500 dark:text-orange-400">Dominate Online</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg max-w-2xl mx-auto">
            From stunning websites to top Google rankings, we deliver end-to-end
            digital solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative h-full ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""
        }`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-accent-orange/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-6 overflow-hidden group-hover:border-accent-orange/30 transition-colors duration-300">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl translate-x-16 -translate-y-16 group-hover:bg-accent-orange/20 transition-colors duration-500" />

        <div className="relative z-10">
          <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-orange/20 transition-colors duration-300">
            <Icon className="w-7 h-7 text-accent-orange" />
          </div>

          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            {service.title}
          </h3>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
