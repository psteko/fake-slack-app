import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

//import components
import { ChannelListContainer, ChannelContainer, Auth } from './components';

//import styles
import './App.css'

// insert API key from Stream Chat API
const apiKey ='mj5eytt8gc42';
const client = StreamChat.getInstance(apiKey);
const authToken = false;

const App = () => {
  
  if(!authToken) 
    return <Auth/>

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  )
}

export default App
