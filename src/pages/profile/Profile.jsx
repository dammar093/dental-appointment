import React, { useState } from 'react'
import UserProfile from '../../components/profile/UserProfile'
import { user } from '../../components/navabar/Navbar'
import DoctorForm from '../../components/doctor-details/DoctorForm'
import DoctorDetails from '../../components/doctor-details/DoctorDetails'

const Profile = () => {
  // const doctorDetails = {
  //   id: 1,
  //   degree: "mbbs/md",
  //   speciality: "xyz",
  //   about: "Voluptatem ea rerum nisi lam debitis optio. Quae odio quasi repellat sit fugiat dolor manicia et Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio utme ptat ducim.",
  //   workingDays: "sunday, monday,tuesday",
  //   training: "Nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequa duis aute irure do lor in reprehen."
  // }
  const doctorDetails = null
  return (
    <section className='w-full my-10 flex justify-center flex-wrap'>
      <UserProfile />
      {
        (user.role === "doctor") && (doctorDetails ? <DoctorDetails doctorDetails={doctorDetails} /> : <DoctorForm />)
      }
    </section>
  )
}

export default Profile