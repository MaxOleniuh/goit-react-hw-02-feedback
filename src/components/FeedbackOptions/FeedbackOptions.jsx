import PropTypes from "prop-types";
import { ButtonContainer, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onFeedback }) => {
    return (
        <ButtonContainer className="buttonContainer">
          <Button onClick={() => onFeedback('good')} type="button">
            Good
          </Button>
          <Button onClick={() => onFeedback('neutral')} type="button">
            Neutral
          </Button>
          <Button onClick={() => onFeedback('bad')} type="button">
            Bad
          </Button>
        </ButtonContainer>
    )
}
FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;