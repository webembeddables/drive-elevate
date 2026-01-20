import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StickyTestDrive from "@/components/StickyTestDrive";
// import { initEmbeddables } from "@/utils/embeddablesInit";
// import { useEffect } from "react";
import modelSHero from "@/assets/model-s-hero.jpg";
import model3Hero from "@/assets/model-3-hero.jpg";
import modelXHero from "@/assets/model-x-hero.jpg";
import modelYHero from "@/assets/model-y-hero.jpg";

const Index = () => {
  // Initialize ServiceNow embeddables when app loads
  // useEffect(() => {
  //   const initialize = async () => {
  //     try {
  //       await initEmbeddables();
  //       console.log("[Home] Embeddables initialized successfully");
  //     } catch (error) {
  //       console.error("[Home] Failed to initialize embeddables:", error);
  //     }
  //   };
    
  //   initialize();
  // }, []);

  const models = [
    {
      id: "model-s",
      model: "Model S",
      tagline: "Plaid - Beyond Ludicrous",
      specs: ["1,020 hp", "1.99s 0-60 mph", "396 mi range"],
      image: modelSHero,
    },
    {
      id: "model-3",
      model: "Model 3",
      tagline: "The Future of Driving",
      specs: ["AWD", "3.1s 0-60 mph", "358 mi range"],
      image: model3Hero,
    },
    {
      id: "model-x",
      model: "Model X",
      tagline: "SUV with Falcon Wing Doors",
      specs: ["1,020 hp", "2.5s 0-60 mph", "348 mi range"],
      image: modelXHero,
    },
    {
      id: "model-y",
      model: "Model Y",
      tagline: "Versatility Meets Performance",
      specs: ["AWD", "3.5s 0-60 mph", "330 mi range"],
      image: modelYHero,
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      <Navigation />
      {models.map((model) => (
        <HeroSection key={model.id} {...model} />
      ))}
      <StickyTestDrive />
    </div>
  );
};

export default Index;
