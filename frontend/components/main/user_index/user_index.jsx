import React from 'react';

class UserIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers(this.props.currentUserId);
  }

  render(){
    const userIndexItems = this.props.users ? this.props.users.map(user => {
      const checkPhoto = photo => photo ? photo : window.defaultProfilePic;

      if(user.id === this.props.currentUserId) return null;
      
      return(
        <div key={`user-${user.id}`} className="user-index-item">
          <div className="user-image-container">
            <img src={checkPhoto(user.profile_url)} />
          </div>
          <div className="user-name-container">
            <h1>{user.username}</h1>
          </div>
        </div>
      );
    }) : null;

    return(
      <div className="user-index">
        <div className="user-index-header">
          <h1>Users</h1>
        </div>
        <div className="user-index-body">
          <div className="user-index-list">
            {userIndexItems}
          </div>
          <div className="user-index-side">

          </div>
        </div>
      </div>
    );
  }
};

export default UserIndex;