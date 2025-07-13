import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink, Code2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "AWS"
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-accent-glow rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={cn(
          "transition-all duration-1000 transform",
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {/* Greeting */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            <p className="text-muted-foreground text-lg">
              Hello, I'm
            </p>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full animate-spin-slow opacity-75 blur-sm"></div>
              <img 
                src="/lovable-uploads/165e01ab-3e63-428b-b264-fd5ea8ef0194.png"
                alt="Profile"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-2xl animate-float hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-text bg-clip-text text-transparent animate-gradient">
              HELLFARD
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
            Full Stack Developer & 
            <span className="text-primary"> Problem Solver</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I help founders and businesses turn innovative ideas into seamless digital experiences. 
            Specializing in modern web technologies and scalable solutions.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={cn(
                  "px-4 py-2 bg-glass border border-glass-border rounded-lg text-sm font-medium backdrop-blur-sm",
                  "transition-all duration-300 hover:border-primary/30 hover:bg-glass/80"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => scrollToSection("about")}
          >
            <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
              Scroll to explore
            </p>
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;