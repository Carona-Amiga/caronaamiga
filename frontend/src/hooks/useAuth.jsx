import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { getTokenInLS, getUserInLS, removeTokenInLS, removeUserInLS } from '../utils/auth'
import { api } from '../utils/api'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext({})

const userInit = JSON.parse(getUserInLS())

export function UserProvider ({ children }) {
  const navigate = useNavigate()

  const [user, setUser] = useState(userInit)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(() => {
    const tokenFromLS = getTokenInLS()

    if (tokenFromLS) {
      (async () => {
        try {
          // If token is valid
          await api.get('/session', {
            headers: {
              Authorization: `Token ${tokenFromLS}`
            }
          })

          setToken(tokenFromLS)
          setIsAuthenticated(true)
        } catch (error) {
          // If token is not valid
          navigate('/login')
        }
      })()
    }
  })

  const logout = () => {
    const token = getTokenInLS()

    api.post('/logout', {}, {
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(() => {
      removeTokenInLS()
      removeUserInLS()
      setIsAuthenticated(false)
      navigate('/login')
    })
  }

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, isAuthenticated, logout }}>
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
