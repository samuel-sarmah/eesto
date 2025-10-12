import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Calendar, Package, Heart, MapPin, Edit2, Save, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Profile.css';

function Profile() {
  const { user, isAuthenticated } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Load user profile data from localStorage
    const savedProfile = localStorage.getItem(`profile-${user.email}`);
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    } else {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: '',
        address: '',
        city: '',
        country: ''
      });
    }
  }, [isAuthenticated, navigate, user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem(`profile-${user.email}`, JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    const savedProfile = localStorage.getItem(`profile-${user.email}`);
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }
    setIsEditing(false);
  };

  // Get user orders
  const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
  const currentUser = allUsers.find(u => u.email === user.email);
  const userOrders = currentUser?.orders || [];
  const recentOrders = userOrders.slice(0, 3);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your account information and preferences</p>
        </div>

        <div className="profile-layout">
          {/* Sidebar with Stats */}
          <aside className="profile-sidebar">
            <div className="profile-avatar">
              <div className="avatar-circle">
                <User size={48} />
              </div>
              <h2>{formData.name || 'User'}</h2>
              <p className="user-email">{formData.email}</p>
            </div>

            <div className="profile-stats">
              <div className="stat-item">
                <Package size={24} />
                <div>
                  <h3>{userOrders.length}</h3>
                  <p>Total Orders</p>
                </div>
              </div>
              <div className="stat-item">
                <Heart size={24} />
                <div>
                  <h3>{wishlist.length}</h3>
                  <p>Wishlist Items</p>
                </div>
              </div>
              <div className="stat-item">
                <User size={24} />
                <div>
                  <h3>Member</h3>
                  <p>Since 2025</p>
                </div>
              </div>
            </div>

            <nav className="profile-nav">
              <Link to="/profile" className="active">
                <User size={20} />
                Profile Details
              </Link>
              <Link to="/orders">
                <Package size={20} />
                My Orders
              </Link>
              <Link to="/wishlist">
                <Heart size={20} />
                Wishlist
              </Link>
              <Link to="/cart">
                <Package size={20} />
                Shopping Cart ({cart.length})
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="profile-content">
            {/* Personal Information */}
            <section className="profile-section">
              <div className="section-header">
                <h2>Personal Information</h2>
                {!isEditing ? (
                  <button className="edit-btn" onClick={() => setIsEditing(true)}>
                    <Edit2 size={18} />
                    Edit
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button className="save-btn" onClick={handleSave}>
                      <Save size={18} />
                      Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      <X size={18} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <label>
                    <User size={18} />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  ) : (
                    <p>{formData.name || 'Not provided'}</p>
                  )}
                </div>

                <div className="info-item">
                  <label>
                    <Mail size={18} />
                    Email Address
                  </label>
                  <p>{formData.email}</p>
                  <span className="info-note">Email cannot be changed</span>
                </div>

                <div className="info-item">
                  <label>
                    <Calendar size={18} />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <p>{formData.phone || 'Not provided'}</p>
                  )}
                </div>

                <div className="info-item full-width">
                  <label>
                    <MapPin size={18} />
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address"
                    />
                  ) : (
                    <p>{formData.address || 'Not provided'}</p>
                  )}
                </div>

                <div className="info-item">
                  <label>City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  ) : (
                    <p>{formData.city || 'Not provided'}</p>
                  )}
                </div>

                <div className="info-item">
                  <label>Country</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                    />
                  ) : (
                    <p>{formData.country || 'Not provided'}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Recent Orders */}
            <section className="profile-section">
              <div className="section-header">
                <h2>Recent Orders</h2>
                <Link to="/orders" className="view-all-link">View All</Link>
              </div>

              {recentOrders.length === 0 ? (
                <div className="empty-state">
                  <Package size={48} />
                  <p>No orders yet</p>
                  <Link to="/products" className="cta-button">Start Shopping</Link>
                </div>
              ) : (
                <div className="orders-preview">
                  {recentOrders.map(order => (
                    <div key={order.id} className="order-card">
                      <div className="order-header">
                        <span className="order-id">Order #{order.id.slice(0, 8)}</span>
                        <span className={`order-status ${order.status}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="order-body">
                        <p className="order-date">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="order-items">{order.items.length} items</p>
                        <p className="order-total">${order.total.toFixed(2)}</p>
                      </div>
                      <Link to="/orders" className="order-details-link">
                        View Details →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Account Settings */}
            <section className="profile-section">
              <div className="section-header">
                <h2>Account Settings</h2>
              </div>

              <div className="settings-list">
                <div className="setting-item">
                  <div>
                    <h3>Email Notifications</h3>
                    <p>Receive updates about your orders and promotions</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div>
                    <h3>SMS Notifications</h3>
                    <p>Get text messages about order status</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div>
                    <h3>Marketing Communications</h3>
                    <p>Receive promotional offers and new arrivals</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;
