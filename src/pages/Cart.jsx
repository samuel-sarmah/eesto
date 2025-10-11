import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <ShoppingBag size={80} />
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <Link to="/products" className="cta-button">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
                <Link to={`/product/${item.id}`} className="item-image">
                  <img src={item.images[0]} alt={item.name} />
                </Link>

                <div className="item-details">
                  <Link to={`/product/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-meta">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>{getCartTotal() > 100 ? 'FREE' : '$10.00'}</span>
            </div>

            <div className="summary-row">
              <span>Tax (estimated)</span>
              <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>
                ${(getCartTotal() + (getCartTotal() > 100 ? 0 : 10) + getCartTotal() * 0.1).toFixed(2)}
              </span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>

            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>

            <div className="cart-features">
              <p>✓ Free shipping on orders over $100</p>
              <p>✓ 30-day easy returns</p>
              <p>✓ Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
