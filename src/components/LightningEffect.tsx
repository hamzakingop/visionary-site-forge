import { useEffect, useState } from "react";

const LightningEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main lightning bolt following cursor */}
      <div
        className="absolute w-1 h-32 opacity-60 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y - 64,
          background: "linear-gradient(180deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)",
          transform: `rotate(${Math.sin(Date.now() * 0.005) * 15}deg)`,
          boxShadow: `0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--accent))`,
        }}
      />
      
      {/* Animated background lightning bolts */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${Math.sin(i * 0.5) * 20 + 50}%`,
              width: "2px",
              height: `${60 + Math.sin(i) * 20}px`,
              background: `linear-gradient(${180 + i * 45}deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)`,
              transform: `rotate(${15 + i * 10}deg)`,
              animation: `lightning-${i} ${3 + i * 0.5}s infinite ease-in-out`,
              filter: "blur(0.5px)",
              boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
            }}
          />
        ))}
      </div>

      {/* Floating energy particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
              animation: `float-particle-${i} ${4 + Math.random() * 3}s infinite ease-in-out`,
              boxShadow: `0 0 6px ${i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}`,
            }}
          />
        ))}
      </div>

      {/* Cursor glow effect */}
      <div
        className="absolute w-32 h-32 rounded-full opacity-30 transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), transparent)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default LightningEffect;