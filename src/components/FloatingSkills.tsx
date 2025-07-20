import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const FloatingSkills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: "React", color: "from-blue-500 to-cyan-500", position: { top: "20%", left: "15%" } },
    { name: "TypeScript", color: "from-blue-600 to-blue-700", position: { top: "60%", right: "20%" } },
    { name: "Node.js", color: "from-green-600 to-green-700", position: { top: "30%", right: "10%" } },
    { name: "AWS", color: "from-orange-500 to-red-500", position: { bottom: "40%", left: "10%" } },
    { name: "Next.js", color: "from-gray-700 to-gray-900", position: { bottom: "20%", right: "15%" } },
    { name: "Python", color: "from-yellow-500 to-orange-500", position: { top: "50%", left: "5%" } },
    { name: "Docker", color: "from-blue-500 to-blue-600", position: { bottom: "60%", left: "25%" } },
    { name: "MongoDB", color: "from-green-700 to-green-800", position: { top: "40%", left: "25%" } },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute animate-float"
          style={{
            ...skill.position,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        >
          <Badge 
            className={cn(
              "pointer-events-auto cursor-pointer transition-all duration-300",
              "hover:scale-110 hover:shadow-lg backdrop-blur-sm",
              "bg-gradient-to-r text-white border-0 shadow-md",
              skill.color
            )}
            style={{
              animation: `float ${4 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {skill.name}
          </Badge>
        </div>
      ))}
      
      {/* Additional floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingSkills;