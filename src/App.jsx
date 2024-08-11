import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navabar/Navbar'
import Footer from './components/footer/Footer'
import { useSelector } from 'react-redux'
import Auth from "./components/auth/Auth"
const App = () => {
  const { login } = useSelector(state => state.login)
  return (

    <>
      {
        login ? <Auth /> :
          <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
      }
    </>
  )
}

export default App