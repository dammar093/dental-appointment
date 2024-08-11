import React, { useState } from 'react'
import Login from '../login/Login'
import Register from '../register/register'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../features/login/loginSlice'
const Auth = () => {
  const dispatch = useDispatch()
  const [showLogin, setShowLogin] = useState(true)
  return (
    <div className='w-full h-screen bg-[#80808060] flex items-center justify-center'>
      <div className='md:w-1/2 w-full bg-white px-4  py-10 rounded'>
        <div className='flex justify-center gap-3 relative'>
          <button
            className={`${showLogin ? "bg-[#00BCD5] text-[#f3f3f3]" : "border border-[#00BCD5] text-[#00BCD5] "}  text-md px-4 py-1 font-semibold rounded hover:bg-[#00BCD5] hover:text-white`}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button
            className={`${showLogin ? "border border-[#00BCD5] text-[#00BCD5]" : "bg-[#00BCD5] text-[#f3f3f3]"}  text-md px-4 py-1 font-semibold rounded hover:bg-[#00BCD5] hover:text-white`}
            onClick={() => setShowLogin(false)}
          >
            Register
          </button>
          <button className='absolute -top-8 right-0 text-3xl text-gray-700 border-dotted border'
            onClick={() => dispatch(setLogin(false))}
          >
            <MdClose />
          </button>
        </div>
        {
          showLogin ? <Login /> : <Register />
        }
      </div>

    </div>
  )
}

export default Auth