import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class TextChannelCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    
    this.props.action(this.state.name, this.props.serverId, this.props.currentUserId);
  }

  render(){
    return(
      <div className="create-channel-form">
        <div className="close-form">
          <a onClick={this.props.closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
        <div className="form-heading">
          <h1>Create Text Channel</h1>
          <p>in Text Channels</p>
        </div>
        <div className="field-inputs">
          <div>
            <h3>CHANNEL NAME</h3>
          </div>
          <div>
            <input 
              type="text" 
              value={this.state.name}
              onChange={this.update('name')}
              onSubmit={this.handleSubmit}/>
          </div>
        </div>
        <div className="server-form-footer">
          <div className="button-container">
            <button 
              onClick={this.props.closeModal}
              className="cancel-button">
              Cancel
            </button>
            <button 
              onClick={this.handleSubmit}
              className="submit-button">
              Create Channel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TextChannelCreateForm;