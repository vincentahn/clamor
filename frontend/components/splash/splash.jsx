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
                  <a href="https://github.com/vincentahn/clamor" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
                <div className="nav-link">
                  <a href="https://www.linkedin.com/in/junminvincentahn/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
                <div className="nav-link">
                  <a href="https://angel.co/u/jun-min-vincent-ahn" target="_blank" rel="noopener noreferrer">
                    AngelList
                  </a>
                </div>
              </nav>
            </div>
            <div className="link-button-container">
              {this.props.loggedIn 
                ? <Link to="/channels/@me" className="link-button">Open Clamor</Link>
                : <Link to="/login" className="link-button">Login</Link>
              }
            </div>
          </header>
          <div className="intro-header">
            <div className="intro-header-filler">
              <h1>IMAGINE AN APP...</h1>
              <p>...that is worse than an existing app in every possible way and is not particularly user friendly. Where it's very clear that the app is not profitable. An app that only exists on your browser.</p>
            </div>
            {/* <div className="attribution">
              <h4>
                <a href="https://unsplash.com/@korpa" target="_blank" rel="noopener noreferrer">
                  Header by Jr Korpa
                </a>
              </h4>
            </div> */}
          </div>
        </div>  
        <div className="main-block">
          <div className="splash-main-1-image"></div>
          <div className="splash-main-1-info">
            <h2>Create a place where anyone can join</h2>
            <p>Clamor servers are designed to be anarchical. Anyone can collaborate, share, and just talk about their day.</p>
          </div>
        </div>
        <div className="main-block splash-main-2">
          <div className="splash-main-2-info">
            <h2>Where hanging out is impossible</h2>
            <p>There are no voice channels so you can't really tell if anyone is on because being online simply indicates that someone has the website open in their browser.</p>
          </div>
          <div className="splash-main-2-image"></div>
        </div>
        <footer>
          <div className="footer-nav">
            <nav>
              <div className="nav-link">
                <a href="https://github.com/vincentahn/clamor" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </div>
              <div className="nav-link">
                <a href="https://www.linkedin.com/in/junminvincentahn/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="nav-link">
                <a href="https://angel.co/u/jun-min-vincent-ahn" target="_blank" rel="noopener noreferrer">
                  AngelList
                </a>
              </div>
            </nav>
          </div>
          <div className="footer-break-container">
            <hr className="footer-line-break"/>
          </div>
          <div className="footer-logo-login">
            <div className="logo-container">
              <h1>CLAMOR</h1>
            </div>
            <div></div>
            <div className="link-button-container">
              {this.props.loggedIn 
                ? <Link to="/channels/@me" className="footer-link-button">Open Clamor</Link>
                : <Link to="/signup" className="footer-link-button">Sign up</Link>
              }
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Splash;