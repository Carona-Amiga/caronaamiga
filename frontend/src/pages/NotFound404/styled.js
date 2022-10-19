import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
`

export const MessageContainer = styled.div`
  box-shadow: 0px 0px 4px #ccc;
  border-radius: 4px;

  padding: 1em 2em;

  width: 300px;
  min-height: 250px;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Text = styled.p`
  display: block;
  text-align: center;

  font-family: 1.2rem;
`
