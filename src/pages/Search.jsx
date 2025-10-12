import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X, Clock, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Load search history from localStorage
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setSearchHistory(history);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setSuggestions([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Debounce search
    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const performSearch = (query) => {
    const lowerQuery = query.toLowerCase().trim();

    // Search in products
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.subcategory.toLowerCase().includes(lowerQuery) ||
      product.colors.some(color => color.toLowerCase().includes(lowerQuery))
    );

    setSearchResults(results);
    setIsSearching(false);

    // Generate suggestions based on partial matches
    const allSuggestions = new Set();
    products.forEach(product => {
      if (product.name.toLowerCase().includes(lowerQuery)) {
        allSuggestions.add(product.name);
      }
      product.colors.forEach(color => {
        if (color.toLowerCase().includes(lowerQuery)) {
          allSuggestions.add(color);
        }
      });
    });

    setSuggestions(Array.from(allSuggestions).slice(0, 5));
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;

    setSearchQuery(query);

    // Save to history
    const newHistory = [query, ...searchHistory.filter(item => item !== query)].slice(0, 10);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSuggestions([]);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const removeHistoryItem = (item) => {
    const newHistory = searchHistory.filter(h => h !== item);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Popular searches (can be dynamic based on actual search data)
  const popularSearches = [
    'Dresses',
    'Jackets',
    'Jeans',
    'T-Shirts',
    'Shoes',
    'Accessories'
  ];

  return (
    <div className="search-page">
      <div className="container">
        {/* Search Header */}
        <div className="search-header">
          <div className="search-input-wrapper">
            <SearchIcon size={24} />
            <input
              type="text"
              placeholder="Search for products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              autoFocus
            />
            {searchQuery && (
              <button className="clear-search" onClick={clearSearch}>
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Search Suggestions */}
        {searchQuery && suggestions.length > 0 && (
          <div className="search-suggestions">
            <h3>Suggestions</h3>
            <div className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSearch(suggestion)}
                >
                  <SearchIcon size={16} />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery ? (
          <div className="search-results-section">
            <div className="results-header">
              <h2>
                {isSearching ? (
                  'Searching...'
                ) : searchResults.length > 0 ? (
                  `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
                ) : (
                  `No results found for "${searchQuery}"`
                )}
              </h2>
            </div>

            {searchResults.length > 0 ? (
              <div className="search-results-grid">
                {searchResults.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : !isSearching && (
              <div className="no-results">
                <SearchIcon size={64} />
                <h3>No products found</h3>
                <p>Try searching with different keywords or check out our popular categories</p>
                <div className="popular-categories">
                  <Link to="/products/women" className="category-link">Women</Link>
                  <Link to="/products/men" className="category-link">Men</Link>
                  <Link to="/products" className="category-link">All Products</Link>
                  <Link to="/sale" className="category-link">Sale</Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="search-empty-state">
            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="search-section">
                <div className="section-header">
                  <h3>
                    <Clock size={20} />
                    Recent Searches
                  </h3>
                  <button className="clear-btn" onClick={clearHistory}>
                    Clear All
                  </button>
                </div>
                <div className="history-list">
                  {searchHistory.map((item, index) => (
                    <div key={index} className="history-item">
                      <button
                        className="history-btn"
                        onClick={() => handleSearch(item)}
                      >
                        <Clock size={16} />
                        {item}
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeHistoryItem(item)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="search-section">
              <h3>
                <TrendingUp size={20} />
                Popular Searches
              </h3>
              <div className="popular-list">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="popular-item"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Products */}
            <div className="search-section">
              <h3>Featured Products</h3>
              <div className="featured-grid">
                {products.filter(p => p.featured).slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
