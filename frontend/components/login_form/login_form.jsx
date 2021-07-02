import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type){
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <h1>Welcome back!</h1>
          <h2>We're so excited to see you again!</h2>
          
          <label>Email
            <input 
              type="text" 
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>

          <label>Password
            <input 
              type="password" 
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <button type="submit">Login</button>
        </form>
        <label>Need an account?
          <Link to="/signup">Register</Link>
        </label>
      </div>
    );
  }
}

export default LoginForm;