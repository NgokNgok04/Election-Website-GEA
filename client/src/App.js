import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import VotingBPH from './VotingBPH';
import VotingSenator from './VotingSenator';
function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/VotingBPH" element={<VotingBPH />}/>
            <Route path="/VotingSenator" element={<VotingSenator />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
