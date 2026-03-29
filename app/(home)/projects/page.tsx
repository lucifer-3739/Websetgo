import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { ProjectCard } from "@/components/home/project-card";

const projects = [
  {
    id: 1,
    title: "Aura SaaS Dashboard",
    description: "A comprehensive analytics and management dashboard for modern SaaS teams. Features real-time data visualization, user management, and seamless integrations with popular tools.",
    image: "/projects/saas.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Lumina Creative Agency",
    description: "An immersive, visually stunning portfolio website designed for a top-tier creative agency. Includes smooth page transitions, dynamic scroll effects, and WebGL animations.",
    image: "/projects/agency.png",
    tags: ["Three.js", "Framer Motion", "Next.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Nexus E-Commerce",
    description: "A modern, high-performance e-commerce storefront with a sleek glassmorphous UI, instant search, and optimal rendering for lighting fast product discoveries.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js App Router", "Stripe", "Zustand"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Zenith Crypto Tracker",
    description: "A futuristic Web3 analytics dashboard providing deep insights, real-time token tracking, and wallet management with an ultra-responsive, glowing interface.",
    image: "/projects/crypto.png",
    tags: ["Web3.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const metadata = {
  title: "Projects | Websetgo",
  description: "Explore our latest projects, showcasing our expertise in modern web development, UI/UX design, and innovative digital solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden bg-white dark:bg-neutral-950">
      <Navbar />
      
      {/* Hero Section for Projects */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15)_0%,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Work</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A curated selection of our finest digital experiences. We blend aesthetics with performance to deliver world-class solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-24 md:pb-32 px-6">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
