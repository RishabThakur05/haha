import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

interface MusicPlayerProps {
  isPlaying: boolean;
  toggleMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, toggleMusic, audioRef }) => {
  return (
    <motion.div 
      className="elegant-music-player"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.button 
        className="music-button"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </motion.button>
      
      <audio ref={audioRef} loop>
        <source src="/romantic-song.mp3" type="audio/mpeg" />
        <source src="/romantic-song.wav" type="audio/wav" />
      </audio>
    </motion.div>
  );
};

export default MusicPlayer;