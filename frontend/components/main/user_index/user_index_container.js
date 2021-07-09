import { connect } from "react-redux";
import UserIndex from "./user_index";

import { fetchUsers } from './../../../actions/user_actions'

const mapStateToProps = store => ({
  currentUserId: store.session.currentUserId,
  users: Object.values(store.entities.users)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: currentUserId => dispatch(fetchUsers(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);