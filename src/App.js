import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;