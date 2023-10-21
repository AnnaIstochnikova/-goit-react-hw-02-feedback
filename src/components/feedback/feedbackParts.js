export const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </>
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
