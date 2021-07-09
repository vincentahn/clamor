import React from 'react';

class MainIndex extends React.Component{
  render(){
    return(
      <div className="main-index">
        <div className="main-index-item">
          <h1>Users</h1>
        </div>
        <div className="main-index-item">
          <h1>Servers</h1>
        </div>
      </div>
    );
  }
}

export default MainIndex;