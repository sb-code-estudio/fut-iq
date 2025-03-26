import React, { useState } from 'react';

const MinimalFutIQ = () => {
  // Sample cards with proper Bayesian learning elements
  const cards = [
    {
      id: 1,
      title: 'Youth Prospect',
      text: 'Scouts found a promising 17-year-old striker with excellent technical skills but limited competitive experience. Analytics team warns the data sample is too small for confident predictions.',
      leftChoice: 'Trust analytics (wait for more data)',
      rightChoice: 'Trust scouts (sign now)',
      outcomes: {
        left: {
          message: "You decide to wait for more data. Another club signs the player, who scores 15 goals in his first season. Your analytics team points out his underlying metrics suggest regression next season.",
          beliefs: [
            { 
              key: 'analytics', 
              likelihood: 0.75,   // P(E|H) - probability of seeing this evidence if analytics is reliable
              altLikelihood: 0.45 // P(E|~H) - probability of seeing this evidence if analytics is not reliable
            },
            {
              key: 'young-players',
              likelihood: 0.40,    // P(E|H) - probability of seeing this evidence if young players have high potential
              altLikelihood: 0.70  // P(E|~H) - probability of seeing this evidence if young players don't have high potential
            }
          ],
          formula: true
        },
        right: {
          message: "You sign the young talent for $2M. He shows flashes of brilliance in training but struggles with consistency in matches, scoring only 3 goals this season. Your scouts remain convinced he'll develop into a star.",
          beliefs: [
            {
              key: 'analytics',
              likelihood: 0.50,    // Slightly validates analytics' caution
              altLikelihood: 0.60  // Slightly contradicts the alternative
            },
            {
              key: 'young-players',
              likelihood: 0.80,    // Strong evidence for young player potential (long-term view)
              altLikelihood: 0.30  // Strong evidence against alternative hypothesis
            }
          ]
        }
      }
    },
    {
      id: 2,
      text: 'Your next opponent scores 40% of their goals from set-pieces, well above league average. Your assistant suggests dedicating 3 training sessions to defensive set-piece preparation, which would reduce time for possession work.',
      leftChoice: 'Maintain normal training routine',
      rightChoice: 'Focus on set-piece defense',
      outcomes: {
        left: {
          message: "You stick with your normal training routine. In the match, your team dominates possession (65%) but concedes two goals from corners and loses 2-1. Set-pieces were indeed their primary threat.",
          beliefs: [
            {
              key: 'set-pieces',
              likelihood: 0.85,   // Strong evidence that set-pieces matter
              altLikelihood: 0.35 // Contradicts alternative hypothesis
            }
          ]
        },
        right: {
          message: "You dedicate three sessions to set-piece defense. Your team successfully defends all 9 set-pieces in the match, winning 2-0. Players mention how the specific scenarios you practiced appeared exactly in the game.",
          beliefs: [
            {
              key: 'set-pieces',
              likelihood: 0.75,   // Strong evidence for set-piece importance
              altLikelihood: 0.30  // Contradicts alternative hypothesis
            }
          ],
          formula: true
        }
      }
    },
    {
      id: 3,
      text: 'Your captain and star midfielder is diagnosed with a minor hamstring strain. Medical staff recommends 3 weeks rest for full recovery. The player insists he feels fine and wants to play in an important match next week.',
      leftChoice: 'Allow early return (1 week rest)',
      rightChoice: 'Follow medical advice (3 weeks rest)',
      outcomes: {
        left: {
          message: "You allow your captain to return after only one week. He starts well but re-injures his hamstring after 30 minutes, now requiring surgery and a 3-month rehabilitation period. Your team loses the match and struggles without him.",
          beliefs: [
            {
              key: 'medical-advice',
              likelihood: 0.90,    // Very strong evidence for following medical advice
              altLikelihood: 0.20  // Strongly contradicts alternative hypothesis
            }
          ],
          formula: true
        },
        right: {
          message: "You enforce the full 3-week recovery despite the player's protests. He returns fully fit and performs exceptionally well for the remainder of the season. The medical team notes that scans show complete tissue healing.",
          beliefs: [
            {
              key: 'medical-advice',
              likelihood: 0.75,   // Strong evidence for medical advice value
              altLikelihood: 0.40  // Moderate evidence against alternative hypothesis
            }
          ]
        }
      }
    },
    {
      id: 4,
      text: 'Your analytics department presents data suggesting a switch from 4-4-2 to 3-5-2 would increase expected goals by 18% based on player profiles. Your experienced coaching staff prefers to maintain the familiar 4-4-2 system.',
      leftChoice: 'Stick with 4-4-2 formation',
      rightChoice: 'Implement new 3-5-2 system',
      outcomes: {
        left: {
          message: "You maintain the 4-4-2 formation. Your team performs steadily but predictably. After five matches, you average 1.2 goals per game, identical to your season average. Players express comfort with the familiar system.",
          beliefs: [
            {
              key: 'analytics',
              likelihood: 0.40,    // Moderate evidence against analytics' value
              altLikelihood: 0.60  // Moderate evidence for the alternative viewpoint
            },
            {
              key: 'experience',
              likelihood: 0.65,    // Moderate evidence for experience value
              altLikelihood: 0.45  // Weak evidence against alternative hypothesis
            }
          ]
        },
        right: {
          message: "You implement the 3-5-2 formation. After initial confusion and two draws, your team adapts and wins three straight games, averaging 2.4 goals per game - a 100% increase. Players report the system maximizes their strengths.",
          beliefs: [
            {
              key: 'analytics',
              likelihood: 0.85,    // Strong evidence for analytics' value
              altLikelihood: 0.25  // Strong evidence against alternative hypothesis
            }
          ],
          formula: true
        }
      }
    },
    {
      id: 5,
      text: 'Your 32-year-old midfielder shows declining physical metrics but provides leadership and tactical intelligence. A 19-year-old academy prospect has impressed in training and is physically superior but inexperienced.',
      leftChoice: 'Start experienced midfielder',
      rightChoice: 'Start young prospect',
      outcomes: {
        left: {
          message: "You start the veteran midfielder. His positioning and leadership prove crucial in a tight match against a top opponent. He makes a key tactical adjustment during play that leads to the winning goal, though he's substituted at 70' due to fatigue.",
          beliefs: [
            {
              key: 'experience',
              likelihood: 0.85,    // Strong evidence for experience value
              altLikelihood: 0.25  // Strong evidence against alternative hypothesis
            },
            {
              key: 'young-players',
              likelihood: 0.50,    // Neutral regarding young players
              altLikelihood: 0.60  // Slightly favors alternative hypothesis
            }
          ],
          formula: true
        },
        right: {
          message: "You start the academy prospect. He shows tremendous physical ability and creates two excellent chances, but makes a positional error that leads to a critical goal. The team struggles with on-field organization without the veteran's leadership.",
          beliefs: [
            {
              key: 'experience',
              likelihood: 0.75,    // Strong evidence for experience value
              altLikelihood: 0.35  // Moderate evidence against alternative hypothesis
            },
            {
              key: 'young-players',
              likelihood: 0.60,    // Some evidence for young player potential
              altLikelihood: 0.50  // Near-neutral on alternative hypothesis
            }
          ]
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
  const [lastUpdates, setLastUpdates] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Proper Bayesian update function
  const bayesianUpdate = (prior, likelihood, alternativeLikelihood) => {
    // Convert prior probability to odds
    const priorOdds = prior / (1 - prior);
    
    // Calculate Bayes factor
    const bayesFactor = likelihood / alternativeLikelihood;
    
    // Calculate posterior odds
    const posteriorOdds = priorOdds * bayesFactor;
    
    // Convert posterior odds back to probability
    return posteriorOdds / (1 + posteriorOdds);
  };

  // Handle card choice
  const handleChoice = (direction) => {
    if (showOutcome || gameOver) return;
    
    const currentCard = cards[cardIndex];
    const chosenOutcome = direction === 'left' ? currentCard.outcomes.left : currentCard.outcomes.right;
    
    // Update beliefs using Bayesian update
    const updates = [];
    const newBeliefs = { ...beliefs };
    
    chosenOutcome.beliefs.forEach(beliefUpdate => {
      const key = beliefUpdate.key;
      const prior = beliefs[key];
      const likelihood = beliefUpdate.likelihood;
      const altLikelihood = beliefUpdate.altLikelihood;
      
      const posterior = bayesianUpdate(prior, likelihood, altLikelihood);
      
      updates.push({
        key,
        prior,
        posterior,
        likelihood,
        altLikelihood
      });
      
      newBeliefs[key] = posterior;
    });
    
    // Update state
    setBeliefs(newBeliefs);
    setOutcome(chosenOutcome);
    setLastUpdates(updates);
    setShowOutcome(true);
    setShowExplanation(false);
  };

  // Continue to next card
  const handleContinue = () => {
    if (cardIndex >= cards.length - 1) {
      setGameOver(true);
    } else {
      setCardIndex(cardIndex + 1);
      setShowOutcome(false);
      setOutcome(null);
      setShowExplanation(false);
    }
  };

  // Toggle explanation
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  // Restart game
  const handleRestart = () => {
    setBeliefs(initialBeliefs);
    setCardIndex(0);
    setShowOutcome(false);
    setOutcome(null);
    setLastUpdates([]);
    setGameOver(false);
    setShowExplanation(false);
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

  // Format percentage
  const formatPercent = (value) => {
    return Math.round(value * 100) + '%';
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
                <div className="belief-value">{formatPercent(value)}</div>
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
          
          {lastUpdates.length > 0 && (
            <div className="belief-updates">
              <h3>Belief Updates</h3>
              
              {lastUpdates.map((update, index) => (
                <div key={index} className="belief-update">
                  <div className="update-content">
                    <div className="belief-name">{getBeliefName(update.key)}</div>
                    
                    <div className="belief-comparison">
                      <div className="belief-box">
                        <div>Prior</div>
                        <div className="value">{formatPercent(update.prior)}</div>
                      </div>
                      <div className="arrow">→</div>
                      <div className="belief-box">
                        <div>Posterior</div>
                        <div className="value">{formatPercent(update.posterior)}</div>
                      </div>
                    </div>
                    
                    {(outcome.formula || showExplanation) && (
                      <div className="bayes-explanation">
                        <div className="formula">
                          <p>Bayes' Theorem: P(H|E) = [P(E|H) × P(H)] / P(E)</p>
                          <p>Where:</p>
                          <ul>
                            <li>P(H) = {formatPercent(update.prior)} (Prior)</li>
                            <li>P(E|H) = {formatPercent(update.likelihood)} (Likelihood)</li>
                            <li>P(E|~H) = {formatPercent(update.altLikelihood)} (Alternative Likelihood)</li>
                          </ul>
                          <p>The Bayes Factor: {update.likelihood} / {update.altLikelihood} = {(update.likelihood / update.altLikelihood).toFixed(2)}</p>
                          <p>This shifts your belief by a factor of {(update.likelihood / update.altLikelihood).toFixed(2)}x</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {!outcome.formula && (
                <button className="explanation-button" onClick={toggleExplanation}>
                  {showExplanation ? "Hide Math" : "Show Bayesian Math"}
                </button>
              )}
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
        <h1>Fut-IQ: Bayesian Decision Making</h1>
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

      {/* Bayesian Concepts Panel */}
      <div className="concepts-panel">
        <h3>Bayesian Concepts</h3>
        <div className="concepts-content">
          <p><strong>Prior:</strong> Your initial belief before seeing evidence</p>
          <p><strong>Likelihood:</strong> Probability of seeing the evidence if your belief is true</p>
          <p><strong>Posterior:</strong> Your updated belief after considering evidence</p>
          <p><strong>Bayes Factor:</strong> How much more likely the evidence is under one hypothesis vs another</p>
        </div>
      </div>
    </div>
  );
};

export default MinimalFutIQ;