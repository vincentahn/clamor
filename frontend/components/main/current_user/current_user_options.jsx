import React from 'react';

class CurrentUserOptions extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello, {this.props.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default CurrentUserOptions;