import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@bluckhuttech.co.ke?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+(254) 712722383",
      action: "tel:+254712722383",
      buttonText: "Call Now"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+(254) 768750293",
      action: "https://wa.me/message/NCMFOIG4H4VMN1",
      buttonText: "WhatsApp Us"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@bluckhuttech.co.ke",
      action: "mailto:info@bluckhuttech.co.ke",
      buttonText: "Email Us"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Nairobi, Kenya",
      action: null,
      buttonText: null
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/profile.php?id=61577135500492"
    },
    {
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/bluck_hut/"
    },
    {
      name: "X (Twitter)",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: "https://x.com/BluckHut"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Business Image */}
          <div className="lg:col-span-2">
            <Card className="border-0 gradient-card animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Bluck Hut Tech Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src="/lovable-uploads/125f0782-4fdb-4406-82fc-bf9e271b73d9.png"
                  alt="Bluck Hut Tech Services"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <p className="text-muted-foreground mt-4">
                  Your trusted partner for digital solutions in Kenya
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-0 gradient-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                    {info.action && info.buttonText && (
                      <Button 
                        asChild 
                        size="sm" 
                        variant="outline"
                        className={info.title === "WhatsApp" ? "bg-[#25D366] text-white border-[#25D366] hover:bg-[#128C7E] hover:border-[#128C7E]" : 
                                  info.title === "Phone" ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700" : ""}
                      >
                        <a 
                          href={info.action}
                          target={info.action.startsWith('http') ? "_blank" : undefined}
                          rel={info.action.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {info.buttonText}
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 gradient-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 gradient-card animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      size="icon"
                      className="hover-lift"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow us for updates, tips, and industry insights
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <div className="p-6 gradient-hero rounded-2xl text-center animate-scale-in" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-xl font-bold text-white mb-2">Need Urgent Help?</h3>
              <p className="text-white/90 mb-4 text-sm">
                For urgent support, contact us directly via WhatsApp
              </p>
              <Button 
                asChild 
                className="bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                <a 
                  href="https://wa.me/message/NCMFOIG4H4VMN1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Support Email */}
        <div className="mt-12 text-center p-8 bg-card rounded-2xl border animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Alternative Contact</h2>
          <p className="text-muted-foreground mb-4">
            You can also reach our support team at
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:support@bluckhuttech.co.ke">
              <Mail className="mr-2 h-5 w-5" />
              support@bluckhuttech.co.ke
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;