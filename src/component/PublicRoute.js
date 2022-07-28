import React from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {
  const auth = localStorage.getItem('auth')
  return !auth? (
    children
  ):(<Navigate to='/home' replace={true}/>)
}