import React from 'react';
import { Link } from 'react-router-dom';

class MainIndex extends React.Component{
  render(){
    return(
      <div className="main-index">
        <div className="potential-search-bar">

        </div>
        <div className="main-index-list">
          <Link to="/channels/@me/users">
            <div className="main-index-item">
              <h1>Users</h1>
            </div>
          </Link>

          <Link to="/channels/@me/servers">
            <div className="main-index-item">
              <h1>Servers</h1>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainIndex;