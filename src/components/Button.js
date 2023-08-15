import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function Button({
    children,
    primary,
    secondary,
    rounded,
    outline,
    large,
    ...rest
}) {
    const classes=classNames("medium",{
        "primary":primary && !outline,
        "secondary":secondary && !outline,
        "outline":outline,
        "rounded":rounded,
        "large":large,
        ...rest
    })


  return (
    <Link to="/" className='btn-mobile'>
        <button {...rest} className={classes}>
            {children}
        </button>
    </Link>
  )
}

export default Button
