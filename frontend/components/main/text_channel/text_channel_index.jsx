import React from 'react';
import { Redirect } from 'react-router';

class TextChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchServer(this.props.server.id, this.props.currentUserId);
  }

  render(){
    return(
      <div className="text-channel-index">
        <div className="server-name-header">
          <h1>{this.props.server.name}</h1>
        </div>
      </div>
    );
  }
};

export default TextChannelIndex;