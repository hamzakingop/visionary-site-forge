import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Palette, 
  Server, 
  Smartphone, 
  Globe, 
  Database,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Coffee
} from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Building scalable APIs and server-side applications with Node.js, Python, and cloud services."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for maximum performance."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and modern development practices."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, containerization, and cloud infrastructure management."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design approach with modern design systems and accessibility standards."
    }
  ];

  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="h-6 w-6" />, value: "30+", label: "Happy Clients" },
    { icon: <Coffee className="h-6 w-6" />, value: "1000+", label: "Cups of Coffee" },
    { icon: <CheckCircle className="h-6 w-6" />, value: "3+", label: "Years Experience" }
  ];

  const achievements = [
    "AWS Certified Solutions Architect",
    "React & Next.js Expert",
    "Full-Stack JavaScript Developer",
    "UI/UX Design Specialist",
    "Agile Development Practitioner"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-12 bg-background-subtle relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-glow rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-text bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 3+ years of experience crafting digital solutions 
            that make a difference. I love turning complex problems into simple, elegant designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story & Stats */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-200",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}>
            <Card className="p-8 bg-gradient-card border-card-border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my journey in computer science with a curiosity about how things work 
                  behind the scenes. What began as tinkering with HTML and CSS evolved into a 
                  passion for creating full-stack applications that solve real-world problems.
                </p>
                <p>
                  I specialize in JavaScript ecosystem, particularly React and Node.js, but I'm 
                  always excited to learn new technologies. I believe in writing clean, 
                  maintainable code and creating user experiences that delight.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-card border-card-border">
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Achievements */}
            <Card className="p-6 bg-card border-card-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Certifications & Expertise</h4>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Services */}
          <div className={cn(
            "transition-all duration-1000 delay-400",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          )}>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">What I Do</h3>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 bg-card border-card-border hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="gradient" size="lg" className="group">
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;