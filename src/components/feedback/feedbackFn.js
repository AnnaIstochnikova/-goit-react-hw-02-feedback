import React, { Component } from 'react';

import {
  Section,
  FeedbackOptions,
  Notification,
  Statistics,
} from './feedbackParts';
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
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.changeVote}
        />

        {showStatistics || <Notification message="There is no feedback" />}

        {showStatistics && (
          <>
            <Section title="Statistics" />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedbackCount}
              positivePercentage={positiveFeedbackCount}
            />
          </>
        )}
      </>
    );
  }
}

export default Feedback;
