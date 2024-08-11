import React, { useState } from 'react'
import Logo from '../logo/Logo'
import { Link, NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
import doctor1 from "../../assets/doctor1.jpg"
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/login/loginSlice';

// this user is actualy comes from backend and store on the state but recently it is hard coded
// it's better use state management library like zustand and redux to make gobal state

export const user = {
  id: 1,
  fullName: "John Doe",
  email: "johndoe12@gmail.com",
  avatar: doctor1,
  role: "patient"
  // other details also included 
}

// export const user = null


const Navbar = () => {
  //mobile rsponsive menu
  const [menu, setMenu] = useState(false)
  const dispatch = useDispatch()
  // write logic to login and  profil, logout

  return (
    <header className='w-full px-4 py-2 bg-[#f3f3f3] flex items-center justify-between sticky top-0 z-50 shadow-lg'>
      <div>
        <Logo />
      </div>
      <nav className='flex  items-center gap-4'>
        <ul className='md:flex md:gap-4 gap-1 hidden'>
          <li>
            <NavLink to={"/"}
              className={({ isActive }) => isActive ? "text-[#00BCD5] md:text-[1.2vw] font-semibold t" : " md:text-[1.2vw] font-semibold text-gray-600 hover:text-[#00BCD5]"} >
              Home
            </NavLink>
          </li>
          <li>
            {
              user && user.role === "patient" ? <NavLink
                to={"/my-appontment"}
                className={({ isActive }) => isActive ? "text-[#00BCD5] md:text-[1.2vw] font-semibold t" : " md:text-[1.2vw] font-semibold text-gray-600 hover:text-[#00BCD5]"}   >
                My Appoitments
              </NavLink> : user && user.role === "doctor" ? <NavLink
                to={"/doctor-panel"}
                className={({ isActive }) => isActive ? "text-[#00BCD5] md:text-[1.2vw] font-semibold t" : " md:text-[1.2vw] font-semibold text-gray-600 hover:text-[#00BCD5]"}   >
                Doctor Panel
              </NavLink>
                : user && user.role === "admin" ? <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) => isActive ? "text-[#00BCD5] md:text-[1.2vw] font-semibold t" : " md:text-[1.2vw] font-semibold text-gray-600 hover:text-[#00BCD5]"}   >
                  Dashboard
                </NavLink>
                  : ""
            }
          </li>

          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => isActive ? "text-[#00BCD5] text-[sm] md:text-[1.2vw] font-semibold" : " text-[sm] md:text-[1.2vw] font-semibold text-gray-600 hover:text-[#00BCD5]"} >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='flex gap-4 items-center'>
          {/* check if user is loged in or not */}
          {
            user ?
              <div>
                <div className='flex gap-2'>
                  <div>
                    <Link to="/profile">
                      <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src={user.avatar} alt={user.fullName} />
                      </div>
                    </Link>
                  </div>
                  <button
                    className='border border-[#00BCD5] text-[#00BCD5] text-md px-4 py-1 font-semibold rounded hover:bg-[#00BCD5] hover:text-white'>
                    Logout
                  </button>
                </div>
              </div>
              :
              <button
                className='border border-[#00BCD5] text-[#00BCD5] text-md px-4 py-1 font-semibold rounded hover:bg-[#00BCD5] hover:text-white'
                onClick={() => dispatch(setLogin(true))}
              >
                Login
              </button>
          }
          <div>
            <button className='md:hidden block text-2xl text-gray-700 border-dotted border-gray-600 border-2 p-1'
              onClick={() => setMenu(prev => !prev)}
            >
              {
                menu ? <MdClose /> : <MdMenu />
              }
            </button>
          </div>
        </div>
      </nav>
      {
        menu && <nav className='absolute top-14 w-full h-screen bg-gray-700 left-0 flex justify-center text-center md:hidden'>
          <ul className='mt-20 block'>
            <li className='mt-6'>
              <NavLink to={"/"}
                className="text-[#f3f3f3] text-3xl"
                onClick={() => setMenu(prev => !prev)}
              >
                Home
              </NavLink>
            </li>
            <li className='mt-6'>
              {
                user && user.role === "patient" ?
                  <NavLink
                    to={"/my-appontment"}
                    className="text-[#f3f3f3] text-3xl"
                    onClick={() => setMenu(prev => !prev)}
                  >
                    My Appoitments
                  </NavLink>
                  :
                  user && user.role === "doctor" ?
                    <NavLink
                      to={"/doctor-panel"}
                      className="text-[#f3f3f3] text-3xl"
                      onClick={() => setMenu(prev => !prev)}
                    >
                      Doctor Panel
                    </NavLink>
                    :
                    user && user.role === "admin" ?
                      <NavLink
                        to={"/dashboard"}
                        className="text-[#f3f3f3] text-3xl"
                        onClick={() => setMenu(prev => !prev)}
                      >
                        Dashboard
                      </NavLink>
                      : ""
              }
            </li>
            <li className='mt-6'>
              <NavLink
                to={"/contact"}
                className="text-[#f3f3f3] text-3xl "
                onClick={() => setMenu(prev => !prev)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      }
    </header>
  )
}

export default Navbar