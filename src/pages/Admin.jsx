import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Package, Users, ShoppingCart, DollarSign, TrendingUp, Edit, Trash2, Plus, X, Search } from 'lucide-react';
import { products as initialProducts } from '../data/products';
import './Admin.css';

function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState(initialProducts);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalCustomers: 0
  });

  // Redirect if not admin
  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  // Load data from localStorage
  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const allOrders = allUsers.flatMap(u => u.orders || []);
    
    setOrders(allOrders);
    setCustomers(allUsers);

    // Calculate stats
    const totalRevenue = allOrders.reduce((sum, order) => sum + order.total, 0);
    setStats({
      totalRevenue,
      totalOrders: allOrders.length,
      totalProducts: products.length,
      totalCustomers: allUsers.length
    });
  }, [products.length]);

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      allUsers.forEach(user => {
        if (user.orders) {
          user.orders = user.orders.filter(order => order.id !== orderId);
        }
      });
      localStorage.setItem('users', JSON.stringify(allUsers));
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    allUsers.forEach(user => {
      if (user.orders) {
        const order = user.orders.find(o => o.id === orderId);
        if (order) {
          order.status = newStatus;
        }
      }
    });
    localStorage.setItem('users', JSON.stringify(allUsers));
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the products data source
    alert('Product management is a demo feature. In production, this would update the backend.');
    setShowProductModal(false);
    setEditingProduct(null);
  };

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer =>
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user || !user.isAdmin) {
    return null;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, {user.email}</p>
      </div>

      <div className="admin-tabs">
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={activeTab === 'orders' ? 'active' : ''}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
        <button
          className={activeTab === 'products' ? 'active' : ''}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={activeTab === 'customers' ? 'active' : ''}
          onClick={() => setActiveTab('customers')}
        >
          Customers
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon revenue">
                <DollarSign />
              </div>
              <div className="stat-details">
                <h3>${stats.totalRevenue.toFixed(2)}</h3>
                <p>Total Revenue</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orders">
                <ShoppingCart />
              </div>
              <div className="stat-details">
                <h3>{stats.totalOrders}</h3>
                <p>Total Orders</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon products">
                <Package />
              </div>
              <div className="stat-details">
                <h3>{stats.totalProducts}</h3>
                <p>Total Products</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon customers">
                <Users />
              </div>
              <div className="stat-details">
                <h3>{stats.totalCustomers}</h3>
                <p>Total Customers</p>
              </div>
            </div>
          </div>

          <div className="dashboard-charts">
            <div className="recent-orders-card">
              <h2>Recent Orders</h2>
              {orders.length === 0 ? (
                <p className="no-data">No orders yet</p>
              ) : (
                <div className="orders-list">
                  {orders.slice(0, 5).map(order => (
                    <div key={order.id} className="order-item">
                      <div className="order-info">
                        <span className="order-id">#{order.id.slice(0, 8)}</span>
                        <span className="order-email">{order.customerEmail}</span>
                      </div>
                      <div className="order-details">
                        <span className={`order-status ${order.status}`}>{order.status}</span>
                        <span className="order-amount">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="top-products-card">
              <h2>Top Products</h2>
              <div className="products-list">
                {products.slice(0, 5).map(product => (
                  <div key={product.id} className="product-item">
                    <img src={product.images[0]} alt={product.name} />
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p>${product.price}</p>
                    </div>
                    <div className="product-rating">
                      <TrendingUp size={16} />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="orders-content">
          <div className="content-header">
            <h2>Order Management</h2>
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredOrders.length === 0 ? (
            <p className="no-data">No orders found</p>
          ) : (
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map(order => (
                    <tr key={order.id}>
                      <td>#{order.id.slice(0, 8)}</td>
                      <td>{order.customerEmail}</td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                      <td>{order.items.length}</td>
                      <td>${order.total.toFixed(2)}</td>
                      <td>
                        <select
                          value={order.status}
                          onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                          className={`status-select ${order.status}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteOrder(order.id)}
                          title="Delete order"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'products' && (
        <div className="products-content">
          <div className="content-header">
            <h2>Product Management</h2>
            <div className="header-actions">
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                className="add-btn"
                onClick={() => {
                  setEditingProduct(null);
                  setShowProductModal(true);
                }}
              >
                <Plus size={20} />
                Add Product
              </button>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card-admin">
                <img src={product.images[0]} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category} - {product.subcategory}</p>
                  <div className="product-price">
                    <span className="price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="product-stats">
                    <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <span className="rating">⭐ {product.rating}</span>
                  </div>
                  <div className="product-actions">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditingProduct(product);
                        setShowProductModal(true);
                      }}
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => alert('Delete product feature is demo only')}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'customers' && (
        <div className="customers-content">
          <div className="content-header">
            <h2>Customer Management</h2>
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredCustomers.length === 0 ? (
            <p className="no-data">No customers found</p>
          ) : (
            <div className="customers-table">
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Orders</th>
                    <th>Total Spent</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map(customer => {
                    const customerOrders = customer.orders || [];
                    const totalSpent = customerOrders.reduce((sum, order) => sum + order.total, 0);
                    
                    return (
                      <tr key={customer.email}>
                        <td>{customer.email}</td>
                        <td>{customer.name || 'N/A'}</td>
                        <td>{customerOrders.length}</td>
                        <td>${totalSpent.toFixed(2)}</td>
                        <td>{new Date(customer.createdAt || Date.now()).toLocaleDateString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setShowProductModal(false)}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleProductSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  defaultValue={editingProduct?.name}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select defaultValue={editingProduct?.category} required>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Subcategory</label>
                  <select defaultValue={editingProduct?.subcategory} required>
                    <option value="tops">Tops</option>
                    <option value="bottoms">Bottoms</option>
                    <option value="dresses">Dresses</option>
                    <option value="outerwear">Outerwear</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={editingProduct?.price}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Original Price</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={editingProduct?.originalPrice}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  defaultValue={editingProduct?.description}
                  rows="3"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    defaultChecked={editingProduct?.inStock ?? true}
                  />
                  In Stock
                </label>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowProductModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="primary">
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
