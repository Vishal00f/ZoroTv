import React,{useState} from 'react'

import './Cards.css'
import './GoodButton.css'

function Cards({src,imgsrc,name,currentHover}) {
  const [showVideo,setShowVideo]=useState(false);
  
  const handleClick=()=>{
    setShowVideo(!showVideo);
  }
  
  const onHover=(event)=>{
      currentHover(event);
  }
    
    let content=<img className='content' src={imgsrc}  alt="onepiece anime"/>

    let btn=<button onClick={handleClick} className="glow-on-hover watch" type="button">{name}  </button>;
    if(showVideo){
          content= <video className='vid' src={src}  autoPlay loop muted/>
    }
    else{
     content= <img className='content' src={imgsrc} alt="onepiece anime"/>
      
    }


  return (


   <div onMouseOverCapture={()=>onHover(name)}  className='card glow-card-hover watch' >
  
    {content}
      {btn}
      <p className='read text-xl'>read more..</p>
    </div>
   
  );
}

export default Cards
