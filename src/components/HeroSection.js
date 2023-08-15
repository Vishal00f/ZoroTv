import React, { useEffect, useRef} from 'react'

import "./HeroSection.css"
import '../App.css'
import Button from './Button'

function HeroSection() {
    const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75]
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });
    


    return (
        <div className='hero-container'>
            <video  className='demon-slayer video' ref={videoRef} src="videos/DemonSlayer.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>Watch Your Favourite Anime</p>
            <div className="hero-btns">
                <Button className="btns" outline large>
                    GET STARTED
                </Button>
                <Button className="btns" outline large >
                    SEE PLANS
                    {/* <i className='far fa-play-circle' /> */}
                </Button>
            </div>




        </div>
    )
}

export default HeroSection
