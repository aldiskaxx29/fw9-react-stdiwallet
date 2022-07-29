import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

export const PrivateRoute = ({children}) => {
  const auth = useSelector((state=>state.auth.token))
  return auth? (
    children
  ):(<Navigate to='/login' replace={true} state={{errormsg: 'You Must Login to Access Page'}}/>)
}
