import { motion } from 'framer-motion';
import { BookOpen, ShieldAlert, Sparkles, Home, Activity, Gem } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <BookOpen size={32} />,
    title: 'Redbook Astrology',
    description: 'Practical and effective remedies from the Lal Kitab to resolve complex life problems without expensive rituals.',
  },
  {
    icon: <ShieldAlert size={32} />,
    title: 'Tantrakaat',
    description: 'Powerful interventions including Tantra Kaat, Pitter Bandan Kaat, Kuldevi-Devta Bandan Kaat, and Rozi-Rozgaar Bandan Kaat to remove all unseen obstacles.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Mantrasadhna',
    description: 'Guidance on sacred chanting and meditation practices to align your spiritual vibrations for success and peace.',
  },
  {
    icon: <Home size={32} />,
    title: 'Vastu Consultation',
    description: 'Harmonize your living and working spaces with cosmic energies to attract positivity, health, and abundance.',
  },
  {
    icon: <Activity size={32} />,
    title: 'Reiki Grand Master',
    description: 'Advanced spiritual energy healing to balance chakras, relieve stress, and promote physical and emotional well-being.',
  },
  {
    icon: <Gem size={32} />,
    title: 'Lucky Gems',
    description: 'Authentic recommendations for precious and semi-precious stones to amplify planetary blessings and luck.',
  }
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <span className="section-subtitle">Our Expertise</span>
        <h2 className="section-title">Astrological <span className="text-gradient">Services</span></h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
