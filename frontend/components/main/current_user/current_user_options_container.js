import { connect } from "react-redux";
import CurrentUserOptions from "./current_user_options";

import { logout } from './../../../actions/session_actions';

const mapStateToProps = store => ({
  username: store.session.username
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserOptions);