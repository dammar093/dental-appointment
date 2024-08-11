import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import doctor1 from "../../assets/doctor1.jpg"
import doctor2 from "../../assets/doctor2.jpg"


const Appointment = () => {
  // this is the hard coded data in future it will comes from backen
  const appointmentData = [
    {
      id: 1,
      avatar: doctor1,
      fullName: "John Doe",
      degree: "mbbs/md",
      sepciality: "Surgen",
      problem: "Teeth paining",
      appointingDate: "2 Jul, 2024",
      appointStatus: "pending",
      appointmentDate: "pending"
    },
    {
      id: 2,
      avatar: doctor2,
      fullName: "Mona Doe",
      degree: "mbbs/md",
      sepciality: "Surgen",
      problem: "Teeth paining",
      appointingDate: "2 Jul, 2024",
      appointStatus: "accpted",
      appointmentDate: "4, Jul, 2024"
    }
  ]
  return (
    <div className='w-full relative flex min-h-screen'>
      <div className="hidden md:block">
        <SideBar />

      </div>
      <div className='m-0 mt-4 mx-2 w-full '>
        <section className='w-full overflow-x-scroll scroll-smooth mt-3 relative min-h-[80vh]'>
          <table className="table-auto min-w-[80vw] w-full border-spacing-2 px-5 ">
            <thead className='text-[#f3f3f3] bg-[#00BCD5] font-medium px-5 my-4'>
              <tr>
                <th className='text-left px-2'>Avatar</th>
                <th className='text-left px-2'>Doctor's Name</th>
                <th className='text-left px-2'>Doctor's Degree</th>
                <th className='text-left px-2'>Doctor's Sepciality</th>
                <th className='text-left px-2'>Problem</th>
                <th className='text-left px-2'>Appointing Date</th>
                <th className='text-left px-2'>Appointment Status</th>
                <th className='text-left px-2'>Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              {
                appointmentData.map(appDetail => {
                  return (
                    <tr className='odd:bg-white even:bg-slate-200' >
                      <td className=''>
                        <img className='md:w-10 md:h-10 h-8 w-8 rounded-full object-cover'
                          src={appDetail.avatar} alt={appDetail.doctor1} />
                      </td>
                      <td className='text-gray-600 font-medium text-md px-2 capitalize'>{appDetail.fullName}</td>
                      <td className='text-gray-600 font-medium text-md px-2 uppercase'>{appDetail.degree}</td>
                      <td className='text-gray-600 font-medium text-md px-2 capitalize'>{appDetail.sepciality}</td>
                      <td className='text-gray-600 font-medium text-md  px-2 capitalize'>{appDetail.problem}</td>
                      <td className='text-gray-600 font-medium text-md  px-2 capitalize'>{appDetail.appointingDate}</td>
                      <td className='text-gray-600 font-medium text-md  px-2 capitalize'>{appDetail.appointStatus}</td>
                      <td className='text-gray-600 font-medium text-md  px-2 capitalize'>{appDetail.appointmentDate}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default Appointment