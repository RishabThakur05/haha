import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

interface BirthdayMessagePageProps {
  navigateToSection: (section: string) => void;
}

interface WindowDimension {
  width: number;
  height: number;
}

const BirthdayMessagePage: React.FC<BirthdayMessagePageProps> = ({ navigateToSection }) => {
  const [windowDimension, setWindowDimension] = useState<WindowDimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState<boolean>(true);

  useEffect(() => {
    const detectSize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', detectSize);
    
    // Stop confetti after 10 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => {
      window.removeEventListener('resize', detectSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="section-container">
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          colors={['#8B1538', '#A91B47', '#C41E3A', '#F8F6F0', '#FEFCF7']}
          numberOfPieces={200}
        />
      )}
      
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
          Happy Birthday Diksha!
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="wish-text">
            Happy Birthday to my beautiful Diksha! Today is your special day and I want you to know how much you mean to me. 
            I wish you all the happiness in the world, all the love your heart can hold, and all the amazing things life has to offer.
          </p>
          
          <p className="wish-text">
            I hope this new year of your life brings you so much joy, fun adventures, and all your dreams coming true. 
            I promise to be right here beside you through everything - celebrating the good times and supporting you through any tough times.
          </p>
          
          <p className="wish-text" style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#8B1538' }}>
            I love you more today than yesterday, but not as much as I will tomorrow. 
            Happy Birthday, my beautiful Diksha! You're my everything! ❤️
          </p>
        </motion.div>
        
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px', fontSize: '2rem' }}
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
            onClick={() => navigateToSection('home')}
          >
            Start Over 💕
          </button>
        </motion.div>
        
        <motion.p 
          className="letter-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Forever and always,<br/>
          Your Rishab ❤️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BirthdayMessagePage;