import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import TextareaField from '../../components/TextareaField'
import TextField from '../../components/TextField'
import { api } from '../../utils/api'
import { Container } from './styles'

const formInitialState = {
  name: '',
  cpf: '',
  driver_license: '',
  phone_number: '',
  email: '',
  username: '',
  password: '',
  bio: ''
}

export const CreateAccount = () => {
  const [formData, setFormData] = useState(formInitialState)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      await api.post('/user', formData)
      navigate('/login')
      toast.success('Conta criado com sucesso')
    } catch (err) {
      toast.error('Algum ocorreu que impediu o cadastro')
    }
  }

  return (
    <Container className='row g-0'>
      <div className='col-12 col-md-5 col-lg-6 auth-background-col fixed-bottom'>
        <div className='auth-background-holder'></div>
        <div className='auth-background-mask'></div>
      </div>

      <div className='col-12 col-md-7 col-lg-6 auth-main-col text-center h-100'>
        <div className='d-flex flex-column align-content-end justify-content-start h-100'>
          <div className='auth-body mx-auto'>
            <div className='auth-form-container text-start'></div>
            <h2>Criar Conta</h2>

            <Form onSubmit={onSubmit}>
              <fieldset className='mb-3'>
                <legend>Seus dados pessoais</legend>

                <Row>
                  <Col md={12} className='leftText'>
                    <TextField
                      type='text'
                      description='Nome completo*'
                      placeholder='Matheus Oliveira'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='mb-2'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className='leftText'>
                    <TextField
                      type='text'
                      description='CPF*'
                      placeholder='123.456.789-00'
                      name='cpf'
                      value={formData.cpf}
                      onChange={handleChange}
                      className='mb-2'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className='leftText'>
                    <TextField
                      type='text'
                      description='Carteira de motorista'
                      placeholder='82996083451'
                      name='driver_license'
                      value={formData.driver_license}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </fieldset>

              <fieldset className='mb-3'>
                <legend>Dados de contato</legend>

                <Row>
                  <Col md={6} className='leftText'>
                    <TextField
                      type='text'
                      description='Telefone'
                      placeholder='(84) 99999-9999'
                      name='phone_number'
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={6} className='leftText'>
                    <TextField
                      type='email'
                      description='Email'
                      placeholder='matheus@email.com'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </fieldset>

              <fieldset className='mb-3'>
                <legend>Informações de acesso</legend>

                <Row>
                  <Col md={12} className='leftText'>
                    <TextField
                      type='text'
                      description='Nome do usuário*'
                      placeholder='suetham'
                      name='username'
                      value={formData.username}
                      onChange={handleChange}
                      className='mb-2'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className='leftText'>
                    <TextField
                      type='password'
                      description='Senha*'
                      placeholder='********'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      className='mb-2'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className='leftText'>
                    <TextareaField
                      description='Bio'
                      placeholder='Fale um pouco da sua carona, de você, quanto mais informações melhor :)'
                      value={formData.bio}
                      onChange={handleChange}
                      rows='4'
                      name='bio'
                    />
                  </Col>
                </Row>
              </fieldset>

              <div className='text-center'>
                <button
                  type='submit'
                  className='btn btn-primary w-100 theme-btn mx-auto'>Criar conta
                </button>
              </div>
            </Form>

          </div>
        </div>
      </div>
    </Container>
  )
}
