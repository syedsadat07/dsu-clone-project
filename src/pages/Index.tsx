import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AccreditationBanner from "@/components/AccreditationBanner";
import ProgramsSection from "@/components/ProgramsSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AccreditationBanner />
      <ProgramsSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
