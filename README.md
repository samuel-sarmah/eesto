# EESTO - Style Elevated

A modern, minimalistic clothing e-commerce platform built with React and Vite.

![EESTO](https://img.shields.io/badge/EESTO-Style%20Elevated-black)

## Features

### Shopping Experience
- **Product Catalog** - Browse 100+ clothing items across men's, women's, and kids' categories
- **Advanced Filtering** - Filter by category, price range, size, color, and more
- **Search** - Real-time search with history and suggestions
- **Quick View** - Preview products without leaving the page
- **Product Reviews** - Read and write reviews with star ratings

### User Features
- **User Authentication** - Register, login, and manage your profile
- **Shopping Cart** - Add items, adjust quantities, apply promo codes
- **Wishlist** - Save favorite items for later
- **Order History** - Track past orders with detailed timeline
- **Profile Management** - Update personal info, addresses, and preferences

### Admin Dashboard
- **Analytics Overview** - Sales stats, revenue tracking, and trends
- **Product Management** - Add, edit, and manage inventory
- **Order Management** - Process and track customer orders
- **Customer Insights** - View customer data and purchase patterns

### Design
- Clean, white minimalistic aesthetic
- Helvetica Neue typography
- Responsive design for all devices
- Smooth animations and transitions

## Tech Stack

- **React 18** - UI library with hooks
- **React Router v6** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Context API** - State management (Cart, Auth, Wishlist, Toast)
- **Lucide React** - Icon library
- **CSS3** - Custom styling with animations

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/samuel-sarmah/eesto.git

# Navigate to project directory
cd eesto

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

The app will be available at \`http://localhost:5173\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── ProductCard.jsx
│   ├── QuickView.jsx
│   └── ReviewSection.jsx
├── context/          # React Context providers
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── WishlistContext.jsx
│   └── ToastContext.jsx
├── data/             # Mock data
│   └── products.js
├── pages/            # Page components
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Profile.jsx
│   ├── Orders.jsx
│   ├── Search.jsx
│   └── Admin.jsx
└── main.jsx          # App entry point
\`\`\`

## Deployment

This project is configured for Netlify deployment with SPA routing support.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/samuel-sarmah/eesto)

## License

MIT License - feel free to use this project for learning or personal projects.

---

**EESTO** - *Style Elevated*
