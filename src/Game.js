import React from 'react';
import { Link } from 'react-router-dom';
import MinimalFutIQ from '../components/MinimalFutIQ';

const Game = () => {
  return (
    <div className="game-page">
      <div className="game-header">
        <Link to="/" className="back-button">
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="game-wrapper">
        <MinimalFutIQ />
      </div>
    </div>
  );
};

export default Game;
