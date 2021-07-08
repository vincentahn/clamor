import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component{
  render(){
    const serverLinks = this.props.servers.map(server => (
      <div key={server.id} className="server-index-item" title={server.name}>
        <Link to={`/channels/${server.id}`}>
          <img 
            src={server.profileUrl} 
            alt="" />
        </Link>
      </div>
    ))

    return(
      <div className="server-index">
        <div className="server-index-item" title="Home">
          <Link to="/channels/@me">
            <img 
              src={this.props.currentUserPhoto} 
              alt="Profile Photo not Found" />
          </Link>
        </div>
        {serverLinks}
        <div className="server-index-item" title="Add a Server">
          <a>
            +
          </a>
        </div>
      </div>
    );
  }
}

export default ServerIndex;