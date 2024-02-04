import React from 'react'
import "./Listitem.css"

function Listitem({ item, index, features }) {

  if (index < features) {
   
    return <li key={index}>
      {'✔ ' + item}
    </li>
  }
  return (

    <div className='tobedisable'>
      <li key={index}>{'✘ ' + item}</li> 
    </div>

    )
  }

export default Listitem