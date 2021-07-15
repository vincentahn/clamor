import React from 'react';

// Triggers subscribed method
const subscribeProps = channelId => ({ 
  channel: 'TextStreamChannel',
  id: channelId
});

// Action methods
const actionProps = actions => ({
  received: data => {
    switch(data.type){
      case 'receiveMessage':
        actions.receiveMessage(data.message);
        break;

      case 'removeMessage':
        actions.removeMessage(data.message);
        break;
      
      case 'error':
        actions.sendErrors(data.errors);
        break;

      default:
        break;
    }
  },
  sendMessage: function(data){
    return this.perform("sendTextMessage", data)
  },
  deleteMessage: function(data){
    return this.perform("deleteTextMessage", data)
  }
});

class MessageIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: '',
      channelId: this.props.channelId
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    const textStreamChannel = App.cable.subscriptions.create(
      subscribeProps(this.props.channelId), 
      actionProps({
        receiveMessage: this.props.receiveMessage,
        removeMessage: this.props.removeMessage,
        sendErrors: this.props.sendErrors
      })
    );

    this.props.createChannel(textStreamChannel);
  }

  componentDidUpdate(){
    if(this.props.channelId !== this.state.channelId){
      const textStreamChannel = App.cable.subscriptions.create(
        subscribeProps(this.props.channelId), 
        actionProps({
          receiveMessage: this.props.receiveMessage,
          removeMessage: this.props.removeMessage,
          sendErrors: this.props.sendErrors
        })
      );

      this.props.createChannel(textStreamChannel);
      this.setState({ channelId: this.props.channelId })
    }
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