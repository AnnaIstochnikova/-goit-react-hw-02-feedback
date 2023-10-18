import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    positive: 0,
  };

  changeVoteGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        positive:
          100 *
          ((prevState.good + 1 + prevState.bad - prevState.neutral) /
            (prevState.good + 1 + prevState.bad + prevState.neutral)),
      };
    });
  };

  changeVoteNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        positive:
          100 *
          ((this.state.good + prevState.bad - prevState.neutral + 1) /
            (this.state.good + prevState.bad + prevState.neutral + 1)),
      };
    });
  };

  changeVoteBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        positive:
          100 *
          ((this.state.good + 1 + prevState.bad - this.state.neutral) /
            (this.state.good + 1 + prevState.bad + this.state.neutral)),
      };
    });
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button
            type="button"
            className="btn--good"
            onClick={this.changeVoteGood}
          >
            Good
          </button>
          <button
            type="button"
            className="btn--neutral"
            onClick={this.changeVoteNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="btn--bad"
            onClick={this.changeVoteBad}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>
          Good:<span className="vote-number"> {this.state.good}</span>
        </p>
        <p>
          Neutral:<span className="vote-number"> {this.state.neutral}</span>
        </p>
        <p>
          Bad:<span className="vote-number"> {this.state.bad}</span>
        </p>
        <p>
          Total:
          <span className="vote-number">
            {' '}
            {this.state.bad + this.state.neutral + this.state.good}
          </span>
        </p>
        <p>
          Positive feedback:
          <span className="vote-number">
            {' '}
            {this.state.positive.toFixed(0)}%
          </span>
        </p>
      </>
    );
  }
}

export default Feedback;
