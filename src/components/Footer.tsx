import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  ArrowUp,
  Code2,
  Coffee,
  Globe
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "API Development",
    "Cloud Solutions",
    "Technical Consulting"
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:alex.chen@email.com", label: "Email" }
  ];

  return (
    <footer className="bg-background-subtle border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent rounded-lg rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
                Developer
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate full-stack developer creating innovative digital solutions. 
              Turning ideas into reality with modern technologies and best practices.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:alex.chen@email.com"
                  className="hover:text-primary transition-colors"
                >
                  alex.chen@email.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="h-4 w-4 text-primary" />
                <span>Available for freelance</span>
              </div>
            </div>
            
            <Button 
              variant="gradient" 
              size="sm" 
              className="mt-6"
              onClick={() => scrollToSection("contact")}
            >
              Start a Project
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Alex Chen. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-amber-600" />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Built with React + TypeScript
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Achievement Banner */}
        <div className="pb-8">
          <div className="bg-gradient-card border border-card-border rounded-lg p-6 text-center">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-muted-foreground">Available for new projects</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Remote work friendly</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-muted-foreground">Fast response time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;