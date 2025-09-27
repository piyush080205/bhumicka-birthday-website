import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FunSection = () => {
  const [pawPrints, setPawPrints] = useState([]);

  // Create walking paw prints animation
  useEffect(() => {
    const interval = setInterval(() => {
      const newPaw = {
        id: Date.now(),
        x: -50,
        y: Math.random() * 300 + 100,
      };
      
      setPawPrints(prev => [...prev.slice(-10), newPaw]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const catFacts = [
    "Cats spend 70% of their lives sleeping! 😴",
    "A group of cats is called a 'clowder' 🐱",
    "Cats have over 20 muscles controlling their ears! 👂",
    "A cat's purr can heal bones! 💚",
    "Cats can't taste sweetness! 🍯"
  ];

  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % catFacts.length);
    }, 3000);

    return () => clearInterval(factInterval);
  }, [catFacts.length]);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Walking Paw Prints */}
      <div className="absolute inset-0">
        {pawPrints.map((paw) => (
          <motion.div
            key={paw.id}
            className="absolute text-3xl opacity-60"
            initial={{ x: paw.x, y: paw.y }}
            animate={{ x: window.innerWidth + 50 }}
            transition={{ duration: 8, ease: "linear" }}
            onAnimationComplete={() => {
              setPawPrints(prev => prev.filter(p => p.id !== paw.id));
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="dancing-script text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Fun Cat Zone! 🎮
          </h2>
          <div className="flex justify-center items-center gap-4 text-4xl">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎪
            </motion.span>
            <span>🐱</span>
            <motion.span
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎪
            </motion.span>
          </div>
        </motion.div>

        {/* Interactive Cat Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {['😸', '😻', '🙀', '😹', '😽', '🐱', '😺', '😼'].map((cat, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 cursor-pointer hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: index * 0.2
              }}
            >
              <div className="text-6xl mb-2">{cat}</div>
              <p className="text-white text-sm">Click me!</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cat Facts Carousel */}
        <motion.div
          className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 mb-16 max-w-2xl mx-auto"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl"
            >
              🧠
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Did You Know?</h3>
          <motion.p
            key={currentFact}
            className="text-white text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {catFacts[currentFact]}
          </motion.p>
        </motion.div>

        {/* Playful Cat Animations */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Sleeping Cat */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              😴
            </motion.div>
            <h4 className="text-white text-xl font-semibold mb-2">Sleepy Cat</h4>
            <p className="text-white/80">Dreaming of fish and yarn balls</p>
          </div>

          {/* Playing Cat */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            >
              🐱
            </motion.div>
            <h4 className="text-white text-xl font-semibold mb-2">Playful Cat</h4>
            <p className="text-white/80">Ready for some fun!</p>
          </div>

          {/* Love Cat */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              😻
            </motion.div>
            <h4 className="text-white text-xl font-semibold mb-2">Love Cat</h4>
            <p className="text-white/80">Sending purrs and love</p>
          </div>
        </motion.div>

        {/* Interactive Message */}
        <motion.div
          className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
              className="text-5xl"
            >
              🎉
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Hope this brings a smile to your face! 😊
          </h3>
          <p className="text-white/90 text-lg">
            Just like how cats bring joy to our lives, you bring joy to mine! 💕
          </p>
          
          {/* Bouncing Hearts */}
          <div className="flex justify-center mt-6 gap-2">
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              >
                💖
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunSection;