import React from 'react'
import Hero from '../../components/hero/Hero'
import Service from '../../components/service/Service'
import Doctors from '../../components/doctors/Doctors'
const Home = () => {
  return (
    <main className='relative'>
      <div className='w-full'>
        <Hero />
      </div>
      <div className='mt-20'>
        <Service />
      </div>
      <div className='my-10'>
        <Doctors />
      </div>

    </main>
  )
}

export default Home