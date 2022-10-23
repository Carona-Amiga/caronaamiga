import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  padding: 1em;

  .auth-main-col {
    margin-right: 0;
    margin-left: auto;
    padding: 0 1.5em;
  }

  .auth-heading {
    font-size: 1.5rem;
  }

  .auth-option {
    font-size: 0.875rem;

    &>a {
      color: $theme-text-color-secondary
    }
  }

  .forgot-password {
    >a {
      color: #6c63ff
    }
  }

  .forgot-password:hover{
    >a {
      color: $theme-text-color-secondary
    }
  }

  .button-createaccount{
    color: #6c63ff;
    outline: none;
    text-decoration: none !important;
  }

  .text-createaccount{
    font-weight: bold;
    color: #6c63ff;
    cursor: pointer;
    padding-left: 10px;
  }

  .text-createaccount:hover{
    color: #7f79ff;
  }

  .leftText{
    text-align: left !important;
  }

  input:focus {
    outline: none !important;
    border-color: #6c63ff !important;
    box-shadow: 0 0 10px #6c63ff;
  }
`
