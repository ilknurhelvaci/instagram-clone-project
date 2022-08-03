import { Avatar } from '@mui/material';
import React from 'react'
import './chatOnline.css'

export const ChatOnline = () => {
  return (
    <div className='chat-online'>
        <div className="chat-online-friend">
            <div className="chat-online-img-container">
            <Avatar src="/images/person/5.jpg"
              sx={{widht:32, height:32}}/>
              <span className="chat-online-badge"></span>
            </div>
            <div className="chat-online-name">yunusinan</div>
        </div>

    </div>
  );
};
