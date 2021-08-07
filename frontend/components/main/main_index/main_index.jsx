import React from 'react';
import { Link } from 'react-router-dom';

class MainIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: ''
    }
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.currentUserId);
  }
  
  render(){
    const privateChannels = this.props.channels.map(channel => (
      <Link
        key={`private-channel-${channel.id}`}
        to={`/channels/@me/${channel.id}`}
        onClick={e => this.setState({ selected: channel.id })}>
        <div
          className={`private-channel-item
          ${this.state.selected === channel.id ? "selected" : ""}`}>
          <div className="channel-image-container">
            <img src={channel.profileUrl} alt="" />
          </div>
          <div>
            <h1>{channel.name}</h1>
          </div>
        </div>
      </Link>
    ))

    return(
      <div className="main-index">
        <div className="potential-search-bar">

        </div>
        <div className="main-index-list">
          <Link 
            to="/channels/@me/users"
            onClick={e => this.setState({ selected: 'users' })}>
            <div 
              className={`main-index-item 
              ${this.state.selected === 'users' ? "selected" : ""}`}>
              <h1>Users</h1>
            </div>
          </Link>

          <Link 
            to="/channels/@me/servers"
            onClick={e => this.setState({ selected: 'servers' })}>
            <div 
              className={`main-index-item 
              ${this.state.selected === 'servers' ? "selected" : ""}`}>
              <h1>Servers</h1>
            </div>
          </Link>

          <div className="direct-message-header-heading">
            <h2>DIRECT MESSAGES</h2>
          </div>
          {privateChannels}
        </div>
      </div>
    );
  }
}

export default MainIndex;