import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faAt } from '@fortawesome/free-solid-svg-icons';

// Triggers subscribed method
const subscribeProps = (channelId, streamType) => ({ 
  channel: streamType,
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
    return this.perform("sendMessage", data)
  },
  deleteMessage: function(data){
    return this.perform("deleteMessage", data)
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

  scrollToBottom(){
    this.listRef.scrollIntoView(false);
  }

  componentDidMount(){
    this.props.setup(this.props);

    const stream = App.cable.subscriptions.create(
      subscribeProps(this.props.channelId, this.props.streamType), 
      actionProps({
        receiveMessage: this.props.receiveMessage,
        removeMessage: this.props.removeMessage,
        sendErrors: this.props.sendErrors
      })
    );

    this.props.createChannel(stream);

    this.listRef = document.getElementById('scroll-id');
    if(this.listRef){
      this.listRef.scrollIntoView(false);
    }
  }

  componentDidUpdate(){
    if(this.props.channelId !== this.state.channelId){
      this.props.setup(this.props);

      const stream = App.cable.subscriptions.create(
        subscribeProps(this.props.channelId, this.props.streamType), 
        actionProps({
          receiveMessage: this.props.receiveMessage,
          removeMessage: this.props.removeMessage,
          sendErrors: this.props.sendErrors
        })
      );

      this.props.createChannel(stream);
      this.setState({ channelId: this.props.channelId })
    }

    if(this.listRef){
      this.listRef.scrollIntoView(false);
    }
  }

  componentWillUnmount(){
    this.props.removeChannel();
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
    const retrieveProfile = authorId => {
      return this.props.users[authorId].profile_url
        ? this.props.users[authorId].profile_url
        : window.defaultProfilePic;
    }

    let headingTag = null;

    if(this.props.type === 'TextChannel'){
      headingTag = (<FontAwesomeIcon icon={faHashtag} />);
    }else if(this.props.type === 'PrivateChannel'){
      headingTag = (<FontAwesomeIcon icon={faAt} />);
    }

    const messages = this.props.messages 
      ? this.props.messages.map(message => (
        message ? 
        <div 
          key={`message-${message.id}`}
          className="message-box">
          <div className="profile-pic">
            <img 
              src={retrieveProfile(message.author_id)}/>
          </div>
          <div className="message-info">
            <div className="message-header">
              <div className="message-author-username">
                <h2>{this.props.users[message.author_id].username}</h2>
              </div>
              <div className="message-time">
                <h4>{message.created_at}</h4>
              </div>
            </div>
            <div className="message-body">
              <p>{message.body}</p>
            </div>
          </div>
          {message.author_id === this.props.currentUserId
            ? (
              <div className="message-options">
                <button 
                  onClick={this.handleDelete(message.id)}>
                  Delete
                </button>
              </div>
            ) 
          : null}
        </div>
        : null
      )) : null;

    return(
      <div className="message-index">
        <div className="message-index-heading">
          <div className="hashtag-icon">
            {headingTag}
          </div>
          <div>
            <h1>{this.props.channel ? this.props.channel.name : null}</h1>
          </div>
        </div>
        <div className="message-index-body">
          <div className="message-list">
            {messages}
            <div id="scroll-id"></div>
          </div>
          <div className="message-input">
            <form onSubmit={this.handleCreate}>
              <input
                type="text"
                value={this.state.body}
                onChange={this.update}
                placeholder={`Message #${this.props.channel ? this.props.channel.name : null}`}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageIndex;