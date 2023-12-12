import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
//import ResetPasswordPage from './components/ResetPasswordPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
           {/* <Route path="/reset-password/:token" element={<ResetPasswordPage />} />  */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
