import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import braces from "../../assets/braces.jpg"
import cleaing from "../../assets/cleaning.jpg"
import daycare from "../../assets/daycare.jpg"
const sliderData = [
  {
    id: 1,
    img: braces,
    slug: "dental braces."
  },
  {
    id: 2,
    img: daycare,
    slug: "tooth daycare."
  },
  {
    id: 3,
    img: cleaing,
    slug: "teeth cleaning."
  }
]
const Slider = () => {

  const [dataIndex, setDataIndex] = useState(0)
  const handelForward = () => {
    if (dataIndex < sliderData.length - 1) {
      setDataIndex(prev => prev + 1)
    }
    else {
      setDataIndex(0)
    }
  }

  const handlePrevious = () => {
    if (dataIndex > 0) {
      setDataIndex(prev => prev - 1)
    }
    else {
      setDataIndex(sliderData.length - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handelForward()
    }, 2000)
    return () => clearInterval(interval)
  })

  return (
    <div className='bg-[#f3f3f3] w-full md:w-[40vw] p-4 rounded'>
      <div className='w-full'>
        <div className='w-full'>
          <img className='w-full h-full object-contain' src={sliderData[dataIndex].img} alt="" />
        </div>
        <div className=' w-full flex justify-between items-center mt-3'>
          <div className='flex gap-2 items-center text-[#204867] capitalize'>
            <span className='text-lg font-bold'>{sliderData[dataIndex].slug}</span>
            <span className='font-semibold'>Beautiful Smile</span>
          </div>
          <div className='text-3xl text-[#013A65]'>
            <button
              onClick={handlePrevious}
            ><IoIosArrowRoundBack /></button>
            <button
              onClick={handelForward}
            ><IoIosArrowRoundForward /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider