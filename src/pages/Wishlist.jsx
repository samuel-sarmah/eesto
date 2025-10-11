import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[0], product.colors[0], 1);
  };

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist">
        <div className="container">
          <Heart size={80} />
          <h2>Your wishlist is empty</h2>
          <p>Save your favorite items here!</p>
          <Link to="/products" className="cta-button">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1>My Wishlist ({wishlist.length})</h1>

        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-item">
              <Link to={`/product/${product.id}`} className="item-image">
                <img src={product.images[0]} alt={product.name} />
                {product.originalPrice && (
                  <span className="discount-badge">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </Link>

              <div className="item-info">
                <Link to={`/product/${product.id}`}>
                  <h3>{product.name}</h3>
                </Link>
                
                <div className="item-price">
                  <span className="current-price">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="item-actions">
                  {product.inStock ? (
                    <button
                      className="add-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  ) : (
                    <button className="out-of-stock-btn" disabled>
                      Out of Stock
                    </button>
                  )}
                  
                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
