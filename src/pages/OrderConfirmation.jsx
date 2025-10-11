import { Link } from 'react-router-dom';
import { CheckCircle, Package } from 'lucide-react';
import Logo from '../components/Logo';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-page">
      <div className="container">
        <div className="confirmation-card">
          <CheckCircle size={80} className="success-icon" />
          <h1>Order Placed Successfully!</h1>
          <p className="subtitle">Thank you for your purchase at EESTO</p>
          
          <div className="order-info">
            <Package size={32} />
            <div>
              <h3>Your order is confirmed</h3>
              <p>You'll receive an email confirmation shortly with your order details and tracking information.</p>
            </div>
          </div>

          <div className="action-buttons">
            <Link to="/orders" className="primary-btn">
              View My Orders
            </Link>
            <Link to="/products" className="secondary-btn">
              Continue Shopping
            </Link>
          </div>

          <div className="confirmation-footer">
            <Logo size="large" />
            <p>Questions? Contact us at support@eesto.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
