import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { isTokenNullInLS } from '../../utils/auth'

function PrivateOutlet () {
  return isTokenNullInLS()
    ? <Outlet />
    : <Navigate to='/login' />
}

export default PrivateOutlet
