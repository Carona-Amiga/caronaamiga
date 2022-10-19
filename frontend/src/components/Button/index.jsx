import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled'

function Button ({ content, ...props }) {
  return (
    <Container {...props}>{content}</Container>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired
}

export default Button
