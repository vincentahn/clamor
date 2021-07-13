import React from 'react';
import TextChannelListContainer from './text_channel_list_container';

const regex = new RegExp('\\d+', 'g');

class TextChannelIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = { fetched: false };
    this.fetchServer = this.fetchServer.bind(this);
    this.received = this.received.bind(this);
  }

  fetchServer(location){
    this.setState({ fetched: false });

    if(location){
      let numbers = location.pathname.match(regex);
      this.props.fetchServer(this.props.currentUserId, numbers[0], this.received);
    }else{
      this.props.fetchServer(this.props.currentUserId, this.props.server.id, this.received);
    }
  }

  received(){
    this.setState({ fetched: true });
  }
  
  componentDidMount(){
    this.fetchServer();

    this.unlisten = this.props.history.listen(location => this.fetchServer(location));
  }

  componentWillUnmount(){
    this.unlisten();
  }

  render(){
    return(
      <div className="text-channel-index">
        <div className="server-name-header">
          <h1>{this.props.server.name}</h1>
        </div>
        
        {this.state.fetched 
          ?
            <TextChannelListContainer serverId={this.props.server.id} />
          :
            null
        }
      </div>
    );
  }
};

export default TextChannelIndex;