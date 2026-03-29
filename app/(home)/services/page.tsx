"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/home/navbar";
import dynamic from "next/dynamic";
import { 
  Palette, 
  Code2, 
  TrendingUp, 
  ShoppingCart, 
  Globe, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Footer = dynamic(() => import("@/components/home/footer").then((mod) => mod.Footer), { ssr: true });

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Website Design",
    description: "Stunning, user-centric designs that capture your brand's essence and engage your audience instantly.",
    icon: Palette,
    price: "Starting at $999",
    features: [
      "Custom UI/UX Design",
      "Mobile-First Approach",
      "Interactive Prototypes",
      "Brand Identity Integration",
      "Conversion Optimization"
    ],
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Website Development",
    description: "High-performance, scalable web applications built with cutting-edge technologies like React and Next.js.",
    icon: Code2,
    price: "Starting at $1,499",
    features: [
      "Full-Stack Development",
      "Lightning Fast Load Times",
      "CMS Integration",
      "API Development",
      "Scalable Architecture"
    ],
    color: "from-orange-500 to-amber-400",
    shadow: "shadow-orange-500/20",
    popular: true
  },
  {
    title: "E-Commerce Solutions",
    description: "Robust online stores designed to maximize conversions, manage inventory seamlessly, and scale your sales.",
    icon: ShoppingCart,
    price: "Starting at $2,499",
    features: [
      "Custom Cart & Checkout",
      "Payment Gateway Integration",
      "Inventory Management",
      "Product Variations",
      "Sales Analytics"
    ],
    color: "from-purple-500 to-pink-400",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing strategies and technical SEO to dominate search rankings and drive targeted traffic.",
    icon: TrendingUp,
    price: "From $500/mo",
    features: [
      "Comprehensive SEO Audits",
      "On-Page & Off-Page SEO",
      "Content Marketing Strategy",
      "PPC Campaign Management",
      "Performance Tracking"
    ],
    color: "from-green-500 to-emerald-400",
    shadow: "shadow-green-500/20"
  },
  {
    title: "Domain & Hosting",
    description: "Reliable, secure, and blazing-fast cloud hosting solutions to keep your business online 24/7/365.",
    icon: Globe,
    price: "From $29/mo",
    features: [
      "Premium Cloud Hosting",
      "Free Domain Registration",
      "99.9% Uptime Guarantee",
      "Daily Automated Backups",
      "Free CDN Included"
    ],
    color: "from-indigo-500 to-blue-400",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "Web Security",
    description: "Enterprise-grade security measures to protect your website, data, and users from malicious threats.",
    icon: ShieldCheck,
    price: "From $99/mo",
    features: [
      "Advanced SSL Certificates",
      "Malware Scanning & Removal",
      "DDoS Protection",
      "Web Application Firewall",
      "Vulnerability Patching"
    ],
    color: "from-red-500 to-rose-400",
    shadow: "shadow-red-500/20"
  }
];

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden pt-20 bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-orange-500/10 via-background to-background pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 dark:bg-orange-400/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-medium tracking-wide mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Premium Services
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-zinc-900 dark:text-white"
          >
            Solutions That <br/>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-orange-400 to-amber-500">
              Drive Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed mb-12"
          >
            From stunning web design to aggressive SEO strategies, we provide end-to-end digital services tailored for your success.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`
                  relative group rounded-3xl overflow-hidden
                  bg-white dark:bg-zinc-900/50 
                  border border-zinc-200 dark:border-zinc-800
                  hover:border-transparent dark:hover:border-transparent
                  transition-all duration-300 ease-out
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none
                `}
              >
                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${service.shadow}`} />
                <div className="absolute inset-px bg-white dark:bg-zinc-950 rounded-[calc(1.5rem-1px)] -z-10" />

                {/* Content */}
                <div className="p-8 h-full flex flex-col relative">
                  {service.popular && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br ${service.color} shadow-lg ${service.shadow}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <div className="mb-4 inline-block px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 font-semibold text-sm">
                    {service.price}
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full group/btn bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 h-12 text-base font-bold shadow-lg mt-auto"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI / CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950">
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          <div className="w-20 h-20 mx-auto bg-orange-500/10 dark:bg-orange-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 border border-orange-500/20 dark:border-orange-500/30">
            <TrendingUp className="w-10 h-10 text-orange-600 dark:text-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white mb-6">
            Ready to Accelerate Your <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-amber-500">Digital Growth?</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Stop losing leads to your competitors. Let's build a digital presence that dominates your market and drives real revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-0 h-14 px-8 text-lg font-bold shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform">
              Book a Free Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-zinc-200 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
