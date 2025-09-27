import React from 'react';
import { motion } from 'framer-motion';

const MessageSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative flex items-center">
      {/* Floating Cat Paws */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative Header */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-center items-center gap-4 text-5xl mb-6">
            <span className="animate-wiggle">😻</span>
            <span className="animate-pulse">💌</span>
            <span className="animate-wiggle">😻</span>
          </div>
          <h2 className="dancing-script text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            A Special Message
          </h2>
        </motion.div>

        {/* Message Card */}
        <motion.div
          className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Cat Header */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ 
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 rounded-full p-4">
              <span className="text-4xl">🐱💕</span>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium mb-8">
              "Happy Birthday, Bhumicka! You make my world brighter every single day. 
              May your life be filled with love, laughter, and lots of mew mews. I love You 🐱❤️."
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟
            </motion.span>
            <motion.span 
              className="text-4xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖
            </motion.span>
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟
            </motion.span>
          </motion.div>

          {/* Cat Quotes */}
          <motion.div
            className="grid md:grid-cols-3 gap-4 mb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl mb-2">😸</div>
              <p className="text-white/90 text-sm">You're purr-fect!</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl mb-2">🐾</div>
              <p className="text-white/90 text-sm">You've got my heart!</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl mb-2">😻</div>
              <p className="text-white/90 text-sm">Mew and forever!</p>
            </div>
          </motion.div>

          {/* Animated Hearts */}
          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                💕
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-4xl">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🐱
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💫
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🐱
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;