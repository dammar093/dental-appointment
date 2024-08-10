import React from 'react'
import DoctordCard from '../doctor-card/DoctordCard'
import doctor1 from "../../assets/doctor1.jpg"
import doctor2 from "../../assets/doctor2.jpg"
import doctor3 from "../../assets/doctor3.jpg"
import doctor4 from "../../assets/doctor4.jpg"


//actual data comming from backend but recently for hardcoded data
export const data = [
  {
    id: 1,
    fullName: "John Doe",
    avatar: doctor1,
    degree: "MBBS/MD",
    specialist: "xyz",
    about: "Voluptatem ea rerum nisi lam debitis optio. Quae odio quasi repellat sit fugiat dolor manicia et Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio utme ptat ducim.",
    training: "Nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequa duis aute irure do lor in reprehen.",
    workingDays: "Sunday, Monday, tuesday",
    workDone: 20
  },
  {
    id: 2,
    fullName: "Lura Maria",
    avatar: doctor2,
    degree: "MBBS / MD",
    specialist: "xyz",
    about: "Voluptatem ea rerum nisi lam debitis optio. Quae odio quasi repellat sit fugiat dolor manicia et Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio utme ptat ducim.",
    training: "Nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequa duis aute irure do lor in reprehen.",
    workingDays: "Monday, tuesday, thursday",
    workDone: 12
  },
  {
    id: 3,
    fullName: "Mona Dey",
    avatar: doctor3,
    degree: "MBBS/MD",
    specialist: "xyz",
    about: "Voluptatem ea rerum nisi lam debitis optio. Quae odio quasi repellat sit fugiat dolor manicia et Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio utme ptat ducim.",
    training: "Nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequa duis aute irure do lor in reprehen.",
    workingDays: "Sunday, Monday, tuesday",
    workDone: 2
  },
  {
    id: 4,
    fullName: "John Doe",
    avatar: doctor4,
    degree: "MBBS/MD",
    specialist: "xyz",
    about: "Voluptatem ea rerum nisi lam debitis optio. Quae odio quasi repellat sit fugiat dolor manicia et Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio utme ptat ducim.",
    training: "Nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequa duis aute irure do lor in reprehen.",
    workingDays: "Sunday, Monday, tuesday",
    workDone: 10
  }
]
const Doctors = () => {

  return (
    <div className=' w-full py-4 md:px-20 px-2'>
      <div>
        <h2 className='text-gray-600 text-3xl text-center capitalize tracking-widest'>our <span className='text-[#00BCD5] font-bold'>Doctors</span></h2>
        <h4 className='text-center text-gray-600 text-lg'>Smile, you're designed to!</h4>
      </div>
      <div className='w-full mt-[100px] grid grid-cols-1 md:grid-cols-4 gap-1'>
        {
          data.map(doctor => {
            return (
              <DoctordCard key={doctor.id} doctor={doctor} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Doctors