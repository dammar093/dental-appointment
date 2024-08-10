import React from 'react'
import logo from "../../assets/logo.webp"
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <Link>
      <div className='w-[20vw] md:w-[10vw] md:h-[10vh]'>
        <img className='w-full h-full object-contain' src={logo} alt="logo" />
      </div>
    </Link>
  )
}

export default Logo