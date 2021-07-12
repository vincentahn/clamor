import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      month: '',
      day: '',
      year: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type){
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault();

    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      birthday: `${this.state.year}/${this.state.month}/${this.state.day}`
    }

    this.props.action(user);
  }

  daysOptions(){
    // The first map creates a range from 1 to 31
    // The second map returns the map of days input choices
    return [...Array(31).keys()].map(i => i + 1).map(idx => (
      <option value={idx}>{idx}</option>
    ))
  }

  yearsOptions(){
    let thisYear = new Date().getFullYear();
    let earliestYear = thisYear - 52;

    // I noticed Discord ranges years from 52 years ago to 3 years ago.
    // This is probably to have a range of around 50 years
    return [...Array(50).keys()].map(i => i + earliestYear).map(idx => (
      <option value={idx}>{idx}</option>
    ))
  }

  render(){
    const errors = word => {
      return(
        this.props.errors.map(error => {
          return error.toLowerCase().includes(word)
            ? error
            : null;
        })
      )
    };

    return(
      <div className="session-page">
        <div className="session-form">
          <div className="signup-form">
            <form onSubmit = {this.handleSubmit}>
              <div>
                <h1>Create an account</h1>
              </div>

              {errors('email').length !== 0
                ?
                  <div className="error">
                    <div className="field">
                      <div className="label">
                        <h3>EMAIL - <i>{errors('email')}</i></h3> 
                      </div>
                      <input 
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}/>
                    </div>
                  </div>
                :
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
                  </div>
              }

              {errors('username').length !== 0
                ?
                  <div className="error">
                    <div className="field">
                      <div className="label">
                        <h3>USERNAME- <i>{errors('username')}</i></h3> 
                      </div>
                      <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}/>
                    </div>
                  </div>
                :
                  <div>
                    <div className="field">
                      <div className="label">
                        <h3>USERNAME</h3> 
                      </div>
                      <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}/>
                    </div>
                  </div>
              }

              {errors('password').length !== 0
                ?
                  <div className="error">
                    <div className="field">
                      <div className="label">
                        <h3>PASSWORD - <i>{errors('password')}</i></h3> 
                      </div>
                      <input 
                        type="password" 
                        value={this.state.password}
                        onChange={this.update('password')}/>
                    </div>
                  </div>
                :
                  <div>
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
              }

              <div className="field">
                <div className="label">
                  <h3>DATE OF BIRTH</h3>
                </div>
                <div className="custom-selects-container">
                  <div className="custom-select">
                    <select 
                      onChange={this.update('month')}>
                      <option disabled selected value>Select</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>

                  <div className="custom-select middle-select">
                    <select 
                      onChange={this.update('day')}>
                      <option disabled selected value>Select</option>
                      {this.daysOptions()}
                    </select>
                  </div>

                  <div className="custom-select">
                    <select 
                      onChange={this.update('year')}>
                      <option disabled selected value>Select</option>
                      {this.yearsOptions()}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="button-container">
                <button type="submit">Continue</button>
              </div>

              <div className="redirect-link-container">
                <h2><Link to="/login">Already have an account?</Link></h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;