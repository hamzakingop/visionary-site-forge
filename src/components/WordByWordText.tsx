import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface WordByWordTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const WordByWordText = ({ words, className, interval = 3000 }: WordByWordTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={cn("inline-block min-w-0", className)}>
      <span 
        className={cn(
          "inline-block transition-all duration-400",
          isAnimating ? "animate-word-pop-out opacity-0" : "animate-word-pop-in opacity-100"
        )}
        key={currentIndex}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};

export default WordByWordText;