import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  style?: React.CSSProperties;
  hoverEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  intensity = 'medium',
  style,
  hoverEffect = true
}: GlassCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'light':
        return 'backdrop-blur-sm bg-card/20 border-card-border/30';
      case 'heavy':
        return 'backdrop-blur-xl bg-card/60 border-card-border/70';
      default:
        return 'backdrop-blur-md bg-card/40 border-card-border/50';
    }
  };

  return (
    <div
      className={cn(
        "relative border rounded-xl transition-all duration-500 ease-out",
        getIntensityClasses(),
        hoverEffect && "hover:bg-card/60 hover:border-card-border/70 hover:backdrop-blur-lg",
        hoverEffect && isHovered && "transform-gpu",
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          isHovered && hoverEffect && "opacity-100"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle border glow */}
      {hoverEffect && (
        <div className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20",
          "blur-sm -z-10",
          isHovered && "opacity-50"
        )} />
      )}
    </div>
  );
};

export default GlassCard;