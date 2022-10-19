import React from 'react'
import Autocomplete from 'react-google-autocomplete'

export function PlacesAutocomplete ({ ...props }) {
  const API_KEY = 'AIzaSyDwiiPukngJgjXYWaCigclQGormAUwdoSg'

  const options = {
    types: ['locality', 'sublocality'],
    componentRestrictions: { country: 'br' },
    language: 'pt-BR'
  }

  return (
    <Autocomplete
      apiKey={API_KEY}
      options={options}
      {...props}
    />
  )
}
