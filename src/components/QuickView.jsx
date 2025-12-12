import { useState, useEffect } from 'react';
import { X, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';
import './QuickView.css';

const QuickView = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const toast = useToast();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || '');
      setCurrentImage(0);
      setQuantity(1);
    }
  }, [product]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.warning('Please select size and color');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    toast.success('Product added to cart!');
    onClose();
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    toast.success(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/500x750/f5f5f5/333333?text=${encodeURIComponent(product.name)}`;
  };

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="quick-view-content">
          {/* Image Gallery */}
          <div className="quick-view-gallery">
            <div className="main-image">
              <img 
                src={product.images[currentImage]} 
                alt={product.name}
                onError={handleImageError}
              />
              
              {product.images.length > 1 && (
                <>
                  <button className="nav-btn prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </button>
                  <button className="nav-btn next" onClick={nextImage}>
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {product.originalPrice && (
                <span className="badge sale-badge">Sale</span>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="thumbnail-list">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} ${index + 1}`}
                      onError={handleImageError}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="quick-view-info">
            <div className="product-header">
              <div>
                <h2>{product.name}</h2>
                <p className="product-category">{product.category} • {product.subcategory}</p>
              </div>
              <button
                className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={handleWishlistToggle}
                aria-label="Add to wishlist"
              >
                <Heart fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="price-section">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  <span className="discount-badge">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            {/* Size Selection */}
            <div className="option-group">
              <label>Size</label>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="option-group">
              <label>Color</label>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="option-group">
              <label>Quantity</label>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={20} />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <Link 
                to={`/product/${product.id}`} 
                className="view-details-btn"
                onClick={onClose}
              >
                View Full Details
              </Link>
            </div>

            <div className="stock-status">
              {product.inStock ? (
                <span className="in-stock">✓ In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
