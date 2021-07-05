import { connect } from "react-redux";
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  demoUser: {
    email: 'totallylegit@kappa.com',
    password: 'gooddemoman'
  }
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);