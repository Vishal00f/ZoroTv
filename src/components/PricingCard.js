import React from 'react'
import "./Plans.css"
function PricingCard() {
  return (
    <>
    <div className='pricing-card'>
      <div className='container'>
      <div className='name-section'>
        Basic
      </div>
      <p className='price'>Free</p>
      <p className='price'>5 Manga/day</p>
      <p className='price'>Stream Unlimited with Ads</p>
        <button className='plan-btn'>Sign up</button>
        </div>
    </div>
    <div className='pricing-card'>
      <div className='container'>
      <div className='name-section'>
        Standard
      </div>
      <p className='price'>5$/mo</p>
      <p className='price'>Unlimited Manga</p>
      <p className='price'>Stream Unlimited </p>
        <button className='plan-btn'>Sign up</button>
        </div>
    </div>
    <div className='pricing-card'>
      <div className='container'>
      <div className='name-section'>
        Premium
      </div>
      <p className='price'>12$/mo</p>
      <p className='price'>Unlimited Manga</p>
      <p className='price'>Stream Unlimited in 4k</p>
        <button className='plan-btn'>Sign up</button>
        </div>
    </div>
    </>
  )
}

export default PricingCard
