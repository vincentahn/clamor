import React from 'react';

class TextChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchServer(this.props.server.id, this.props.currentUserId);
  }

  render(){
    return(
      <div className="main-index">
        <h1>{this.props.server.name}</h1>
      </div>
    );
  }
};

export default TextChannelIndex;