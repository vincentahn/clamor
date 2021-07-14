import React from 'react';

class MessageIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ''
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    App.cable.subscriptions.create(
      // Triggers subscribed method
      { 
        channel: 'TextStreamChannel',
        id: this.props.channelId
      },

      // Action methods
      {
        received: data => {
          this.props.receiveMessage(data);
        },
        sendMessage: function(data){
          return this.perform("sendTextMessage", data)
        }
      }
    );
  }

  handleCreate(e){
    e.preventDefault();

    let message = {
      body: this.state.body,
      author_id: this.props.currentUserId,
      typeable_id: this.props.channelId,
      typeable_type: this.props.type
    };

    this.props.create(message, this.props.channelId);
    this.setState({ body: "" });
  }

  handleDelete(messageId){
    return e => {
      e.preventDefault();
      this.props.delete(messageId, this.props.currentUserId);
    }
  }
  
  update(e){
    this.setState({ body: e.target.value });
  }

  render(){
    const messages = this.props.messages 
      ? this.props.messages.map(message => (
        <div 
          key={`message-${message.id}`}
          className="message-box">
          <div>
            <p>{message.body}</p>
          </div>
          <div>
            <button onClick={this.handleDelete(message.id)}>Delete</button>
          </div>
        </div>
      )) : null;

    return(
      <div>
        <div></div>
        <div>
          <div>
            {messages}
          </div>
          <div>
            <form onSubmit={this.handleCreate}>
              <input 
                type="text" 
                value={this.state.body}
                onChange={this.update}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageIndex;