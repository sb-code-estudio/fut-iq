import React, { useState } from 'react';

const MinimalFutIQ = () => {
  // Sample cards with bayesian learning elements
  const cards = [
    {
      id: 1,
      title: 'Youth Prospect',
      text: 'Scouts found a promising 17-year-old. Analytics team says data sample is too small.',
      leftChoice: 'Trust analytics',
      rightChoice: 'Trust scouts',
      outcomes: {
        left: {
          message: "You wait for more data before investing.",
          belief: { key: 'analytics', change: 0.1 }
        },
        right: {
          message: "You sign the young talent. Early training looks promising.",
          belief: { key: 'young-players', change: 0.1 }
        }
      }
    },
    {
      id: 2,
      text: 'Next opponent is known for set-pieces. Your assistant suggests defensive set-piece training.',
      leftChoice: 'Focus on possession',
      rightChoice: 'Practice set-pieces',
      outcomes: {
        left: {
          message: "Your possession focus didn't counter their set-piece threat.",
          belief: { key: 'set-pieces', change: 0.15 }
        },
        right: {
          message: "Your set-piece preparation paid off against their threats.",
          belief: { key: 'set-pieces', change: 0.1 }
        }
      }
    },
    {
      id: 3,
      text: 'Your captain is injured. Medical staff suggests 3 weeks rest. Player wants to return in 1 week.',
      leftChoice: 'Quick return',
      rightChoice: 'Full recovery',
      outcomes: {
        left: {
          message: "Early return backfired. Player re-injured and now out for 2 months.",
          belief: { key: 'medical-advice', change: 0.2 }
        },
        right: {
          message: "Patient approach worked. Team rallied without captain.",
          belief: { key: 'medical-advice', change: 0.1 }
        }
      }
    },
    {
      id: 4,
      text: 'Analytics team suggests 3-5-2 formation could improve results by 15%. Coaches prefer 4-4-2.',
      leftChoice: 'Stay with 4-4-2',
      rightChoice: 'Switch to 3-5-2',
      outcomes: {
        left: {
          message: "Traditional formation provided stability but limited options.",
          belief: { key: 'analytics', change: -0.1 }
        },
        right: {
          message: "New formation created confusion but improved attacking output.",
          belief: { key: 'analytics', change: 0.1 }
        }
      }
    },
    {
      id: 5,
      text: 'Your aging midfielder (32) is declining statistically but has leadership. Academy prospect (19) is pushing for his spot.',
      leftChoice: 'Keep veteran',
      rightChoice: 'Play youngster',
      outcomes: {
        left: {
          message: "Veteran's experience stabilized the team during tough matches.",
          belief: { key: 'experience', change: 0.1 }
        },
        right: {
          message: "Academy player showed brilliance but made costly mistakes.",
          belief: { key: 'young-players', change: -0.05 }
        }
      }
    }
  ];

  // Initial beliefs (priors)
  const initialBeliefs = {
    'analytics': 0.5,      // Analytics-based decisions are useful
    'young-players': 0.6,  // Young players have higher potential
    'set-pieces': 0.4,     // Set-pieces are undervalued
    'medical-advice': 0.7, // Medical staff recommendations are correct
    'experience': 0.6      // Experience is valuable in clutch situations
  };

  // Game state
  const [beliefs, setBeliefs] = useState(initialBeliefs);
  const [cardIndex, setCardIndex] = useState(0);
  const [showOutcome, setShowOutcome] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Helper to update belief using Bayes' rule (simplified)
  const updateBelief = (key, change) => {
    const prior = beliefs[key] || 0.5;
    
    // Simple Bayesian update (avoiding complex calculations for the demo)
    // Instead we just adjust the belief in the appropriate direction
    let posterior = prior + change;
    
    // Ensure belief stays between 0 and 1
    posterior = Math.max(0.1, Math.min(0.9, posterior));
    
    return {
      key,
      prior,
      posterior,
      change
    };
  };

  // Handle card choice
  const handleChoice = (direction) => {
    if (showOutcome || gameOver) return;
    
    const currentCard = cards[cardIndex];
    const chosenOutcome = direction === 'left' ? currentCard.outcomes.left : currentCard.outcomes.right;
    
    // Update belief
    const beliefKey = chosenOutcome.belief.key;
    const beliefChange = chosenOutcome.belief.change;
    const update = updateBelief(beliefKey, beliefChange);
    
    // Update state
    setBeliefs({
      ...beliefs,
      [beliefKey]: update.posterior
    });
    
    setOutcome(chosenOutcome);
    setLastUpdate(update);
    setShowOutcome(true);
  };

  // Continue to next card
  const handleContinue = () => {
    if (cardIndex >= cards.length - 1) {
      setGameOver(true);
    } else {
      setCardIndex(cardIndex + 1);
      setShowOutcome(false);
      setOutcome(null);
    }
  };

  // Restart game
  const handleRestart = () => {
    setBeliefs(initialBeliefs);
    setCardIndex(0);
    setShowOutcome(false);
    setOutcome(null);
    setLastUpdate(null);
    setGameOver(false);
  };

  // Get belief name from key
  const getBeliefName = (key) => {
    const names = {
      'analytics': 'Analytics improves decisions',
      'young-players': 'Young players have higher potential',
      'set-pieces': 'Set pieces are undervalued',
      'medical-advice': 'Trust medical staff advice',
      'experience': 'Experience is valuable in key moments'
    };
    return names[key] || key;
  };

  // Render current card or outcome
  const renderCardOrOutcome = () => {
    if (gameOver) {
      return (
        <div className="outcome">
          <h2>Season Complete!</h2>
          <p>Your final beliefs:</p>
          <div className="beliefs-list">
            {Object.entries(beliefs).map(([key, value]) => (
              <div key={key} className="belief-item">
                <div className="belief-name">{getBeliefName(key)}</div>
                <div className="belief-bar-container">
                  <div className="belief-bar" style={{ width: `${value * 100}%` }}></div>
                </div>
                <div className="belief-value">{Math.round(value * 100)}%</div>
              </div>
            ))}
          </div>
          <button className="choice-button restart" onClick={handleRestart}>New Season</button>
        </div>
      );
    }
    
    if (showOutcome && outcome) {
      return (
        <div className="outcome">
          <p className="outcome-message">{outcome.message}</p>
          
          {lastUpdate && (
            <div className="belief-update">
              <h3>Belief Update</h3>
              <div className="update-content">
                <div className="belief-name">{getBeliefName(lastUpdate.key)}</div>
                <div className="belief-comparison">
                  <div className="belief-box">
                    <div>Prior</div>
                    <div className="value">{Math.round(lastUpdate.prior * 100)}%</div>
                  </div>
                  <div className="arrow">→</div>
                  <div className="belief-box">
                    <div>Posterior</div>
                    <div className="value">{Math.round(lastUpdate.posterior * 100)}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <button className="choice-button continue" onClick={handleContinue}>Continue</button>
        </div>
      );
    }
    
    const currentCard = cards[cardIndex];
    return (
      <div className="card">
        <p className="card-text">{currentCard.text}</p>
        <div className="choices">
          <button className="choice-button left" onClick={() => handleChoice('left')}>
            {currentCard.leftChoice}
          </button>
          <button className="choice-button right" onClick={() => handleChoice('right')}>
            {currentCard.rightChoice}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="game-container">
      <header>
        <h1>Fut-IQ</h1>
        <div className="progress">Decision {cardIndex + 1}/{cards.length}</div>
      </header>
      
      <div className="beliefs-summary">
        {Object.entries(beliefs)
          .slice(0, 3) // Show just top 3 beliefs for simplicity
          .map(([key, value]) => (
            <div key={key} className="belief-item mini">
              <div className="belief-name small">{getBeliefName(key)}</div>
              <div className="belief-bar-container">
                <div className="belief-bar" style={{ width: `${value * 100}%` }}></div>
              </div>
            </div>
          ))}
      </div>
      
      <div className="card-container">
        {renderCardOrOutcome()}
      </div>
    </div>
  );
};

export default MinimalFutIQ;
