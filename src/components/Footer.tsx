import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
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
              <a href="https://www.instagram.com/maheshwar.maharaj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@acharyamaheshmaini" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://wa.me/918168969466" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
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
