import React from 'react';
import Style from './Feed.module.css';
import FeedPostage from './FeedPostage';

function Feed() {
    return (
        <div className={Style.Container}>
            <FeedPostage />
        </div>
    );
}

export default Feed;
