import React from 'react'
import { LuFile, LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { user } from '../navabar/Navbar';
import { GrServices } from "react-icons/gr";
import NavBar from '../nav-link/NavBar';


const SideBar = () => {
  return (
    <aside className='bg-[#f3f3f3] h-[90vh] shadow-md md:w-[14vw] sticky  top-[60px] left-0' >

      <div className='mt-2 px-2'>
        <div className=''><span className='text-[#277f8a] text-[14px]'>{(new Date().getHours()) > 17 ? "Good Evening" : (new Date().getHours()) < 12 ? "Good Morning" : "Good Afternoon"}</span> <span className='text-[#3c3a3a] text-md'>{user.fullName?.split(" ")[0]}</span></div>
      </div>
      <div className='px-2 mt-2'>
        <div>
          <NavBar path="/dashboard" Icon={LuLayoutDashboard} title="Dashboard" />
          <NavBar path="/service" Icon={GrServices} title="Services" />
          <NavBar path="/user" Icon={LuUsers} title="User" />
          <NavBar path="/appointmet" Icon={LuFile} title="Appointment" />

        </div>
      </div>
    </aside>
  )
}

export default SideBar