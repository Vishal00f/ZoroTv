import React from 'react'
import "./Plans.css"

import PricingCard from './PricingCard'

function Plans() {
  const data=[
    {
      name:"Standard",
      Price:"Monthly Price 5$"
    },
    {
      name:"Premium",
      Price:"Monthly Price 5$",
    },
    {
      name:"Platinum",
      Price:"Monthly Price 5$",
    }
  ]
  return (
    <>
    <div className='plan-section'>
      <p className='Plan-title'>Choose the plan which is best for you!</p>
      <p className='plan-heading'>A simple and affordable plan to meet all your needs</p>
      <div className='plans'>
        <PricingCard data={data}/>
        {/* <PricingCard data={data}/>
        <PricingCard data={data}/> */}
        </div>
    </div>
    </>
  )
}

export default Plans
