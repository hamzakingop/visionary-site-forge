import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-green-500" },
        { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 92, color: "from-green-600 to-green-700" },
        { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL", level: 88, color: "from-blue-700 to-indigo-600" },
        { name: "MongoDB", level: 80, color: "from-green-700 to-green-800" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 82, color: "from-blue-500 to-blue-600" },
        { name: "Git", level: 90, color: "from-gray-600 to-gray-700" },
        { name: "CI/CD", level: 78, color: "from-purple-500 to-pink-500" },
      ]
    },
    {
      title: "Design & Mobile",
      skills: [
        { name: "React Native", level: 80, color: "from-purple-600 to-blue-600" },
        { name: "Figma", level: 75, color: "from-pink-500 to-purple-500" },
        { name: "UI/UX Design", level: 70, color: "from-indigo-500 to-purple-600" },
        { name: "Three.js", level: 65, color: "from-yellow-600 to-red-600" },
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
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border border-accent rounded-lg rotate-45" />
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary rounded-lg rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={cn(
                "p-8 bg-gradient-card border-card-border transition-all duration-1000",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2 bg-secondary"
                      />
                      <div 
                        className={cn(
                          "absolute inset-0 h-2 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out",
                          skill.color
                        )}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <Card className={cn(
          "p-8 bg-card border-card-border transition-all duration-1000 delay-800",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={cn(
                  "px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium",
                  "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                  "transition-all duration-300 cursor-default",
                  "animate-fade-in"
                )}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'both'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

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