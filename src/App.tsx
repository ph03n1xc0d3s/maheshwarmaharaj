
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navbar could go here */}
      <nav className="navbar glass-panel">
        <div className="container nav-container">
          <div className="logo text-gradient">Maheshwar Maharaj</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" className="btn btn-outline nav-btn">Contact</a>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
