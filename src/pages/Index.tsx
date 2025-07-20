import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LightningEffect from "@/components/LightningEffect";
import FloatingSkills from "@/components/FloatingSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <LightningEffect />
      <FloatingSkills />
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
  );
};

export default Index;
