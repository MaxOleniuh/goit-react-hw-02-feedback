import PropTypes from "prop-types";
import { ButtonContainer, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
    return (
        <ButtonContainer className="buttonContainer">
          <Button onClick={onGood} type="button">
            Good
          </Button>
          <Button onClick={onNeutral} type="button">
            Neutral
          </Button>
          <Button onClick={onBad} type="button">
            Bad
          </Button>
        </ButtonContainer>
    )
}
FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
}
export default FeedbackOptions;