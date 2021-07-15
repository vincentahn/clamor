import React from 'react';
import { Link } from 'react-router-dom';

class MainIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: ''
    }
  }
  
  render(){
    return(
      <div className="main-index">
        <div className="potential-search-bar">

        </div>
        <div className="main-index-list">
          <Link 
            to="/channels/@me/users"
            onClick={e => this.setState({ selected: 'users' })}>
            <div 
              className={`main-index-item 
              ${this.state.selected === 'users' ? "selected" : ""}`}>
              <h1>Users</h1>
            </div>
          </Link>

          <Link 
            to="/channels/@me/servers"
            onClick={e => this.setState({ selected: 'servers' })}>
            <div 
              className={`main-index-item 
              ${this.state.selected === 'servers' ? "selected" : ""}`}>
              <h1>Servers</h1>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainIndex;