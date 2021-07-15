import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ServerMainIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchServers(this.props.currentUserId);
  }

  render(){
    const checkPhoto = photo => photo ? photo : window.defaultProfilePic;
    
    const serverOptions = serverId => {
      const addServer = serverId => e => {
        this.props.addServer(this.props.currentUserId, serverId)
      }

      if(!this.props.subscribedServers.includes(serverId)){
        return(
          <div className="add-server-button">
            <FontAwesomeIcon 
              icon={faPlus}
              onClick={addServer(serverId)}/>
          </div>
        )
      }else return null;      
    }

    const serverIndexItems = this.props.servers.map(server => {      
      return(
        <div key={`server-${server.id}`} className="server-index-item">
          <div className="server-image-container">
            <img src={checkPhoto(server.profile_url)} />
          </div>
          <div className="server-name-container">
            <h1>{server.name}</h1>
          </div>
          <div className="server-options">
            {serverOptions(server.id)}
          </div>
        </div>
      );
    });

    return(
      <div className="server-main-index">
        <div className="server-index-header">
          <h1>Servers</h1>
        </div>
        <div className="server-index-body">
          <div className="server-index-list">
            {serverIndexItems}
          </div>
          <div className="server-index-side">

          </div>
        </div>
      </div>
    );
  }
};

export default ServerMainIndex;