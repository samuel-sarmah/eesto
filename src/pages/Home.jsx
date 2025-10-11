import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Shield, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);
  const newArrivals = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            New Season<br />
            <span className="highlight">New Style</span>
          </h1>
          <p className="hero-subtitle">
            Discover the latest trends in fashion. Elevate your wardrobe with our curated collection.
          </p>
          <Link to="/products" className="cta-button">
            Shop Now <ArrowRight size={20} />
          </Link>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" alt="Fashion model" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-item">
              <Truck size={32} />
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </div>
            <div className="feature-item">
              <RotateCcw size={32} />
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature-item">
              <Shield size={32} />
              <h3>Secure Payment</h3>
              <p>100% secure checkout</p>
            </div>
            <div className="feature-item">
              <TrendingUp size={32} />
              <h3>Latest Trends</h3>
              <p>New arrivals weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Banners */}
      <section className="category-banners">
        <div className="container">
          <div className="banner-grid">
            <Link to="/products/women" className="category-banner">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" alt="Women's Fashion" />
              <div className="banner-overlay">
                <h2>Women's Collection</h2>
                <span className="shop-link">Shop Now <ArrowRight size={18} /></span>
              </div>
            </Link>
            <Link to="/products/men" className="category-banner">
              <img src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600" alt="Men's Fashion" />
              <div className="banner-overlay">
                <h2>Men's Collection</h2>
                <span className="shop-link">Shop Now <ArrowRight size={18} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/products" className="view-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="sale-banner">
        <div className="container">
          <div className="sale-content">
            <h2>Summer Sale</h2>
            <p>Up to 50% off on selected items</p>
            <Link to="/sale" className="cta-button-light">
              Shop Sale <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>New Arrivals</h2>
            <Link to="/products" className="view-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="products-grid">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay in the Loop</h2>
            <p>Subscribe to our newsletter for exclusive deals and style tips</p>
            <form className="newsletter-form-inline">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
