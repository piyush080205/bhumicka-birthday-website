import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {i % 4 === 0 ? '🐱' : i % 4 === 1 ? '💕' : i % 4 === 2 ? '🎈' : '✨'}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Cat Banner */}
        <motion.div
          className="mb-8"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-6xl md:text-8xl mb-4">
            🐱 💖 🐱
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="dancing-script text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Happy Birthday,
        </motion.h1>
        
        <motion.h2
          className="dancing-script text-6xl md:text-8xl lg:text-9xl font-bold text-pink-200 mb-8 drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Bhumicka! 🎉
        </motion.h2>

        {/* Birthday Date */}
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 inline-block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-white">
            🗓️ September 28th 🗓️
          </p>
        </motion.div>

        {/* Celebrate Button */}
        <motion.button
          onClick={scrollToNext}
          className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-full text-xl md:text-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to Celebrate 🎉
        </motion.button>
      </motion.div>

      {/* Floating Cat */}
      <motion.div
        className="absolute bottom-10 right-10 text-6xl"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity
        }}
      >
        😸
      </motion.div>
    </section>
  );
};

export default HeroSection;