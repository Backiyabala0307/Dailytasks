import React from 'react'
import './Card.css'

function Card() {
  let list = ['Single User', '50GB Storage', 'Unlimited Public Projects',
    'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support',
    'Free Subdomain', 'Monthly Status Reports'];
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button id="button">BUTTON</button>
    </div>
  )
}

export default Card