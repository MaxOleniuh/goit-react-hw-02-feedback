const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => {
  return (
  total > 0 &&
      <div className = "statsContainer" >
      <h3>{title}</h3>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive feedback:{positivePercentage}</span>
    </div>
  );
};

export default Statistics;
