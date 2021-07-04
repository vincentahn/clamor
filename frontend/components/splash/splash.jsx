import React from 'react';
import { Link } from 'react-router-dom';


const Splash = () => (
  <div className="splash">
    <header>
      <h1>Clamor</h1>
      <nav>
        <div>
          <a href="https://github.com/vincentahn">
            Github
          </a>
        </div>
        <div>
          <a href="">DeadLink2</a>
        </div>
        <div>
          <a href="">DeadLink3</a>
        </div>
        <div>
          <a href="">DeadLink4</a>
        </div>
      </nav>
      <Link to="/login" className="link-button">Log In</Link>
    </header>
    <div className="intro-header main-block">
      <h4><a href="https://unsplash.com/@korpa">Header by Jr Korpa</a></h4>
    </div>
    <div className="main-block">
      <h1>Project 1</h1>
      <p>Description 1</p>
    </div>
    <div className="main-block">
      <h1>Project 2</h1>
      <p>Description 2</p>
    </div>
    <footer></footer>
  </div>
);

export default Splash;