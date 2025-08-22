import HeroSection from "@/components/ui/hero-section";
import IntroSection from "@/components/ui/intro-section";
import BenefitsSection from "@/components/ui/benefits-section";


import FinalCTA from "@/components/ui/final-cta";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
