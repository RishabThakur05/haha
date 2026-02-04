import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log('Autoplay prevented:', err));
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  const pages = [
    // Home Page
    <div key="home" className="page">
      <div className="elegant-paper">
        <h1 className="main-title letter-glow">
          FOR<br/>
          MY LOVE<br/>
          DIKSHU BABYY
        </h1>
        
        <div className="elegant-photo-frame">
          <div className="photo-border heart-beat">
            <img 
              src="/public/7.jpeg" 
              alt="My Beautiful Diksha" 
              className="girlfriend-photo"
            />
          </div>
        </div>
        
        <p className="elegant-subtitle">My babyy,</p>
        
        <p className="wish-text">
          Happy Birthday to the most amazing girl in my world! You make every day brighter just by being you. 
          I can't believe how lucky I am to have someone as wonderful as you in my life.
        </p>
        
        <div className="hearts-row">
          <span>💖</span><span>💕</span><span>💗</span><span>💝</span><span>💖</span>
        </div>
        
        <button className="elegant-button" onClick={() => setCurrentPage(1)}>
          Open My Heart 💌
        </button>
        
        <p className="letter-signature">
          With all my love,<br/>
          Rishab ❤️
        </p>
      </div>
    </div>,

    // Love Letter Page
    <div key="letter" className="page">
      <div className="elegant-paper">
        <h2 className="section-title letter-glow">My Love my babyyy</h2>
        
        <p className="wish-text">Hey beautiful purple,</p>
        
        <p className="wish-text">
          I don't even know where to start because there's so much I want to tell you. Before you came into my life, 
          I thought I was happy, but you showed me what real happiness feels like. You didn't just change my life - 
          you made it so much better in every way possible.
        </p>
        
        <p className="wish-text">
          Your smile is like sunshine on a cloudy day. Your laugh is my favorite sound in the whole world. 
          When you're happy, I'm happy. When you're sad, I just want to hold you and make everything better.
        </p>
        
        <p className="wish-text" style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#8B1538' }}>
          Happy Birthday to the girl who has my whole heart. I love you more than I can put into words, Diksha. 
          You're my everything. ❤️
        </p>
        
        <div className="hearts-row">
          <span>💖</span><span>💕</span><span>💗</span><span>💝</span><span>💖</span>
        </div>
        
        <button className="elegant-button" onClick={() => setCurrentPage(2)}>
          We📸
        </button>
        
        <p className="letter-signature">
          Forever yours,<br/>
          Rishab ❤️
        </p>
      </div>
    </div>,

    // Gallery Page
    <div key="gallery" className="page">
      <div className="elegant-paper">
        <h2 className="section-title letter-glow">Our Beautiful Memories</h2>
        
        <p className="wish-text">
          These are some of my favorite moments with you, Diksha. 
        </p>
        
        <div className="elegant-gallery">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="gallery-item">
              <img src={`/public/${num}.jpeg`} alt={`Memory ${num}`} />
            </div>
          ))}
        </div>
        
        <div className="hearts-row">
          <span>💖</span><span>💕</span><span>💗</span><span>💝</span><span>💖</span>
        </div>
        
        <button className="elegant-button" onClick={() => setCurrentPage(3)}>
         Babyy 🎉
        </button>
        
        <p className="letter-signature">Love,<br/>Rishab ❤️</p>
      </div>
    </div>,

    // Birthday Message Page
    <div key="birthday" className="page">
      <div className="elegant-paper">
        <h2 className="birthday-title letter-glow">Happy Birthday Dikshu babyyy!</h2>
        
        <p className="wish-text">
          Happy Birthday to my love! Today is your special day and I want you to know how much you mean to me. 
          I wish you all the happiness in the world, all the love your heart can hold, and all the amazing things life has to offer.
        </p>
        
        <p className="wish-text">
          I hope this new year of your life brings you so much joy, fun adventures, and all your dreams coming true. 
          I promise to be right here beside you through everything.
        </p>
        
        <p className="wish-text" style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#8B1538' }}>
          I love you more today than yesterday, but not as much as I will tomorrow. 
          Happy Birthday, my love You're my everything! ❤️
        </p>
        
        <div className="hearts-row big-hearts">
          <span>💖</span><span>💕</span><span>💗</span><span>💝</span><span>💖</span>
        </div>
        
        <button className="elegant-button" onClick={() => setCurrentPage(0)}>
          Start Over 💕
        </button>
        
        <p className="letter-signature">
          Forever and always,<br/>
          Your Rishab ❤️
        </p>
      </div>
    </div>
  ];

  return (
    <div className="App">
      <div className="floating-hearts">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="floating-heart" style={{ left: `${10 + i * 15}%`, animationDelay: `${i * 1}s` }}>
            ❤️
          </div>
        ))}
      </div>
      
      <audio ref={audioRef} loop>
        <source src="/public/bg.mp3" type="audio/mpeg" />
      </audio>
      
      <div className="section-container">
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default App;