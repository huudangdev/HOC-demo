import React from 'react';
import Loading from './HOC/Loading';
import FeedItem from './FeedItem';

const Feed = props => {
    const {loadingTime} = props;
    
    return (
        <div className='feed'>
            <FeedItem contacts={props.contacts}/>
            <p>Loading time {loadingTime} seconds</p>
        </div>
    )
}

export default Loading('contacts')(Feed);