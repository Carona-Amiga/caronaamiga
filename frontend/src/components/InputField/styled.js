import styled from 'styled-components'

import { Form } from 'react-bootstrap'

export const InputFieldStyles = styled(Form.Group)`
  label {
    color: var(--primary-text-color);
    margin-bottom: 5px !important;
    font-weight: 500;
  }

  input {
    border: 2px solid #d0cdcd;
    height: 50px;
    border-radius: 8px;
  }

  input:focus {
    outline: none !important;
    border-color: #6c63ff !important;
    box-shadow: 0 0 10px #6c63ff;
  }

  textarea {
    border: 2px solid #d0cdcd;
    border-radius: 8px;
  }

  textarea:focus {
    outline: none !important;
    border-color: #6c63ff !important;
    box-shadow: 0 0 10px #6c63ff;
  }
`
