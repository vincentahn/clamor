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
    if(this.state.name !== ''){
      e.preventDefault();
      const formData = new FormData();
      formData.append('server[name]', this.state.name);

      if(this.state.photoFile){
        formData.append('server[server_photo]', this.state.photoFile);
      }

      if(this.props.action.type === 'Create'){
        this.props.action(formData, this.props.currentUserId);
      }else{
        this.props.action(formData, this.props.currentUserId, this.props.serverId);
      }
    }
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
        <div className="close-form">
          <a
            onClick={this.props.closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="field-inputs">
            <div>
              <h1>Customize your server</h1>
            </div>

            <div>
              <h2>Give your new server a personality with a name and an icon. You can always change it later.</h2>
            </div>

            <div
              className="server-photo-container"
              style={{backgroundImage: `url(${this.state.profileUrl})`}}>
              
              <input 
                className="photo-input"
                type="file" 
                onChange={this.handleFileSubmit}/>
            </div>

            <div className="name-input">
              <h3>SERVER NAME</h3>
              <input 
                type="text" 
                value={this.state.name}
                onChange={this.update('name')}/>
            </div>
          </div>

          <div className="server-form-footer">
            <button 
              className={`submit-button 
              ${this.state.name === '' ? "empty" : ""}`}>
              {this.props.type}
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default ServerForm;