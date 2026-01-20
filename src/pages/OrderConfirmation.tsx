import { useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Home, Mail, Phone, Calendar } from "lucide-react";

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const model = searchParams.get("model");
  const price = searchParams.get("price");
  const payment = searchParams.get("payment");
  const downPayment = searchParams.get("downPayment");
  const monthlyPayment = searchParams.get("monthlyPayment");
  const orderNumber = searchParams.get("orderNumber");

  // Redirect if no order data
  useEffect(() => {
    if (!model || !price || !payment || !orderNumber) {
      navigate("/order");
    }
  }, [model, price, payment, orderNumber, navigate]);

  const paymentLabel = payment === "cash" ? "Cash Payment" : payment === "loan" ? "Loan (3.99% APR)" : "Finance (2.99% APR)";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your order. Your journey with Alectri begins here.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
              <CardDescription>Order #{orderNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Vehicle Model</span>
                  <span className="font-bold text-lg">{model}</span>
                </div>
                
                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-medium">Base Price</span>
                  <span className="font-semibold">${parseInt(price || "0").toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Payment Method</span>
                  <span>{paymentLabel}</span>
                </div>

                {payment !== "cash" && downPayment && monthlyPayment && (
                  <>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Down Payment</span>
                        <span className="font-medium">${parseInt(downPayment).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment</span>
                        <span className="font-medium">${parseInt(monthlyPayment).toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Term</span>
                        <span>60 months</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
              <CardDescription>Here's what you can expect in the coming days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Email Confirmation</div>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a detailed order confirmation email within the next hour.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Specialist Contact</div>
                    <p className="text-sm text-muted-foreground">
                      An Alectri specialist will contact you within 24-48 hours to discuss next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Delivery Timeline</div>
                    <p className="text-sm text-muted-foreground">
                      Estimated delivery: 4-8 weeks. We'll keep you updated throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="mb-8 border-accent/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Important:</strong> Please check your email (including spam folder) for your order confirmation. 
                If you don't receive it within an hour, please contact our support team.
              </p>
              <p className="text-sm text-muted-foreground">
                For any questions about your order, reference Order #{orderNumber} when contacting us.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
            <Link to="/schedule-test-drive" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                Schedule Test Drive
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
