import React from 'react'
const DashboardCard = ({ color, title, count, Icon, bg, bg1 }) => {

  return (
    <div className={`w-full md:min:w-[20vw] p-4 h-[140px] md:max-w-[20vw] rounded ${bg}`}>
      <div className='p-2 text-center text-gray-600 capitalize font-semibold text-xl'>
        <h2 className='capitalize'>{title}</h2>
      </div>
      <div className={`flex items-center justify-center gap-2 text-gray-600 text-lg font-bold`}>
        <div className={`w-10 h-10 rounded-full ${bg1} ${color} flex items-center justify-center`}>
          <Icon />
        </div>
        <div >
          {count}
        </div>
      </div>
    </div>
  )
}

export default DashboardCard