import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full p-4 bg-[#f6f6f6]'>
      <div className='w-full grid grid-cols-1 md:grid-cols-4'>
        <di className="w-full md:w-3[30vw]">
          <div><h2 className='text-gray-600 text-lg font-medium'>Quick Links</h2></div>
          <div>
            <ul>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Login</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Sign Up</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>My Appointments</Link></li>
              <li><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Contact</Link></li>
            </ul>
          </div>
        </di>
        <di className="w-full md:w-3[30vw]">
          <div><h2 className='text-gray-600 text-lg font-medium'>Trems & Condition</h2></div>
          <div>
            <ul>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Insurance Policy</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Refund Policy</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Fee Policy</Link></li>
              <li><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Appointment Policy</Link></li>
            </ul>
          </div>
        </di>
        <di className="w-full md:w-3[30vw]">
          <div><h2 className='text-gray-600 text-lg font-medium'>Follow Us</h2></div>
          <div>
            <ul>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Facbbok</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Instagram</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Youtube</Link></li>
              <li><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Linkedin</Link></li>
            </ul>
          </div>
        </di>
        <di className="w-full md:w-3[30vw]">
          <div><h2 className='text-gray-600 text-lg font-medium'>Our Goals</h2></div>
          <div>
            <ul>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Provide best doctors</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Give best sefvice</Link></li>
              <li ><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>24/7 avaibility</Link></li>
              <li><Link className='text-md text-gray-400 hover:text-[#00BCD5]'>Minimum cost</Link></li>
            </ul>
          </div>
        </di>
      </div>
    </footer>
  )
}

export default Footer