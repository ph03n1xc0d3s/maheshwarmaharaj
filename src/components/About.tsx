import { motion } from 'framer-motion';
import { Star, Award, BookOpen } from 'lucide-react';
import maharajImg from '../assets/maharaj.jpg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <span className="section-subtitle">About Maheshwar Maharaj</span>
        <h2 className="section-title">Guiding Lives Through <span className="text-gradient">Cosmic Wisdom</span></h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image glass-panel">
                <img src={maharajImg} alt="Maheshwar Maharaj" className="about-photo" />
              </div>
              <div className="experience-badge glass-panel">
                <span className="exp-number text-gradient">35+</span>
                <span className="exp-text">Years of<br/>Experience</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="about-heading">A Legacy of Astrological Excellence</h3>
            <p className="about-text">
              With over three decades of profound experience in Redbook (Lal Kitab) Astrology, Tantrakaat, and Mantrasadhna, Maheshwar Maharaj has dedicated his life to offering powerful, practical remedies. His journey began in the spiritual heartlands of India, mastering ancient texts, Vastu, and the healing arts.
            </p>
            <p className="about-text">
              Today, he is recognized globally for his astonishing accuracy and compassionate guidance. Whether it's identifying the perfect Lucky Gems or channeling energy as a Reiki Grand Master, his holistic approach illuminates the path to success and peace.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item glass-panel">
                <Star className="text-gold stat-icon" size={24} />
                <h4 className="stat-title">10,000+</h4>
                <p className="stat-desc">Consultations</p>
              </div>
              <div className="stat-item glass-panel">
                <Award className="text-gold stat-icon" size={24} />
                <h4 className="stat-title">Global</h4>
                <p className="stat-desc">Recognition</p>
              </div>
              <div className="stat-item glass-panel">
                <BookOpen className="text-gold stat-icon" size={24} />
                <h4 className="stat-title">Reiki</h4>
                <p className="stat-desc">Grand Master</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
