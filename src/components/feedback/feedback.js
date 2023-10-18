import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>
        Good:<span className="vote-number"> {good}</span>
      </p>
      <p>
        Neutral:<span className="vote-number"> {neutral}</span>
      </p>
      <p>
        Bad:<span className="vote-number"> {bad}</span>
      </p>
      <p>
        Total:
        <span className="vote-number"> {totalFeedback}</span>
      </p>
      <p>
        Positive feedback:
        <span className="vote-number"> {positivePercentage.toFixed(0)}%</span>
      </p>
    </>
  );
};
class Feedback extends Component {
  state = {
    good: this.props.good,
    neutral: 0,
    bad: 0,
    positive: 0,
    totalFeedback: 0,
    positivePercentage: 0,
  };

  changeVote = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.state;
    return (
      <>
        <FeedbackButtons
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.changeVote}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

export default Feedback;
