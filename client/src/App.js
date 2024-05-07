import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Page404 from './components/Page404';
import Logout from './components/Logout';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route  path="/about" Component={About}></Route>
          <Route  path="/contact" Component={Contact}></Route>
          <Route  path="/login" Component={Login}></Route>
          <Route  path="/signup" Component={Signup}></Route>
          <Route  path="/logout" Component={Logout}></Route>
          <Route  path="*" Component={Page404}></Route>
      </Routes>
    </>
  );
}

export default App;
