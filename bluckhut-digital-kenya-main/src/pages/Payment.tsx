import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { 
  CreditCard,
  FileText,
  Copy,
  ExternalLink,
  Smartphone,
  QrCode
} from "lucide-react";
import mpesaSmartphoneImage from "@/assets/mpesa-smartphone.jpg";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [referenceCode, setReferenceCode] = useState("");

  const services = {
    "BLKSVC-001": { name: "Website Development & Portfolios", price: "10,000" },
    "BLKSVC-002": { name: "SEO Optimization", price: "10,000/month" },
    "BLKSVC-003": { name: "WordPress/Custom Sites", price: "10,000-60,000" },
    "BLKSVC-004": { name: "Digital Marketing", price: "20,000/month" },
    "BLKSVC-005": { name: "Loan Management Systems", price: "50,000" },
    "BLKSVC-006": { name: "Mobile Wallet Integration", price: "20,000" },
    "BLKSVC-007": { name: "E-learning Systems", price: "40,000" },
    "BLKSVC-008": { name: "Clinic Booking / Patient Records", price: "5,000" },
    "BLKSVC-009": { name: "KRA Services", price: "150" },
    "BLKSVC-010": { name: "Bulk Typing / Meeting Transcripts", price: "100/page" },
    "BLKSVC-011": { name: "License Renewal", price: "800" },
    "BLKSVC-012": { name: "Online Assignments & Research", price: "500" }
  };

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl && services[serviceFromUrl as keyof typeof services]) {
      setSelectedService(serviceFromUrl);
    }
  }, [searchParams]);

  const generateReference = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newRef = `BHT${timestamp}${random}`;
    setReferenceCode(newRef);
    
    toast({
      title: "Reference Code Generated",
      description: `Your reference code is: ${newRef}`,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard",
      description: "The information has been copied to your clipboard.",
    });
  };

  const paymentInstructions = [
    "Go to M-Pesa menu on your phone",
    "Select 'Lipa na M-Pesa'",
    "Select 'Pay Bill'", 
    "Enter Paybill Number: 247247",
    "Enter Amount: KES [Service Price]",
    "Enter Account Number: [Service Code]",
    "Enter your M-Pesa PIN",
    "Confirm the transaction"
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Payment</span> & Invoice
          </h1>
          <p className="text-xl text-muted-foreground">
            Generate your invoice and proceed with secure M-Pesa payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Selection & Invoice */}
          <div className="space-y-6">
            <Card className="border-0 gradient-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Generate Invoice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="service">Select Service</Label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full mt-1 p-3 border border-border rounded-md bg-background"
                  >
                    <option value="">Choose a service...</option>
                    {Object.entries(services).map(([code, service]) => (
                      <option key={code} value={code}>
                        {code} - {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedService && (
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{services[selectedService as keyof typeof services].name}</h3>
                      <Badge variant="secondary">{selectedService}</Badge>
                    </div>
                    <p className="text-lg font-bold text-primary">
                      Starting from KES {services[selectedService as keyof typeof services].price}
                    </p>
                  </div>
                )}

                <div>
                  <Label htmlFor="reference">Reference Code</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="reference"
                      value={referenceCode}
                      onChange={(e) => setReferenceCode(e.target.value)}
                      placeholder="Generate or enter reference code"
                      readOnly
                    />
                    <Button onClick={generateReference} variant="outline">
                      Generate
                    </Button>
                  </div>
                </div>

                <Button 
                  asChild 
                  className="w-full gradient-primary animate-pulse-glow"
                  disabled={!selectedService}
                >
                  <a 
                    href="https://docs.google.com/forms/d/1hjaIvgL2KtKY6LjsQKnTZiBdg8mxeFoLRyjrld13giY/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Complete Order Form
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* M-Pesa QR Code */}
            <Card className="border-0 gradient-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="mr-2 h-5 w-5" />
                  Quick Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <img 
                    src={mpesaSmartphoneImage} 
                    alt="M-Pesa on smartphone" 
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Use M-Pesa for quick and secure payment
                </p>
                <p className="font-semibold mt-2">Paybill Number: 247247</p>
              </CardContent>
            </Card>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-6">
            <Card className="border-0 gradient-card animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  M-Pesa Payment Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentInstructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <Card className="border-0 gradient-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Paybill Number:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">247247</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => copyToClipboard("247247")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Account Number:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{selectedService || "Service Code"}</span>
                    {selectedService && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(selectedService)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {referenceCode && (
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Reference Code:</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">{referenceCode}</span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(referenceCode)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                <Separator />

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Payment confirmation will be sent to your phone</p>
                  <p>• Keep your reference code for future communication</p>
                  <p>• Our team will contact you within 24 hours</p>
                  <p>• For immediate assistance, WhatsApp us</p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <div className="p-6 gradient-hero rounded-2xl text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
              <p className="text-white/90 mb-4 text-sm">
                Our support team is ready to assist you
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="bg-[#25D366] text-white hover:bg-[#128C7E]"
                >
                  <a 
                    href="https://wa.me/message/NCMFOIG4H4VMN1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp Support
                  </a>
                </Button>
                <Button 
                  asChild 
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <a href="tel:+254712722383">
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;