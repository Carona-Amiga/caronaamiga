import React, { useState, useEffect } from 'react'
import { SendFilled } from '@fluentui/react-icons'

import { getFormatedTime } from './functions'
import { Header } from '../../components/Header'
import { api } from '../../utils/api'

import {
  Container, MessageDetails,
  UserItem,
  UserList,
  Button,
  MessageInput,
  Message,
  Background,
  Body,
  Label
} from './styles'
import { useAuth } from '../../hooks/useAuth'
import { getTokenInLS } from '../../utils/auth'

function Chat () {
  const [messageInput, setMessageInput] = useState('')
  const [chatUsers, setChatUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [messagesListed, setMessagesListed] = useState([])
  const [busy, setBusy] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const token = getTokenInLS()

    const fetchAPI = async () => {
      const { data: users } = await api.get('/user-message/user', {
        headers: {
          Authorization: `Token ${token}`
        }
      })

      return users
    }

    fetchAPI().then((users) => {
      setChatUsers(users)
    })
  }, [])

  useEffect(() => {
    if (selectedUser && !selectedUser.carpool) {
      const token = getTokenInLS()

      const fetchAPI = async () => {
        const {
          data: messages
        } = await api.get(`/user-message/secondary-user/${selectedUser.id}`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })

        return messages
      }

      fetchAPI().then((messages) => {
        setMessagesListed(messages)
        setSelectedUser({ ...selectedUser, carpool: messages[0].carpool })
        setBusy(false)
      })
    }
  }, [selectedUser])

  function onChange (event) {
    setMessageInput(event.target.value)
  }

  function selectUserChat (user) {
    setSelectedUser(user)
    setBusy(true)
  }

  async function onSubmit (event) {
    event.preventDefault()

    try {
      const formData = {
        content: messageInput,
        receiver: selectedUser.id,
        sender: user.id,
        carpool: selectedUser.carpool.id
      }

      const token = getTokenInLS()

      await api.post('/user-message', formData, {
        headers: {
          Authorization: `Token ${token}`
        }
      })

      location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Body>
      <Header />
      <Background className='pt-5'>
        <Container className='border'>
          <UserList>
            {chatUsers.length === 0
              ? (<Label>Nenhum histórico</Label>)
              : (
                <>
                  {chatUsers.map(({ user, last_message: lastMessage }) => (
                    <UserItem key={user.id} onClick={() => selectUserChat(user)}>
                      {/* Header */}
                      <div className='header'>
                        {/* Profile photo */}
                        <div className='profile-photo me-2'></div>
                        {/* Username and @ */}
                        <div className='username-details'>
                          <div className='name'>{user.name}</div>
                          <div className='username'>@{user.username}</div>
                        </div>
                      </div>
                      {/* Message */}
                      <div className='message'>
                        {lastMessage && lastMessage.content}
                      </div>
                    </UserItem>
                  ))}
                </>
              )}
          </UserList>

          <MessageDetails>
            {(selectedUser && !busy) && (
              <>
                <div className='topbar'>
                  <div className='carpool-name'>{selectedUser.carpool.name}</div>
                  <Button>Detalhes</Button>
                </div>

                <div className='chat'>
                  <div className='chat-history'>
                    {messagesListed.map(message => (
                      <Message key={message.id} sent={message.sender.id === user.id}>
                        <div className='info'>
                          <div>
                            {message.sender.id === user.id
                              ? 'Você'
                              : message.sender.name}
                          </div>
                          <div>{getFormatedTime(message.created_at)}</div>
                        </div>
                        {/* Message */}
                        <div className='content'>
                          {message.content}
                        </div>
                      </Message>
                    ))}
                  </div>

                  {/* Message input */}
                  <MessageInput onSubmit={onSubmit}>
                    <input type='text' name='message' onChange={onChange} />
                    <button type='submit'>
                      <SendFilled fontSize='25px' color='#606060' />
                    </button>
                  </MessageInput>
                </div>
              </>
            )}
          </MessageDetails>
        </Container>
      </Background>
    </Body>
  )
}

export default Chat
