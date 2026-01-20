import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  id: string;
  model: string;
  tagline: string;
  specs: string[];
  image: string;
}

const HeroSection = ({ id, model, tagline, specs, image }: HeroSectionProps) => {
  return (
    <section id={id} className="hero-section">
      <img
        src={image}
        alt={model}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay" />
      <div className="hero-content animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          {model}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          {tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-white">
          {specs.map((spec, index) => (
            <div key={index} className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded">
              <span className="text-sm md:text-base font-medium">{spec}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={`/order?model=${encodeURIComponent(model)}`}>
            <Button size="lg" className="bg-white hover:bg-white/90 text-black">
              Order Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to={`/learn-more?model=${encodeURIComponent(model)}`}>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
