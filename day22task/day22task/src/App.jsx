import React from 'react'
import Card from './Card'
import './App.css'
function App() {
  return (
    <div>
      <main className="container row">
            <div className="cardContainer col">
              <h6>FREE</h6>
              <h1>$0/month</h1>
              <hr></hr>
              <Card />
            </div>
            <div className="cardContainer col">
              <h6>PLUS</h6>
              <h1>$9/month</h1>
              <hr></hr>
              <Card />
            </div>
            <div className="cardContainer col">
              <h6>PRO</h6>
              <h1>$49/month</h1>
              <hr></hr>
              <Card />
            </div>
      </main>
    </div>
  )
}

export default App