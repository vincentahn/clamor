import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ServerIndex extends React.Component{
  constructor(props){
    super(props);
    this.handleServerCreate = this.handleServerCreate.bind(this);
  }

  handleServerCreate(e){
    e.preventDefault();
    this.props.openServerCreateForm();
  }

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
          <a onClick={this.handleServerCreate}>
            <FontAwesomeIcon icon={faPlus} className="add-server-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default ServerIndex;