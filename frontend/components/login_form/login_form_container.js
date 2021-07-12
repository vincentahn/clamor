import { connect } from "react-redux";
import { wipeErrors } from "../../actions/error_actions";
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
  demoUser: {
    email: 'totallylegit@kappa.com',
    password: 'gooddemoman'
  },
  errors: state.errors.loginErrors
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user)),
  wipeErrors: () => dispatch(wipeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);