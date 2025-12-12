import './Logo.css';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  return (
    <div className={`eesto-logo ${variant} ${size}`}>
      <span className="logo-brand">EESTO</span>
    </div>
  );
};

export default Logo;
