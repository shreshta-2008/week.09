import { useState } from 'react';
import ProductCard from './components/ProductCard';
import CartSummary from './components/CartSummary';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: "The Elder Wand", price: 100 },
    { id: 2, name: "Nimbus 2000", price: 50 },
    { id: 3, name: "Invisibility Cloak", price: 150 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="shop-container">
      <h1>Witchcraft & Wizardry Supplies</h1>
      <div className="product-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
      <CartSummary cart={cart} />
    </div>
  );
}

export default App;