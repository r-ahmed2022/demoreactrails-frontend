import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Registration from './auth/Registration';
import Login from './auth/Login';
function App() {
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={< Splash />} />
          <Route exact path="/registration" element={< Registration />} />
          <Route exact path="/login" element={< Login />} />

      </Routes>
    </div>
  );
}

export default App;
