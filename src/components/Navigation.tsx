import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import modelSHero from "@/assets/model-s-hero.jpg";
import model3Hero from "@/assets/model-3-hero.jpg";
import modelXHero from "@/assets/model-x-hero.jpg";
import modelYHero from "@/assets/model-y-hero.jpg";
import chargingDetail from "@/assets/charging-detail.jpg";

const Navigation = () => {
  const navigate = useNavigate();
  const [showVehiclesMenu, setShowVehiclesMenu] = useState(false);
  const [showEnergyMenu, setShowEnergyMenu] = useState(false);
  const [showChargingMenu, setShowChargingMenu] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);

  const handleGetStarted = () => {
    navigate('/fleet');
    // Wait for navigation and DOM update before scrolling
    setTimeout(() => {
      const contactFormBottom = document.getElementById('contact-form-bottom');
      if (contactFormBottom) {
        // Scroll to the bottom marker of the contact form section
        contactFormBottom.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 500);
  };

  const navLinks = [
    { name: "Vehicles", hasDropdown: true, menuType: "vehicles" },
    { name: "Energy", hasDropdown: true, menuType: "energy" },
    { name: "Charging", hasDropdown: true, menuType: "charging" },
    { name: "Shop", hasDropdown: true, menuType: "shop" },
  ];

  const vehicles = [
    {
      name: "Model S",
      image: modelSHero,
      learnLink: "/learn-more?model=Model S",
      orderLink: "/order?model=Model S",
    },
    {
      name: "Model 3",
      image: model3Hero,
      learnLink: "/learn-more?model=Model 3",
      orderLink: "/order?model=Model 3",
    },
    {
      name: "Model Y",
      image: modelYHero,
      learnLink: "/learn-more?model=Model Y",
      orderLink: "/order?model=Model Y",
    },
    {
      name: "Model X",
      image: modelXHero,
      learnLink: "/learn-more?model=Model X",
      orderLink: "/order?model=Model X",
    },
  ];

  const energyProducts = [
    { 
      name: "Solar Panels", 
      learnLink: "#", 
      orderLink: "#",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Solar Roof", 
      learnLink: "#", 
      orderLink: "#",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Powerwall", 
      learnLink: "#", 
      orderLink: "#",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Megapack", 
      learnLink: "#", 
      orderLink: null,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&q=80"
    },
  ];

  const chargingProducts = [
    { 
      name: "Charging", 
      learnLink: "#", 
      orderLink: null,
      image: chargingDetail
    },
    { 
      name: "Home Charging", 
      learnLink: "#", 
      shopLink: "#",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Supercharging", 
      learnLink: "#", 
      findLink: "#",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Wall Connector for Business", 
      learnLink: "#", 
      orderLink: "#",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Supercharger for Business", 
      learnLink: "#", 
      orderLink: "#",
      image: chargingDetail
    },
  ];

  const shopCategories = [
    { 
      name: "Charging", 
      link: "#",
      image: chargingDetail
    },
    { 
      name: "Vehicle Accessories", 
      link: "#",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Apparel", 
      link: "#",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Lifestyle", 
      link: "#",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&q=80"
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            ALECTRI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.menuType === "vehicles") setShowVehiclesMenu(true);
                  if (link.menuType === "energy") setShowEnergyMenu(true);
                  if (link.menuType === "charging") setShowChargingMenu(true);
                  if (link.menuType === "shop") setShowShopMenu(true);
                }}
                onMouseLeave={() => {
                  if (link.menuType === "vehicles") setShowVehiclesMenu(false);
                  if (link.menuType === "energy") setShowEnergyMenu(false);
                  if (link.menuType === "charging") setShowChargingMenu(false);
                  if (link.menuType === "shop") setShowShopMenu(false);
                }}
              >
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </button>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/fleet">
              <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                Business
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <div className="text-lg font-semibold">Vehicles</div>
                {vehicles.map((vehicle) => (
                  <div key={vehicle.name} className="flex flex-col gap-2 pl-4">
                    <span className="font-medium">{vehicle.name}</span>
                    <div className="flex gap-4 text-sm">
                      <Link to={vehicle.learnLink} className="text-muted-foreground hover:text-foreground">
                        Learn
                      </Link>
                      <Link to={vehicle.orderLink} className="text-muted-foreground hover:text-foreground">
                        Order
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="text-lg font-semibold">Energy</div>
                {energyProducts.map((product) => (
                  <div key={product.name} className="flex flex-col gap-2 pl-4">
                    <span className="font-medium">{product.name}</span>
                  </div>
                ))}
                <div className="text-lg font-semibold">Charging</div>
                {chargingProducts.map((product) => (
                  <div key={product.name} className="flex flex-col gap-2 pl-4">
                    <span className="font-medium">{product.name}</span>
                  </div>
                ))}
                <div className="text-lg font-semibold">Shop</div>
                {shopCategories.map((category) => (
                  <div key={category.name} className="flex flex-col gap-2 pl-4">
                    <span className="font-medium">{category.name}</span>
                  </div>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Link to="/fleet">
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                      Fleet
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                  {/* <Link to="/order">
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Order Now
                    </Button>
                  </Link> */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Vehicles Mega Menu */}
      {showVehiclesMenu && (
        <div
          className="fixed top-[73px] left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
          onMouseEnter={() => setShowVehiclesMenu(true)}
          onMouseLeave={() => setShowVehiclesMenu(false)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {vehicles.map((vehicle) => (
                <div key={vehicle.name} className="group">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center">{vehicle.name}</h3>
                  <div className="flex justify-center gap-4 text-sm">
                    <Link
                      to={vehicle.learnLink}
                      className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      Learn
                    </Link>
                    <Link
                      to={vehicle.orderLink}
                      className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Energy Mega Menu */}
      {showEnergyMenu && (
        <div
          className="fixed top-[73px] left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
          onMouseEnter={() => setShowEnergyMenu(true)}
          onMouseLeave={() => setShowEnergyMenu(false)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {energyProducts.map((product) => (
                <div key={product.name} className="group text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                  <div className="flex justify-center gap-4 text-sm">
                    <a
                      href={product.learnLink}
                      className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      Learn
                    </a>
                    {product.orderLink && (
                      <a
                        href={product.orderLink}
                        className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                      >
                        Order
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Charging Mega Menu */}
      {showChargingMenu && (
        <div
          className="fixed top-[73px] left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
          onMouseEnter={() => setShowChargingMenu(true)}
          onMouseLeave={() => setShowChargingMenu(false)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-5 gap-6">
              {chargingProducts.map((product) => (
                <div key={product.name} className="group text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-semibold mb-3">{product.name}</h3>
                  <div className="flex justify-center gap-3 text-sm">
                    <a
                      href={product.learnLink}
                      className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      Learn
                    </a>
                    {product.orderLink && (
                      <a
                        href={product.orderLink}
                        className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                      >
                        Order
                      </a>
                    )}
                    {product.shopLink && (
                      <a
                        href={product.shopLink}
                        className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                      >
                        Shop
                      </a>
                    )}
                    {product.findLink && (
                      <a
                        href={product.findLink}
                        className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                      >
                        Find
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Shop Mega Menu */}
      {showShopMenu && (
        <div
          className="fixed top-[73px] left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
          onMouseEnter={() => setShowShopMenu(true)}
          onMouseLeave={() => setShowShopMenu(false)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {shopCategories.map((category) => (
                <div key={category.name} className="group text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    <a
                      href={category.link}
                      className="hover:text-foreground transition-colors"
                    >
                      {category.name}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
