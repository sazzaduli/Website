import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  symbol: string;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mathSymbols = ['∫', '∑', '∂', '∇', 'π', 'α', 'β', 'γ', 'δ', 'λ', '∞', '≈', '±', '√', 'Σ', 'Ω', 'θ', 'φ'];

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const handleResize = () => {
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          newX -= (dx / distance) * force * 0.5;
          newY -= (dy / distance) * force * 0.5;
        }

        // Boundary checking
        if (newX < 0 || newX > window.innerWidth) {
          particle.speedX *= -1;
          newX = particle.x + particle.speedX;
        }
        if (newY < 0 || newY > window.innerHeight) {
          particle.speedY *= -1;
          newY = particle.y + particle.speedY;
        }

        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    };

    const interval = setInterval(animateParticles, 16); // ~60fps
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Floating Mathematical Symbols */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-primary/20 font-bold select-none transition-all duration-300 hover:text-primary/40"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          {particle.symbol}
        </div>
      ))}

      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-accent/10 rounded-full animate-float" 
           style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-40 right-20 w-20 h-20 border border-primary/10 rotate-45 animate-float" 
           style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute bottom-40 left-40 w-24 h-24 border border-accent/10 rounded-lg animate-float" 
           style={{ animationDelay: '4s', animationDuration: '12s' }} />
      <div className="absolute bottom-20 right-40 w-16 h-16 border border-primary/10 rounded-full animate-float" 
           style={{ animationDelay: '6s', animationDuration: '6s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                 linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'slide 20s linear infinite'
             }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow" 
           style={{ 
             boxShadow: '0 0 20px hsl(var(--primary))',
             animationDelay: '0s',
             animationDuration: '3s'
           }} />
      <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-glow" 
           style={{ 
             boxShadow: '0 0 15px hsl(var(--accent))',
             animationDelay: '1.5s',
             animationDuration: '4s'
           }} />
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary-glow rounded-full animate-glow" 
           style={{ 
             boxShadow: '0 0 10px hsl(var(--primary-glow))',
             animationDelay: '3s',
             animationDuration: '5s'
           }} />
    </div>
  );
};

export default AnimatedBackground;