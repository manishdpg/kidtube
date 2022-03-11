import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneIcon/>
            <h2>filter</h2>
        </div>
        <hr/>

        <ChannelRow
            image = "https://scontent.fdel11-1.fna.fbcdn.net/v/t1.6435-9/35634037_998867910291422_4450539854798782464_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ebX8EOmZPVEAX8wGarV&tn=CMPs4V8RYCfzBEuZ&_nc_ht=scontent.fdel11-1.fna&oh=00_AT9mLdnYxIVS1IG-aeLWxGAZbebo3-SINe5V0gyqpeiv_g&oe=6240AC53"
            channel = "Manish Prasad"
            verified
            sub="660K"
            noOfVideos={382}
            description="Your can find awesome programming tutorial hereBut I must explain 
                          to you how all this mistaken idea of denouncing pleasure and 
                          praising pain was born and I will give you a complete account 
                          of the system, and expound the actual teachings of the great
                           explorer of the truth, the master-builder of human happiness."
        />
        <hr />

        <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a free one hour training"
          timestamp="59 second ago"
          channel="Manish Prasad"
          title = "Let's build a you tube clone with react js"
          image="https://scontent.fdel11-1.fna.fbcdn.net/v/t1.6435-9/35634037_998867910291422_4450539854798782464_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ebX8EOmZPVEAX8wGarV&tn=CMPs4V8RYCfzBEuZ&_nc_ht=scontent.fdel11-1.fna&oh=00_AT9mLdnYxIVS1IG-aeLWxGAZbebo3-SINe5V0gyqpeiv_g&oe=6240AC53"
        />

        <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a free one hour training"
          timestamp="59 second ago"
          channel="Manish Prasad"
          title = "Let's build a you tube clone with react js"
          image="https://scontent.fdel11-1.fna.fbcdn.net/v/t1.6435-9/35634037_998867910291422_4450539854798782464_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ebX8EOmZPVEAX8wGarV&tn=CMPs4V8RYCfzBEuZ&_nc_ht=scontent.fdel11-1.fna&oh=00_AT9mLdnYxIVS1IG-aeLWxGAZbebo3-SINe5V0gyqpeiv_g&oe=6240AC53"
        />

        <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a free one hour training"
          timestamp="59 second ago"
          channel="Manish Prasad"
          title = "Let's build a you tube clone with react js"
          image="https://scontent.fdel11-1.fna.fbcdn.net/v/t1.6435-9/35634037_998867910291422_4450539854798782464_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ebX8EOmZPVEAX8wGarV&tn=CMPs4V8RYCfzBEuZ&_nc_ht=scontent.fdel11-1.fna&oh=00_AT9mLdnYxIVS1IG-aeLWxGAZbebo3-SINe5V0gyqpeiv_g&oe=6240AC53"
        />

        <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a free one hour training"
          timestamp="59 second ago"
          channel="Manish Prasad"
          title = "Let's build a you tube clone with react js"
          image="https://scontent.fdel11-1.fna.fbcdn.net/v/t1.6435-9/35634037_998867910291422_4450539854798782464_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ebX8EOmZPVEAX8wGarV&tn=CMPs4V8RYCfzBEuZ&_nc_ht=scontent.fdel11-1.fna&oh=00_AT9mLdnYxIVS1IG-aeLWxGAZbebo3-SINe5V0gyqpeiv_g&oe=6240AC53"
        />
    </div>
  )
}

export default SearchPage;