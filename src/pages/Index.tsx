import { useState, useEffect } from "react";
import { ScrollControls } from "@react-three/drei";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/LoadingScreen";
import GlobalScene from "@/components/three/GlobalScene";
import MagneticCursor from "@/components/ui/MagneticCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MagneticCursor>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-background relative overflow-hidden">
        <GlobalScene />
        <AnimatedBackground />
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MagneticCursor>
  );
};

export default Index;
