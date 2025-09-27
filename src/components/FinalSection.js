import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FinalSection = () => {
  const [balloons, setBalloons] = useState([]);
  const [confetti, setConfetti] = useState([]);

  // Create floating balloons
  useEffect(() => {
    const balloonColors = ['🎈', '🎀', '💖', '🌟', '✨'];
    const newBalloons = [...Array(15)].map((_, i) => ({
      id: i,
      emoji: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      x: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setBalloons(newBalloons);
  }, []);

  // Create confetti
  useEffect(() => {
    const confettiColors = ['bg-pink-400', 'bg-purple-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-400'];
    const newConfetti = [...Array(50)].map((_, i) => ({
      id: i,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 10 + 5,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center">
      {/* Floating Balloons */}
      <div className="absolute inset-0">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            className="absolute text-4xl"
            style={{ left: `${balloon.x}%` }}
            initial={{ y: '100vh' }}
            animate={{ 
              y: ['-10vh', '-20vh', '-10vh'],
              x: [0, 20, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              delay: balloon.delay,
              ease: "easeInOut"
            }}
          >
            {balloon.emoji}
          </motion.div>
        ))}
      </div>

      {/* Confetti */}
      <div className="absolute inset-0">
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className={`absolute ${piece.color} opacity-80`}
            style={{ 
              left: `${piece.x}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
            }}
            initial={{ y: -100, rotate: 0 }}
            animate={{ 
              y: '100vh',
              rotate: 360,
              x: [0, 50, -50, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              delay: piece.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Message */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Decorative Header */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="flex items-center gap-4 text-5xl"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💫
              </motion.span>
              <span>💕</span>
              <motion.span
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💫
              </motion.span>
            </motion.div>
          </div>

          {/* Final Message */}
          <motion.div
            className="bg-white/15 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="dancing-script text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              With love, always –
            </motion.h2>
            
            <motion.h3
              className="dancing-script text-5xl md:text-6xl lg:text-7xl font-bold text-pink-200 mb-8 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9, type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
            >
              Piyush 💕
            </motion.h3>

            {/* Cat Signature */}
            <motion.div
              className="flex justify-center items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-4xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              >
                🐱
              </motion.span>
              <motion.span
                className="text-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                💖
              </motion.span>
              <motion.span
                className="text-4xl"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                🐱
              </motion.span>
            </motion.div>

            {/* Special Message */}
            <motion.p
              className="text-white text-lg md:text-xl leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Thank you for being the most amazing person in my life. 
              Your smile lights up my world just like these cats light up this website! 🌟
            </motion.p>

            {/* Interactive Hearts */}
            <motion.div
              className="flex justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true }}
            >
              {[...Array(9)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-3xl cursor-pointer"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                >
                  💕
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Birthday Wish */}
        <motion.div
          className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-4xl mb-4"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
          >
            🎂
          </motion.div>
          <h4 className="text-2xl font-bold text-white mb-4">
            Make a wish and blow out the candles! 🕯️
          </h4>
          <p className="text-white/90 text-lg">
            May all your dreams come true, just like you make mine come true every day! ✨
          </p>
        </motion.div>

        {/* Footer Cats */}
        <motion.div
          className="mt-16 flex justify-center items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          viewport={{ once: true }}
        >
          {['😸', '😻', '🐱', '😺', '😽'].map((cat, index) => (
            <motion.span
              key={index}
              className="text-5xl"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              {cat}
            </motion.span>
          ))}
        </motion.div>

        {/* Final Thank You */}
        <motion.p
          className="mt-12 text-white/80 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.7 }}
          viewport={{ once: true }}
        >
          Happy Birthday, my love! 🎉🎂💕
        </motion.p>
      </div>
    </section>
  );
};

export default FinalSection;