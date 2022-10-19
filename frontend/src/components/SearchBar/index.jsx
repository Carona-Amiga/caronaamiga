import React, { useState } from 'react'
import { api } from '../../utils/api'
import { getTokenInLS } from '../../utils/auth'
import { PlacesAutocomplete } from '../PlacesAutocomplete'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

export default function SearchBar ({ setCarpools }) {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [days, setDays] = useState('')
  const [time, setTime] = useState('')

  const handleOriginOnChange = (event) => setOrigin(event.target.value)
  const handleDestinationOnChange = (event) => setDestination(event.target.value)
  const handleDateOnChange = (event) => setDays(event.target.value)
  const handleTimeOnChange = (event) => setTime(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const token = getTokenInLS()

    const carpools = await api.get('/carpool', {
      headers: {
        Authorization: `Token ${token}`
      },
      params: {
        origin,
        destination,
        time,
        days
      }
    })

    if (carpools.data.length === 0) {
      toast.error('Nenhuma carona encontrada')
    }

    setCarpools(carpools.data)
  }

  return (
    <div className='d-flex m-5 justify-content-center'>
      <form className='search-bar d-flex box-shadow' onSubmit={handleSubmit}>
        <div className='row mx-2'>
          <div className='col-sm d-flex align-items-center'>
            <i className='bi bi-pin-map icon-sm icon-color me-2'></i>
            <PlacesAutocomplete
              className='border-0 w-100 outline-0 bg-transparent'
              type='search'
              name='origem'
              placeholder='Saindo de'
              aria-label='Saindo de'
              onChange={handleOriginOnChange}
              value={origin}
            />
          </div>

          <div className='col-sm d-flex align-items-center'>
            <i className='bi bi-pin-map icon-sm icon-color me-2'></i>
            <PlacesAutocomplete
              className='border-0 w-100 outline-0 bg-transparent'
              type='search'
              name='destino'
              placeholder='Indo para'
              aria-label='Indo para'
              onChange={handleDestinationOnChange}
              value={destination}
            />
          </div>

          <div className='col-sm d-flex p-2 align-items-center'>
            <i className='bi bi-calendar-week icon-sm icon-color me-2'></i>
            <input
              className='border-0 w-100 outline-0 bg-transparent'
              type='date'
              name='data'
              placeholder='Data'
              aria-label='Data'
              onChange={handleDateOnChange}
              value={days}
            />
          </div>

          <div className='col-md-auto d-flex align-items-center'>
            <i className='bi bi-clock icon-sm icon-color me-2'></i>
            <input
              className='border-0 w-100 outline-0 bg-transparent'
              type='time'
              name='horario'
              placeholder='Horário'
              aria-label='Horário'
              onChange={handleTimeOnChange}
              value={time}
            />
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <button className='d-flex align-items-center justify-content-center px-3 btn purple-b mx-1'>
            <i className='bi bi-search icon-sm white'></i>
          </button>
        </div>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  setCarpools: PropTypes.func.isRequired
}
