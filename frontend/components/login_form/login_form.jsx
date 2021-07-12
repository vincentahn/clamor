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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(type){
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.action(this.props.demoUser);
  }

  render(){
    return(
      <div className="session-page">
        <div className="session-form login-form">
          <div className="form-side">
            <form onSubmit = {this.handleSubmit}>
              <div>
                <h1>Welcome back!</h1>
              </div>
              <div className="form-side-subheading">
                <h2>We're so excited to see you again!</h2>
              </div>

              {this.props.errors.length === 0 
                ?
                  <div>
                    <div className="field">
                      <div className="label">
                        <h3>EMAIL</h3> 
                      </div>
                      <input 
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}/>
                    </div>

                    <div className="field">
                      <div className="label">
                        <h3>PASSWORD</h3> 
                      </div>
                      <input 
                        type="password" 
                        value={this.state.password}
                        onChange={this.update('password')}/>
                    </div>
                  </div>
                : 
                <div className="error">
                    <div className="field">
                      <div className="label">
                        <h3>EMAIL - <i>{this.props.errors}</i></h3> 
                      </div>
                      <input 
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}/>
                    </div>

                    <div className="field">
                      <div className="label">
                        <h3>PASSWORD - <i>{this.props.errors}</i></h3> 
                      </div>
                      <input 
                        type="password" 
                        value={this.state.password}
                        onChange={this.update('password')}/>
                    </div>
                  </div>
              }
              
              <div className="button-container">
                <button type="submit">Login</button>
              </div>

              <div className="redirect-link-container">
                <h2>Need an account? <Link to="/signup">Register</Link></h2>
              </div>
            </form>
          </div>
          <div className="demo-side">
            <div className="demo-button-container">
              <button 
                className="demo-button"
                onClick= {this.handleDemoLogin}>
                Demo User
              </button>
            </div>

            <div className="demo-heading-container">
              <h1>Log in as Demo</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;