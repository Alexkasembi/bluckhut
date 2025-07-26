import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Shield, Zap, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and applications tailored for Kenyan businesses"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Integration",
      description: "M-Pesa integration and mobile-first solutions"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "KRA Services",
      description: "Quick and reliable KRA filing and compliance services"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "SEO, social media, and online presence optimization"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-learning Systems",
      description: "Modern educational platforms and learning management"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Solutions",
      description: "Loan management, clinic systems, and custom software"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bluck Hut Tech Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fade-in">
              Your One-Stop Cyber & Digital Solution Center
            </p>
            <p className="text-lg mb-8 opacity-90 animate-fade-in">
              We provide smart online solutions — from websites and KRA services to digital marketing and mobile integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/services">
                  View Our Services <ArrowRight className="ml-2 h-5 w-5" />
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Bluck Hut Tech</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the Kenyan market and provide solutions that work for local businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="gradient-card hover-lift border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients across Kenya who trust us with their digital needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <a href="tel:+254712722383">
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;