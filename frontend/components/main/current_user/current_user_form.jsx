import React from "react";

class CurrentUserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profileUrl: props.profileUrl,
      username: props.username,
      email: props.email,
      currentPassword: '',
      newPassword: '',
      photoFile: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

  update(type){
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[email]', this.state.email);
    formData.append('user[currentPassword]', this.state.currentPassword);
    formData.append('user[newPassword]', this.state.newPassword);

    if(this.state.photoFile){
      formData.append('user[photo]', this.state.photoFile);
    }

    this.props.update(formData, this.props.currentUserId);
  }

  handleFileSubmit(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ profileUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ profileUrl: '', photoFile: null });
    }
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

              <div 
                className="profile-photo-container"
                style={{backgroundImage: `url(${this.state.profileUrl})`}}>

                <input 
                  className="profile-input"
                  type="file" 
                  onChange={this.handleFileSubmit}/>
              </div>

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

              <h3>Current Password</h3>
              <input 
                type="password" 
                value={this.state.password}
                onChange={this.update('currentPassword')}/>

              <h3>New Password</h3>
              <input 
                type="password" 
                value={this.state.password}
                onChange={this.update('newPassword')}/>

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