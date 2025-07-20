import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500", icon: "⚛️" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700", icon: "📘" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-green-500", icon: "🎨" },
        { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500", icon: "💚" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92, color: "from-green-600 to-green-700", icon: "🟢" },
        { name: "Python", level: 85, color: "from-yellow-500 to-orange-500", icon: "🐍" },
        { name: "PostgreSQL", level: 88, color: "from-blue-700 to-indigo-600", icon: "🐘" },
        { name: "MongoDB", level: 80, color: "from-green-700 to-green-800", icon: "🍃" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "AWS", level: 85, color: "from-orange-500 to-red-500", icon: "☁️" },
        { name: "Docker", level: 82, color: "from-blue-500 to-blue-600", icon: "🐳" },
        { name: "Git", level: 90, color: "from-gray-600 to-gray-700", icon: "🔀" },
        { name: "CI/CD", level: 78, color: "from-purple-500 to-pink-500", icon: "🔄" },
      ]
    },
    {
      title: "Design & Mobile",
      icon: "📱",
      skills: [
        { name: "React Native", level: 80, color: "from-purple-600 to-blue-600", icon: "📱" },
        { name: "Figma", level: 75, color: "from-pink-500 to-purple-500", icon: "🎨" },
        { name: "UI/UX Design", level: 70, color: "from-indigo-500 to-purple-600", icon: "✨" },
        { name: "Three.js", level: 65, color: "from-yellow-600 to-red-600", icon: "🌟" },
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
            <LightningCard 
              key={category.title}
              className={cn(
                "transition-all duration-1000",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              intensity="high"
            >
              <Card className="p-8 bg-gradient-card border-card-border h-full"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-3xl animate-bounce group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="group/skill space-y-2 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg group-hover/skill:animate-pulse">{skill.icon}</span>
                        <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-primary transition-colors">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2 bg-secondary"
                      />
                      <div 
                        className={cn(
                          "absolute inset-0 h-2 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out shadow-lg",
                          skill.color
                        )}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                          boxShadow: `0 0 20px hsl(var(--primary) / 0.3)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              </Card>
            </LightningCard>
          ))}
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