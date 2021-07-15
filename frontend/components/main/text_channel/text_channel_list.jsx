import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHashtag } from '@fortawesome/free-solid-svg-icons';

class TextChannelList extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleOpenChannelCreate = this.handleOpenChannelCreate.bind(this);
    this.handleChangeChannel = this.handleChangeChannel.bind(this);
  }

  componentDidMount(){
    if(this.props.textChannels[0]){
      this.props.history.push(`/channels/${this.props.server.id}/${this.props.textChannels[0].id}`);

      this.setState({ 
        textChannelId: this.props.textChannels[0].id,
        serverId: this.props.server.id
      });
    }
  }
  
  componentDidUpdate(){
    if(this.props.server.id !== this.state.serverId){
      this.setState({
        textChannelId: undefined,
        serverId: this.props.server.id
      })
    }

    if(this.props.textChannels[0] && !this.state.textChannelId){
      this.props.history.push(`/channels/${this.props.server.id}/${this.props.textChannels[0].id}`);

      this.setState({ 
        textChannelId: this.props.textChannels[0].id,
        serverId: this.props.server.id
      });
    }
  }

  handleOpenChannelCreate(e){
    e.preventDefault();
    this.props.openChannelCreate(this.props.server.id);
  }

  handleChangeChannel(textChannelId){
    return e => {
      this.props.history.push(`/channels/${this.props.server.id}/${textChannelId}`);

      this.setState({ 
        textChannelId,
        serverId: this.props.server.id
      });
    }
  }

  render(){
    const textChannels = this.props.textChannels && this.props.textChannels[0] ? (
        this.props.textChannels.map(channel => (
          <a 
            onClick={this.handleChangeChannel(channel.id)}
            key={`text-channel-${channel.id}`}>

            <div 
              className={`text-channel-item 
                ${channel.id === this.state.textChannelId ? "selected" : ""}`}>
                <div className="hash-icon">
                  <FontAwesomeIcon icon={faHashtag} />
                </div>
                <div className="text-channel-name">
                  <h3>{channel.name}</h3>
                </div>
            </div>
          </a>)))
      : (<div></div>);

    return(
      <div className="text-channel-list">
        <div className="text-channel-header">
          <div className="text-channel-header-heading">
            <h2>TEXT CHANNELS</h2>
          </div>
          <div className="add-text-channel-container">
            <FontAwesomeIcon
              className="add-text-channel-button" 
              icon={faPlus} 
              onClick={this.handleOpenChannelCreate} />
          </div>
        </div>
        
        {textChannels}
      </div>
    );
  }
};

export default TextChannelList;