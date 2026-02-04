import React from 'react';
import { motion } from 'framer-motion';

interface HomePageProps {
  navigateToSection: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToSection }) => {
  return (
    <div className="section-container">
      <motion.div 
        className="elegant-paper birthday-wish-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1 
          className="main-title letter-glow"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          FOR<br/>
          MY LOVE<br/>
          DIKSHA
        </motion.h1>
        
        <motion.div 
          className="elegant-photo-frame"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="photo-border heart-beat">
            <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="My Beautiful Diksha" 
              className="girlfriend-photo"
            />
          </div>
        </motion.div>
        
        <motion.p 
          className="elegant-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          My dearest Diksha,
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <p className="wish-text">
            Happy Birthday to the most amazing girl in my world! You make every day brighter just by being you. 
            I can't believe how lucky I am to have someone as wonderful as you in my life.
          </p>
          
          <p className="wish-text">
            Today is all about celebrating you and all the joy you bring to everyone around you. You're not just 
            my girlfriend, you're my best friend, my biggest supporter, and the person who makes me smile even 
            on the hardest days.
          </p>
        </motion.div>
        
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', fontSize: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
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
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <button 
            className="elegant-button"
            onClick={() => navigateToSection('loveLetter')}
          >
            Open My Heart 💌
          </button>
        </motion.div>
        
        <motion.p 
          className="letter-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          With all my love,<br/>
          Rishab ❤️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomePage;