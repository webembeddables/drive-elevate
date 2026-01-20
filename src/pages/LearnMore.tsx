import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Zap, Battery, Gauge, Shield } from "lucide-react";
import modelSHero from "@/assets/model-s-hero.jpg";
import model3Hero from "@/assets/model-3-hero.jpg";
import modelXHero from "@/assets/model-x-hero.jpg";
import modelYHero from "@/assets/model-y-hero.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import chargingDetail from "@/assets/charging-detail.jpg";

const LearnMore = () => {
  const [searchParams] = useSearchParams();
  const initialModel = searchParams.get("model") || "Model 3";
  const [selectedModel, setSelectedModel] = useState(initialModel);

  const modelsData = {
    "Model S": {
      name: "Model S",
      tagline: "Alectri's Ultimate Performance Sedan",
      mainImage: modelSHero,
      images: [modelSHero, interiorDetail, chargingDetail],
      specs: {
        range: "396 miles",
        acceleration: "1.99s 0-60 mph",
        topSpeed: "200 mph",
        horsepower: "1,020 hp",
        drivetrain: "Tri Motor AWD",
        seating: "5 Adults",
        cargo: "28 cu ft",
        warranty: "8 years",
      },
      features: [
        { icon: Zap, title: "Tri Motor", description: "Unmatched performance with three independent motors" },
        { icon: Battery, title: "Long Range", description: "396 miles on a single charge" },
        { icon: Gauge, title: "Track Mode", description: "Optimized for circuit performance" },
        { icon: Shield, title: "Safety", description: "5-star safety rating in every category" },
      ],
      description:
        "Model S Plaid is the highest performing sedan ever built. With a 1,020 horsepower tri-motor powertrain and torque vectoring, it achieves 1.99-second 0-60 mph acceleration—faster than any other production car. Experience unparalleled speed without compromise on safety, efficiency, or comfort.",
    },
    "Model 3": {
      name: "Model 3",
      tagline: "Alectri's Most Affordable Model",
      mainImage: model3Hero,
      images: [model3Hero, interiorDetail, chargingDetail],
      specs: {
        range: "358 miles",
        acceleration: "3.1s 0-60 mph",
        topSpeed: "162 mph",
        horsepower: "480 hp",
        drivetrain: "Dual Motor AWD",
        seating: "5 Adults",
        cargo: "23 cu ft",
        warranty: "8 years",
      },
      features: [
        { icon: Zap, title: "Dual Motor", description: "All-wheel drive with dual independent motors" },
        { icon: Battery, title: "Efficient Range", description: "358 miles of EPA-estimated range" },
        { icon: Gauge, title: "Quick Acceleration", description: "0-60 mph in just 3.1 seconds" },
        { icon: Shield, title: "Top Safety", description: "Lowest probability of injury of any vehicle" },
      ],
      description:
        "Model 3 offers the best combination of range, performance, spaciousness and efficiency. The minimalist interior features a 15-inch touchscreen, premium audio, and an all-glass roof for a superior cabin experience. With dual motor all-wheel drive, you get instant traction control in any weather condition.",
    },
    "Model X": {
      name: "Model X",
      tagline: "Alectri's Ultimate Performance SUV",
      mainImage: modelXHero,
      images: [modelXHero, interiorDetail, chargingDetail],
      specs: {
        range: "348 miles",
        acceleration: "2.5s 0-60 mph",
        topSpeed: "163 mph",
        horsepower: "1,020 hp",
        drivetrain: "Tri Motor AWD",
        seating: "7 Adults",
        cargo: "88 cu ft",
        warranty: "8 years",
      },
      features: [
        { icon: Zap, title: "Falcon Wing Doors", description: "Signature doors with intelligent obstacle detection" },
        { icon: Battery, title: "Maximum Space", description: "Room for up to 7 adults with premium comfort" },
        { icon: Gauge, title: "SUV Performance", description: "Fastest acceleration of any SUV" },
        { icon: Shield, title: "Five Star", description: "Best-in-class safety in every category" },
      ],
      description:
        "Model X Plaid combines luxury, space, and performance in one package. The signature Falcon Wing doors provide easy access to the second and third-row seats, even in tight parking spaces. With the largest cargo capacity of any electric SUV and tri-motor all-wheel drive, Model X redefines what an SUV can be.",
    },
    "Model Y": {
      name: "Model Y",
      tagline: "Alectri's Versatile Compact SUV",
      mainImage: modelYHero,
      images: [modelYHero, interiorDetail, chargingDetail],
      specs: {
        range: "330 miles",
        acceleration: "3.5s 0-60 mph",
        topSpeed: "155 mph",
        horsepower: "456 hp",
        drivetrain: "Dual Motor AWD",
        seating: "7 Adults",
        cargo: "76 cu ft",
        warranty: "8 years",
      },
      features: [
        { icon: Zap, title: "Versatility", description: "Configurable seating for up to 7 passengers" },
        { icon: Battery, title: "Efficient Power", description: "330 miles of range with optimal efficiency" },
        { icon: Gauge, title: "Sporty SUV", description: "Quick acceleration with SUV practicality" },
        { icon: Shield, title: "All-Weather", description: "Dual motor AWD for maximum control" },
      ],
      description:
        "Model Y is a fully electric, mid-size SUV designed for maximum versatility and comfort. The panoramic glass roof provides a spacious cabin environment, while the flexible second row allows for easy access to the optional third row. With dual motor all-wheel drive, Model Y provides exceptional traction control.",
    },
  };

  const currentModel = modelsData[selectedModel as keyof typeof modelsData] || modelsData["Model 3"];

  useEffect(() => {
    const model = searchParams.get("model");
    if (model && model in modelsData) {
      setSelectedModel(model);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedModel} onValueChange={setSelectedModel} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="Model S">Model S</TabsTrigger>
              <TabsTrigger value="Model 3">Model 3</TabsTrigger>
              <TabsTrigger value="Model X">Model X</TabsTrigger>
              <TabsTrigger value="Model Y">Model Y</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentModel.name}</h1>
              <p className="text-xl text-muted-foreground mb-8">{currentModel.tagline}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <img
                  src={currentModel.mainImage}
                  alt={currentModel.name}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {currentModel.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${currentModel.name} detail ${idx + 1}`}
                    className="w-full h-[190px] md:h-[240px] object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>About {currentModel.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{currentModel.description}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {currentModel.features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {Object.entries(currentModel.specs).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div className="text-lg font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/order?model=${encodeURIComponent(selectedModel)}`} className="flex-1">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Order {currentModel.name}
                </Button>
              </Link>
              <Link to={`/schedule-test-drive?model=${encodeURIComponent(selectedModel)}`} className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Schedule Test Drive
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
