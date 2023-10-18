import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

const Notification = ({ message }) => {
  return <div>{message}</div>;
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
        <span className="vote-number"> {positivePercentage}%</span>
      </p>
    </>
  );
};
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    positive: 0,
    totalFeedback: 0,
    positivePercentage: 0,
    showStatistics: false,
  };

  changeVote = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      showStatistics: true,
    }));
  };

  changeTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  changePositiveFeedback = () => {
    return (
      100 *
      (this.state.good /
        (this.state.good + this.state.bad + this.state.neutral))
    ).toFixed(0);
  };

  render() {
    const { good, neutral, bad, showStatistics } = this.state;
    const totalFeedbackCount = this.changeTotalFeedback();
    const positiveFeedbackCount = this.changePositiveFeedback();

    return (
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.changeVote}
        />
        {showStatistics || <Notification message="There is no feedback" />}

        {showStatistics && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedbackCount}
            positivePercentage={positiveFeedbackCount}
          />
        )}
      </>
    );
  }
}

export default Feedback;
