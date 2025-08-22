import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const text = "HELLFARD";
  const letters = text.split("");

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 500);
    const timer2 = setTimeout(() => setCurrentStep(2), 1500);
    const timer3 = setTimeout(() => setCurrentStep(3), 2200);
    const timer4 = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (!isAnimating && currentStep >= 3) {
    return null;
  }

  return (
    <div className={cn(
      "fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-1000",
      currentStep >= 3 && "translate-y-[-100vh] opacity-0"
    )}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float-particle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Lightning effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute opacity-0 transition-opacity duration-500",
              currentStep >= 1 && "opacity-100 animate-lightning"
            )}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: '2px',
              height: `${Math.random() * 60 + 20}px`,
              background: `linear-gradient(180deg, hsl(var(--primary))80, transparent)`,
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={cn(
                  "text-6xl md:text-8xl font-black text-foreground transition-all duration-500",
                  "transform-gpu",
                  currentStep >= 1 
                    ? "translate-y-0 opacity-100 scale-100" 
                    : "translate-y-8 opacity-0 scale-90"
                )}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  fontFamily: 'var(--font-orbitron)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Glowing line */}
          <div className={cn(
            "h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000",
            currentStep >= 2 ? "w-64 opacity-100" : "w-0 opacity-0"
          )} />
        </div>

        {/* Loading text */}
        <div className={cn(
          "text-lg text-muted-foreground transition-all duration-500",
          currentStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="inline-flex items-center space-x-2">
            <span>Hell Development</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </span>
        </div>
      </div>

      {/* Scanning line effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-2 transition-all duration-2000",
        currentStep >= 1 ? "translate-y-[100vh]" : "translate-y-[-100vh]"
      )} />
    </div>
  );
};

export default LoadingScreen;