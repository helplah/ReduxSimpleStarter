import React, { Component } from 'react';

// ES6 syntax {video, onVideoSelect} is the same as:
// const video = props.videos
// const onVideoSelect = props.onVideoSelect
const VideoListItem = ({video, onVideoSelect}) => {
    const url = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img src={url} />
                </div>
                <div>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
