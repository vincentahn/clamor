import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ServerIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdown: {
        open: false,
        id: 0,
        left: 0,
        right: 0
      }
    }

    this.openContextMenu = this.openContextMenu.bind(this);
    this.closeContextMenu = this.closeContextMenu.bind(this);
    this.handleServerCreate = this.handleServerCreate.bind(this);
    this.handleServerEdit = this.handleServerEdit.bind(this);
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    this.handleOpenServer = this.handleOpenServer.bind(this);
  }

  openContextMenu(id){
    return e => {
      e.preventDefault();

      this.setState({
        dropdown: {
          open: true,
          id,
          left: e.pageX,
          top: e.pageY
        }
      });
    }
  }

  closeContextMenu(e){
    e.preventDefault();
    
    this.setState({
      dropdown: {
        open: false,
        id: 0,
        left: 0,
        top: 0
      }
    });
  }

  handleServerCreate(e){
    e.preventDefault();
    this.props.openServerCreateForm();
  }

  handleServerEdit(e){
    e.preventDefault();
    
    if(this.state.dropdown.id !== 0){
      this.props.openServerEditForm(this.state.dropdown.id, this.props.history);
    }

    this.closeContextMenu(e);
  }

  handleUnsubscribe(e){
    e.preventDefault();

    if(this.state.dropdown.id !== 0){
      this.props.unsubscribeServer(this.props.currentUserId, this.state.dropdown.id);
    }

    this.closeContextMenu(e);
  }

  handleOpenServer(serverId){
    let that = this;

    return e => {
      const openLink = () => that.props.history.push(`/channels/${serverId}`);

      this.props.fetchServer(this.props.currentUserId, serverId).then(() => openLink())
    }
  }

  render(){
    const serverLinks = this.props.servers ? this.props.servers.map(server => (
      <div 
        key={`subscribed-server-${server.id}`} 
        className="server-index-item" 
        onContextMenu={this.openContextMenu(server.id)}>

        <div className="before">
          <p>{server.name}</p>
        </div>
        <a onClick={this.handleOpenServer(server.id)}>
          <img 
            src={server.profileUrl} 
            alt="" />
        </a>
        <div className="after"></div>
      </div>
    )) : null;

    return(
      <div className="server-index">
        <div className="server-index-item">
          <div className="before">
            <p>Home</p>
          </div>
          <Link to="/channels/@me">
            <img 
              src={this.props.currentUserPhoto} 
              alt="Profile Photo not Found" />
          </Link>
          <div className="after"></div>
        </div>
        {serverLinks}
        <div className="server-index-item">
          <div className="before">
            <p>Add a Server</p>
          </div>
          <a onClick={this.handleServerCreate}>
            <FontAwesomeIcon icon={faPlus} className="add-server-icon" />
          </a>
          <div className="after"></div>
        </div>

        { this.state.dropdown.open && this.state.dropdown.id
          ? (
            <div 
              className="server-context-menu"
              style={{ left: this.state.dropdown.left, top: this.state.dropdown.top }}
              onMouseLeave={this.closeContextMenu}>
              <ul>
                <a onClick={this.handleServerEdit}>
                  <li>Edit Server</li>
                </a>
                <a onClick={this.handleUnsubscribe}>
                  <li>Leave Server</li>
                </a>
              </ul>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default ServerIndex;