import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { getTokenInLS, removeTokenInLS, removeUserInLS } from '../../utils/auth'
import { api } from '../../utils/api'

import logo from '../../images/Vector.svg'
import iconUser from '../../images/Group.svg'

export function Header () {
  const navigate = useNavigate()
  const { user } = useAuth()

  const logoutEvent = () => {
    const token = getTokenInLS()

    api.post('/logout', {}, {
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(() => {
      removeTokenInLS()
      removeUserInLS()
      navigate('/login')
    })
  }

  return (
    <div className='navbar-s'>
      <Navbar expand='lg' className='purple'>
        <Container fluid>
          <div>
            <img src={logo} className='space' alt='logo' />
          </div>
          <Navbar.Brand href='/'>
            <span className='text-light'>Carona Amiga</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <NavDropdown.Item href='' className='nresponse'>
              <p>Mensagens</p>
            </NavDropdown.Item>
            <NavDropdown.Item href='' className='nresponse'>
              <p>Carona</p>
            </NavDropdown.Item>
            <NavDropdown.Item href='' className='nresponse'>
              <p>Sair</p>
            </NavDropdown.Item>
            <Form className='d-flex'>
              <NavDropdown
                title={user.username}
                id='navbarScrollingDropdown'
              >
                <NavDropdown.Item
                  href='/chat'
                  className='navDropdown-item'
                >
                  Mensagens
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='/criar-carona'
                  className='navDropdown-item'
                >
                  Carona
                </NavDropdown.Item>
                <NavDropdown.Item
                  className='navDropdown-item'
                  onClick={() => logoutEvent()}
                >
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
              <img className='imgUser' src={iconUser} alt='icone'></img>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
