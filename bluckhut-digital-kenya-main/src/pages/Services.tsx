import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Search, 
  Code2, 
  TrendingUp, 
  CreditCard, 
  Smartphone, 
  GraduationCap, 
  Calendar,
  FileText,
  Type,
  Car,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import webDevImage from "@/assets/web-development.jpg";
import digitalMarketingImage from "@/assets/marketing-analytics.jpg";
import mobilePaymentImage from "@/assets/mobile-payment.jpg";
import clinicSystemImage from "@/assets/clinic-system.jpg";
import seoImage from "@/assets/seo-optimization.jpg";
import elearningImage from "@/assets/e-learning.jpg";
import taxServicesImage from "@/assets/tax-services.jpg";
import documentTypingImage from "@/assets/document-typing.jpg";
import licenseRenewalImage from "@/assets/license-renewal.jpg";
import academicResearchImage from "@/assets/academic-research.jpg";

const Services = () => {
  const services = [
    {
      code: "BLKSVC-001",
      name: "Website Development & Portfolios",
      description: "Professional websites and portfolios that showcase your business perfectly for the Kenyan market",
      price: "Starting from KES 10,000",
      icon: <Globe className="h-6 w-6" />,
      image: webDevImage,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile Friendly"]
    },
    {
      code: "BLKSVC-002",
      name: "SEO Optimization",
      description: "Boost your online visibility and rank higher on Google for Kenya-specific searches",
      price: "Starting from KES 10,000/month",
      icon: <Search className="h-6 w-6" />,
      image: seoImage,
      features: ["Keyword Research", "Local SEO", "Content Optimization", "Analytics"]
    },
    {
      code: "BLKSVC-003",
      name: "WordPress/Custom Sites",
      description: "Custom WordPress sites and bespoke web applications tailored to your needs",
      price: "Starting from KES 10,000-60,000",
      icon: <Code2 className="h-6 w-6" />,
      image: webDevImage,
      features: ["Custom Design", "Plugin Integration", "Security Setup", "Maintenance"]
    },
    {
      code: "BLKSVC-004",
      name: "Digital Marketing",
      description: "Complete digital marketing solutions including SEO, SEM, social media, and content marketing",
      price: "Starting from KES 20,000/month",
      icon: <TrendingUp className="h-6 w-6" />,
      image: digitalMarketingImage,
      features: ["Social Media Management", "Google Ads", "Content Creation", "Analytics"]
    },
    {
      code: "BLKSVC-005",
      name: "Loan Management Systems",
      description: "Comprehensive loan management systems for microfinance and lending institutions",
      price: "Starting from KES 50,000",
      icon: <CreditCard className="h-6 w-6" />,
      image: clinicSystemImage,
      features: ["Client Management", "Payment Tracking", "Reporting", "SMS Integration"]
    },
    {
      code: "BLKSVC-006",
      name: "Mobile Wallet Integration",
      description: "M-Pesa and mobile money integration for seamless payment processing",
      price: "Starting from KES 20,000",
      icon: <Smartphone className="h-6 w-6" />,
      image: mobilePaymentImage,
      features: ["M-Pesa Integration", "Payment Gateway", "Transaction Tracking", "API Setup"]
    },
    {
      code: "BLKSVC-007",
      name: "E-learning Systems",
      description: "Modern learning management systems for schools and training institutions",
      price: "Starting from KES 40,000",
      icon: <GraduationCap className="h-6 w-6" />,
      image: elearningImage,
      features: ["Course Management", "Student Portal", "Assessment Tools", "Progress Tracking"]
    },
    {
      code: "BLKSVC-008",
      name: "Clinic Booking / Patient Records",
      description: "Digital solutions for healthcare providers to manage appointments and patient data",
      price: "Starting from KES 5,000",
      icon: <Calendar className="h-6 w-6" />,
      image: clinicSystemImage,
      features: ["Appointment Booking", "Patient Records", "Billing System", "Reports"]
    },
    {
      code: "BLKSVC-009",
      name: "KRA Services",
      description: "Quick and reliable KRA filing, PIN registration, and tax compliance services",
      price: "Starting from KES 150",
      icon: <FileText className="h-6 w-6" />,
      image: taxServicesImage,
      features: ["PIN Registration", "Tax Filing", "Compliance Check", "Documentation"]
    },
    {
      code: "BLKSVC-010",
      name: "Bulk Typing / Meeting Transcripts",
      description: "Professional typing and transcription services for documents and meetings",
      price: "Starting from KES 100/page",
      icon: <Type className="h-6 w-6" />,
      image: documentTypingImage,
      features: ["Document Typing", "Meeting Transcription", "Fast Turnaround", "Quality Assured"]
    },
    {
      code: "BLKSVC-011",
      name: "License Renewal",
      description: "Hassle-free renewal of driving licenses, business permits, and other official documents",
      price: "Starting from KES 800",
      icon: <Car className="h-6 w-6" />,
      image: licenseRenewalImage,
      features: ["Driving License", "Business Permits", "Document Processing", "Quick Service"]
    },
    {
      code: "BLKSVC-012",
      name: "Online Assignments & Research",
      description: "Professional research and assignment assistance for students and professionals",
      price: "Starting from KES 500",
      icon: <BookOpen className="h-6 w-6" />,
      image: academicResearchImage,
      features: ["Research Papers", "Assignment Help", "Plagiarism Check", "Quality Writing"]
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed specifically for Kenyan businesses and individuals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.code} 
              className="overflow-hidden hover-lift border-0 gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {service.code}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <p className="font-semibold text-primary text-lg">{service.price}</p>
                </div>

                <div className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-y-2">
                <Button 
                  asChild 
                  className="w-full gradient-primary animate-pulse-glow"
                >
                  <a 
                    href="https://docs.google.com/forms/d/1hjaIvgL2KtKY6LjsQKnTZiBdg8mxeFoLRyjrld13giY/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full"
                >
                  <Link to={`/payment?service=${service.code}`}>
                    Generate Invoice
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 gradient-hero rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            We also provide tailored solutions for unique business requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Discuss Your Project
              </Link>
            </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                <a 
                  href="https://wa.me/message/NCMFOIG4H4VMN1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;