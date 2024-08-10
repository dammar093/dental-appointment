import React from 'react'
import { Link } from 'react-router-dom'

const DoctordCard = ({ doctor }) => {
  return (
    <Link className='mt-[90px] md:mt-0' to={`/doctor/${doctor.id}`}>
      <div className='w-full md:w-[260px] h-[200px] bg-slate-100 shadow hover:shadow-xl p-4 rounded relative flex justify-center'>
        <div className='md:w-[10vw] md:h-[10vw] w-[30vw] h-[30vw] rounded-full overflow-hidden absolute -top-16'>
          <img className='w-full h-full rounded-full object-cover' src={doctor.avatar} alt={doctor.fullName} />
        </div>
        <div className='w-full mt-16'>
          <div className='text-center text-[#00BDD9] font-bold tracking-widest text-lg'>
            {doctor.fullName}
          </div>
          <div className='uppercase text-gray-500 font-semibold text-center'>
            {doctor.degree}
          </div>
          <div className='capitalize text-gray-500 font-medium text-center'>
            {doctor.specialist}
          </div>
        </div>
      </div>
    </Link >
  )
}

export default DoctordCard