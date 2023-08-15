import React, { useState, useEffect } from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [toggleIcon, setToggleIcon] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setToggleIcon(!toggleIcon);
    const closeMobileMenu = () => setToggleIcon(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton()

    }, [])
    window.addEventListener("resize", showButton);

    return (
        <>
             <nav className='navbar' >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ZoroTV
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={toggleIcon ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={toggleIcon ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trending
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Plans
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button outline  >SIGN UP</Button>}
        </div>
      </nav>
    </>
        
    )
}

export default Navbar
