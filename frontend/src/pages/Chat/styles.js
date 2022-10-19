import styled from 'styled-components'
import { Button as BootstrapButton } from 'react-bootstrap'

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Background = styled.div`
  background-color: #F4F6FF;
  flex: 1;
`

export const Container = styled.div`
  max-width: 1230px;
  height: 550px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  margin-bottom: 1em;
  font-family: "Poppins";
  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.25);
`

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 30%;
  padding: 0;
  margin: 0;
  border-right: 1px solid #ccc;

  & > li:last-child {
    border-bottom: none;
  }
`

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1em 1em;
  border-bottom: 4px solid #6C63FF;
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .profile-photo {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #E0AA4A;
    }

    .name {
      font-size: 16px;
      font-weight: bold;
    }

    .username {
      font-size: 14px;
      font-weight: 500;
    }

    .name, .username {
      color: #6C63FF;
    }
  }

  .message {
    font-size: 14px;
    font-weight: 300;
    color: #6C63FF;
  }
`

export const MessageDetails = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  
  border-bottom: 4px solid #6C63FF;

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em 1em;
    background-color: #6C63FF;
    color: #fff;

    .carpool-name {
      font-size: 1rem;
      font-weight: 500;
    }

    button {
      background-color: #fff;
      color: #6C63FF;
      font-size: 14px;
    }
  }

  .chat {
    flex: 1;
    padding: 1em;
    background-color: transparent;
    
    flex-direction: column;
    display: flex;
    
    .chat-history {
      flex: 1;
      margin-bottom: 1em;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      
      padding: 1em 0 0;
    }
  }
`

export const MessageInput = styled.form`
  display: flex;
  min-height: 50px;
  border: 2px solid #D0CDCD;
  border-radius: 8px;
  background-color: #fff;

  input[type=text] {
    flex: 1;
    border: none;
    padding: 0 4px;
  }

  button {
    border: none;
    background-color: transparent;
    width: 50px;
  }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  min-width: 500px;
  margin-left: ${props => props.sent ? '0px' : 'auto'};
  margin-right: ${props => props.sent ? 'auto' : '0px'};
  font-size: 14px;
  margin-bottom: 1em;

  .info {
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.sent ? 'row-reverse' : 'row'}
  }

  .content {
    border-radius: 8px;
    border-top-left-radius: ${props => props.sent ? '0px' : '8px'};
    border-top-right-radius: ${props => props.sent ? '8px' : '0px'};
    background-color: ${props => props.sent ? 'rgba(108, 99, 255, 0.71)' : '#4D65F1'};
    padding: 10px 12px;
    color: #fff;
  }
`

export const Button = styled(BootstrapButton)`
  height: 35px;
  border: 0px;
  border-radius: 6px;
  font-weight: 500;
  font-family: 14px;
  padding: 0 15px;
`

export const Label = styled.div`
  padding: 0.5em 0.8em;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#4D65F1'};
  margin: 1rem auto 0;
  border-radius: 1.25rem;
  font-size: 0.9rem;
  color: ${props => props.textColor ? props.textColor : '#fff'};
`
