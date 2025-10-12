import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Truck, RotateCcw, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';
import ReviewSection from '../components/ReviewSection';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const toast = useToast();
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="cta-button">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.warning('Please select size and color');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    toast.success('Product added to cart!');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/products">Products</Link> / 
          <Link to={`/products/${product.category}`}>{product.category}</Link> / 
          <span>{product.name}</span>
        </div>

        <div className="product-detail">
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[currentImage]} alt={product.name} />
              {product.images.length > 1 && (
                <>
                  <button className="image-nav prev" onClick={prevImage}>
                    <ChevronLeft />
                  </button>
                  <button className="image-nav next" onClick={nextImage}>
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
            <div className="image-thumbnails">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={currentImage === index ? 'active' : ''}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info-detail">
            <h1>{product.name}</h1>
            
            <div className="product-rating-detail">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.floor(product.rating) ? '#ffc107' : 'none'}
                    stroke={i < Math.floor(product.rating) ? '#ffc107' : '#ccc'}
                  />
                ))}
              </div>
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="product-price-detail">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  <span className="discount-badge">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-options">
              <div className="option-group">
                <label>Select Size:</label>
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

              <div className="option-group">
                <label>Select Color:</label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Quantity:</label>
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="product-actions-detail">
              <button 
                className="add-to-cart-btn" 
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={20} />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button 
                className={`wishlist-btn-detail ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            {showSuccess && (
              <div className="success-message">
                ✓ Added to cart successfully!
              </div>
            )}

            <div className="product-features">
              <div className="feature">
                <Truck size={24} />
                <div>
                  <strong>Free Shipping</strong>
                  <p>On orders over $100</p>
                </div>
              </div>
              <div className="feature">
                <RotateCcw size={24} />
                <div>
                  <strong>Easy Returns</strong>
                  <p>30-day return policy</p>
                </div>
              </div>
              <div className="feature">
                <Shield size={24} />
                <div>
                  <strong>Secure Payment</strong>
                  <p>100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <ReviewSection productId={product.id} />

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>You May Also Like</h2>
            <div className="products-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
