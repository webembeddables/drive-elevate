import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  TrendingDown,
  Leaf,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";
import { initEmbeddables } from "@/utils/embeddablesInit";
import { useEffect } from "react";
import tesla from "@/assets/tesla1.jpeg";

const Fleet = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    fleetSize: "",
    teslaVehicles: "",
    quantity: "",
    industry: "",
    deliveryTiming: "",
    paymentMethod: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Fleet Inquiry Submitted!", {
      description: "Our fleet team will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      fleetSize: "",
      teslaVehicles: "",
      quantity: "",
      industry: "",
      deliveryTiming: "",
      paymentMethod: "",
      message: "",
    });
  };

  const benefits = [
    {
      icon: TrendingDown,
      title: "Lower Operating Costs",
      description: "Reduce fuel and maintenance costs by up to 50% compared to traditional fleet vehicles.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Achieve your corporate sustainability goals with zero-emission electric vehicles.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Industry-leading safety features protect your drivers and reduce liability.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Superior acceleration and handling for better driver satisfaction and productivity.",
    },
    {
      icon: Users,
      title: "Driver Satisfaction",
      description: "Attract and retain top talent with premium electric vehicles.",
    },
    {
      icon: Building2,
      title: "Tax Incentives",
      description: "Qualify for federal and state tax incentives for commercial EV purchases.",
    },
  ];

  const industries = [
    "Construction",
    "Food and Beverage",
    "Government or Public Sector",
    "Healthcare or Pharmaceutical",
    "Hospitality",
    "Real Estate",
    "Rental Car",
    "Taxi or Rideshare",
    "Technology",
    "Transportation",
    "Utilities",
    "Other",
  ];

  const deliveryTimings = [
    "Within 30 days",
    "1-3 months",
    "3-12 months",
    "More than 12 months",
  ];

  const paymentMethods = [
    "Cash",
    "Third Party Commercial Leasing",
    "Third Party Commercial Financing",
    "Fleet Management Company",
  ];

  useEffect(() => {
    const initializeEmbeddables = async () => {
      try {
        await initEmbeddables();
        setTimeout(() => {
          const SN_EMBEDDABLES = (window as any).SN_EMBEDDABLES;
          if (SN_EMBEDDABLES) {
            SN_EMBEDDABLES.getEmbeddables(["sn-embedx-catalog-item-form"]);
            const knowledgeArticle = document.querySelector<
              HTMLElement & {
                articleId?: string;
              }
            >("sn-embedx-catalog-item-form");
          }
        }, 0);
      } catch (error) {
        console.error("Error initializing embeddables:", error);
      }
    };

    initializeEmbeddables();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{

            backgroundImage: `url(${tesla})`,

          }}


        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Alectri Fleet
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Power your business with electric. Lower costs, reduce emissions, and drive the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fleet/support">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8"
              >
                Learn More
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Alectri for Your Fleet?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your business operations with the most advanced electric vehicle fleet solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="mb-4">
                    <benefit.icon className="h-12 w-12 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Solutions Section */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Tailored Fleet Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Small Business</CardTitle>
                <CardDescription className="text-base">5-25 Vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Flexible financing options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Priority delivery scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Charging infrastructure consultation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-2 border-accent">
              <CardHeader>
                <div className="text-xs font-bold text-accent mb-2">MOST POPULAR</div>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription className="text-base">25-100 Vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>All Small Business features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Fleet management software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Custom vehicle configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Volume pricing discounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Driver training programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Corporate</CardTitle>
                <CardDescription className="text-base">100+ Vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>All Enterprise features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dedicated fleet specialist team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Custom integration solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Maximum volume discounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>White-glove service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50%</div>
              <div className="text-lg text-muted-foreground">Lower Operating Costs</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">80%</div>
              <div className="text-lg text-muted-foreground">Maintenance Reduction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg text-muted-foreground">Zero Emissions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-lg text-muted-foreground">Driver Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started with Alectri Fleet
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with our fleet specialists to learn how Alectri can benefit your business.
            </p>
          </div>

          <sn-embedx-catalog-item-form
            sys-id="644ffeccc70500104c1bf9f91dc260d8"
            confirmation-text="Quotation request submitted successfully!"
            confirmation-sub-text="A fleet specialist will contact you shortly."
            primary-button-label="View details"
            secondary-button-label="Browse services"
            hide-reference-number
            hide-primary-button
            hide-secondary-button
            >
          </sn-embedx-catalog-item-form>
          {/* <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select 
                    value={formData.industry} 
                    onValueChange={(value) => handleInputChange("industry", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="fleetSize">Current Fleet Size *</Label>
                    <Input
                      id="fleetSize"
                      type="number"
                      value={formData.fleetSize}
                      onChange={(e) => handleInputChange("fleetSize", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="teslaVehicles">Alectri Vehicles (Current)</Label>
                    <Input
                      id="teslaVehicles"
                      type="number"
                      value={formData.teslaVehicles}
                      onChange={(e) => handleInputChange("teslaVehicles", e.target.value)}
                      className="mt-1"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity Interested *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange("quantity", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryTiming">Desired Delivery Timing *</Label>
                    <Select 
                      value={formData.deliveryTiming} 
                      onValueChange={(value) => handleInputChange("deliveryTiming", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select timing" />
                      </SelectTrigger>
                      <SelectContent>
                        {deliveryTimings.map((timing) => (
                          <SelectItem key={timing} value={timing}>
                            {timing}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="paymentMethod">Intended Payment Method *</Label>
                    <Select 
                      value={formData.paymentMethod} 
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map((method) => (
                          <SelectItem key={method} value={method}>
                            {method}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us more about your fleet needs..."
                  />
                </div>

                <div className="text-xs text-muted-foreground">
                  By clicking "Submit", I authorize Alectri to contact me about this request as well as with 
                  more information about Alectri products, services and regional events using the contact 
                  information I provide. I understand calls or texts may use automatic or computer-assisted 
                  dialing or pre-recorded messages.
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card> */}
          <div id="contact-form-bottom" className="h-1"></div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Fleet?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading businesses worldwide that have already made the switch to electric.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-lg px-8"
            onClick={() => {
              window.location.href = 'mailto:contact@alectricsupport.com?subject=Fleet Inquiry - Alectri';
            }}
          >
            Contact Fleet Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
