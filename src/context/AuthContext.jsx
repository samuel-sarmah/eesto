import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('eesto-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('eesto-orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('eesto-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('eesto-user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('eesto-orders', JSON.stringify(orders));
  }, [orders]);

  const login = (email, password) => {
    // Mock login - in real app, this would call an API
    const mockUser = {
      id: 1,
      email,
      name: email.split('@')[0],
      isAdmin: email === 'admin@eesto.com'
    };
    setUser(mockUser);
    return mockUser;
  };

  const signup = (name, email, password) => {
    // Mock signup - in real app, this would call an API
    const mockUser = {
      id: Date.now(),
      email,
      name,
      isAdmin: false
    };
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now(),
      userId: user?.id,
      date: new Date().toISOString(),
      status: 'pending'
    };
    setOrders(prevOrders => [...prevOrders, newOrder]);
    return newOrder;
  };

  const getUserOrders = () => {
    return orders.filter(order => order.userId === user?.id);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        orders,
        addOrder,
        getUserOrders,
        updateOrderStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
