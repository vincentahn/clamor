import React from 'react';

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
      <div>
        <div>
          <button onClick={this.props.closeModal}>X</button>
        </div>
        <div>
          <h1>Create Text Channel</h1>
          <p>in Text Channels</p>
        </div>
        <div>
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
        <div>
          <div>
            <button onClick={this.props.closeModal}>Cancel</button>
            <button onClick={this.handleSubmit}>Create Channel</button>
          </div>
        </div>
      </div>
    );
  }
};

export default TextChannelCreateForm;