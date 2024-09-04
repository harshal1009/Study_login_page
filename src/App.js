import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Children, useState } from 'react';
// import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute"


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className= "flex w-screen h-screen bg-richblack-900 flex-col">
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/dashboard" element={

        <PrivateRoute isLoggedIn={isLoggedIn}>

          <Dashboard/>

        </PrivateRoute>
      }></Route>

    </Routes>
    </div>
    )
}

export default App;
