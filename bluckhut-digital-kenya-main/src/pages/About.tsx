import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import techServicesImage from "@/assets/tech-services.jpg";
import workspaceImage from "@/assets/workspace.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To provide innovative, reliable, and affordable digital solutions that empower Kenyan businesses to thrive in the digital age."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Our Vision",
      description: "To be Kenya's leading provider of digital transformation services, bridging the gap between technology and business success."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and customer satisfaction drive everything we do at Bluck Hut Tech Services."
    }
  ];

  const stats = [
    { number: "200+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Bluck Hut Tech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted digital partner in Kenya, dedicated to transforming businesses through innovative technology solutions
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Transforming Kenya's Digital Landscape
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with a vision to bridge the digital divide in Kenya, Bluck Hut Tech Services has grown from a small startup to a trusted partner for businesses across the country. We understand the unique challenges facing Kenyan businesses and provide solutions that are both globally competitive and locally relevant.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team combines international best practices with deep local market knowledge to deliver solutions that truly work for African businesses. From M-Pesa integration to KRA compliance, we handle the complexities so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="gradient-primary">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src={techServicesImage} 
              alt="Bluck Hut Tech Services" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center gradient-card border-0 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 p-12 gradient-hero rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-scale-in order-2 lg:order-1">
            <img 
              src={workspaceImage} 
              alt="Professional workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="animate-fade-in order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Why Choose Bluck Hut Tech?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">Deep understanding of the Kenyan market, regulations, and business culture.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quick Turnaround</h3>
                  <p className="text-muted-foreground">Fast project delivery without compromising on quality or attention to detail.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">Hundreds of successful projects across various industries in Kenya.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Based in Nairobi</h3>
                  <p className="text-muted-foreground">Local presence with global standards, accessible for face-to-face meetings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-12 rounded-2xl border animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing number of Kenyan businesses that trust us with their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#128C7E]">
              <a 
                href="https://wa.me/message/NCMFOIG4H4VMN1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;