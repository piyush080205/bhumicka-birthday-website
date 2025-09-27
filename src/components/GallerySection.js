import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Actual photos in the gallery
  const images = [
    process.env.PUBLIC_URL + '/images/pic1.jpg',
  process.env.PUBLIC_URL + '/images/pic2.jpg',
  process.env.PUBLIC_URL + '/images/pic3.jpg',
  process.env.PUBLIC_URL + '/images/pic4.jpg',
  process.env.PUBLIC_URL + '/images/pic5.jpg'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="min-h-screen py-20 px-4 relative">
      {/* Background Cats */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            🐱
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
          <h2 className="dancing-script text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Beautiful Memories 📸
          </h2>
          <div className="flex justify-center items-center gap-4 text-4xl">
            <span>🐾</span>
            <span>💕</span>
            <span>🐾</span>
          </div>
        </motion.div>

        {/* Gallery Container */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Main Image Display */}
          <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="relative aspect-[4/3] bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Actual image display */}
                <img 
                  src={images[currentImage]} 
                  alt={`Beautiful memory ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder (hidden by default) */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pastel-pink to-soft-purple" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <p className="text-white text-xl font-semibold">
                      Photo {currentImage + 1}
                    </p>
                    <p className="text-white/80 text-sm mt-2">
                      {images[currentImage]}
                    </p>
                  </div>
                </div>
                
                {/* Cat decorations on image */}
                <div className="absolute top-4 left-4 text-3xl animate-bounce">🐱</div>
                <div className="absolute top-4 right-4 text-3xl animate-pulse">💕</div>
                <div className="absolute bottom-4 left-4 text-3xl animate-wiggle">😸</div>
                <div className="absolute bottom-4 right-4 text-3xl animate-bounce">🎀</div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">⬅️</span>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">➡️</span>
            </button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Instructions */}
          <motion.div
            className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-lg">
              💡 <strong>Note:</strong> If You leave me, I will mewmurder you. <code></code> 
            </p>
            <div className="flex justify-center mt-4 gap-2 text-2xl">
              <span className="animate-bounce">🐾</span>
              <span className="animate-pulse">💖</span>
              <span className="animate-bounce">🐾</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;