import './Logo.css';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  return (
    <div className={`eesto-logo ${variant} ${size}`}>
      <div className="logo-icon">
        {/* Geometric elevation design - rising layers */}
        <svg viewBox="0 0 100 100" className="logo-svg">
          {/* Base layer */}
          <path 
            className="layer layer-1" 
            d="M 20 70 L 50 50 L 80 70 Z" 
            fill="url(#gradient1)"
          />
          {/* Middle layer */}
          <path 
            className="layer layer-2" 
            d="M 25 55 L 50 40 L 75 55 Z" 
            fill="url(#gradient2)"
          />
          {/* Top layer - peak of elevation */}
          <path 
            className="layer layer-3" 
            d="M 35 40 L 50 28 L 65 40 Z" 
            fill="url(#gradient3)"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#764ba2" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#764ba2" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f093fb" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f093fb" />
              <stop offset="100%" stopColor="#f5576c" />
            </linearGradient>
          </defs>
          
          {/* Subtle accent lines */}
          <line x1="50" y1="28" x2="50" y2="20" stroke="url(#gradient3)" strokeWidth="2" className="accent-line" />
        </svg>
      </div>
      
      <div className="logo-text-wrapper">
        <span className="logo-brand">EESTO</span>
        <span className="logo-tagline">Style Elevated</span>
      </div>
    </div>
  );
};

export default Logo;
