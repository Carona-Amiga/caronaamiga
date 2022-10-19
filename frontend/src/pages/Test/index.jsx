import React, { useState, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'
import { useAuth } from '../../hooks/useAuth'

export function TestWebsocket () {
  const [messages, setMessages] = useState([])
  const { user } = useAuth()

  const { sendJsonMessage } = useWebSocket('ws://localhost:8000', {
    onOpen: () => {
      console.log('Connected!')
    },
    onClose: () => {
      console.log('Disconneted!')
    },
    onMessage: (event) => {
      const data = JSON.parse(event.data)

      switch (data.type) {
      case 'list-messages':
        console.log(data)
        setMessages([...data.data])
        break
      default:
        console.error('Unknown message type!')
        break
      }
    }
  })

  useEffect(() => {
    sendJsonMessage({
      type: 'list-messages',
      user_id: user.id
    })
  }, [])

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))}

      <button onClick={() => {
        sendJsonMessage({
          type: 'create-message',
          message: 'Hello World',
          sender: user.id,
          receiver: 1,
          carpool: 1
        })
      }}>Say Hi</button>
    </>
  )
}
