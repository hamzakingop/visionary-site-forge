import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LightningCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colors?: string[];
  style?: React.CSSProperties;
}

const LightningCard = ({ 
  children, 
  className, 
  intensity = 'medium',
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
  style
}: LightningCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const rotateX = (deltaY / rect.height) * 15;
      const rotateY = (deltaX / rect.width) * -15;
      
      // Calculate mouse position relative to card
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x: mouseX, y: mouseY });
      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      });
    };

    const handleMouseLeave = () => {
      setTiltStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const lightningCount = intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8;

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative group transition-all duration-300 ease-out transform-gpu",
        className
      )}
      style={{...tiltStyle, ...style}}
    >
      {/* Lightning Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        {Array.from({ length: lightningCount }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              `animate-lightning-${i % 8}`
            )}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: '2px',
              height: `${Math.random() * 60 + 20}px`,
              background: `linear-gradient(180deg, ${colors[i % colors.length]}80, transparent)`,
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random()}s`,
            }}
          />
        ))}
        
        {/* Floating particles */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className={cn(
              "absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100",
              `animate-float-particle-${i % 3}`
            )}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              background: colors[i % colors.length],
              boxShadow: `0 0 10px ${colors[i % colors.length]}80`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* RGB Border Glow with animated gradient */}
      <div 
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500",
          "p-[2px] overflow-hidden"
        )}
      >
        {/* Moving gradient border */}
        <div 
          className="absolute inset-0 animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, ${colors.join(', ')}, ${colors[0]})`,
          }}
        />
        <div className="absolute inset-[2px] bg-card rounded-lg" />
        
        {/* Spotlight effect following mouse */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}% ${mousePosition.y}%, ${colors[0]}40, transparent 70%)`,
          }}
        />
      </div>

      {/* Micro animations on hover */}
      <div className={cn(
        "relative z-10 transition-all duration-300",
        isHovered && "translate-y-[-2px]"
      )}>
        {children}
      </div>

      {/* Subtle shadow effect */}
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10",
        "shadow-2xl"
      )} 
      style={{
        boxShadow: `0 20px 40px -10px ${colors[0]}40`,
      }} />
    </div>
  );
};

export default LightningCard;