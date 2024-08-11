import React from 'react'
import doctor1 from "../../assets/doctor1.jpg"
import doctor2 from "../../assets/doctor2.jpg"

const DoctorPanel = () => {
  const appointmentData = [
    {
      id: 1,
      avatar: doctor1,
      fullName: "John Doe",
      problem: "Teeth paining",
      address: "xyz abc 001",
      contact: "9803538459",
      appointingDate: "2 Jul, 2024",
      appointStatus: "pending",
      appointmentDate: "pending"
    },
    {
      id: 2,
      avatar: doctor2,
      fullName: "Mona Roy",
      problem: "Teeth paining",
      address: "xyz abc 001",
      contact: "9803538459",
      appointingDate: "2 Jul, 2024",
      appointStatus: "accepted",
      appointmentDate: "4 jul, 2024"
    }
  ]
  return (
    <section className='w-full overflow-x-scroll scroll-smooth mt-3 relative min-h-[80vh]'>
      <table className="table-auto min-w-[80vw] w-full border-spacing-2 px-5 ">
        <thead className='text-[#f3f3f3] bg-[#AE56Ef] font-medium px-5 my-4'>
          <tr>
            <th className='text-left px-2'>Avatar</th>
            <th className='text-left px-2'>Patient's Name</th>
            <th className='text-left px-2'>Problem</th>
            <th className='text-left px-2'>Address</th>
            <th className='text-left px-2'>Contact</th>
            <th className='text-left px-2'>Appointing Date</th>
            <th className='text-left px-2'>Appointment Status</th>
            <th className='text-left px-2'>Appointment Date</th>
            <th className='text-left px-2'>Action</th>

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
                  <td className='text-gray-600 font-medium text-md px-2 capitalize'>{appDetail.problem}</td>
                  <td className='text-gray-600 font-medium text-md px-2 capitalize'>{appDetail.address}</td>
                  <td className='text-gray-600 font-medium text-md  px-2 capitalize'>{appDetail.contact}</td>
                  <td className='text-gray-600 font-medium text-md  px-2 capitalize'>{appDetail.appointingDate}</td>
                  <td className='text-gray-600 font-medium text-md  px-2 capitalize'>
                    {
                      appDetail.appointStatus !== "accepted" ?
                        <select>
                          <option selected value="pending">Pending</option>
                          <option value="accepted">Accept</option>
                          <option value="rejected">Reject</option>
                        </select>
                        : appDetail.appointStatus
                    }

                  </td>
                  <td className='text-gray-600 font-medium text-md  px-2 capitalize'>
                    {
                      appDetail.appointmentDate === "pending" ? <input type='date' />
                        :
                        appDetail.appointingDate
                    }
                  </td>
                  <td>
                    {
                      appDetail.appointmentDate === "pending" && appDetail.appointStatus !== "accpted" ?
                        <button className='px-4 py-1 bg-[#00BCD5] text-[#f3f3f3] rounded hover:bg-[#23727c]'>Approve</button>
                        : <span className='text-[#1f5b63]'>Approved</span>
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section >
  )
}

export default DoctorPanel