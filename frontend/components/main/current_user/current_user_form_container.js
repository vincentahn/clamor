import { connect } from "react-redux";
import CurrentUserForm from "./current_user_form";

import { update, logout } from './../../../actions/session_actions';
import { closeModal } from './../../../actions/modal_actions';

const mapStateToProps = store => ({
  username: store.session.username,
  email: store.session.email,
  profileUrl: store.session.profile_url 
    ? store.session.profile_url 
    : window.defaultProfilePic,
  currentUserId: store.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
      dispatch(logout());
      dispatch(closeModal());
    },
  closeModal: () => dispatch(closeModal()),
  update: (user, currentUserId) => dispatch(update(user, currentUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserForm);