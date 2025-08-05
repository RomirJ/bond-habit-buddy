import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 8,
          duration: Math.random() * 10 + 15
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 animate-particles"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Floating geometric shapes with movement */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rotate-45 animate-drift-right" style={{animationDelay: '2s'}} />
      <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-full animate-drift-left" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-success/30 rotate-12 animate-drift-right" style={{animationDelay: '3s'}} />
      <div className="absolute bottom-20 right-40 w-6 h-20 bg-primary/20 rounded-full animate-drift-left" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-60 left-1/2 w-10 h-10 border-2 border-success/20 rounded-full animate-drift-right" style={{animationDelay: '4s'}} />
      <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-primary/10 rotate-45 animate-drift-left" style={{animationDelay: '2.5s'}} />
    </div>
  );
};