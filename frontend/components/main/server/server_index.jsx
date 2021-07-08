import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component{
  render(){
    const serverLinks = this.props.servers.map(server => (
      <div key={server.id}>
        <Link to={`/channels/${server.id}`}>
          <img src={server.profileUrl} alt="" />
        </Link>
      </div>
    ))

    return(
      <div className="server-index">
        <div>
          <Link to="/channels/@me">
            <img src={this.props.currentUserPhoto} alt="Profile Photo not Found" />
          </Link>
        </div>
        {serverLinks}
      </div>
    );
  }
}

export default ServerIndex;