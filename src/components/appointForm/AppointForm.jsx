import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { user } from '../navabar/Navbar'
import { MdClose } from 'react-icons/md'
const AppointForm = ({ d_id, setShowAppoint }) => {
  const { handleSubmit, register, formState: { errors } } = useForm()
  return (
    <div className='absolute w-full min-h-full bg-[gray] -top-5 left-0 right-0 bottom-0'>
      <h2 className='text-3xl font-bold text-center text-[#f3f3f3] mt-10'>Appoint Now</h2>
      <div className=' px-2 py-4 mt-[50px] bg-white md:w-[70vw] mx-auto'>
        <div>
          <button className='text-gray-600 text-3xl float-right -mt-2'
            onClick={() => setShowAppoint(false)}
          >
            <MdClose />
          </button>
        </div>
        <form className=' md:w-full w-full p-x2 py-4 md:p-6' method='post'
          onSubmit={handleSubmit((data) => {
            console.log(data);

          })}
        >
          {/* change d_id according to database */}
          <input type="text" hidden value={d_id}
            {...register("d_id")}
          />
          {/* change the u_id according to the database */}
          <input type="text" hidden
            {...register("u_id")}
          />
          <div className=' mt-4'>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Write your problem"
                {...register('problem', {
                  required: 'Problem is required !'
                })}
              />
            </div>
            {
              errors.problem && (
                <p className="text-red-500">{errors.problem.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your Address"
                {...register('address', {
                  required: 'Address is required !'
                })}
              />
            </div>
            {
              errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )
            }
          </div>
          <div className=' mt-4'>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                type="tel"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your mobile number"
                minLength={10}
                maxLength={14}
                {...register('contact', {
                  required: 'Contact is required !',
                  minLength: 10,
                  maxLength: 20
                })}
              />
            </div>
            {
              errors.contact && (
                <p className="text-red-500">{errors.contact.message}</p>
              )
            }
          </div>
          <div className='w-full h-10 rounded-md bg-[#0ABED6] text-gray-600 mt-4'>
            <input
              className='w-full h-full text-center font-semibold cursor-pointer text-[#f3f3f3] hover:bg-[#3c9ba7]'
              type="submit"
              value={"Appoint Now"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AppointForm