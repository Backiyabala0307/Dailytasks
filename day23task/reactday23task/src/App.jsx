import React, { useState } from 'react'
import ProductItems from './ProductItems'
import  './App.css'

function App() {

  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(0);

  const AddToCart = (producttoadd) => {
    if (cartItem.some(product => product.id === producttoadd.id)) {
        return setCartItem(prevItems => [...prevItems]);
    }
    
    else if (!cartItem.includes(producttoadd)) {
      setCartItem(prevItems => [...prevItems,producttoadd]);
      setCount(count => count + 1);
    }
  };

  // console.log(cartItem);
  // console.log(count);
  

  const RemoveFromCart = (producttoremove) => {
    if (cartItem.some(product => product.id === producttoremove.id)) {
      setCartItem(cartItem.filter(item=>item.id !== producttoremove.id));
      setCount(count => count - 1);
    }
  };
  
  return (
    <div className='App'>
      {/* <div className='d-flex'> */}
          <h1>Shopping Cart</h1>
          <button className=" btn btn-info btn-outline-dark" type="submit">
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{count }</span>
          </button>
      {/* </div> */}

       <ProductItems AddToCart={AddToCart} RemoveFromCart={RemoveFromCart}/>
    </div>
  )
  }

export default App