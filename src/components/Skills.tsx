import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code, Braces, Palette, Server, Database, Cloud, GitBranch, Wrench, Smartphone, Boxes } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import LightningCard from "@/components/LightningCard";

const Skills = () => {
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

  const skillCategories: { title: string; icon: LucideIcon; skills: { name: string; color: string; icon: LucideIcon }[] }[] = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React/Next.js", color: "from-blue-500 to-cyan-500", icon: Code },
        { name: "TypeScript", color: "from-blue-600 to-blue-700", icon: Braces },
        { name: "Tailwind CSS", color: "from-teal-500 to-green-500", icon: Palette },
        { name: "Vue.js", color: "from-green-500 to-emerald-500", icon: Code },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", color: "from-green-600 to-green-700", icon: Server },
        { name: "Python", color: "from-yellow-500 to-orange-500", icon: Braces },
        { name: "PostgreSQL", color: "from-blue-700 to-indigo-600", icon: Database },
        { name: "MongoDB", color: "from-green-700 to-green-800", icon: Database },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: [
        { name: "AWS", color: "from-orange-500 to-red-500", icon: Cloud },
        { name: "Docker", color: "from-blue-500 to-blue-600", icon: Boxes },
        { name: "Git", color: "from-gray-600 to-gray-700", icon: GitBranch },
        { name: "CI/CD", color: "from-purple-500 to-pink-500", icon: Wrench },
      ]
    },
    {
      title: "Design & Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", color: "from-purple-600 to-blue-600", icon: Smartphone },
        { name: "Figma", color: "from-pink-500 to-purple-500", icon: Palette },
        { name: "UI/UX Design", color: "from-indigo-500 to-purple-600", icon: Palette },
        { name: "Three.js", color: "from-yellow-600 to-red-600", icon: Boxes },
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", 
    "Kubernetes", "GraphQL", "REST APIs", "WebSockets", "Microservices",
    "Tailwind CSS", "SCSS", "Figma", "Git", "Jest", "Cypress", "Webpack"
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-12 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border border-accent rounded-lg rotate-45" />
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary rounded-lg rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-text bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, and DevOps technologies. 
            Always learning and adapting to the latest industry standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <LightningCard 
                key={category.title}
                className={cn(
                  "transition-all duration-1000",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                intensity="high"
              >
                <Card className="p-8 bg-gradient-card border-card-border h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 rounded-lg bg-secondary/40 border border-card-border animate-glow-pulse">
                      <CategoryIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div 
                          key={skill.name} 
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-card-border bg-card/40 hover:bg-card/60 transition-all duration-300 hover:translate-y-[-2px]"
                          style={{ transitionDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                        >
                          <SkillIcon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </LightningCard>
            );
          })}
        </div>

        {/* Technologies Cloud */}
        <LightningCard 
          className={cn(
            "transition-all duration-1000 delay-800",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
          intensity="medium"
        >
          <Card className="p-8 bg-card border-card-border"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="group relative"
              >
                <span
                  className={cn(
                    "block px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium",
                    "hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-primary",
                    "transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg hover:shadow-primary/20",
                    "animate-fade-in transform-gpu"
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {tech}
                </span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-background border border-primary/20 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                  <div className="text-primary font-medium">{tech}</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-background"></div>
                </div>
              </div>
            ))}
          </div>
          </Card>
        </LightningCard>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-1000 delay-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <p className="text-lg text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <div className="inline-flex items-center space-x-1 text-primary font-medium">
            <span>Let's discuss your next project</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;