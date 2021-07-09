import React from 'react';
import { Link } from 'react-router-dom';

class MainIndex extends React.Component{
  render(){
    return(
      <div className="main-index">
        <div className="main-index-item">
          <Link to="/channels/@me/users">
            <h1>Users</h1>
          </Link>
        </div>
        <div className="main-index-item">
          <Link to="/channels/@me/servers">
            <h1>Servers</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainIndex;