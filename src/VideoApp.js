import React from 'react';
import ReactPlayer from 'react-player';



function VideoApp({video}) {
  return (
    <div className="VideoApp">
        <ReactPlayer controls url={video}
          width={300}
          height={200}
        />
    </div>
  )
}

export default VideoApp