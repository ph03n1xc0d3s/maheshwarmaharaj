import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Entrepreneur',
    content: 'Maharaj Ji\'s guidance during my business transition was incredibly precise. His remedies brought a noticeable shift in my professional journey.',
  },
  {
    name: 'Rahul & Neha',
    role: 'Married Couple',
    content: 'The Kundli matchmaking was so detailed. He explained everything with such clarity and patience. We are blessed to have his guidance.',
  },
  {
    name: 'Dr. Amit Verma',
    role: 'Surgeon',
    content: 'I approached him during a tough career phase. The astrological insights and gemstone recommendation worked wonders for my confidence and stability.',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <span className="section-subtitle">Client Stories</span>
        <h2 className="section-title">Words of <span className="text-gradient">Appreciation</span></h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              className="testimonial-card glass-panel"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
