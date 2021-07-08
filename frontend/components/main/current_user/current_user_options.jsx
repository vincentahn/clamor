import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class CurrentUserOptions extends React.Component{
  render(){
    return(
      <div className="current-user-options">
        <img src={this.props.profileUrl} alt="Profile Photo not Found" />
        <h1>{this.props.username}</h1>
        <a onClick={this.props.openUserForm}>
          <div className="settings-icon">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </a>
      </div>
    );
  }
}

export default CurrentUserOptions;