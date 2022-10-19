import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { InputFieldStyles } from './../InputField/styled'

function TextField ({ type, description, placeholder, ...props }) {
  return (
    <InputFieldStyles>
      <Form.Group>
        <Form.Label id={description}>{description}</Form.Label>
        <Form.Control type={type} htmlFor={description} placeholder={placeholder} {...props} />
      </Form.Group>
    </InputFieldStyles>
  )
}

// Set types for properties of component
TextField.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextField
