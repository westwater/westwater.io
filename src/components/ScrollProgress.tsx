import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home", offset: 0 },
  { id: "services", label: "Services", offset: 0.2 },
  { id: "testimonials", label: "Testimonials", offset: 0.45 },
  { id: "faq", label: "FAQ", offset: 0.7 },
  { id: "cta", label: "Contact", offset: 1 },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("hero");

  // Map scroll progress to marker positions (0 = first marker, 1 = last marker)
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Find current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPercent >= sections[i].offset - 0.08) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* Container for track and markers */}
      <div className="relative h-48">
        {/* Progress track background */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-secondary/30 rounded-full" />
        
        {/* Progress fill */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-primary rounded-full"
          style={{ height: progressHeight }}
        />

        {/* Section markers */}
        <div className="relative h-full flex flex-col justify-between">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center"
              aria-label={`Go to ${section.label}`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 ${
                  activeSection === section.id
                    ? "bg-primary border-primary scale-125 shadow-glow"
                    : "bg-background border-muted-foreground/50 hover:border-primary hover:scale-110"
                }`}
              />
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs text-foreground whitespace-nowrap bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border/50 shadow-lg">
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
