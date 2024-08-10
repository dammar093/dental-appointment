import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  // write fucntion check for the user is authenticate or not 
  // hit backend api login api
  async function handleData(data) {
    try {
      console.log(data);
      // const res = await axios.get("api end point is here");
      // const data = await res.data;
      // if (data.role === "patient") {
      //   navigate("/doctor")
      // }
      // if (data.role === "doctor") {
      //   navigate("/doctor-panel")
      // }
      // if (data.role === "role") {
      //   navigate("/admin-panel")
      // }
    } catch (error) {
      setError(error)
      console.log(error);

    }

  }
  const handleLogin = (data) => {
    console.log(data);

    handleData(data)
  }
  return (
    <div className='w-full'>
      <form method='post' onSubmit={handleSubmit(handleLogin)}>
        <div className=' mt-4'>
          <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
            <input
              type="email"
              className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
        <div className='w-full h-10 rounded-md bg-[#0ABED6] text-gray-600 mt-4'>
          <input
            className='w-full h-full text-center font-semibold cursor-pointer text-[#f3f3f3] hover:bg-[#3c9ba7]'
            type="submit"
            value={"Login"}
          />
        </div>

      </form>
    </div>
  )
}

export default Login