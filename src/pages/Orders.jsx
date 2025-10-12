import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Package, Search, Filter, ChevronDown, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Orders.css';

function Orders() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Load user orders
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = allUsers.find(u => u.email === user.email);
    const userOrders = currentUser?.orders || [];
    setOrders(userOrders);
    setFilteredOrders(userOrders);
  }, [isAuthenticated, navigate, user]);

  useEffect(() => {
    let result = [...orders];

    // Search filter
    if (searchTerm) {
      result = result.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Status filter
    if (filterStatus !== 'all') {
      result = result.filter(order => order.status === filterStatus);
    }

    // Sorting
    switch (sortBy) {
      case 'date-desc':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'date-asc':
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'amount-desc':
        result.sort((a, b) => b.total - a.total);
        break;
      case 'amount-asc':
        result.sort((a, b) => a.total - b.total);
        break;
      default:
        break;
    }

    setFilteredOrders(result);
  }, [orders, searchTerm, filterStatus, sortBy]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock size={18} />;
      case 'processing':
        return <Package size={18} />;
      case 'shipped':
        return <Truck size={18} />;
      case 'delivered':
        return <CheckCircle size={18} />;
      case 'cancelled':
        return <XCircle size={18} />;
      default:
        return <Package size={18} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#ffc107';
      case 'processing':
        return '#0d6efd';
      case 'shipped':
        return '#17a2b8';
      case 'delivered':
        return '#28a745';
      case 'cancelled':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="orders-page">
      <div className="container">
        <div className="orders-header">
          <div>
            <h1>My Orders</h1>
            <p>Track and manage your order history</p>
          </div>
          <Link to="/products" className="cta-button">
            Continue Shopping
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="orders-controls">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <div className="filter-item">
              <Filter size={18} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="filter-item">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="amount-desc">Highest Amount</option>
                <option value="amount-asc">Lowest Amount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="empty-orders">
            <Package size={80} />
            <h2>{orders.length === 0 ? 'No orders yet' : 'No orders found'}</h2>
            <p>
              {orders.length === 0
                ? 'Start shopping to see your orders here'
                : 'Try adjusting your search or filters'}
            </p>
            <Link to="/products" className="cta-button">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            <div className="orders-summary">
              <p>
                Showing {filteredOrders.length} of {orders.length} orders
              </p>
            </div>

            {filteredOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div
                  className="order-header"
                  onClick={() => toggleOrderExpansion(order.id)}
                >
                  <div className="order-info">
                    <div className="order-id-section">
                      <h3>Order #{order.id.slice(0, 12)}</h3>
                      <span className="order-date">
                        {new Date(order.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div
                      className={`order-status ${order.status}`}
                      style={{ borderColor: getStatusColor(order.status) }}
                    >
                      {getStatusIcon(order.status)}
                      <span>{order.status}</span>
                    </div>
                  </div>

                  <div className="order-summary-info">
                    <div className="order-stat">
                      <span className="stat-label">Items</span>
                      <span className="stat-value">{order.items.length}</span>
                    </div>
                    <div className="order-stat">
                      <span className="stat-label">Total</span>
                      <span className="stat-value">${order.total.toFixed(2)}</span>
                    </div>
                    <ChevronDown
                      className={`expand-icon ${expandedOrder === order.id ? 'expanded' : ''}`}
                    />
                  </div>
                </div>

                {expandedOrder === order.id && (
                  <div className="order-details">
                    <div className="order-timeline">
                      <div className={`timeline-step ${['pending', 'processing', 'shipped', 'delivered'].includes(order.status) ? 'completed' : ''}`}>
                        <div className="step-icon">
                          <Clock size={16} />
                        </div>
                        <div className="step-content">
                          <h4>Order Placed</h4>
                          <p>{new Date(order.date).toLocaleString()}</p>
                        </div>
                      </div>

                      <div className={`timeline-step ${['processing', 'shipped', 'delivered'].includes(order.status) ? 'completed' : ''}`}>
                        <div className="step-icon">
                          <Package size={16} />
                        </div>
                        <div className="step-content">
                          <h4>Processing</h4>
                          <p>Order is being prepared</p>
                        </div>
                      </div>

                      <div className={`timeline-step ${['shipped', 'delivered'].includes(order.status) ? 'completed' : ''}`}>
                        <div className="step-icon">
                          <Truck size={16} />
                        </div>
                        <div className="step-content">
                          <h4>Shipped</h4>
                          <p>On the way to you</p>
                        </div>
                      </div>

                      <div className={`timeline-step ${order.status === 'delivered' ? 'completed' : ''}`}>
                        <div className="step-icon">
                          <CheckCircle size={16} />
                        </div>
                        <div className="step-content">
                          <h4>Delivered</h4>
                          <p>Order completed</p>
                        </div>
                      </div>
                    </div>

                    <div className="order-items">
                      <h4>Order Items</h4>
                      {order.items.map((item, index) => (
                        <div key={index} className="order-item">
                          <img src={item.images?.[0] || item.image} alt={item.name} />
                          <div className="item-info">
                            <h5>{item.name}</h5>
                            <p>Size: {item.size} | Color: {item.color}</p>
                            <p>Quantity: {item.quantity}</p>
                          </div>
                          <div className="item-price">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="order-shipping">
                      <h4>Shipping Address</h4>
                      <div className="shipping-info">
                        <p><strong>{order.shippingInfo?.fullName || 'N/A'}</strong></p>
                        <p>{order.shippingInfo?.address || 'N/A'}</p>
                        <p>
                          {order.shippingInfo?.city || 'N/A'}, {order.shippingInfo?.state || 'N/A'}{' '}
                          {order.shippingInfo?.zipCode || 'N/A'}
                        </p>
                        <p>{order.shippingInfo?.country || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="order-total-section">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>${order.subtotal?.toFixed(2) || (order.total - 10).toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Shipping:</span>
                        <span>${order.shipping?.toFixed(2) || '10.00'}</span>
                      </div>
                      <div className="total-row total">
                        <span>Total:</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
