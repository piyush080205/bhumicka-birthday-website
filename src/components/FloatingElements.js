import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create floating hearts that appear randomly
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        emoji: Math.random() > 0.5 ? '💕' : '💖',
      };
      
      setHearts(prev => [...prev.slice(-8), newHeart]); // Keep only last 8 hearts
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-2xl opacity-60"
            style={{ left: heart.x }}
            initial={{ y: '100vh', opacity: 0.8 }}
            animate={{ 
              y: '-10vh',
              x: [0, 30, -30, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 8,
              ease: "easeOut"
            }}
            onAnimationComplete={() => {
              setHearts(prev => prev.filter(h => h.id !== heart.id));
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </div>

      {/* Static Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Corner Cats */}
        <motion.div
          className="absolute top-10 left-10 text-4xl opacity-30"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity
          }}
        >
          🐱
        </motion.div>

        <motion.div
          className="absolute top-10 right-10 text-4xl opacity-30"
          animate={{ 
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: 1.5
          }}
        >
          😸
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 text-4xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity
          }}
        >
          😻
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 text-4xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: 2
          }}
        >
          🐾
        </motion.div>

        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            ✨
          </motion.div>
        ))}

        {/* Floating Balloons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`balloon-${i}`}
            className="absolute text-3xl opacity-25"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${60 + Math.cos(i) * 20}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.8
            }}
          >
            {i % 3 === 0 ? '🎈' : i % 3 === 1 ? '🎀' : '💖'}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FloatingElements;