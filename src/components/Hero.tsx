import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Sparkles size={16} className="text-gold" />
            <span>35+ Years of Vedic Astrology Excellence</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Master Your Destiny With <br />
            <span className="text-gradient">Maheshwar Maharaj</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Discover profound insights into your life's journey, career, and relationships through ancient Vedic wisdom. Unveil the cosmic blueprint of your existence.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="btn btn-primary">
              <Calendar size={18} />
              Book a Consultation
            </button>
            <button className="btn btn-outline">
              Explore Services
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="hero-image glass-panel">
            <div className="image-overlay"></div>
            {/* We will add an image or a generated placeholder here */}
            <div className="astrology-wheel"></div>
          </div>
          <div className="glow-orb"></div>
        </motion.div>
      </div>
    </section>
  );
}
