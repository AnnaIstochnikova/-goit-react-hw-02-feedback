import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeVoteGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  changeVoteNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  changeVoteBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
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
        <button type="button" className="btn--bad" onClick={this.changeVoteBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
      </>
    );
  }
}

export default Feedback;
