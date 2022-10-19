import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export function CaronaCard ({ name, driver, origin, destination }) {
  const [nameState, setNameState] = useState('')
  const [driverState, setDriverState] = useState('')
  const [originState, setOriginState] = useState('')
  const [destinationState, setDestinationState] = useState('')

  useEffect(() => {
    setNameState(name)
    setDriverState(driver)
    setOriginState(origin)
    setDestinationState(destination)
  }, [])

  return (
    <Card
      className='mb-4 border-0 shadow-sm rounded-3 text-decoration-none text-body purple'
      href='#'
    >
      <Card.Body>
        <Card.Title className='mb-0 font-bold font-normal white'>
          {nameState}
        </Card.Title>
        <span className='font-small font-light white'>
          {driverState}
        </span>
        <Card.Text className='my-3 white'>
          <div>Saindo: {originState}</div>
          <div>Destino: {destinationState}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

CaronaCard.propTypes = {
  name: PropTypes.string.isRequired,
  driver: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
}
