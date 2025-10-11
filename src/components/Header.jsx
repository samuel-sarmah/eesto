import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, Search, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { wishlist } = useWishlist();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <p>Free shipping on orders over $100 | Easy Returns</p>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <button 
            className="mobile-menu-btn"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu size={24} />
          </button>

          <Link to="/" className="logo">
            <Logo variant="minimal" size="medium" />
          </Link>

          <nav className={`nav ${showMobileMenu ? 'nav-open' : ''}`}>
            <Link to="/products/women" onClick={() => setShowMobileMenu(false)}>Women</Link>
            <Link to="/products/men" onClick={() => setShowMobileMenu(false)}>Men</Link>
            <Link to="/products" onClick={() => setShowMobileMenu(false)}>All Products</Link>
            <Link to="/sale" onClick={() => setShowMobileMenu(false)}>Sale</Link>
          </nav>

          <div className="header-actions">
            <Link to="/search" className="icon-btn">
              <Search size={20} />
            </Link>

            <Link to="/wishlist" className="icon-btn">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </Link>

            <Link to="/cart" className="icon-btn">
              <ShoppingCart size={20} />
              {getCartItemsCount() > 0 && (
                <span className="badge">{getCartItemsCount()}</span>
              )}
            </Link>

            <div className="user-menu">
              <button 
                className="icon-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User size={20} />
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown">
                  {isAuthenticated ? (
                    <>
                      <p className="user-name">Hi, {user.name}!</p>
                      <Link to="/profile" onClick={() => setShowUserMenu(false)}>My Profile</Link>
                      <Link to="/orders" onClick={() => setShowUserMenu(false)}>My Orders</Link>
                      {user.isAdmin && (
                        <Link to="/admin" onClick={() => setShowUserMenu(false)}>Admin Dashboard</Link>
                      )}
                      <button onClick={() => { logout(); setShowUserMenu(false); }}>
                        <LogOut size={16} /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setShowUserMenu(false)}>Login</Link>
                      <Link to="/signup" onClick={() => setShowUserMenu(false)}>Sign Up</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
