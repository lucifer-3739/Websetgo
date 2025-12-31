"use client";

import { motion } from "framer-motion";
import { Compass, Wrench, LineChart, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "We dive deep into your business, goals, and target audience to create a winning strategy.",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "Our expert team crafts your high-performance website with cutting-edge technologies.",
  },
  {
    icon: LineChart,
    title: "Optimize",
    description:
      "We implement SEO best practices and performance optimizations for maximum impact.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Watch your business grow with ongoing support, analytics, and strategic improvements.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            How We Deliver <span className="text-accent-orange">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 4-step process designed to transform your digital presence
            and accelerate business growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent-orange/30 to-transparent hidden lg:block -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ProcessCard step={step} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group"
    >
      <div className="relative text-center">
        {/* Step Number */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          className="relative z-10 w-20 h-20 mx-auto mb-6"
        >
          <div className="absolute inset-0 bg-accent-orange/20 rounded-2xl rotate-45 group-hover:rotate-50 transition-transform duration-300" />
          <div className="absolute inset-2 bg-card rounded-xl rotate-45 group-hover:rotate-50 transition-transform duration-300 border border-border/50 group-hover:border-accent-orange/30" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-accent-orange" />
          </div>

          {/* Step Number Badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center text-background font-bold text-sm">
            {index + 1}
          </div>
        </motion.div>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          {step.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
