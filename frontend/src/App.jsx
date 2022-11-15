import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/useAuth'

import Home from './pages/Home'
import CreateCarpool from './pages/CreateCarpool'
import SessionTest from './pages/Login'
import Chat from './pages/Chat'

import PrivateOutlet from './router/PrivateOutlet'

import './App.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { NotFound404 } from './pages/NotFound404'
import { TestWebsocket } from './pages/Test'
import { CreateAccount } from './pages/CreateAccount'

function App () {
  return (
    <BrowserRouter>
      <UserProvider>
        <>
          <ToastContainer autoClose={3000} position='top-right' pauseOnFocusLoss={false} />

          <Routes>
            <Route path='/' element={<PrivateOutlet />}>
              {/* Private routes */}
              <Route path='/' element={<Home />} />
              <Route path='/criar-carona' element={<CreateCarpool />} />
              <Route path='/mensagens' element={<Chat />} />
            </Route>

            {/* Public routes */}
            <Route path='/login' element={<SessionTest />} />
            <Route path='/criar-conta' element={<CreateAccount />} />
            <Route path='/ws' element={<TestWebsocket />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
