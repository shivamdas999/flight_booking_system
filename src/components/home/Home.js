import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="banner">
        <div className="navbar">

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
            <Link to="/login">Home</Link>

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



{/* <>
  <title>Home Page</title>
  <link rel="stylesheet" href="Home.css" />
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
        LOGIN
      </button>
      <button type="button">
        <span />
        SIGNUP
      </button>
    </div>
  </div>
</>

export default Home; */}
