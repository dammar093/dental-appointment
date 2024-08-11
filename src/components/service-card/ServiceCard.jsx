import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className='md:w-[28vw] w-full'>
      <div className='w-full overflow-hidden'>
        <img className='w-full h-full object-contain scale-125 cursor-pointer hover:scale-100 transition-all delay-75' src={service.image} alt="" />
      </div>
      <div className='w-full mt-4'>
        <h2 className='text-gray-600 text-lg font-semibold'>{service.title}</h2>
        <p className='text-justify text-gray-500'>{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard