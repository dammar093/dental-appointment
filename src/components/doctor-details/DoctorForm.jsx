
import React from 'react'
import { useForm } from 'react-hook-form'
import { user } from '../navabar/Navbar'
const DoctorForm = () => {

  const { handleSubmit, register, formState: { errors } } = useForm()
  return (
    <div className='w-full md:w-1/2 px-2 py-4'>
      <div className='w-full'>
        <h2 className='text-lg font-semibold text-gray-500'>Fill Your details please</h2>
        <form method='post' onSubmit={handleSubmit((data) => {
          console.log(data);

        })}>
          <input type="text" hidden name='d_id' value={user.id} />
          <div className=' mt-4'>
            <label htmlFor="degree" className='text-gray-600 capitalize font-semibold'> Degree <span className='text-red-500'>*</span></label>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                id='degree'
                type="email"
                className="w-full h-full bg-transparent text-gray-700 rounded outline-none px-2"
                placeholder="Enter your Degree"
                {...register('degree', {
                  required: 'Degree is required !'
                })}
              />
            </div>
            {
              errors.degree && (
                <p className="text-red-500">{errors.degree.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <label htmlFor="speciality" className='text-gray-600 capitalize font-semibold'> speciality <span className='text-red-500'>*</span></label>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                id='speciality'
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your Speciality"
                {...register('speciality', {
                  required: 'Speciality is required !'
                })}
              />
            </div>
            {
              errors.speciality && (
                <p className="text-red-500">{errors.speciality.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <label htmlFor="working days" className='text-gray-600 capitalize font-semibold'> working days <span className='text-red-500'>*</span></label>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                id='working days'
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your working days"
                {...register('workingDays', {
                  required: 'Workind Days are required !'
                })}
              />
            </div>
            {
              errors.workingDays && (
                <p className="text-red-500">{errors.workingDays.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <label htmlFor="training" className='text-gray-600 capitalize font-semibold'> training <span className='text-red-500'>*</span></label>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                id='training'
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your tarining"
                {...register('training', {
                  required: 'Training is required !'
                })}
              />
            </div>
            {
              errors.training && (
                <p className="text-red-500">{errors.training.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <label htmlFor="about" className='text-gray-600 capitalize font-semibold'> About You <span className='text-red-500'>*</span></label>
            <textarea
              className="w-full h-full bg-slate-200  text-gray-600 rounded outline-none px-2 resize-none"
              {...register("about", {
                required: "About is required!"
              })}
              id="about" cols="30" rows="5"></textarea>


            {
              errors.about && (
                <p className="text-red-500">{errors.about.message}</p>
              )
            }
          </div>
          <div className='w-full h-10 rounded-md bg-[#0ABED6] text-gray-600 mt-4'>
            <input
              className='w-full h-full text-center font-semibold cursor-pointer text-[#f3f3f3] hover:bg-[#3c9ba7]'
              type="submit"
              value={"Save"}
            />
          </div>

        </form>
      </div>
    </div>
  )
}

export default DoctorForm