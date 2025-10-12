import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, product.sizes[0], product.colors[0], 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    if (onQuickView) onQuickView(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        {product.images[1] && (
          <img src={product.images[1]} alt={product.name} className="hover-image" loading="lazy" />
        )}
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        {!product.inStock && <span className="out-of-stock-badge">Out of Stock</span>}
        
        <div className="product-actions">
          <button
            className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
            onClick={handleWishlistToggle}
            aria-label="Add to wishlist"
          >
            <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
          </button>
          
          {onQuickView && (
            <button
              className="quick-view-btn"
              onClick={handleQuickView}
              aria-label="Quick view"
            >
              <Eye size={20} />
            </button>
          )}
          
          {product.inStock && (
            <button
              className={`quick-add-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
              <span>{isAdded ? 'Added!' : 'Quick Add'}</span>
            </button>
          )}
        </div>
      </Link>

      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="product-category">{product.category} • {product.subcategory}</p>
        
        <div className="product-rating">
          <div className="stars">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span>({product.reviews})</span>
        </div>

        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="product-colors">
          {product.colors.slice(0, 4).map((color, index) => (
            <span key={index} className="color-dot" title={color}></span>
          ))}
          {product.colors.length > 4 && (
            <span className="more-colors">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
