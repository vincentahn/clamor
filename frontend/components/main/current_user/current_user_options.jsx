import React from 'react';

class CurrentUserOptions extends React.Component{
  render(){
    return(
      <div className="current-user-options">
        <h1>Hello, {this.props.username}</h1>
        <img src={this.props.profileUrl} alt="Profile Photo not Found" />
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default CurrentUserOptions;