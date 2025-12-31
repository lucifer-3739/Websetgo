import { AboutSection } from "@/components/home/about-section";
import { CTASection } from "@/components/home/cta-section";
import { Footer } from "@/components/home/footer";
import { HeroSection } from "@/components/home/hero-section";
import { Navbar } from "@/components/home/navbar";
import { PortfolioSection } from "@/components/home/portfolio-sections";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import LightPillar from "@/components/LightPillar";

export default function Home() {
  return (
    <main className="w-full min-h-[60vh] h-screen max-h-225 relative">
      <LightPillar
        topColor="#F7941D"
        bottomColor="#333842"
        intensity={1.0}
        rotationSpeed={0.3}
        glowAmount={0.005}
        pillarWidth={3.0}
        pillarHeight={0.4}
        noiseIntensity={0.8}
        pillarRotation={45}
        interactive={false}
        mixBlendMode="normal"
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
