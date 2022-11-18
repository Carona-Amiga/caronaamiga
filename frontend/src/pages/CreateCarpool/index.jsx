import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import TextField from '../../components/TextField'
import { Header } from '../../components/Header'
import TextareaField from '../../components/TextareaField'
import TimeField from '../../components/TimeField'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'

import { Legend, StyledContainer } from './styled'
import { api } from '../../utils/api'
import NumberField from '../../components/NumberField'

import { useForm } from "react-hook-form"

function CreateCarpool () {
  const formInitialState = {
    name: '',
    time: '',
    description: '',
    free_seats: 0,
    days: 0,
    start_address_state: '',
    start_address_city: '',
    start_address_area: '',
    start_address_street: '',
    start_address_number: '',
    destination_address_state: '',
    destination_address_city: '',
    destination_address_area: '',
    destination_address_street: '',
    destination_address_number: ''
  }

  const [formData, setFormData] = useState(formInitialState)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleCheckboxChange = (event) => {
    const days = event.target.checked === true
      ? formData.days + Number(event.target.value)
      : formData.days - Number(event.target.value)

    setFormData({ ...formData, days })
  }

  const formOnSubmit = async (event) => {
    event.preventDefault()

    try {
      await api.post('/carpool', formData)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Header />
      <StyledContainer className='mb-4'>
        <h2 className='mt-4'>Cadastrar carona</h2>

        <Form onSubmit={formOnSubmit}>
          <TextField
            type='text'
            description='Nome da carona'
            placeholder='IFRN Central'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <fieldset className='mt-4'>
            <Legend>Saindo de</Legend>

            <Row className='mb-2'>
              <Col sm={2}>
                <TextField
                  type='text'
                  description='Estado'
                  placeholder='RN'
                  name='start_address_state'
                  value={formData.start_address_state}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={5}>
                <TextField
                  type='text'
                  description='Cidade'
                  placeholder='Natal'
                  name='start_address_city'
                  value={formData.start_address_city}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={5}>
                <TextField
                  type='text'
                  description='Bairro'
                  placeholder='Lagoa Nova'
                  name='start_address_area'
                  value={formData.start_address_area}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className='mb-2'>
              <Col sm={10}>
                <TextField
                  type='text'
                  description='Rua/Avenida'
                  placeholder='Avenida Salgado Filho'
                  name='start_address_street'
                  value={formData.start_address_street}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={2}>
                <TextField
                  type='text'
                  description='Número'
                  placeholder='81'
                  name='start_address_number'
                  value={formData.start_address_number}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </fieldset>

          <fieldset className='mt-4'>
            <Legend>Indo para</Legend>

            <Row className='mb-2'>
              <Col sm={2}>
                <TextField
                  type='text'
                  description='Estado'
                  placeholder='RN'
                  name='destination_address_state'
                  value={formData.destination_address_state}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={5}>
                <TextField
                  type='text'
                  description='Cidade'
                  placeholder='Parnamirim'
                  name='destination_address_city'
                  value={formData.destination_address_city}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={5}>
                <TextField
                  type='text'
                  description='Bairro'
                  placeholder='Nova Parnamirim'
                  name='destination_address_area'
                  value={formData.destination_address_area}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className='mb-2'>
              <Col sm={10}>
                <TextField
                  type='text'
                  description='Rua/Avenida'
                  placeholder='Avenida Maria Lacerda Montenegro'
                  name='destination_address_street'
                  value={formData.destination_address_street}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={2}>
                <TextField
                  type='text'
                  description='Número'
                  placeholder='13'
                  name='destination_address_number'
                  value={formData.destination_address_number}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </fieldset>

          <fieldset className='mb-4'>
            <Legend className='mt-4'>Dias</Legend>

            <Checkbox
              content='Segunda-feira'
              value='1'
              onChange={handleCheckboxChange}
            />

            <Checkbox
              content='Terça-feira'
              value='2'
              onChange={handleCheckboxChange}
            />

            <Checkbox
              content='Quarta-feira'
              value='4'
              onChange={handleCheckboxChange}
            />

            <Checkbox
              content='Quinta-feira'
              value='8'
              onChange={handleCheckboxChange}
            />

            <Checkbox
              content='Sexta-feira'
              value='16'
              onChange={handleCheckboxChange}
            />

            <Checkbox
              content='Sábado'
              value='32'
              onChange={handleCheckboxChange}
            />

            <Checkbox
              content='Domingo'
              value='64'
              onChange={handleCheckboxChange}
            />
          </fieldset>

          <Row className='mb-4'>
            <Col md={3} sm={6}>
              <TimeField
                description='Horário'
                placeholder='7:30'
                name='time'
                value={formData.time}
                onChange={handleChange}
              />
            </Col>

            <Col md={3} sm={6}>
              <NumberField
                description='vagas'
                name='free_seats'
                value={formData.free_seats}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row className='mb-2'>
            <Col md={6}>
              <TextareaField
                description='Descrição (opcional)'
                rows='5'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Button content='Cadastrar' variant='primary' className='mt-3 w-100' type='submit' />
            </Col>
          </Row>
        </Form>
      </StyledContainer>
    </div>
  )
}

export default CreateCarpool
