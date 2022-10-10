import React from "react";
import './Signup.css';
import { Link } from 'react-router-dom';
import { signUp } from "../../services/user-service";


function Signup() {
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
            <span>User Registration</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user" />
              <input type="text" placeholder="Full Name" required="" />
            </div>
            <div className="row">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" required="" />
            </div>
            <div className="row">
              <i className="fa-regular fa-envelope" />
              <input type="text" placeholder="Enter Email" required="" />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" required="" />
            </div>
            <div className="row button">
              <input type="submit" defaultValue="Register" />
            </div>
            <div className="login-link">
              Already a member?
              <button1 type="button">
                <span />
                <Link to="/login">Login Now</Link>
              </button1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
