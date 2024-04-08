import React from 'react'
import './ProductItems.css'

function ProductItems({AddToCart ,RemoveFromCart}) {
    
    const products = [{
        id:0,
        title: "ATOMIC HABITS",
        author: "Jhon James",
        price: "$100"
    },
    {   
        id:1,
        title: "Visualization",
        author: "Goldsmith",
        price: "$40"
    },
    {
        id:2,
        title: "Victory",
        author: "George Fernantas",
        price: "$68"
    },
    {
        id:3,
        title: "THE SECRET",
        author: "Carley",
        price: "$230"
    },
    {
        id:4,
        title: "THE PARK",
        author: "James",
        price: "$50"
    },
    {
        id:5,
        title: "The Heaven in the Hell",
        author: "Roynald rein",
        price: "$210"
        }];
    
  return (
      <div className='ProductItems'>
          <h2>Product List</h2>
          <ul className='row gy-3'>
              {products.map((product) =>(
                  <li className='col-sm-6 col-lg-4' key={product.id}>
                      <div className="card">
                          
                            <div className="card-body p-4">
                                <div className="text-center">
                                <h5 className="fw-bolder">{ product.title }</h5>
                                <h6 className="fw-bolder">{product.author }</h6>
                                    {product.price }
                                </div>
                            </div>
                          <div className="card-footer d-inline-flex p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center row">
                                  <button className='ms-2 col btn btn-success btn-outline-dark mt-auto' onClick={() => AddToCart(product)}>Add to cart</button>
                                  <button className='ms-2 col btn btn-danger btn-outline-dark mt-auto' onClick={() => RemoveFromCart(product)}>Rmove From cart</button>

                                </div>
                            </div>

                           
                          </div>
                  </li>))}
              </ul>
    </div>
  )
}

export default ProductItems