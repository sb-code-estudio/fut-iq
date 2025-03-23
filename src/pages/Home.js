import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Fut-IQ</h1>
        <h2>Master the Art of Bayesian Decision-Making in Football</h2>
        
        <div className="game-description">
          <p>
            Take on the role of a Football Intelligence Director and make data-driven decisions 
            about player recruitment, match analysis, and club strategy using Bayesian thinking.
          </p>
          <p>
            Every choice updates your beliefs based on new evidence. Can you learn to make 
            better decisions under uncertainty?
          </p>
        </div>
        
        <div className="key-features">
          <h3>Key Bayesian Concepts You'll Learn:</h3>
          <ul>
            <li>Prior Beliefs - Your initial assumptions</li>
            <li>Evidence Collection - Gathering data to refine beliefs</li>
            <li>Posterior Updates - Revised beliefs after incorporating new evidence</li>
            <li>Confidence Intervals - Visual representation of uncertainty</li>
          </ul>
        </div>
        
        <Link to="/game" className="play-button">
          Start Game
        </Link>
      </div>
    </div>
  );
};

export default Home;
