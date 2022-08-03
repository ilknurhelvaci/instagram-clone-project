import { Avatar } from '@mui/material'
import React from 'react'
import './conversation.css'

export const Conversation = () => {
  return (
    <div className='conversation'>
        <Avatar className='conversation-img' src='/images/person/5.jpg'></Avatar>
        <div className="conversation-name">yunusinan</div>
    </div>
  )
}
