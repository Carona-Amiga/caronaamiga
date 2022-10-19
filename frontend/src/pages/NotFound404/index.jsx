import { Button } from 'react-bootstrap'
import React from 'react'
import { Container, MessageContainer, Text } from './styled'
import { useNavigate } from 'react-router-dom'

export function NotFound404 () {
  const navigate = useNavigate()

  const goToLoginPage = () => {
    navigate('/login')
  }

  return (
    <Container>
      <MessageContainer>
        <Text>Página não encontrada. Clique para ir página de login.</Text>
        <Button type='button' variant='secondary' color='white' onClick={goToLoginPage}>Login</Button>
      </MessageContainer>
    </Container>
  )
}
