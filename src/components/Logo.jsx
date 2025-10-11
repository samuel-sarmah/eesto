import './Logo.css';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  return (
    <div className={`eesto-logo ${variant} ${size}`}>
      <div className="logo-wrapper">
        <span className="logo-text">
          <span className="letter e1">E</span>
          <span className="letter e2">E</span>
          <span className="letter s">S</span>
          <span className="letter t">T</span>
          <span className="letter o">O</span>
        </span>
        <div className="logo-underline"></div>
      </div>
      <span className="logo-tagline">Style Elevated</span>
    </div>
  );
};

export default Logo;
