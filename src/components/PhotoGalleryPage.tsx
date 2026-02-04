import React from 'react';
import { motion } from 'framer-motion';

interface PhotoGalleryPageProps {
  navigateToSection: (section: string) => void;
}

interface Photo {
  src: string;
}

const PhotoGalleryPage: React.FC<PhotoGalleryPageProps> = ({ navigateToSection }) => {
  const photos: Photo[] = [
    { src: "/public/1.jpg" },
    { src: "/public/2.jpg" },
    { src: "/public/3.jpg" },
    { src: "/public/4.jpg" },
    { src: "/public/5.jpg" },
    { src: "/public/6.jpg" }
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
          Our Beautiful Memories
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="wish-text">
            These are some of my favorite moments with you, Diksha. Every photo tells a story of how happy you make me. 
            I love looking back at all the fun times we've had together and thinking about all the amazing memories 
            we're going to make in the future.
          </p>
        </motion.div>
        
        <motion.div 
          className="elegant-gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{ marginTop: '40px' }}
        >
          {photos.map((photo, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img src={photo.src} alt={`Memory ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', fontSize: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
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
          transition={{ duration: 0.8, delay: 3 }}
        >
          <button 
            className="elegant-button"
            onClick={() => navigateToSection('reasons')}
          >
            Why I Love You 💖
          </button>
        </motion.div>
        
        <motion.p 
          className="letter-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          Love,<br/>
          Rishab ❤️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PhotoGalleryPage;