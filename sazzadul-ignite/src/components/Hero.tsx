import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-card/50" />
      
      {/* Floating Mathematical Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 text-xl animate-float">
          ∫ f(x)dx
        </div>
        <div className="absolute top-40 right-20 text-accent/20 text-lg animate-float" style={{ animationDelay: '1s' }}>
          Σ(xi - μ)²
        </div>
        <div className="absolute bottom-40 left-20 text-primary/20 text-2xl animate-float" style={{ animationDelay: '2s' }}>
          ∇f(x)
        </div>
        <div className="absolute bottom-20 right-40 text-accent/20 text-lg animate-float" style={{ animationDelay: '3s' }}>
          P(A|B) = P(B|A)P(A)/P(B)
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Sazzadul Islam
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Mathematics & AI Specialist
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            B.Sc. Mathematics Student at University of Greenwich | AI Trainer | Quantitative Finance Enthusiast
            <br />
            Building the future with mathematical precision and artificial intelligence
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://linkedin.com/in/sazzadul-islam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/sazzadul-islam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:Sazzaduli16@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;