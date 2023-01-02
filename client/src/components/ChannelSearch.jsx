import React, {useState, useEffect} from 'react'
import { useChatContext } from 'stream-chat-react'

import {SearchIcon} from '../assets'

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    //async because it takes time to fetch the channels
    const getChannels = async (text) => {
        try{
            // TODO: Fetch channels
        }
        catch(error) {
            setQuery('');
        }
    }

    const onSearch = (event) => {
        // prevent reloading if user tries search
        event.preventDefault();

        setLoading(true);
                //entered input value
        setQuery(event.target.value);
        getChannels(event.target.value);
    }
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon/>
                </div>
                <input type="text" 
                className="channel-search__input__text" 
                placeholder="Search" 
                value={query} 
                onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch