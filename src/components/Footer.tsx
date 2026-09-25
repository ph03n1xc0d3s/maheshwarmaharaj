import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="logo text-gradient">Maheshwar Maharaj</h3>
            <p className="footer-desc">
              Illuminating life's path through Redbook (Lal Kitab) wisdom and over 30 years of dedicated healing practice.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/maheshwar.maharaj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://youtube.com/@acharyamaheshmaini" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="https://wa.me/918168969466" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#about">About Maharaj Ji</a></li>
              <li><a href="#services">Astrology Services</a></li>
              <li><a href="#testimonials">Client Testimonials</a></li>
              <li><a href="#contact">Book Consultation</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 81689 69466</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>mmaini174@gmail.com</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>YamunaNagar, Haryana</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Maheshwar Maharaj Astrology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
