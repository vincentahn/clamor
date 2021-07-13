import React from 'react';

class MessageIndex extends React.Component{
  

  render(){
    console.log(this.props);

    const messages = this.props.messages.map(message => (
      <div key={`message-${message.idx}`}>
        <p>{message.body}</p>
      </div>
    ));

    return(
      <div>
        <div></div>
        <div>
          <div>
            {messages}
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default MessageIndex;