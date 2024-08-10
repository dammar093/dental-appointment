import React from 'react'
import { data } from '../../components/doctors/Doctors'
import { useParams } from 'react-router-dom'

const Doctor = () => {
  const { id } = useParams()
  const doctor = data.find(doctor => doctor.id == id)
  return (
    <section className='w-full py-4 md:px-20 px-2 min-h-screen my-4'>
      <div className='w-full flex justify-between flex-wrap gap-2'>
        <div className='md:w-1/2 w-full h-[650px] rounded overflow-hidden'>
          <img className='w-full h-full object-cover' src={doctor.avatar} alt={doctor.fullName} />
        </div>
        <div className='md:w-[47%] w-full'>
          <div>
            <h2 className='text-left text-3xl md:text-5xl font-semibold text-[#013A65] capitalize'>{doctor.fullName}</h2>
          </div>
          <div className='mt-4'>
            <p className='text-lg text-gray-500 font-medium text-justify first-letter:uppercase'>{doctor.about}</p>
          </div>
          <div className='mt-4 text-gray-600 text-xl font-medium py-4 capitalize'>
            <span className='font-bold'>Speciality: </span> {doctor.specialist}
          </div>
          <hr />
          <div className='mt-4 text-gray-600 text-xl font-medium py-4 capitalize'>
            <span className='font-bold'>Degree: </span> {doctor.degree}
          </div>
          <hr />
          <div className='mt-4 text-gray-600 text-xl font-medium py-4 capitalize'>
            <span className='font-bold'>Training: </span> {doctor.training}
          </div>
          <hr />
          <div className='mt-4 text-gray-600 text-xl font-medium py-4 capitalize'>
            <span className='font-bold'>Working Days: </span> {doctor.workingDays}
          </div>
          <hr />
          <div className='mt-4 text-gray-600 text-xl font-medium py-4 capitalize'>
            <span className='font-bold'>Total Patients checked: </span> {doctor.workDone}
          </div>
          <hr />
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-3xl font-bold text-center text-[#00BCD5]'>Appoint Now</h2>
        <div>
          <form method='post'>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Doctor