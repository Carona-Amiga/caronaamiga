import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function PrivateOutlet () {
  const { isAuthenticated, token, user } = useAuth()

  return (isAuthenticated && !!token) || !!user
    ? (
      <Outlet />
    )
    : (
      <Navigate to='/login' />
    )
}

export default PrivateOutlet
