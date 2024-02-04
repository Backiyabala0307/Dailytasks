import React from 'react'
import Listitem from './Listitem'
import "./Card.css"

function Card({list, heading, months, features}) {
  
  return (
    <div className="col">
      <h6>{heading}</h6>
      <h1>${months}/month</h1>
      <hr></hr>
      <ul>
        
        {list.map((item, index) => 
          <Listitem item={item} index={index} features={features} />
        
        )}
      </ul>
      <button className="disabled rounded-pill mx-auto col-12 btn btn-primary">BUTTON</button>
    </div>
  )
}

export default Card