import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { user } from '../../components/navabar/Navbar'
import { FaRegSave } from 'react-icons/fa'
import { MdOutlineCancel, MdOutlineModeEditOutline } from 'react-icons/md'

const UserProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const [edit, setEdit] = useState(true)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (user) {
      setFullName(user?.fullName || '');
      setEmail(user?.email || '');
      setValue('fullName', user?.fullName || '');
      setValue('email', user?.email || '');
    }
  }, [user, setValue]);
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className='w-full md:w-1/2 mx-auto'>
      <div className='w-[100px] h-[100px] rounded-full border-[#00BCD5] border-2 overflow-hidden mx-auto mt-10'>
        <img className='w-full h-full object-cover' src={user.avatar} alt="" />
      </div>
      <div className='w-full md:w-[500px] px-2 py-4 mx-auto bg-white rounded'>
        <div className='w-full flex justify-end'>
          {
            edit ? (<button
              className="flex items-center gap-1 justify-center px-4 py-1 bg-[#9938de] rounded text-white hover:bg-[#642592] transition-all delay-75"
              onClick={() => setEdit(prev => !prev)}
            >
              <span><MdOutlineModeEditOutline /></span>
              <span>Edit</span>
            </button>) : (<button
              className="flex items-center gap-1 justify-center px-4 py-1 bg-[#e04747] rounded text-white hover:bg-[red] transition-all delay-75"
              onClick={() => {
                setEdit(prev => !prev)
              }
              }
            >
              <span>< MdOutlineCancel /></span> <span>cancel</span></button>)
          }
        </div>
        <form className="w-full" >
          <input type="hidden" value={user?._id}
            {...register('id')}
          />
          <div className='mt-4'>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                type="text"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"

                readOnly={edit}
                onChange={handleInputChange(setFullName)}
                {...register('fullName', {
                  required: 'Fullname is required!',
                })}
              />
            </div>
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>

          <div className='mt-4'>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <input
                type="email"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"

                onChange={handleInputChange(setEmail)}
                readOnly={edit}
                {...register('email', {
                  required: 'Email is required!',
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: 'Email not valid',
                  },
                })}
              />
            </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          {!edit && <div className='mt-4 w-full flex justify-end'>
            <button
              className="px-4 py-1 rounded  bg-[#AE56EF] hover:bg-[#8d48be] text-white font-semibold capitalize flex justify-center items-center"
              type="submit"
            >
              {<div className='w-full flex justify-center items-center gap-1 text-white'><span><FaRegSave /></span>
                <span>save</span></div>}
            </button>
          </div>}
        </form>
      </div>
    </div>
  )
}

export default UserProfile