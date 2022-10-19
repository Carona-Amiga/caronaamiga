import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { InputFieldStyles } from './../InputField/styled'

function TextareaField ({ description, rows, ...props }) {
  return (
    <InputFieldStyles>
      <Form.Group>
        <Form.Label id={description}>{description}</Form.Label>
        <Form.Control as='textarea' htmlFor={description} rows={rows} {...props} />
      </Form.Group>
    </InputFieldStyles>
  )
}

TextareaField.propTypes = {
  description: PropTypes.string.isRequired,
  rows: PropTypes.string
}

export default TextareaField
