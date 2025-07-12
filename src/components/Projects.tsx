import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Zap,
  Globe,
  Smartphone,
  Database,
  Code2,
  Palette
} from "lucide-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
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

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "fullstack", label: "Full Stack" },
    { id: "opensource", label: "Open Source" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with microservices architecture for scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
      category: ["web", "fullstack"],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
      features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Microservices"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      icon: <Globe className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for team collaboration with real-time updates, offline support, and intuitive UI/UX design.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&q=80",
      category: ["mobile", "fullstack"],
      technologies: ["React Native", "Express.js", "MongoDB", "Socket.io", "Redux"],
      features: ["Offline support", "Real-time sync", "Team collaboration", "Push notifications"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Development",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning dashboard for business intelligence with data visualization, predictive analytics, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
      category: ["web", "fullstack"],
      technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL", "Docker"],
      features: ["Predictive analytics", "Data visualization", "Automated reports", "ML models"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Developer Portfolio Template",
      description: "Open-source portfolio template for developers with modern design, performance optimization, and easy customization options.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&q=80",
      category: ["web", "opensource"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      features: ["Modern design", "Performance optimized", "Responsive", "Easy customization"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Open Source",
      icon: <Code2 className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, real-time messaging, content management, and advanced security features.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
      category: ["fullstack", "opensource"],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Redis"],
      features: ["JWT authentication", "Real-time messaging", "Rate limiting", "Data validation"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      icon: <Database className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Design System Library",
      description: "Comprehensive React component library with design tokens, documentation, and testing suite for consistent UI development.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&h=400&fit=crop&q=80",
      category: ["web", "opensource"],
      technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS", "Jest", "Rollup"],
      features: ["Design tokens", "Storybook docs", "TypeScript support", "Testing suite"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Maintained",
      icon: <Palette className="h-5 w-5" />
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success/10 text-success border-success/20";
      case "In Development": return "bg-warning/10 text-warning border-warning/20";
      case "Open Source": return "bg-primary/10 text-primary border-primary/20";
      case "Maintained": return "bg-accent/10 text-accent border-accent/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-background-subtle relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 border border-accent rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-text bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={cn(
          "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "gradient" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={cn(
                "group overflow-hidden bg-card border-card-border hover:shadow-xl transition-all duration-500",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className={cn("border", getStatusColor(project.status))}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4 p-2 bg-glass border border-glass-border rounded-lg backdrop-blur-sm">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-6">
                  {project.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-1000 delay-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's discuss how we can create something amazing together.
          </p>
          <Button variant="hero" size="lg" className="group">
            <Users className="mr-2 h-5 w-5" />
            Start a Project
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;