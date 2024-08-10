import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navabar/Navbar'
import Footer from './components/footer/Footer'
import Auth from './components/auth/Auth'
import { useSelector } from 'react-redux'

const App = () => {

  const { login } = useSelector(state => state.login)
  return (

    <>
      {
        login ?
          <div className='w-full absolute bottom-0 top-0'>
            <Auth />
          </div>
          : <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
      }
    </>
  )
}

export default App