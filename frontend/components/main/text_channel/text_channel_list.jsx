import React from 'react';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props);
    this.props.history.push(`/channels/${this.props.server.id}/${this.props.textChannels[0].id}`);
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