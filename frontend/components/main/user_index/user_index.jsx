import React from 'react';

class UserIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers(this.props.currentUserId);
  }

  render(){
    const userIndexItems = this.props.users.map(user => (
      <h1 key={user.id} style={{color: "white"}}>{user.username}</h1>
    ))

    return(
      <div>
        {userIndexItems}
      </div>
    );
  }
};

export default UserIndex;