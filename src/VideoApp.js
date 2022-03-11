import React from 'react';
import ReactPlayer from 'react-player';



function VideoApp() {
  return (
    <div className="VideoApp">
        <ReactPlayer controls url="https://www.youtube.com/watch?v=VAG-6f8qMvI"/>
    </div>
  )
}

export default VideoApp