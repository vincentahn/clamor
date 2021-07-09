import React from 'react';

class ServerMainIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchServers(this.props.currentUserId);
  }

  render(){
    const serverIndexItems = this.props.servers.map(server => (
      <h1 key={server.id} style={{color: "white"}}>{server.name}</h1>
    ))

    return(
      <div>
        {serverIndexItems}
      </div>
    );
  }
};

export default ServerMainIndex;