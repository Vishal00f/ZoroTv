import React, { useEffect, useState } from 'react'
import './Cards.css'
import Cards from './Cards'

function MangaSection() {
    const [term,setTerm]=useState('');
    const currentHover=(name)=>{
      setTerm(name);
    }
    
    useEffect(()=>{
      if(term!==''){
        document.querySelector(".card-section").classList.add(term);
      }
      return ()=>{
        if(term!==''){
          document.querySelector(".card-section").classList.remove(term);
        }
      }
    },[term])

  return (
    <>
    
    <div className='card-section'>
      
        <Cards  src="videos/vinland.mp4" imgsrc="images/luffybg.jpg" name="Vinland-Saga" currentHover={currentHover} />
        <Cards  src="videos/jjk.mp4" imgsrc="images/Naruto.webp" name="Jujutsu-kaisen" currentHover={currentHover}/>
        <Cards  src="videos/Luffy.mp4" imgsrc="images/berserk.jpeg" name="One-piece" currentHover={currentHover}/>
        <Cards  src="videos/Itachi.mp4" imgsrc="images/narutoposter.jpg" name="Naruto-2002" currentHover={currentHover}/>
        
    </div>
    </>
  )
}

export default MangaSection
