import React from "react";

class CurrentUserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profileUrl: props.profileUrl,
      username: props.username,
      email: props.email,
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type){
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.update(this.state, this.props.currentUserId);
  }

  render(){
    return(
      <div className="current-user-form">
        <div className="column-1">
          <nav>
            <a>My Account</a>
            <a onClick={this.props.logout} className="logout-link">Logout</a>
          </nav>
        </div>
        <div className="column-2">
          <form onSubmit={this.handleSubmit}>
              <h1>My Account</h1>

              <a>
                <img src={this.state.profileUrl} alt="" />
              </a>

              <h3>Username</h3>
              <input 
                type="text" 
                value={this.state.username}
                onChange={this.update('username')}/>
              
              <h3>Email</h3>
              <input 
                type="text" 
                value={this.state.email}
                onChange={this.update('email')}/>

              <h3>Password</h3>
              <input 
                type="password" 
                value={this.state.password}
                onChange={this.update('password')}/>

              <button>Edit Profile</button>
          </form>
        </div>
        <div>
          <button onClick={this.props.closeModal}>X</button>
        </div>
        
      </div>
    );
  }
}

export default CurrentUserForm;