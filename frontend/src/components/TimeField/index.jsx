import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { InputFieldStyles } from './../InputField/styled'

function TimeField ({ description, placeholder, ...props }) {
  return (
    <InputFieldStyles>
      <Form.Group>
        <Form.Label id={description}>{description}</Form.Label>
        <Form.Control type='time' htmlFor={description} placeholder={placeholder} {...props} />
      </Form.Group>
    </InputFieldStyles>
  )
}

TimeField.propTypes = {
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TimeField
