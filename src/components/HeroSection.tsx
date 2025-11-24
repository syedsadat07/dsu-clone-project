import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "B.Tech Programs",
      subtitle: "Prestigious Merit Scholarships Available",
      description: "Top-tier engineering programs with industry partnerships",
      cta: "Explore Programs",
    },
    {
      title: "World-Class Faculty",
      subtitle: "Learn from Industry Experts",
      description: "Faculty with extensive research and industry experience",
      cta: "Meet Our Faculty",
    },
    {
      title: "Global Opportunities",
      subtitle: "International Collaborations",
      description: "Study abroad programs and exchange opportunities",
      cta: "Learn More",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-r from-primary-dark to-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCampus} 
          alt="University Campus" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-in slide-in-from-left-5">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary animate-in slide-in-from-left-5 delay-100">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl opacity-90 animate-in slide-in-from-left-5 delay-200">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-in slide-in-from-left-5 delay-300">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
              >
                ADMISSIONS OPEN 2026-2027
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 font-semibold"
              >
                {slides[currentSlide].cta}
              </Button>
            </div>
          </div>

          {/* Right Content - Scholarship Highlights */}
          <div className="hidden lg:block">
            <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold text-secondary">Scholarship Highlights</h3>
              <div className="space-y-4 text-primary-foreground">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-3xl font-bold">2025 - ₹8.5 Cr.</p>
                  <p className="opacity-90">awarded to 950 Students</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-3xl font-bold">2024 - ₹7.8 Cr.</p>
                  <p className="opacity-90">awarded to 890 Students</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-3xl font-bold">2023 - ₹6.9 Cr.</p>
                  <p className="opacity-90">awarded to 820 Students</p>
                </div>
              </div>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Join Our Community of Achievers
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-secondary w-8" 
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
