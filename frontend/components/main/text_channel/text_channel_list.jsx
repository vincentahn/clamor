import React from 'react';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const textChannels = this.props.textChannels.map(channel => (
      <div className="text-channel-item" key={`text-channel-${channel.id}`}>
        <div>
          <h3>{channel.name}</h3>
        </div>
      </div>
    ))

    return(
      <div className="text-channel-list">
        <div className="text-channel-header">
          <div>
            <h2>TEXT CHANNELS</h2>
          </div>
          <div>
            <button>+</button>
          </div>
        </div>
        
        {textChannels}
      </div>
    );
  }
};

export default TextChannelList;