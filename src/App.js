import React from "react";
import {Route,Routes} from "react-router-dom";
// import {Switch} from "react-router-dom"
// import Home from './components/home/Home';
// import Login from './components/login/Login';
// import Signup from './components/signup/Signup';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";



function App() {
  return(
    <>
    {/* <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Routes> */}

    <Signup />

    
    
    
      {/* <Home />
      <Login />
      <Signup /> */}
    
    
    </>
  )
}

export default App;
