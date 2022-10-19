import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { InputFieldStyles } from '../../components/InputField/styled'

function NumberField ({ description, ...props }) {
  return (
    <InputFieldStyles>
      <Form.Group>
        <Form.Label id={description}>Vagas</Form.Label>
        <Form.Control type='number' htmlFor={description} {...props} />
      </Form.Group>
    </InputFieldStyles>
  )
}

NumberField.propTypes = {
  description: PropTypes.string.isRequired
}

export default NumberField
