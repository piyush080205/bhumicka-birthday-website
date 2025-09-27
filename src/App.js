import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MessageSection from './components/MessageSection';
import FunSection from './components/FunSection';
import FinalSection from './components/FinalSection';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-purple to-lavender">
      <FloatingElements />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <GallerySection />
        <MessageSection />
        <FunSection />
        <FinalSection />
      </motion.div>
    </div>
  );
}

export default App;