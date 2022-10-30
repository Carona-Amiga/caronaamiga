import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function PrivateOutlet () {
  const { isAuthenticated, token } = useAuth()

  return isAuthenticated && !!token
    ? <Outlet />
    : <Navigate to='/login' />
}

export default PrivateOutlet
