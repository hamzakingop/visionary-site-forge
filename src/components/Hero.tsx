import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Sparkles, Code, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import LightningCard from "./LightningCard";
import GlassCard from "./GlassCard";
import WordByWordText from "./WordByWordText";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = [
    "Full Stack Developer",
    "Software Engineer", 
    "Tech Innovator",
    "Digital Creator"
  ];

  const technologies = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-indigo-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-orange-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-red-500" },
    { name: "Docker", icon: "🐳", color: "from-cyan-400 to-blue-500" }
  ];

  if (!mounted) return null;

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-accent/30 rotate-12 animate-pulse" />
        
        {/* Floating tech badges */}
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={cn(
              "absolute hidden lg:block",
              index === 0 && "top-32 left-1/4 animate-float",
              index === 1 && "top-20 right-1/3 animate-float delay-1000",
              index === 2 && "bottom-40 left-1/5 animate-float delay-2000",
              index === 3 && "bottom-32 right-1/4 animate-float delay-3000",
              index === 4 && "top-1/2 left-20 animate-float delay-4000",
              index === 5 && "top-1/3 right-16 animate-float delay-5000"
            )}
          >
            <GlassCard className="p-3">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-lg">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Avatar with Lightning Effect */}
          <div className="mb-8 flex justify-center">
            <LightningCard 
              className="p-1"
              intensity="high"
              colors={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']}
            >
              <div className="relative">
                <img
                  src={profileAvatar}
                  alt="Profile Avatar"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background"
                />
                <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-primary to-accent rounded-full">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
            </LightningCard>
          </div>

          {/* Status Badge */}
          <div className="mb-6 flex justify-center">
            <GlassCard className="px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for projects</span>
              </div>
            </GlassCard>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span className="block text-gradient">HELLFARD</span>
            </h1>
            
            {/* Animated Role */}
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground/80 transition-all duration-500">
                <WordByWordText words={roles} className="min-w-[300px]" />
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <GlassCard className="p-8" intensity="light">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Transforming complex problems into elegant solutions through innovative development.
              </p>
            </GlassCard>
          </div>

          {/* Tech Stack Preview */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {technologies.slice(0, 4).map((tech, index) => (
                <LightningCard 
                  key={tech.name}
                  className="transform hover:scale-105 transition-transform duration-300"
                  intensity="low"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-card/50 border border-card-border hover:bg-card/70 transition-colors"
                  >
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                </LightningCard>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LightningCard intensity="medium">
              <Button 
                size="lg" 
                variant="gradient"
                className="font-semibold px-8 py-3 text-lg"
                onClick={() => scrollToSection("projects")}
              >
                <Rocket className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </LightningCard>
            
            <LightningCard intensity="low">
              <Button 
                size="lg" 
                variant="glass"
                className="font-semibold px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </LightningCard>
          </div>

          {/* Stats */}
          <div className="mb-16">
            <GlassCard className="p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="p-2 rounded-full border border-muted-foreground/30 group-hover:border-foreground/50 transition-colors">
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;