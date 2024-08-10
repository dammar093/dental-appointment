import React from 'react'
import { user } from '../navabar/Navbar'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../features/login/loginSlice'
const AuthLayout = ({ children }) => {
  const dispatch = useDispatch()
  if (!user) {
    dispatch(setLogin(true))
  }
  return (
    <div>{children}</div>
  )
}

export default AuthLayout