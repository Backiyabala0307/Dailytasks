import React from 'react'
import './ProductItems.css'

function ProductItems(props) {
  return (
    <div className='ProductItems'>
          <div class="col">
              <div class="card bg-info-subtle">
                  <div class="card-body p-4">
                      <div class="text-center">
                          <h5 class="fw-bolder">{ props.title }</h5>
                          <p class="fw-bolder">{ props.author }</p>
                          <div class="d-flex justify-content-center small text-warning mb-2">
                              <div class="bi-star-fill">⭐</div>
                              <div class="bi-star-fill">⭐</div>
                              <div class="bi-star-fill">⭐</div>
                              <div class="bi-star-fill">⭐</div>
                              <div class="bi-star-fill">⭐</div>
                          </div>
                          <span class="text">{props.price}</span>
                      </div>
                 </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center row ">
                          <a class="ms-2 col btn btn-outline-dark mt-auto" onClick={()=>props.onAddToCart()}>Add to cart</a>
                          <a class="ms-2 col btn btn-outline-dark mt-auto" onClick={() => props.onRemoveFromCart()}>Remove From cart</a>
                      </div>
                  </div>
              </div>
           </div>  
    </div>
  )
}

export default ProductItems