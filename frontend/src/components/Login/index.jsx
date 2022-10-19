import React, { useState } from 'react'
import { api } from '../../utils/api'

export function Login () {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  })

  const onChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value
    })
  }

  const login = async (event) => {
    event.preventDefault()

    await api.post('/session', userCredentials)
  }

  return (
    <form onSubmit={login}>
      <label>
        Nome de usuário:
        <input
          type='text'
          name='username'
          onChange={onChange}
          value={userCredentials.username}
        />
      </label>
      <br />
      <label htmlFor=''>
        Senha:
        <input
          type='password'
          name='password'
          onChange={onChange}
          value={userCredentials.password}
        />
      </label>
      <br />
      <button type='submit'>Login</button>
    </form>
  )
}
