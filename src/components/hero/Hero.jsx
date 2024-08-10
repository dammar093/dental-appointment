import React from 'react'
import banner from "../../assets/banner.jpg"
import Slider from '../slider/Slider'
const Hero = () => {

  return (
    <div className='w-full h-[90vh] relative'>
      <img className='w-full h-full object-cover' src={banner} alt="banner" />
      <section className='absolute bottom-4 md:left-12'>
        <Slider />
      </section>
    </div>
  )
}

export default Hero