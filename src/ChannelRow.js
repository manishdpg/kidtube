import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./ChannelRow.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image, channel, subs, noOfVideos, description,verified}) {
  return (
    <div className="channelRow">
        <AccountCircleIcon className="channelRow__loge" alt={channel} src={image}/>
        <div className="channelRow__text">
            <h4>
            {channel} {verified && <CheckCircleIcon/>}
            </h4>
            <p>
                {subs} subscribers * {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow;