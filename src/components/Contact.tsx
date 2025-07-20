import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Send, 
  MessageSquare,
  Calendar
} from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hamzaha98181@gmail.com",
      href: "mailto:hamzaha98181@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: <SiDiscord className="h-5 w-5" />,
      label: "Discord",
      href: "https://discord.gg/yourserver",
      color: "hover:text-indigo-500"
    }
  ];

  const services = [
    "Web Application Development",
    "Mobile App Development",
    "API Development & Integration",
    "Database Design & Optimization",
    "Cloud Infrastructure Setup",
    "Technical Consulting",
    "Code Review & Optimization",
    "Team Training & Mentoring"
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-12 bg-background-subtle relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-lg rotate-45" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-accent rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-primary-glow rounded-lg rotate-12 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-text bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your ideas into reality? I'm here to help. 
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className={cn(
            "lg:col-span-2 transition-all duration-1000 delay-200",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}>
            <Card className="p-8 bg-gradient-card border-card-border">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry, collaboration, etc."
                    required
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows={6}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Services */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-400",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          )}>
            {/* Contact Information */}
            <Card className="p-6 bg-card border-card-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-4 p-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="p-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{info.label}</p>
                      {info.href && info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-card border-card-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex items-center space-x-4 p-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5",
                      "hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10",
                      social.color
                    )}
                  >
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      {social.icon}
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Services */}
            <Card className="p-6 bg-card border-card-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Services Offered</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={cn(
          "text-center mt-16 transition-all duration-1000 delay-600",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              I typically respond within 24 hours and offer a free initial consultation 
              to discuss your project requirements and provide a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;