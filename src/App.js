import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './Components/UserContext';
import ShowUser from './Components/ShowUser';


function App() {
  const [user, setUser] = useState(null);
  // const [test, setTest] = useState("Abhishek");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/showuser" element={<ShowUser />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
