import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import '../../assets/scss/auth.scss'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, toast } from 'react-toastify'

import { api } from '../../utils/api'
import { setTokenInLS, setUserInLS } from '../../utils/auth'

function SessionTest () {
  const { setUser, isAuthenticated, setToken } = useAuth()
  const [remember, setRemember] = useState(false)

  const [userForm, setUserForm] = useState({ username: '', password: '' })
  // const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const loginSubmit = (event) => {
    event.preventDefault()

    if (isAuthenticated) {
      return
    }

    api
      .post('/api-token', userForm, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(async (response) => {
        const { token } = response.data

        const { data: user } = await api.get('/session', {
          headers: { Authorization: `Token ${token}` }
        })

        setUser(user)
        setUserInLS(JSON.stringify({ id: user.id, username: user.username }))

        setToken(token)
        setTokenInLS(token)

        navigate(0)
      })
      .catch(() => toast.error('Usuário ou senha incorretos.'))
  }

  const goToCreateAccountPage = (event) => {
    event.preventDefault()

    navigate('/criar-conta')
  }

  return (
    <div className='row g-0 auth-wrapper'>
      <div className='col-12 col-md-5 col-lg-6 h-100 auth-background-col'>
        <div className='auth-background-holder'></div>
        <div className='auth-background-mask'></div>
      </div>

      <div className='col-12 col-md-7 col-lg-6 auth-main-col text-center h-100'>
        <div className='d-flex flex-column align-content-end justify-content-center h-100'>
          <div className='auth-body mx-auto'>
            <div className='auth-form-container text-start'>
              <ToastContainer
                autoClose={3000}
                position='top-right'
                pauseOnFocusLoss={false}
              />

              <form
                className='auth-form'
                method='POST'
                onSubmit={loginSubmit}
                autoComplete={'off'}
              >
                <div className='email mb-3'>
                  <label className='font-bold'>Usuário</label>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    name='email'
                    placeholder='matheusinit'
                    onChange={(event) =>
                      setUserForm({ ...userForm, username: event.target.value })
                    }
                  />
                </div>

                <div className='password mb-3'>
                  <label className='font-bold'>Senha</label>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    id='password'
                    placeholder='********'
                    onChange={(event) =>
                      setUserForm({
                        ...userForm,
                        password: event.target.value
                      })
                    }
                  />

                  <div className='invalid-feedback text-start'></div>

                  <div className='extra mt-3 row justify-content-between'>
                    <div className='col-6'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='remember'
                          checked={remember}
                          onChange={(e) => setRemember(e.currentTarget.checked)}
                        />
                        <label className='form-check-label' htmlFor='remember'>
                          Lembrar
                        </label>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='forgot-password text-end'>
                        <a href=''>Esqueceu a senha?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='btn btn-primary w-100 theme-btn mx-auto'
                  >
                    Entrar
                  </button>
                </div>
              </form>

              <br />
              <div className='buttonFlex'>
                <a
                  className='button-createaccount'
                  onClick={goToCreateAccountPage}
                >
                  Não possui conta?{' '}
                  <span className='text-createaccount'> Cadastre-se</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SessionTest
