import Navigation from "@/components/Navigation";
import TechVoyageBackground from "@/components/TechVoyageBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <TechVoyageBackground />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sazzadul Islam. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed to showcase mathematical precision and AI innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;