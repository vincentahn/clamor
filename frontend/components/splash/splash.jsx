import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
  render(){
    return (
      <div className="splash">    
        <header>
          <h1>Clamor</h1>
          <nav>
            <div className="nav-link">
              <a href="https://github.com/vincentahn">
                Github
              </a>
            </div>
            <div className="nav-link">
              <a href="">DeadLink2</a>
            </div>
            <div className="nav-link">
              <a href="">DeadLink3</a>
            </div>
            <div className="nav-link">
              <a href="">DeadLink4</a>
            </div>
          </nav>
          {this.props.loggedIn 
            ? <Link to="/channels/@me" className="link-button">Open Clamor</Link>
            : <Link to="/login" className="link-button">Log In</Link>
          }
        </header>
        <div className="intro-header main-block">
          <div className="attribution">
            <h4>
              <a href="https://unsplash.com/@korpa">
                Header by Jr Korpa
              </a>
            </h4>
          </div>
        </div>
        <div className="main-block">
          <img src="" alt="No Image Yet" />
          <div>
            <h2>Heading 1</h2>
            <p>Description 1</p>
          </div>
        </div>
        <div className="main-block">
          <img src="" alt="No Image Yet" />
          <div>
            <h2>Heading 2</h2>
            <p>Description 2</p>
          </div>
        </div>
        <footer>
          <div>
            <h3>Imagine a place</h3>
          </div>
          <div>
            <ul>
              <li>List</li>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Splash;