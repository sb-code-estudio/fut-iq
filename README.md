Check it out here: https://sb-code-estudio.github.io/fut-iq/#/game

Bayesian Methods & Concepts: A Practical Guide
Core Concepts as Illustrated in Fut-IQ
The Fut-IQ game demonstrates Bayesian thinking through football management decisions. Here are the key concepts and their real-world applications:
1. Prior Beliefs (Priors)
In Fut-IQ:

Each belief starts with an initial probability (e.g., "Analytics improves decisions" = 50%)
These represent your starting assumptions before seeing new evidence

Real-World Applications:

Medical diagnosis: Initial assessment based on symptoms and patient history
Investment decisions: Initial expectation of a company's performance
Weather forecasting: Starting prediction before incorporating latest data
Product development: Initial hypothesis about what customers want

2. Likelihood Ratios
In Fut-IQ:

Each scenario provides:

Likelihood (P(E|H)): Probability of seeing the evidence if your hypothesis is true
Alternative Likelihood (P(E|~H)): Probability of seeing the evidence if your hypothesis is false



Real-World Applications:

Medical tests: Sensitivity (true positive rate) vs. specificity (true negative rate)
Quality control: Rate of defect detection vs. false alarms
Hiring decisions: Predictive power of interview performance for job success
Market research: How strongly consumer feedback predicts actual purchasing behavior

3. Bayes Factor
In Fut-IQ:

Calculated as likelihood divided by alternative likelihood
Indicates how strongly evidence supports or contradicts your hypothesis
Values > 1 strengthen belief, values < 1 weaken belief

Real-World Applications:

A/B testing: Comparing how strongly different versions support a hypothesis
Scientific research: Quantifying evidence strength for competing theories
Legal reasoning: Evaluating how strongly a piece of evidence supports guilt/innocence
Financial analysis: Assessing how strongly economic indicators predict market movements

4. Posterior Beliefs
In Fut-IQ:

Updated belief after incorporating new evidence
Calculated using Bayes' Theorem

Real-World Applications:

Software development: Updating estimations after sprint completion
Risk management: Adjusting assessments as new data emerges
Customer service: Refining understanding of customer needs after feedback
Strategic planning: Revising organizational strategy based on performance data

Bayes' Theorem and How It Works
The Formula
Bayes' Theorem in its simplest form:
CopyP(H|E) = [P(E|H) × P(H)] / P(E)
Where:

P(H|E): Posterior probability - belief in hypothesis H after seeing evidence E
P(E|H): Likelihood - probability of seeing evidence E if hypothesis H is true
P(H): Prior probability - initial belief in hypothesis H
P(E): Overall probability of evidence E (often calculated using the law of total probability)

The Odds Form (As Used in Fut-IQ)
CopyPosterior Odds = Prior Odds × Bayes Factor
Where:

Prior Odds = P(H) / P(~H)
Bayes Factor = P(E|H) / P(E|~H)
Posterior Odds = P(H|E) / P(~H|E)

This form is particularly useful because it directly shows how the Bayes Factor acts as a multiplier on your prior odds.
Practical Examples from Fut-IQ Scenarios
Example 1: Medical Advice Decision
Scenario: Your captain is injured. Medical staff recommends 3 weeks rest, but the player wants to return in 1 week.
If you follow medical advice and it works out well:

Prior belief in medical advice value: 70%
Likelihood of success if medical advice is valuable: 75%
Likelihood of success if medical advice is not valuable: 40%
Bayes Factor: 75% ÷ 40% = 1.875
This strengthens your belief in medical advice by a factor of 1.875×

Example 2: Analytics vs. Traditional Coaching
Scenario: Analytics suggests a formation change that coaches oppose.
If you implement the analytics-suggested formation and it succeeds:

Prior belief in analytics value: 50%
Likelihood of success if analytics is valuable: 85%
Likelihood of success if analytics is not valuable: 25%
Bayes Factor: 85% ÷ 25% = 3.4
This strengthens your belief in analytics by a factor of 3.4×

Real-World Decision Framework
Here's a step-by-step process for applying Bayesian thinking to real-world decisions:

Identify your hypothesis (H): What belief are you evaluating?
Assign a prior probability P(H): Your current level of belief (0-100%)
Determine likelihoods:

P(E|H): How likely is this evidence if my hypothesis is true?
P(E|~H): How likely is this evidence if my hypothesis is false?


Calculate the Bayes Factor: P(E|H) ÷ P(E|~H)
Update your belief using the odds form of Bayes' Theorem
Make decisions based on your updated beliefs

Common Bayesian Thinking Traps

Base Rate Neglect: Ignoring prior probabilities (example: overestimating the likelihood of a rare disease given a positive test)
Confirmation Bias: Only seeking evidence that confirms existing beliefs
Overconfidence: Assigning too high a probability to your beliefs
Miscalibrated Likelihoods: Poor estimation of how likely evidence is under different hypotheses
Failure to Update: Not revising beliefs when new evidence emerges

Applications in Various Fields
Business

Product development: Testing features before full launch
Marketing: A/B testing campaigns and updating strategies
Investment: Updating market beliefs based on new economic data
Hiring: Refining recruitment processes based on employee performance

Personal Life

Health decisions: Evaluating treatment options
Financial planning: Adjusting investment strategies
Relationship decisions: Updating understanding of others' preferences
Learning: Revising study approaches based on test results

Technology

Machine learning: The foundation of many AI systems
Spam filtering: Identifying unwanted emails based on content patterns
Recommendation systems: Personalizing content based on user behavior
Predictive text: Suggesting words based on typing patterns

Conclusion
Bayesian thinking is a powerful framework for making decisions under uncertainty. Rather than seeing beliefs as fixed, the Bayesian approach treats them as hypotheses that we continuously update as new evidence emerges. The principles demonstrated in Fut-IQ—priors, likelihoods, Bayes factors, and posteriors—provide a structured way to improve decision-making in virtually any domain.
By consciously identifying your prior beliefs, carefully evaluating new evidence, and systematically updating your beliefs using Bayes' Theorem, you can make more rational decisions and develop a more accurate understanding of the world around you.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# fut-iq
A card-based game teaching Bayesian thinking through football management decisions
>>>>>>> f88814115a51f20bfa71a67280af2d8a5ce6ac53
