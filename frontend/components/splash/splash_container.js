import { connect } from "react-redux";
import Splash from "./splash";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);