import { Globe, MessageCircle, Share2, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="logo text-gradient">Maheshwar Maharaj</h3>
            <p className="footer-desc">
              Illuminating life's path through ancient Vedic wisdom and over 35 years of dedicated astrological practice.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#about">About Maharaj Ji</a></li>
              <li><a href="#services">Astrology Services</a></li>
              <li><a href="#testimonials">Client Testimonials</a></li>
              <li><a href="#">Book Consultation</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>consult@maheshwarmaharaj.com</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Vedic Center, New Delhi, India</span>
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
