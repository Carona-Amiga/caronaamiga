import React, { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { CaronaCard } from '../../components/CaronaCard'
import { MotoristaCard } from '../../components/MotoristaCard'
import SearchBar from '../../components/SearchBar'
import { api } from '../../utils/api'
import { getTokenInLS } from '../../utils/auth'
import { formatAddress } from '../../utils/formatAddress'
import { CardResult } from '../../components/CardResult'
import { ToastContainer } from 'react-toastify'

function Home () {
  const [recemCriadaCaronas, setRecemCriadaCaronas] = useState([])
  const [newerDrivers, setNeverDrivers] = useState([])
  const [carpools, setCarpools] = useState([])

  const fetchCaronas = async () => {
    const token = getTokenInLS()

    const { data: carpools } = await api.get('/carpool', {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    return carpools
  }

  const fetchDrivers = async () => {
    const token = getTokenInLS()

    const { data: drivers } = await api.get('/user/driver', {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    return drivers
  }

  useEffect(() => {
    fetchCaronas().then((carpools) => {
      setRecemCriadaCaronas(carpools)
    })

    fetchDrivers().then((drivers) => {
      setNeverDrivers(drivers)
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <SearchBar setCarpools={setCarpools} />
      <ToastContainer
        autoClose={3000}
        position='top-right'
        pauseOnFocusLoss={false}
      />
      {carpools.length > 0 && (
        <div className='d-flex mx-4 mb-3 justify-content-center homepage container-md mx-auto' style={{ flexDirection: 'column' }}>
          <h4 style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto', marginBottom: '1em', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>Resultados ({carpools.length})</h4>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {carpools.map(carpool => (
              <CardResult
                key={carpool.id}
                driver={carpool.driver.name}
                origin={formatAddress(carpool.start_address)}
                destination={formatAddress(carpool.destination_address)}
                seats={carpool.free_seats}
                time={carpool.time}
                rating={carpool.driver.rating}
                days={carpool.days}
              />
            ))}
          </div>
        </div>
      )}
      <div className='d-flex px-3 mb-3 justify-content-center homepage container-xxl mx-auto'>
        {!(carpools.length > 0) && (
          <section className='w-50 me-5'>
            <h5 className='mb-4'>Caronas criadas recentemente</h5>

            <div className='d-flex justify-content-between flex-wrap'>
              {recemCriadaCaronas.map(carona => (
                <CaronaCard
                  key={carona.id}
                  name={carona.name}
                  driver={carona.driver.name}
                  origin={formatAddress(carona.start_address)}
                  destination={formatAddress(carona.destination_address)}
                />
              ))}
            </div>
          </section>
        )}

        {!(carpools.length > 0) && (
          <section className='w-50'>
            <h5 className='mb-4'>Motoristas novos</h5>
            <div className='d-flex justify-content-between flex-wrap'>
              {newerDrivers.map(driver => (
                <MotoristaCard
                  key={driver.id}
                  name={driver.name}
                  rating={driver.rating}
                  carpools={driver.carpools}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Home
