import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Switch} from "react-router-dom"
// import Home from './components/home/Home';
// import Login from './components/login/Login';
// import Signup from './components/signup/Signup';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>



  )
}

export default App;
