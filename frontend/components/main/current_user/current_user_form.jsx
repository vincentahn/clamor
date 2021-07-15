import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
      <div className="full-page-form current-user-page-form">
        <div className="full-page-form-column-1">
          <div className="full-page-form-options-list">
            <div className="full-page-option-set">
              <div className="full-page-form-options-heading">
                <h1>USER SETTINGS</h1>
              </div>
              <div className="full-page-form-option option-selected">
                <a>
                  <h1>My Account</h1>
                </a>
              </div>
            </div>

            <div className="full-page-special-option-set">
              <div className="full-page-form-option special-option">
                <a onClick={this.props.logout}>
                  <h1>Logout</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="full-page-form-column-2">
          <div className="my-account-edit">
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="full-page-form-heading">
                  <h1>My Account</h1>
                </div>
                <div className="full-page-form-box">
                  <div className="full-page-form-box-header">
                    <div 
                      className="profile-photo-container"
                      style={{backgroundImage: `url(${this.state.profileUrl})`}}>

                      <input 
                        className="profile-input"
                        type="file" 
                        onChange={this.handleFileSubmit}/>
                    </div>
                    <div className="current-user-username">
                      <h2>{this.props.username}</h2>
                    </div>
                    <div className="button-container">
                      <button className="current-user-edit-button">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div className="full-page-inner-form">
                    <div className="form-field">
                      <h3>USERNAME</h3>
                      <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}/>
                    </div>
                    <div className="form-field">
                      <h3>EMAIL</h3>
                      <input 
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}/>
                    </div>
                    <div className="form-field">
                      <h3>CURRENT PASSWORD</h3>
                      <input 
                        type="password" 
                        value={this.state.currentPassword}
                        onChange={this.update('currentPassword')}/>
                    </div>
                    <div className="form-field">
                      <h3>NEW PASSWORD</h3>
                      <input 
                        type="password" 
                        value={this.state.newPassword}
                        onChange={this.update('newPassword')}/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="full-page-form-column-3">
          <div className="form-close-container">
            <a 
              className="full-page-form-close-button"
              onClick={this.props.closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
            <div className="current-heading">
              <h1>ESC</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentUserForm;