import React from "react";

class CurrentUserForm extends React.Component{
  render(){
    return(
      <div className="current-user-form">
        <button onClick={this.props.closeModal}>X</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default CurrentUserForm;