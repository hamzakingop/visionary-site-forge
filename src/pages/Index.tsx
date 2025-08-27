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
import LoadingScreen from "@/components/LoadingScreen";
import PurpleGlobeScene from "@/components/three/PurpleGlobe";
import MagneticCursor from "@/components/ui/MagneticCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MagneticCursor>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-background relative overflow-hidden">
        <PurpleGlobeScene />
        <div className="relative z-10">
          <Navigation />
          <main className="space-y-0">
            <section className="min-h-screen">
              <Hero />
            </section>
            <section className="min-h-screen">
              <About />
            </section>
            <section className="min-h-screen">
              <Skills />
            </section>
            <section className="min-h-screen">
              <Projects />
            </section>
            <section className="min-h-screen">
              <Experience />
            </section>
            <section className="min-h-screen">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </MagneticCursor>
  );
};

export default Index;
