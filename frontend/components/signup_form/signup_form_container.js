import { connect } from "react-redux";
import { wipeErrors } from "../../actions/error_actions";
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
  errors: state.errors.signupErrors
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signup(user)),
  wipeErrors: () => dispatch(wipeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);