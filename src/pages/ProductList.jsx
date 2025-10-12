import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import QuickView from '../components/QuickView';
import { products } from '../data/products';
import './ProductList.css';

const ProductList = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: category || 'all',
    subcategory: 'all',
    priceRange: 'all',
    sortBy: 'featured',
    inStock: false
  });
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
    setTimeout(() => setQuickViewProduct(null), 300);
  };

  useEffect(() => {
    let result = [...products];

    // Category filter
    if (filters.category && filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Subcategory filter
    if (filters.subcategory && filters.subcategory !== 'all') {
      result = result.filter(p => p.subcategory === filters.subcategory);
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    // In stock filter
    if (filters.inStock) {
      result = result.filter(p => p.inStock);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [filters, category]);

  useEffect(() => {
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [category]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: category || 'all',
      subcategory: 'all',
      priceRange: 'all',
      sortBy: 'featured',
      inStock: false
    });
  };

  return (
    <div className="product-list-page">
      <div className="container">
        <div className="page-header">
          <h1>
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection` : 'All Products'}
          </h1>
          <p>{filteredProducts.length} products found</p>
        </div>

        <div className="products-layout">
          <button 
            className="mobile-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Filters
          </button>

          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filters-header">
              <h3>Filters</h3>
              <button 
                className="close-filters"
                onClick={() => setShowFilters(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="filter-group">
              <h4>Category</h4>
              <label>
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === 'all'}
                  onChange={() => handleFilterChange('category', 'all')}
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === 'women'}
                  onChange={() => handleFilterChange('category', 'women')}
                />
                Women
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === 'men'}
                  onChange={() => handleFilterChange('category', 'men')}
                />
                Men
              </label>
            </div>

            <div className="filter-group">
              <h4>Subcategory</h4>
              <label>
                <input
                  type="radio"
                  name="subcategory"
                  checked={filters.subcategory === 'all'}
                  onChange={() => handleFilterChange('subcategory', 'all')}
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  name="subcategory"
                  checked={filters.subcategory === 'tops'}
                  onChange={() => handleFilterChange('subcategory', 'tops')}
                />
                Tops
              </label>
              <label>
                <input
                  type="radio"
                  name="subcategory"
                  checked={filters.subcategory === 'bottoms'}
                  onChange={() => handleFilterChange('subcategory', 'bottoms')}
                />
                Bottoms
              </label>
              <label>
                <input
                  type="radio"
                  name="subcategory"
                  checked={filters.subcategory === 'outerwear'}
                  onChange={() => handleFilterChange('subcategory', 'outerwear')}
                />
                Outerwear
              </label>
              <label>
                <input
                  type="radio"
                  name="subcategory"
                  checked={filters.subcategory === 'dresses'}
                  onChange={() => handleFilterChange('subcategory', 'dresses')}
                />
                Dresses
              </label>
            </div>

            <div className="filter-group">
              <h4>Price Range</h4>
              <label>
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === 'all'}
                  onChange={() => handleFilterChange('priceRange', 'all')}
                />
                All Prices
              </label>
              <label>
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === '0-50'}
                  onChange={() => handleFilterChange('priceRange', '0-50')}
                />
                Under $50
              </label>
              <label>
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === '50-100'}
                  onChange={() => handleFilterChange('priceRange', '50-100')}
                />
                $50 - $100
              </label>
              <label>
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === '100-200'}
                  onChange={() => handleFilterChange('priceRange', '100-200')}
                />
                $100 - $200
              </label>
              <label>
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === '200-999999'}
                  onChange={() => handleFilterChange('priceRange', '200-999999')}
                />
                Over $200
              </label>
            </div>

            <div className="filter-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                />
                In Stock Only
              </label>
            </div>

            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          </aside>

          <div className="products-content">
            <div className="products-toolbar">
              <p>{filteredProducts.length} Products</p>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching your filters.</p>
                <button onClick={clearFilters} className="cta-button">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickView 
        product={quickViewProduct}
        isOpen={showQuickView}
        onClose={closeQuickView}
      />
    </div>
  );
};

export default ProductList;
