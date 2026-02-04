import React from 'react';
import { motion } from 'framer-motion';

interface LoveLetterPageProps {
  navigateToSection: (section: string) => void;
}

const LoveLetterPage: React.FC<LoveLetterPageProps> = ({ navigateToSection }) => {
  return (
    <div className="section-container">
      <motion.div 
        className="elegant-paper birthday-wish-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h2 
          className="birthday-title letter-glow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My babyy
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="wish-text">
            Hey my purple,
          </p>
          
          <p className="wish-text">
            I don't even know where to start because there's so much I want to tell you. Before you came into my life, 
            I thought I was happy, but you showed me what real happiness feels like. You didn't just change my life - 
            you made it so much better in every way possible.
          </p>
          
          <p className="wish-text">
            Your smile is like sunshine on a cloudy day. Your laugh is my favorite sound in the whole world. 
            When you're happy, I'm happy. When you're sad, I just want to hold you and make everything better. 
            You have this amazing way of making even boring days feel special just by being there.
          </p>
          
        
          
          <p className="wish-text" style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#8B1538' }}>
            Happy Birthday to the girl who has my whole heart. I love you more than I can put into words, Diksha. 
            You're my everything. ❤️
          </p>
        </motion.div>
        
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', fontSize: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {['💖', '💕', '💗', '💝', '💖'].map((heart, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          style={{ textAlign: 'center', marginTop: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <button 
            className="elegant-button"
            onClick={() => navigateToSection('gallery')}
          >
            We📸
          </button>
        </motion.div>
        
        <motion.p 
          className="letter-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Forever yours,<br/>
          Rishab ❤️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoveLetterPage;