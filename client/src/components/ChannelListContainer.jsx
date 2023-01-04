import React from 'react'
// import from stream chat
// import cookies
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import custom components from "components"
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
// import icons
import SlackIcon from '../assets/slack.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();

const SideBar = ({logout})=>(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={SlackIcon} alt="Slack" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
    
)

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Fake Slack App</p>
    </div>
)

export const ChannelListContainer = () => {
    
    const logout = () =>{
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');
        // after deleting the cookies, reload the page to get back to the authentication page
        window.location.reload();
    }
    return (
            <>
                <SideBar logout={logout}/>
                <div className="channel-list__list__wrapper">
                    <CompanyHeader/>
                    <ChannelSearch/>
                    <ChannelList
                        filters={{}}
                        channelRenderFilterFn={()=>{}}
                        List={(listProps) => (
                            <TeamChannelList
                            {...listProps}
                            type="team"
                            />
                        )}
                        Preview={(previewProps)=>(
                            <TeamChannelPreview
                            {...previewProps}
                            type="team"
                            />
                        )}
                    />
                    <ChannelList
                        filters={{}}
                        channelRenderFilterFn={()=>{}}
                        List={(listProps) => (
                            <TeamChannelList
                            {...listProps}
                            type="messaging"
                            />
                        )}
                        Preview={(previewProps)=>(
                            <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                            />
                        )}
                    />
                </div>
            </>
    );
}

export default ChannelListContainer;
