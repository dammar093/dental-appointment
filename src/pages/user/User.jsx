import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import doctor1 from "../../assets/doctor1.jpg"
import doctor2 from "../../assets/doctor2.jpg"

const User = () => {
  // hard coded data in future it comes from backedn
  const users = [
    {
      id: 1,
      fullName: "John doe",
      email: "johndoe@gmail.com",
      avatar: doctor1
    },
    {
      id: 2,
      fullName: "Mona doe",
      email: "johndoe@gmail.com",
      avatar: doctor2
    }
  ]
  return (
    <div className='w-full relative flex min-h-screen'>
      <div className="hidden md:block">
        <SideBar />

      </div>
      <div className='m-0 mt-4 mx-2 md:w-1/2 w-full '>
        <table className="table-auto min-w-[80vw] w-full border-spacing-2 px-5 ">
          <thead className='text-[#f3f3f3] bg-[#00BCD5] font-medium px-5 my-4'>
            <tr>
              <th className='text-left px-2'>Avatar</th>
              <th className='text-left px-2'>Full Name</th>
              <th className='text-left px-2'>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr className='odd:bg-white even:bg-slate-200' >
                    <td className=''>
                      <img className='md:w-10 md:h-10 h-8 w-8 rounded-full object-cover'
                        src={user.avatar} alt={user.doctor1} />
                    </td>
                    <td className='text-gray-600 font-medium text-md px-2 capitalize'>{user.fullName}</td>
                    <td className='text-gray-600 font-medium text-md px-2 lowercase'>{user.email}</td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default User