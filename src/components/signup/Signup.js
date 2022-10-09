import React from "react";
import './Signup.css';

function Signup() {
    return (
        <div>
            <div className="banner">
                <div className="navbar">
                    <img src="logo.png" className="logo" />
                    <ul>
                        <li>
                            <a href="#">Home</a>
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
                            <i className="fa-regular fa-envelope" />
                            <input type="text" placeholder="Email" required="" />
                        </div>
                        <div className="row">
                            <i className="fa-solid fa-phone" />
                            <input type="" placeholder="Phone Number" required="" />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" required="" />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" required="" />
                        </div>
                        <div className="row button">
                            <input type="submit" defaultValue="Register" />
                        </div>
                        <div className="signup-link">
                            Already a member? <a href="#">Login now</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;












{/* <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User Registration</title>
  <link rel="stylesheet" href="Signup.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  <div className="banner">
    <div className="navbar">
      <img src="logo.png" className="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
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
          <i className="fa-regular fa-envelope" />
          <input type="text" placeholder="Email" required="" />
        </div>
        <div className="row">
          <i className="fa-solid fa-phone" />
          <input type="" placeholder="Phone Number" required="" />
        </div>
        <div className="row">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" required="" />
        </div>
        <div className="row">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" required="" />
        </div>
        <div className="row button">
          <input type="submit" defaultValue="Register" />
        </div>
        <div className="signup-link">
          Already a member? <a href="#">Login now</a>
        </div>
      </form>
    </div>
  </div>
</>

export default Signup; */}