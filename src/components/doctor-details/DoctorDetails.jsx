
import React from 'react'
import { useForm } from 'react-hook-form'

const DoctorDetails = ({ doctorDetails }) => {

  const { handleSubmit, register, formState: { errors } } = useForm()
  return (
    <div className='w-full md:w-1/2 px-2 py-4'>
      <div className='w-full'>
        <h2 className='text-lg font-semibold text-gray-500'>Your Details</h2>
        <form method='post' onSubmit={handleSubmit((data) => {
          console.log(data);

        })}>
          <div className=' mt-4'>
            <label htmlFor="degree" className='text-gray-600 capitalize font-semibold'> Degree <span className='text-red-500'>*</span></label>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                id='degree'
                readOnly={true}
                type="email"
                value={doctorDetails.degree}
                className="w-full h-full bg-transparent text-gray-700 rounded outline-none px-2 uppercase"
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
                value={doctorDetails.speciality}
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2 capitalize"
                placeholder="Enter your Speciality"
                readOnly={true}
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
                readOnly={true}
                value={doctorDetails.workingDays}
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2 capitalize"
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
            <div className='w-full rounded-md bg-slate-300 text-gray-600'>
              <textarea
                id='training'
                value={doctorDetails.training}
                type="text"
                className="w-full resize-none h-full bg-transparent text-gray-600 rounded outline-none px-2 first-letter:uppercase"
                readOnly={true}
                placeholder="Enter your tarining"
                {...register('training', {
                  required: 'Training is required !'
                })}
                rows={4}
                cols={30}
              >
              </textarea>
            </div>
            {
              errors.training && (
                <p className="text-red-500">{errors.training.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <label htmlFor="about" className='text-gray-600 capitalize font-semibold'> About Me <span className='text-red-500'>*</span></label>
            <div className='w-full rounded-md bg-slate-300 text-gray-600'>
              <textarea
                className="w-full h-full bg-transparent  text-gray-600 rounded outline-none px-2 resize-none first-letter:uppercase"
                {...register("about", {
                  required: "About is required!"
                })}
                readOnly={true}
                id="about" cols="30" rows="5"
                value={doctorDetails.about}

              ></textarea>
            </div>

            {
              errors.about && (
                <p className="text-red-500">{errors.about.message}</p>
              )
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default DoctorDetails