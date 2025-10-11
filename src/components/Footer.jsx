import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo variant="light" size="medium" />
            <p>Your destination for modern, stylish clothing. Quality fashion at affordable prices.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <Link to="/products/women">Women</Link>
            <Link to="/products/men">Men</Link>
            <Link to="/products">All Products</Link>
            <Link to="/sale">Sale</Link>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shipping">Shipping Info</Link>
            <Link to="/returns">Returns & Exchanges</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 EESTO. All rights reserved.</p>
          <p>Made with ❤️ for fashion lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
