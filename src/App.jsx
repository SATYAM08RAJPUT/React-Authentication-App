// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import './styles/App.css';
import LoginStatus from './components/auth/loginStatus';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<LoginStatus />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
