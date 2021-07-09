import React from 'react';

class TextChannelIndex extends React.Component{
  render(){
    return(
      <div className="main-index">
        <h1>{this.props.server.name}</h1>
      </div>
    );
  }
};

export default TextChannelIndex;