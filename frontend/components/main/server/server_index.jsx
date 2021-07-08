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
      this.props.openServerEditForm(this.state.dropdown.id);
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

  render(){
    const serverLinks = this.props.servers.map(server => (
      <div 
        key={server.id} 
        className="server-index-item" 
        title={server.name}
        onContextMenu={this.openContextMenu(server.id)}>

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
                <a>
                  <li>Delete Server</li>
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