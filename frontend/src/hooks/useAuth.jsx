import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { getUserInLS } from '../utils/auth'

const UserContext = createContext({})

const userInit = JSON.parse(getUserInLS())

export function UserProvider ({ children }) {
  const [user, setUser] = useState(userInit)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useAuth must be used within UserProvider')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.element
}
