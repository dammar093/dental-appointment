import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import s1 from "../../assets/s1.jpg"
import s2 from "../../assets/s2.jpg"
import s3 from "../../assets/s3.jpg"
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md'
import { IoAddCircleOutline } from 'react-icons/io5'
import AddService from '../../components/add-service/AddService'
import EditService from '../../components/edit-service/EditService'
const Service = () => {
  // actual data is comming from backend but it is devlopmetn so recently the data is hard coded
  const serviceData = [
    {
      id: 1,
      image: s3,
      title: "Dental Filling for Cavities",
      description: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh."
    },
    {
      id: 2,
      image: s2,
      title: "Regular Dental Cleaning",
      description: "Duis leo sed fringilla mauris sit amet nibh. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt."
    },
    {
      id: 3,
      image: s1,
      title: "Tingling Sensation-pulpitis",
      description: "Imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."
    }
  ]
  const [edit, setEdit] = useState(false)
  const [service, setService] = useState(null)
  const [showService, setShowService] = useState(false)
  return (
    <div className='w-full relative flex min-h-screen'>
      <div className="hidden md:block">
        <SideBar />
      </div>
      <div className='m-0 mt-4 mx-2 w-full '>
        <section className='w-full overflow-x-scroll scroll-smooth mt-3 relative min-h-screen'>
          <div className='flex justify-between my-2'>
            <h2 className='text-gray-600 font-semibold text-lg uppercase'>Added Service</h2>
            <button className={"bg-[#00BCD5] text-[#f3f3f3] text-[15px] px-3  py-2 flex rounded  items-center capitalize transition-all hover:bg-[#2a838f] "}
              onClick={() => setShowService(true)}
            ><div className='flex items-center gap-1 '><IoAddCircleOutline /> <span>Add Srvice</span></div></button>

          </div>
          <table className="table-auto min-w-[80vw] w-full border-spacing-2 px-5 ">
            <thead className='text-[#f3f3f3] bg-[#00BCD5] font-medium px-5 my-4'>
              <tr>
                <th className='text-left px-2'>Image</th>
                <th className='text-left px-2'>Title</th>
                <th className='text-left px-2'>Description</th>
                <th className='px-2 ' colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                serviceData.map(service => {
                  return (
                    <tr className='odd:bg-white even:bg-slate-200' >
                      <td className=''>
                        <img className='md:w-10 md:h-10 h-8 w-8 rounded-full object-cover'
                          src={service.image} alt={service.image} />
                      </td>
                      <td className='text-gray-600 font-medium text-md px-2 capitalize'>{service.title}</td>
                      <td className='text-gray-600 font-medium text-md px-2 first-letter:uppercase'>{service.description}</td>
                      <td>
                        <button className={"bg-[#00BCD5] text-[#f3f3f3] text-[15px] px-4 py-1 flex rounded  items-center capitalize transition-all hover:bg-[#1e5f67] "}
                          onClick={() => {

                            setService(service)
                            setEdit(true)
                          }
                          }

                        ><div className='flex items-center gap-1 '> <MdOutlineEdit /><span>Edit</span></div></button>
                      </td>
                      <td>

                        <button className={"bg-[red] text-[#f3f3f3] text-[15px] px-4 py-1 flex rounded  items-center capitalize transition-all hover:bg-[#932323] "}
                        ><div className='flex items-center gap-1 '> <MdOutlineDelete /><span>Delete</span></div></button>
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {showService && <AddService setShowService={setShowService} />}

          {
            edit && <EditService service={service} setEdit={setEdit} />
          }

        </section>
      </div>
    </div>
  )
}

export default Service