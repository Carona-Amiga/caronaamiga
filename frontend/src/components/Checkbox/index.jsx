import React from 'react'
import PropTypes from 'prop-types'

function Checkbox ({ content, ...props }) {
  return (
    <div className='form-check'>
      <label className='form-check-label'>
        <input type='checkbox' className='form-check-input' {...props} />
        {content}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  content: PropTypes.string.isRequired
}

export default Checkbox
