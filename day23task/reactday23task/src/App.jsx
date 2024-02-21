import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'

function App() {
  const [count, setCount] = useState(0);
  
  const handleAddToCart = () => {
    setCount(count => count + 1);
}
  const handleRemoveFromCart = () => {
    setCount(count => count - 1);

  }

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <button class="btn btn-outline-dark" type="submit">
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
      </button>
  
      <ProductList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
      {/* <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> */}
      
    </div>
  )
}

export default App