import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, CardContainer, CarpoolFirstDetails, CarpoolSecondDetails, Content, DriverDetails, PhotoProfile, Result } from './styled'

export function CardResult ({ driver, rating, origin, destination, days, seats, time }) {
  const [driverState, setDriverState] = useState('')
  const [ratingState, setRatingState] = useState(0)
  const [originState, setOriginState] = useState('')
  const [destinationState, setDestinationState] = useState('')
  const [daysState, setDaysState] = useState(0)
  const [seatsState, setSeatsState] = useState('')
  const [timeState, setTimeState] = useState('')

  useEffect(() => {
    setDriverState(driver)
    setRatingState(rating)
    setOriginState(origin)
    setDestinationState(destination)
    setDaysState(days)
    setSeatsState(seats)
    setTimeState(time)
  }, [])

  return (
    <CardContainer>
      <PhotoProfile />
      <Content>
        <DriverDetails>
          <div className='me-3'>{driverState}</div>
          <div>
            <i className='bi bi-star-fill me-1'></i>
            {ratingState.toFixed(1)}
          </div>
        </DriverDetails>
        <CarpoolFirstDetails>
          <div className='d-flex me-3'>Saindo de: <Result>{originState}</Result></div>
          <div className='d-flex me-3'>Dias: <Result>{daysState}</Result></div>
          <div className='d-flex'>Vagas disponíveis: <Result>{seatsState}</Result></div>
        </CarpoolFirstDetails>
        <CarpoolSecondDetails>
          <div className='d-flex me-3'>Horário: <Result>{timeState}</Result></div>
          <div className='d-flex'>Indo para: <Result>{destinationState}</Result></div>
        </CarpoolSecondDetails>
      </Content>
      <Button>Estou interessado</Button>
    </CardContainer>
  )
}

CardResult.propTypes = {
  driver: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  seats: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired
}
