import React from 'react'
import Card from './Card'
import './App.css'
function App() {
  let first;
  let list = [first,'50GB Storage', 'Unlimited Public Projects',
    'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support',
    'Free Subdomain', 'Monthly Status Reports'];
  let heading;
  let months;
  let features;
  return (
    
    <div className="row">
      <Card list={list} heading={"FREE"} months={"0"} features={"4"} first={"Single User"} />
      <Card list={list} heading={"PLUS"} months={"9"} features={"7"} first={"5 Users"} />
      <Card list={list} heading={"PRO"} months={"49"} features={"8"} first={"Unlimited Users"} />
      </div>
  
  )
}

export default App