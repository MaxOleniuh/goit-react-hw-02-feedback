import PropTypes from "prop-types";
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
    return (
        <div className="buttonContainer">
          <button onClick={onGood} type="button">
            Good
          </button>
          <button onClick={onNeutral} type="button">
            Neutral
          </button>
          <button onClick={onBad} type="button">
            Bad
          </button>
        </div>
    )
}
FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
}
export default FeedbackOptions;