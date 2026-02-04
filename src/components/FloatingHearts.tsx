import React, { useEffect, useState } from 'react';

interface HeartProps {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const initialHearts: HeartProps[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 15,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden'
      }}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="float-up"
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            color: 'rgba(139, 21, 56, 0.3)',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;