import React from 'react'
import ServiceCard from '../service-card/ServiceCard'
import s1 from "../../assets/s1.jpg"
import s2 from "../../assets/s2.jpg"
import s3 from "../../assets/s3.jpg"


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

  return (
    <section className='min-h-[50vh] py-4 px-2 md:px-20 w-full'>
      <div>
        <h2 className='text-gray-600 text-3xl text-center capitalize tracking-widest'>our <span className='text-[#00BCD5] font-bold'>services</span></h2>
        <h4 className='text-center text-gray-600 text-lg'>Smile, you're designed to!</h4>
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-3'>
        {
          serviceData.map(service => {
            return (
              <ServiceCard key={service.id} service={service} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Service