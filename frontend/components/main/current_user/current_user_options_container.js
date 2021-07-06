import { connect } from "react-redux";
import CurrentUserOptions from "./current_user_options";

import { logout } from './../../../actions/session_actions';

const mapStateToProps = store => ({
  username: store.session.username,
  profileUrl: store.session.profile_url 
    ? store.session.profile_url 
    : "https://play.google.com/store/apps/details?id=com.discord&hl=en_US&gl=US"
});

// In application.html.erb
// window.defaultProfilePic = "<%= image_url('default_profile_pic.jpg') %>"

// profileUrl: store.session.profile_url 
//     ? store.session.profile_url 
//     : window.defaultProfilePic

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserOptions);