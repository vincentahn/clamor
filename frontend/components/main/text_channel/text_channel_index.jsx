import React from 'react';
import TextChannelListContainer from './text_channel_list_container';

const regex = new RegExp('\\d+', 'g');

class TextChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="text-channel-index">
        <div className="server-name-header">
          <h1>{this.props.server.name}</h1>
        </div>
          <TextChannelListContainer 
            serverId={this.props.server.id}
            history={this.props.history}/>
      </div>
    );
  }
};

export default TextChannelIndex;