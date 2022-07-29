import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

export const PublicRoute = ({children}) => {
  const auth = useSelector((state=>state.auth.token))
  return !auth? (
    children
  ):(<Navigate to='/home' replace={true}/>)
}