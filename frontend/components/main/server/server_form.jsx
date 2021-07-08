import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ServerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profileUrl: props.profileUrl,
      name: props.name,
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
    console.log(formData);
    formData.append('server[name]', this.state.name);

    if(this.state.photoFile){
      formData.append('server[server_photo]', this.state.photoFile);
    }

    console.log(this.state);
    console.log(formData);

    this.props.action(formData, this.props.currentUserId);
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
      <div className="server-form">
        <div>
          <a
            onClick={this.props.closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>

        <form onSubmit={this.handleSubmit}>
          <h1>Customize your server</h1>

          <div
            style={{backgroundImage: `url(${this.state.profileUrl})`}}>
            
            <input 
              className="profile-input"
              type="file" 
              onChange={this.handleFileSubmit}/>
          </div>

          <h3>Server Name</h3>
          <input 
            type="text" 
            value={this.state.name}
            onChange={this.update('name')}/>

          <br/>

          <button className="current-user-edit-button">
            {this.props.type}
          </button>
        </form>
      </div>
    );
  }
};

export default ServerForm;