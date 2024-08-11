import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useRef, useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { useForm } from 'react-hook-form'

const Register = () => {
  const [file, setFile] = useState(null)
  const [url, setUrl] = useState(null)
  const { handleSubmit, register, setValue, formState: { errors } } = useForm()
  const avatarRef = useRef()

  // function for registering
  async function sendDataToResgister(data) {
    try {
      // const res = await axios.post("url end point is here", data)
      //   const data = await res.data
      // send the data in global state
      setUrl(null)
      setFile(null)
    } catch (error) {
      console.log(error);

    }
  }

  const handleRegister = (data) => {
    console.log(data);
    sendDataToResgister()
  }
  const handeAvatar = (e) => {
    const selectedFile = e.target.files[0]
    const url = URL.createObjectURL(selectedFile)
    setValue('avatar', selectedFile)
    setUrl(url)

  }

  return (
    <div className='w-full'>
      <form method='post' onSubmit={handleSubmit(handleRegister)} encType='multipart/form-data'>
        <div className='mt-4 w-full'>
          <div className='w-[100px] h-[100px] rounded-full overflow-hidden mx-auto  border-[#00BCD5] border-2'>
            <div className='w-full h-full rounded-full bg-[#80808084] flex items-center justify-center cursor-pointer'

            >
              {
                url ? <img src={url} alt={url} /> :
                  <FaCamera className='text-3xl text-gray-500'
                    onClick={() => avatarRef.current.click()} />
              }
            </div>
            <div>

            </div>
          </div>
          <input type="file" hidden ref={avatarRef} accept='image/*'
            onChange={handeAvatar}
          />
          {
            errors.avatar &&
            <p className="text-red-500 text-center">{errors.avatar.message}</p>
          }
        </div>
        <div className=' mt-4'>
          <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
            <input
              type="text"
              className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
              placeholder="Enter Full Name"
              {...register('fullName', {
                required: 'FullName is required !'
              })}
            />
          </div>
          {
            errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )
          }
        </div>
        <div className=' mt-4'>
          <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
            <input
              type="email"
              className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
              placeholder="Enter  email"
              {...register('email', {
                required: 'Email is required !',
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: 'Email not valid',
                },
              })}
            />
          </div>
          {
            errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )
          }
        </div>
        <div className=' mt-4'>
          <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
            <input
              type="password"
              className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
              placeholder="Enter  password"
              {...register('password', {
                required: 'Email is required !'
              })}
            />
          </div>
          {
            errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )
          }
        </div>

        <div className='mt-2  rounded-md py-1 flex items-center text-gray-600'>
          <select
            className="bg-transparent text-gray-600 rounded outline-none"
            {...register('role', {
              required: 'Role is required !'
            })}
          >
            <option value="" selected>Select Role</option>
            <option value="doctor" >Doctor</option>
            <option value="patient" >Patient</option>
          </select>
          {
            errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )
          }
        </div>
        <div className='w-full h-10 rounded-md bg-[#0ABED6] text-gray-600 mt-4'>
          <input
            className='w-full h-full text-center font-semibold cursor-pointer text-[#f3f3f3] hover:bg-[#3c9ba7]'
            type="submit"
            value={"Register"}
          />
        </div>

      </form>
    </div>
  )
}

export default Register