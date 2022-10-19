import styled from 'styled-components'

export const CardContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-family: 14px;

  display: flex;
  padding: 1em 2em;

  background-color: #fff;
  width: 80%;

  margin-right: auto;
  margin-left: auto;

  margin-bottom: 1em;

  height: 115px;
  border-radius: 8px;
  box-shadow: 2px 3px 5px rgba(0,0,0,.25);

  justify-content: space-around;
  align-items: center;
`

export const PhotoProfile = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;

  background-color: grey;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const DriverDetails = styled.div`
  display: flex;
  margin-bottom: 0.4em;
`

export const CarpoolFirstDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4em;
`

export const CarpoolSecondDetails = styled.div`
  display: flex;
  margin-bottom: 0.4em;
`

export const Button = styled.button`
  min-width: 180px;
  background-color: #4D65F1;
  border-radius: 4px;
  color: #fff;
  border: none;
  height: 40px;
`

export const Result = styled.div`
  color: #6C63FF;
  padding-left: 4px;
`
