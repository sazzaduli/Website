import { useEffect, useState } from 'react';

interface DataStream {
  id: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  direction: 'horizontal' | 'vertical';
}

interface CircuitNode {
  id: number;
  x: number;
  y: number;
  size: number;
  pulseDelay: number;
  connections: { x: number; y: number }[];
}

const TechVoyageBackground = () => {
  const [dataStreams, setDataStreams] = useState<DataStream[]>([]);
  const [circuitNodes, setCircuitNodes] = useState<CircuitNode[]>([]);

  useEffect(() => {
    // Create data streams
    const streams: DataStream[] = [];
    for (let i = 0; i < 20; i++) {
      streams.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: 50 + Math.random() * 100,
        speed: 1 + Math.random() * 3,
        opacity: 0.1 + Math.random() * 0.3,
        direction: Math.random() > 0.5 ? 'horizontal' : 'vertical'
      });
    }
    setDataStreams(streams);

    // Create circuit nodes
    const nodes: CircuitNode[] = [];
    for (let i = 0; i < 12; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      nodes.push({
        id: i,
        x,
        y,
        size: 4 + Math.random() * 8,
        pulseDelay: Math.random() * 4,
        connections: [
          { x: x + (Math.random() - 0.5) * 200, y: y + (Math.random() - 0.5) * 200 },
          { x: x + (Math.random() - 0.5) * 150, y: y + (Math.random() - 0.5) * 150 }
        ]
      });
    }
    setCircuitNodes(nodes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient with tech colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      
      {/* Animated tech grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
            animation: 'tech-grid 20s linear infinite'
          }}
        />
      </div>

      {/* Flowing data streams */}
      {dataStreams.map((stream) => (
        <div key={stream.id}>
          {/* Horizontal streams */}
          {stream.direction === 'horizontal' && (
            <div
              className="absolute bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-data-flow-horizontal"
              style={{
                left: `${stream.x}px`,
                top: `${stream.y}px`,
                width: `${stream.length}px`,
                height: '2px',
                opacity: stream.opacity,
                animationDuration: `${4 + stream.speed}s`,
                animationDelay: `${stream.id * 0.5}s`
              }}
            />
          )}
          
          {/* Vertical streams */}
          {stream.direction === 'vertical' && (
            <div
              className="absolute bg-gradient-to-b from-transparent via-accent/40 to-transparent animate-data-flow-vertical"
              style={{
                left: `${stream.x}px`,
                top: `${stream.y}px`,
                width: '2px',
                height: `${stream.length}px`,
                opacity: stream.opacity,
                animationDuration: `${4 + stream.speed}s`,
                animationDelay: `${stream.id * 0.5}s`
              }}
            />
          )}
        </div>
      ))}

      {/* Circuit nodes and connections */}
      <svg className="absolute inset-0 w-full h-full">
        {circuitNodes.map((node) => (
          <g key={node.id}>
            {/* Connection lines */}
            {node.connections.map((connection, idx) => (
              <line
                key={idx}
                x1={node.x}
                y1={node.y}
                x2={connection.x}
                y2={connection.y}
                stroke="url(#circuit-gradient)"
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${node.pulseDelay + idx}s` }}
              />
            ))}
            
            {/* Circuit node */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="currentColor"
              className="text-primary animate-tech-pulse"
              style={{ animationDelay: `${node.pulseDelay}s` }}
            />
            
            {/* Node glow effect */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 2}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/20 animate-tech-pulse"
              style={{ animationDelay: `${node.pulseDelay}s` }}
            />
          </g>
        ))}
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating tech particles */}
      <div className="absolute top-10 left-1/4 w-1 h-1 bg-primary rounded-full animate-tech-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-tech-float opacity-40" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-primary-glow rounded-full animate-tech-float opacity-80" 
           style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent-glow rounded-full animate-tech-float opacity-30" 
           style={{ animationDelay: '6s' }} />
      <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-primary rounded-full animate-tech-float opacity-50" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/4 right-2/3 w-0.5 h-0.5 bg-accent rounded-full animate-tech-float opacity-70" 
           style={{ animationDelay: '3s' }} />

      {/* Scanning lines */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-horizontal"
          style={{ top: '20%' }}
        />
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan-horizontal"
          style={{ top: '60%', animationDelay: '3s' }}
        />
        <div 
          className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan-vertical"
          style={{ left: '30%', animationDelay: '1.5s' }}
        />
      </div>

      {/* Binary rain effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-primary animate-binary-rain"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + (i % 4)}s`
            }}
          >
            {Math.random().toString(2).substring(2, 8)}
          </div>
        ))}
      </div>

      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent animate-hologram" />
    </div>
  );
};

export default TechVoyageBackground;