import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import MangaSection from '../components/MangaSection'
import Plans from '../components/Plans'
import About from './About'
function Home() {
  return (
    <div >
      <HeroSection/>
      <div >
        <MangaSection />
        <Plans/>
        <About/>
        </div>
    </div>
  )
}

export default Home
