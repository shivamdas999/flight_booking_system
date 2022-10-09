import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="banner">
        <div className="navbar">
          <button1 type="button">
            <span />
            <Link to="/"><img src="logo.png" className="logo" /></Link>
          </button1>
          <ul>
            <li>
              <button1 type="button">
                <span />
                <Link to="/">Home</Link>
              </button1>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h1>PLAN YOUR TRAVEL</h1>
        <p>
          We provide the cheapest flight tickets.
          <br />
          Please Login/Signup to continue.
        </p>
        <div>
          <button type="button">
            <span />
            <Link to="/login">Login</Link>

          </button>
          <button type="button">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;