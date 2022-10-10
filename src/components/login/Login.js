import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

  return (
    <div>
      <div className="banner">
        <div className="navbar">
          <button1 type="button">
            <span />
            <Link to="/">Flight Booking System</Link>
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
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" required="" />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" required="" />
            </div>
            <div className="pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="row button">
              <input type="submit" defaultValue="Login" />
            </div>
            <div className="signup-link">
              Not a member?
              <button1 type="button">
                <span />
                <Link to="/signup">Signup Now</Link>
              </button1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
