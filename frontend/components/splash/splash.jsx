import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
  render(){
    return (
      <div className="splash">  
        <div className="background">
          <header>
            <div className="logo-container">
              <h1>CLAMOR</h1>
            </div>
            <div>
              <nav>
                <div className="nav-link">
                  <a href="https://github.com/vincentahn">
                    Github
                  </a>
                </div>
                <div className="nav-link">
                  <a href="https://www.linkedin.com/in/junminvincentahn/">
                    LinkedIn
                  </a>
                </div>
              </nav>
            </div>
            <div className="link-button-container">
              {this.props.loggedIn 
                ? <Link to="/channels/@me" className="link-button">Open Clamor</Link>
                : <Link to="/login" className="link-button">Log In</Link>
              }
            </div>
          </header>
          <div className="intro-header main-block">
            <div className="intro-header-filler">
              <h1>IMAGINE AN APP...</h1>
              <p>...that is worse than an existing app in every possible way and is not particularly user friendly. Where it's very clear that the app is not profitable. An app that only exists on your browser.</p>
            </div>
            <div className="attribution">
              <h4>
                <a href="https://unsplash.com/@korpa">
                  Header by Jr Korpa
                </a>
              </h4>
            </div>
          </div>
        </div>  
        <div className="main-block">
          <div className="splash-main-1-image"></div>
          <div className="splash-main-1-info">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam.</p>
          </div>
        </div>
        <div className="main-block splash-main-2">
          <div className="splash-main-2-info">
            <h2>Lorem Ipsum</h2>
            <p>Quam nulla porttitor massa id neque aliquam. Ultrices gravida dictum fusce ut placerat orci nulla. Justo laoreet sit amet cursus sit amet dictum.</p>
          </div>
          <div className="splash-main-2-image"></div>
        </div>
        <footer>
          <nav>
            <div className="nav-link">
              <a href="https://github.com/vincentahn">
                Github
              </a>
            </div>
            <div className="nav-link">
              <a href="https://www.linkedin.com/in/junminvincentahn/">
                LinkedIn
              </a>
            </div>
          </nav>
        </footer>
      </div>
    )
  }
}

export default Splash;