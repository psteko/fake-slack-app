import React, {useState} from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

//import components
import { ChannelListContainer, ChannelContainer, Auth } from './components';

//import styles
import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

// insert API key from Stream Chat API
const apiKey ='mj5eytt8gc42';
const client = StreamChat.getInstance(apiKey);
const authToken = cookies.get("token");

//connect the user in order to get all the users messages
if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {
  // isCreating and isEditing states both need to be known
  // inside the ChannelContainer and ChannelListContainer
  // we send them as props
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // if an authentication token is not present, show the authentication page
  if(!authToken) 
    return <Auth/>
  // else show the chat UI
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  )
}

export default App
