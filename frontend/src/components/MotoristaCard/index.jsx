import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardImg,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'
import PropTypes from 'prop-types'

export function MotoristaCard ({ name, rating, carpools }) {
  const [nameState, setNameState] = useState('')
  const [ratingState, setRatingState] = useState(0)
  const [carpoolsState, setCarpoolState] = useState([])

  useEffect(() => {
    setNameState(name)
    setRatingState(rating)
    setCarpoolState(carpools)
  }, [])

  return (
    <Card className='border-0 mb-4 shadow-sm rounded-3 purple'>
      <Card.Body className='d-flex'>
        <div className='d-flex justify-content-between flex-column w-100'>
          <div className='d-flex justify-content-between mb-4'>
            <div>
              <Card.Title className='white font-bold font-normal mb-0'>
                {nameState}
              </Card.Title>
              <span className='font-small white d-flex align-items-center'>
                <i className='bi bi-star-fill'></i>
                <span className='ms-1'>{ratingState.toFixed(1)}</span>
              </span>
            </div>

            <div className='profile-small rounded-circle'>
              <CardImg to='' />
            </div>
          </div>

          <ListGroup>
            <ListGroupItem
              className='list-group-item-action p-0 text-body border-0 bg-transparent'
            >
              {carpoolsState.map(carpool => (
                <div key={carpool.id}
                  className='d-flex justify-content-between w-100 py-2 px-1 rounded align-items-center mb-2 bg-white border-1'>
                  <div className='me-4'>{carpool.name}</div>

                  <Button
                    type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#'
                    data-bs-driver=''
                  >
                    <i className='bi bi-chat-fill'></i>
                  </Button>
                </div>
              ))}
            </ListGroupItem>
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  )
}

MotoristaCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  carpools: PropTypes.array.isRequired
}
