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
          if(error.toLowerCase().includes(word)){
            return(
              <h3 style={{color: "red"}}>{error}</h3>
            );
          }else return null;
        })
      )
    };

    return(
      <div className="session-page">
        <div className="signup-form">
          <form onSubmit = {this.handleSubmit}>
            <h1>Create an account</h1>
            
            <h3>Email</h3>
            {errors('email')}
            <input 
              type="text" 
              value={this.state.email}
              onChange={this.update('email')}/>

            <h3>Username</h3>
            {errors('username')}
            <input 
              type="text" 
              value={this.state.username}
              onChange={this.update('username')}/>

            <h3>Password</h3>
            {errors('password')}
            <input 
              type="password" 
              value={this.state.password}
              onChange={this.update('password')}/>

            <h3>Date of Birth</h3>
            {errors}
            <select onChange={this.update('month')}>
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
            <select onChange={this.update('day')}>
              <option disabled selected value>Select</option>
              {this.daysOptions()}
            </select>
            <select onChange={this.update('year')}>
              <option disabled selected value>Select</option>
              {this.yearsOptions()}
            </select>

            <button 
              className="session-button"
              type="submit">
              Signup
            </button>
          </form>
          
          <h2><Link to="/login">Already have an account?</Link></h2>
        </div>
        
        <div className="attribution">
            <h4>
              <a href="https://unsplash.com/@korpa">
                Header by Jr Korpa
              </a>
            </h4>
          </div>
      </div>
    );
  }
}

export default SignupForm;