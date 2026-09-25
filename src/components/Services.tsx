import { motion } from 'framer-motion';
import { Compass, Heart, Briefcase, Home, Gem, Sparkles } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Compass size={32} />,
    title: 'Kundli Reading',
    description: 'Detailed analysis of your birth chart to uncover life patterns, strengths, and future trajectories.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Matchmaking',
    description: 'Comprehensive compatibility analysis for marriage using traditional Ashtakoot and Dashakoot systems.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Career Guidance',
    description: 'Strategic astrological insights for career choices, business ventures, and financial prosperity.',
  },
  {
    icon: <Home size={32} />,
    title: 'Vaastu Consultation',
    description: 'Harmonize your living and working spaces with cosmic energies to attract positivity and abundance.',
  },
  {
    icon: <Gem size={32} />,
    title: 'Gemstone Remedies',
    description: 'Authentic recommendations for precious stones to balance planetary influences and enhance well-being.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Muhurat Selection',
    description: 'Identifying the most auspicious timings for significant life events, ceremonies, and new beginnings.',
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
