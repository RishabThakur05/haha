import React from 'react';
import { motion } from 'framer-motion';

interface ReasonsPageProps {
  navigateToSection: (section: string) => void;
}

const ReasonsPage: React.FC<ReasonsPageProps> = ({ navigateToSection }) => {
  const reasons: string[] = [
    "Your beautiful smile that makes my whole day better, Diksha",
    "The way you make me laugh even when I'm feeling down",
    "Your kind heart and how you care about everyone around you",
    "How you believe in me when I don't believe in myself",
    "Your strength and how brave you are when things get tough",
    "The way you make ordinary moments feel special and fun",
    "Your gorgeous eyes that I could look into forever",
    "How you understand me without me even saying anything",
    "Your amazing hugs that make everything feel better",
    "The way you love me exactly as I am",
    "How smart you are and our deep conversations",
    "You inspire me to be the best version of myself",
    "All your cute little habits that make you unique",
    "How you dance and sing when you're happy",
    "Because you're absolutely perfect in every way, my Diksha"
  ];

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
          Why I Love You, Diksha
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="wish-text">
            There are so many reasons why I love you, but here are some of the most important ones. 
            Each one of these things makes you the amazing person you are, and I fall in love with you 
            more and more every day because of them.
          </p>
        </motion.div>
        
        <motion.div 
          className="reasons-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{ marginTop: '40px' }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="reason-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="reason-number">{index + 1}</div>
              <p className="reason-text">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', fontSize: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
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
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <button 
            className="elegant-button"
            onClick={() => navigateToSection('birthdayMessage')}
          >
            Birthday Surprise 🎉
          </button>
        </motion.div>
        
        <motion.p 
          className="letter-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          All my love,<br/>
          Rishab ❤️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ReasonsPage;