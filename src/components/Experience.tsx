import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LightningCard from "@/components/LightningCard";
import { 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Building2,
  GraduationCap,
  Award,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
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

  const tabs = [
    { id: "experience", label: "Experience", icon: <Building2 className="h-4 w-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechForward Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications serving 100K+ users. Architecting microservices infrastructure and mentoring junior developers.",
      responsibilities: [
        "Led a team of 5 developers in building enterprise-grade applications",
        "Improved application performance by 40% through optimization techniques",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and established coding best practices"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      achievements: ["40% performance improvement", "60% faster deployments", "Team leadership"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed MVP applications for early-stage startups. Worked across the full technology stack with emphasis on rapid prototyping and scalable architecture.",
      responsibilities: [
        "Built 5+ MVP applications from concept to launch",
        "Collaborated with product teams to define technical requirements",
        "Implemented responsive designs and mobile-first approaches",
        "Optimized applications for performance and SEO"
      ],
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Vercel"],
      achievements: ["5 successful product launches", "100% mobile responsiveness", "SEO optimization"]
    },
    {
      title: "Frontend Developer",
      company: "DigitalCraft Agency",
      location: "Remote",
      period: "2021 - 2022",
      type: "Contract",
      description: "Created engaging user interfaces for diverse clients including e-commerce platforms, corporate websites, and SaaS applications.",
      responsibilities: [
        "Developed responsive web applications for 20+ clients",
        "Collaborated with design teams to implement pixel-perfect UIs",
        "Optimized applications for cross-browser compatibility",
        "Maintained and updated existing client projects"
      ],
      technologies: ["React", "Vue.js", "SCSS", "JavaScript", "Figma"],
      achievements: ["20+ client projects", "Cross-browser compatibility", "Pixel-perfect implementations"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2021",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Completed capstone project on machine learning applications in web development.",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Machine Learning",
        "Web Development",
        "Computer Networks"
      ],
      projects: [
        "ML-powered recommendation system",
        "Distributed database implementation",
        "Real-time chat application"
      ]
    },
    {
      degree: "Frontend Development Bootcamp",
      institution: "General Assembly",
      location: "San Francisco, CA",
      period: "2020",
      description: "Intensive 12-week program focused on modern frontend technologies and best practices.",
      coursework: [
        "React.js & Redux",
        "Modern JavaScript (ES6+)",
        "Responsive Web Design",
        "Git & Version Control"
      ],
      projects: [
        "E-commerce web application",
        "Portfolio website",
        "API integration project"
      ]
    }
  ];

  const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Open Source Contributor",
      issuer: "GitHub",
      date: "2022 - Present",
      description: "Active contributor to popular open-source projects with 100+ stars on personal repositories.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Tech Talk Speaker",
      issuer: "React Conference",
      date: "2023",
      description: "Presented 'Building Scalable React Applications' to an audience of 500+ developers.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Hackathon Winner",
      issuer: "TechCrunch Disrupt",
      date: "2022",
      description: "First place in healthcare category for developing an AI-powered patient management system.",
      icon: <Target className="h-6 w-6" />
    }
  ];

  const renderExperience = () => (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <LightningCard 
          key={index}
          className={cn(
            "transition-all duration-1000",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}
          style={{ transitionDelay: `${index * 200}ms` }}
          intensity="medium"
        >
          <Card className="p-8 bg-gradient-card border-card-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <Badge variant="secondary" className="mb-4">{exp.type}</Badge>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{exp.description}</p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start space-x-3 text-sm text-muted-foreground">
                    <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                ))}
              </div>

              <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
              <div className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-center space-x-2 text-sm text-success">
                    <TrendingUp className="h-4 w-4" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Card>
        </LightningCard>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <LightningCard 
          key={index}
          className={cn(
            "transition-all duration-1000",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}
          style={{ transitionDelay: `${index * 200}ms` }}
          intensity="low"
        >
          <Card className="p-8 bg-gradient-card border-card-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              {edu.gpa && <Badge variant="secondary" className="mb-4">GPA: {edu.gpa}</Badge>}
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{edu.description}</p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Relevant Coursework</h4>
              <div className="space-y-2">
                {edu.coursework.map((course, courseIndex) => (
                  <div key={courseIndex} className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-foreground">Notable Projects</h4>
              <div className="space-y-2">
                {edu.projects.map((project, projIndex) => (
                  <div key={projIndex} className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>{project}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Card>
        </LightningCard>
      ))}
    </div>
  );

  const renderAchievements = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <LightningCard 
          key={index}
          className={cn(
            "transition-all duration-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
          style={{ transitionDelay: `${index * 150}ms` }}
          intensity="low"
        >
          <Card className="p-6 bg-gradient-card border-card-border"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
              <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                <span className="font-medium">{achievement.issuer}</span>
                <span>•</span>
                <span>{achievement.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          </div>
          </Card>
        </LightningCard>
      ))}
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-12 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-text bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my professional experience, educational background, 
            and notable achievements in the tech industry.
          </p>
        </div>

        {/* Tabs */}
        <div className={cn(
          "flex justify-center mb-12 transition-all duration-1000 delay-200",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <div className="flex bg-secondary rounded-lg p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center space-x-2"
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {activeTab === "experience" && renderExperience()}
          {activeTab === "education" && renderEducation()}
          {activeTab === "achievements" && renderAchievements()}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-1000 delay-800",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to work together?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how my experience and skills can contribute to your next project's success.
          </p>
          <Button variant="gradient" size="lg" className="group">
            <Users className="mr-2 h-5 w-5" />
            Get In Touch
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;