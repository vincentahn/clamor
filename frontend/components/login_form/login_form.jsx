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
      <div className="session-page">
        <div className="session-form">
          <div className="form-side">
            <form onSubmit = {this.handleSubmit}>
              <h1>Welcome back!</h1>
              <h2>We're so excited to see you again!</h2>
              
              <h3>Email</h3>
              <input 
                type="text" 
                value={this.state.email}
                onChange={this.update('email')}/>

              <h3>Password</h3>
              <input 
                type="password" 
                value={this.state.password}
                onChange={this.update('password')}/>

              <button type="submit">Login</button>
            </form>
            
            <h2>Need an account? <Link to="/signup">Register</Link></h2>
          </div>
          <div className="demo-side">
            Don't want to create an account?
            <button>Demo User Login</button>
          </div>
        </div>

        <h4><a href="https://unsplash.com/@korpa">Header by Jr Korpa</a></h4>
      </div>
    );
  }
}

export default LoginForm;