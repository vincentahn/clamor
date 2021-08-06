import { connect } from "react-redux";
import { withRouter } from "react-router";
import UserIndex from "./user_index";

import { fetchUsers } from './../../../actions/user_actions'
import { fetchChannelByUser } from "../../../actions/private_channel_actions";

const mapStateToProps = (store, ownProps) => ({
  currentUserId: store.session.currentUserId,
  history: ownProps.history,
  users: Object.values(store.entities.users)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: currentUserId => dispatch(fetchUsers(currentUserId)),
  fetchChannel: (currentUserId, otherUserId, history) => dispatch(fetchChannelByUser(currentUserId, otherUserId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserIndex));