import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { isAuthenticated, addOrder } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'ZIP code is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
    if (!formData.expiry) newErrors.expiry = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    // Create order
    const order = {
      items: cart,
      total: getCartTotal() + (getCartTotal() > 100 ? 0 : 10) + getCartTotal() * 0.1,
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: formData.country
      }
    };

    addOrder(order);
    clearCart();
    navigate('/order-confirmation');
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>

        <div className="checkout-layout">
          <form onSubmit={handleSubmit} className="checkout-form">
            <section className="form-section">
              <h2>Contact Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main St, Apt 4B"
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <span className="error">{errors.city}</span>}
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && <span className="error">{errors.state}</span>}
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                  {errors.zip && <span className="error">{errors.zip}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="United States"
                />
                {errors.country && <span className="error">{errors.country}</span>}
              </div>
            </section>

            <section className="form-section">
              <h2>
                <CreditCard size={24} />
                Payment Information
              </h2>
              
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </div>

              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.cardName && <span className="error">{errors.cardName}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                  {errors.expiry && <span className="error">{errors.expiry}</span>}
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="4"
                  />
                  {errors.cvv && <span className="error">{errors.cvv}</span>}
                </div>
              </div>

              <div className="secure-note">
                <Lock size={16} />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </section>

            <button type="submit" className="place-order-btn">
              Place Order - ${total.toFixed(2)}
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="summary-item">
                  <img src={item.images[0]} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Size: {item.size} | Color: {item.color}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
