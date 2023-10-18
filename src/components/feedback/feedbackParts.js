export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

export const Notification = ({ message }) => {
  return <div>{message}</div>;
};

export const Statistics = ({
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
