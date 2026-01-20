import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

const OrderNow = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialModel = searchParams.get("model") || "Model 3";
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const models = [
    { name: "Model S", price: 89990, description: "Premium Sedan" },
    { name: "Model 3", price: 47990, description: "Compact Sedan" },
    { name: "Model X", price: 99990, description: "Premium SUV" },
    { name: "Model Y", price: 54990, description: "Compact SUV" },
  ];

  const selectedModelData = models.find((m) => m.name === selectedModel) || models[1];

  const calculateFinancing = () => {
    const principal = selectedModelData.price;
    const downPayment = principal * 0.1;
    const loanAmount = principal - downPayment;
    const interestRate = paymentMethod === "loan" ? 0.0399 : 0.0299; // 3.99% for loan, 2.99% for finance
    const months = 60;
    const monthlyPayment = (loanAmount * (interestRate / 12 * Math.pow(1 + interestRate / 12, months))) / (Math.pow(1 + interestRate / 12, months) - 1);

    return {
      downPayment,
      monthlyPayment,
      totalCost: downPayment + (monthlyPayment * months),
      interestRate: interestRate * 100,
    };
  };

  const financing = paymentMethod !== "cash" ? calculateFinancing() : null;

  const handleOrder = () => {
    // Generate a random order number
    const orderNumber = `ALT-${Date.now()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    
    // Build query parameters for confirmation page
    const params = new URLSearchParams({
      model: selectedModel,
      price: selectedModelData.price.toString(),
      payment: paymentMethod,
      orderNumber: orderNumber,
    });
    
    // Add financing details if not cash payment
    if (paymentMethod !== "cash" && financing) {
      params.append("downPayment", Math.round(financing.downPayment).toString());
      params.append("monthlyPayment", Math.round(financing.monthlyPayment).toString());
    }
    
    // Navigate to confirmation page
    navigate(`/order-confirmation?${params.toString()}`);
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Configure Your Order</h1>
          <p className="text-muted-foreground mb-12">
            Select your model and payment option to complete your order
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Select Model</CardTitle>
                <CardDescription>Choose your preferred electric vehicle</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedModel} onValueChange={setSelectedModel}>
                  {models.map((model) => (
                    <div key={model.name} className="flex items-center space-x-2 mb-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                      <RadioGroupItem value={model.name} id={model.name} />
                      <Label htmlFor={model.name} className="flex-1 cursor-pointer">
                        <div className="font-semibold">{model.name}</div>
                        <div className="text-sm text-muted-foreground">{model.description}</div>
                        <div className="text-sm font-medium mt-1">
                          ${model.price.toLocaleString()}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose how you'd like to pay</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-start space-x-2 mb-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Cash Payment</div>
                      <div className="text-sm text-muted-foreground">
                        Pay the full amount upfront
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2 mb-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="loan" id="loan" />
                    <Label htmlFor="loan" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Loan (3.99% APR)</div>
                      <div className="text-sm text-muted-foreground">
                        60-month term with 10% down payment
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="finance" id="finance" />
                    <Label htmlFor="finance" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Finance (2.99% APR)</div>
                      <div className="text-sm text-muted-foreground">
                        60-month term with 10% down payment and additional benefits
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{selectedModelData.name}</span>
                  <span className="font-bold">${selectedModelData.price.toLocaleString()}</span>
                </div>

                {paymentMethod !== "cash" && financing && (
                  <>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Down Payment (10%)</span>
                        <span>${financing.downPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span>{financing.interestRate}% APR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment (60 months)</span>
                        <span className="font-medium">
                          ${financing.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Cost</span>
                        <span>${financing.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      </div>
                    </div>
                  </>
                )}

                <Separator />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span>
                    {paymentMethod === "cash" ? "Total Due Today" : "Due at Signing"}
                  </span>
                  <span>
                    ${paymentMethod === "cash" 
                      ? selectedModelData.price.toLocaleString() 
                      : financing?.downPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <Button onClick={handleOrder} size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Check className="mr-2 h-4 w-4" />
                  Complete Order
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By completing this order, you agree to our terms and conditions.
                  Estimated delivery: 4-8 weeks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
