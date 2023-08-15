import React from 'react'
import "./About.css"
function About() {

  return (
    <div className='About-section' >
        <div className='container'>
  <h1><span></span><span>ZoroTV</span></h1>
<h2>Get your Favourite Manga </h2>
<input className='searchbar' placeholder='Search Anime'/><i class="fa-solid fa-magnifying-glass" ></i>

</div>
    <div className='container icons'>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-telegram" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
    </div>
    <div className='footer'>
    <i class="fa-regular fa-copyright"></i>
    <p>ZoroTV 2023 All rights reserved</p>
    </div>
    </div>
  )
}

export default About
