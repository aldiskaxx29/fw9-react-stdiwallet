import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  const auth = localStorage.getItem('auth')
  return auth? (
    children
  ):(<Navigate to='/login' replace={true} state={{errormsg: 'You Must Login to Access Page'}}/>)
}
