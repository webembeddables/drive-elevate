import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, Calendar as CalendarIcon, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const ScheduleTestDrive = () => {
  const [searchParams] = useSearchParams();
  const initialModel = searchParams.get("model") || "";
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [location, setLocation] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const models = ["Model S", "Model 3", "Model X", "Model Y"];
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];
  const locations = [
    "New York Showroom - Manhattan",
    "Los Angeles Showroom - Beverly Hills",
    "Chicago Showroom - Downtown",
    "San Francisco Showroom - SOMA",
    "Miami Showroom - Brickell",
    "Seattle Showroom - Capitol Hill",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedModel || !date || !timeSlot || !location || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Test drive scheduled!", {
      description: `Your ${selectedModel} test drive is confirmed for ${format(date, "PPP")} at ${timeSlot}.`,
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setDate(undefined);
    setTimeSlot("");
    setLocation("");
  };

  useEffect(() => {
    const model = searchParams.get("model");
    if (model) {
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

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Test Drive</h1>
          <p className="text-muted-foreground mb-12">
            Experience the future of driving. Book your test drive today.
          </p>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Test Drive Details</CardTitle>
                <CardDescription>Select your preferred model, date, time, and location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="model">Select Model</Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger id="model">
                      <SelectValue placeholder="Choose a model" />
                    </SelectTrigger>
                    <SelectContent>
                      {models.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Select Time</Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Choose a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Select Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Choose a showroom" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>We'll use this to confirm your test drive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Check className="mr-2 h-4 w-4" />
                  Schedule Test Drive
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By scheduling a test drive, you agree to receive communications about your appointment.
                  You can cancel or reschedule at any time.
                </p>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTestDrive;
